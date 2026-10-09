# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project

Marketing site for Gold Lion Painting Inc (repo/package name: `goldpainting`), a residential and commercial painting business in Sarasota/Manatee County, Florida. Next.js 16.4 App Router, React 19.3, Tailwind CSS 4, shadcn/ui + Base UI, deployed on Vercel. UI copy is English. Scheduling assumes `America/New_York`. There is no auth, i18n, or dashboard.

`next.config.ts` runs the 16.4 baseline (`cacheComponents`, `partialPrefetching`, `typedRoutes`, Rust `reactCompiler`, `agentRules: false`); no route is opted out of Cache Components. Route handlers must not export `runtime` (incompatible with Cache Components; `maxDuration` is fine). Request reads such as `searchParams` go in a `<Suspense>`-wrapped child, as in `src/app/blog/page.tsx`. `FloatingChatbot` (AI SDK `useChat` calls `Math.random()`) sits in a `<Suspense>` in the root layout. `sitemap.ts` takes `lastModified` from a `'use cache'` helper with `cacheLife('days')`.

## Commands

- `npm run dev` / `build` / `start` / `preview` (= build + start).
- `npm run check` is the check gate: `npm run lint && tsc --noEmit` (no build, no Prettier check). `lint:fix`, `format:check`, `format:write` also exist.
- No test runner or test script exists. No Drizzle/DB scripts exist either.
- `packageManager` is `npm@12.1.0`; the project is ESM.
- Toolchain quirk: `typescript` is aliased to `@typescript/typescript6` (typescript-eslint needs its JS API), while `node_modules/.bin/tsc` is TypeScript 7 (`@typescript/native`). `next.config.ts` sets `experimental.useTypeScriptCli: false` for this reason. Do not "simplify" the aliases. `eslint.config.mjs` pins `settings.react.version` because ESLint 10 cannot detect it.

## Architecture

- **Content-driven pages.** Service pages (`/interior-painting`, ...) and city pages (`/sarasota`, ...) are thin `page.tsx` files that read copy from `doc/**.md` at build time (`readMarkdownContent` in `src/app/content/markdownContent.ts`, resolved from `process.cwd()/doc`) and render `MarkdownLandingPage`. The parser targets the loose copy-doc format (`H1:`/`H2` markers, emoji CTA lines, `•`/`✔`/`-` bullets), not strict Markdown, so edit copy in `doc/`, not in TSX. Hero images and interlinks come from `src/app/content/pageImages.ts` and `landingCards.ts`. Blog posts are static data in `src/app/blog/blogData.ts`.
- **Business identity and SEO.** `src/app/siteConfig.ts` is the single source for site URL, phone, email, hours, Google Place ID, rating/review count (hardcoded strings), service areas, and `indexedRoutes`. `sitemap.ts` = `indexedRoutes` + blog posts/categories, so a new page must be added to `indexedRoutes`. JSON-LD lives in `src/app/schema.ts`.
- **Retired URLs.** Old paths (`commercial-painting`, `deck-fence-painting`, `roof-painting`, `painters-st-petersburg-fl`, `privacy-policy`, `terms-condition`) are `route.ts` handlers returning 410 via `oldRouteResponse.ts`. Permanent redirects live in `next.config.ts` `redirects()`.
- **Lead flow.** Both paths email `goldlionpainting@gmail.com` through Nodemailer SMTP in `src/server/email.ts`: `POST /api/estimate` (Zod-validated form from `EstimateRequestForm`) and `POST /api/chat` (`FloatingChatbot` -> Vercel AI SDK `streamText` with Gemini `gemini-2.5-flash-lite`; tool `createServiceAppointment` sends the appointment email). Missing SMTP credentials surface as `MISSING_SMTP_CONFIG` (503 on estimate).
- **Reviews.** `GoogleReviewsCarousel` uses the Featurable widget (`NEXT_PUBLIC_FEATURABLE_WIDGET_ID`, falls back to `'example'`). `/api/google-reviews` (Places API v1, revalidate 3600) and `/api/photo-proxy` are not called from the client code.
- **Database is unused scaffolding.** `src/server/db/` (Drizzle + `postgres`, example `posts` table, `goldpainting_` table prefix) is create-t3-app leftovers: nothing imports it, and `DATABASE_URL` is not in `src/env.ts`. `drizzle.config.ts` points `schema` at `./src/server/schema.ts`, which does not exist (the real file is `src/server/db/schema.ts`); fix that before running any drizzle-kit command.

## Rules and pitfalls

- Env vars are validated in `src/env.ts` (t3-env; `SKIP_ENV_VALIDATION` bypasses it) and `next.config.ts` imports it, so `GEMINI_API_KEY` is required for dev and build. Others: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `PASS` (the SMTP password, non-obvious name), `GOOGLE_PLACES_API_KEY`, plus `NEXT_PUBLIC_FEATURABLE_WIDGET_ID` and `DATABASE_URL`, which are read from `process.env` outside the env layer. Read env through `~/env` in new code.
- Chat assistant behavior is business policy (`src/app/api/chat/route.ts`): never quote exact prices (push the free estimate), always answer in English, offer only the two fixed windows (8-10 AM, 4-6 PM Eastern), and call the appointment tool only after collecting name, phone, address, service, date, and window. Prompt changes change how leads are handled.
- Phone and email are duplicated in `siteConfig.ts`, the chat system prompt, `email.ts` (`contactEmailTo`), and the `doc/` copy. Change them together.
- `email.ts` sets `tls.rejectUnauthorized: false`, and `/api/photo-proxy` fetches any URL it is given (no host allow-list). Do not build on either without hardening.
- Lint/format: `eslint.config.mjs` (core-web-vitals + typescript, Prettier config last; ignores `doc/**`, `public/**`, `.agents/**`, `.claude/**`, `.kilo/**`) and `prettier.config.js` (single quotes, Tailwind plugin). Do not reformat unrelated files.
- `.eslintcache` is tracked in git and changes on every lint run; do not stage it by accident.
- `npm audit` still reports `braces` (high, via `shadcn` -> `micromatch`); npm only offers a downgrade to `shadcn@1.0.0`, so it is left alone.
- `NEXTJS_16_3_AGENT_RUNBOOK.md` (about 1.9k lines, Spanish) and `.next-docs/` (a checked-in Next.js docs copy) are reference material (16.3-era, older than the installed docs). Open them only for Next.js upgrade work.
