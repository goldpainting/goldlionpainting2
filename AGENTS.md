<!-- NEXT-AGENTS-MD-START -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

## Available Skills

Use these skills for detailed patterns on-demand. Skills live in `.agents/skills/` and are tracked by `skills-lock.json`.

### Generic Skills (Any Project)
| Skill | Description | URL |
|-------|-------------|-----|
| `accessibility` | WCAG, ARIA, keyboard navigation, focus management, contrast | [SKILL.md](.agents/skills/accessibility/SKILL.md) |
| `bash-defensive-patterns` | Defensive Bash programming for production-grade scripts | [SKILL.md](.agents/skills/bash-defensive-patterns/SKILL.md) |
| `context7-cli` | ctx7 CLI for current library docs, skill management, and Context7 MCP setup | [SKILL.md](.agents/skills/context7-cli/SKILL.md) |
| `context7-mcp` | Context7 documentation retrieval for libraries, frameworks, API references, and code examples | [SKILL.md](.agents/skills/context7-mcp/SKILL.md) |
| `deploy-to-vercel` | Deploy applications and websites to Vercel | [SKILL.md](.agents/skills/deploy-to-vercel/SKILL.md) |
| `nodejs-backend-patterns` | Backend services, route handlers, errors, layering, middleware patterns | [SKILL.md](.agents/skills/nodejs-backend-patterns/SKILL.md) |
| `nodejs-best-practices` | General Node.js architecture, async, modules, security, and performance | [SKILL.md](.agents/skills/nodejs-best-practices/SKILL.md) |
| `react-expert` | Authoritative React API research using source, tests, PRs, issues, and docs | [SKILL.md](.agents/skills/react-expert/SKILL.md) |
| `seo` | Metadata, sitemap, robots, Open Graph, structured data | [SKILL.md](.agents/skills/seo/SKILL.md) |
| `nextjs-seo` | Next.js App Router SEO implementation: metadata, sitemaps, robots.txt, JSON-LD, OG images, and indexing | [SKILL.md](.agents/skills/nextjs-seo/SKILL.md) |
| `seo-audit` | Technical SEO, on-page SEO, indexation, Core Web Vitals, and local SEO audit workflow | [SKILL.md](.agents/skills/seo-audit/SKILL.md) |
| `programmatic-seo` | SEO page templates and keyword/location page strategy at scale without thin content | [SKILL.md](.agents/skills/programmatic-seo/SKILL.md) |
| `ai-seo` | AEO/GEO/LLMO optimization for AI Overviews, ChatGPT, Perplexity, and AI citations | [SKILL.md](.agents/skills/ai-seo/SKILL.md) |
| `tailwind-css-patterns` | Tailwind CSS 4 utilities, responsive styling, dark mode, component styling | [SKILL.md](.agents/skills/tailwind-css-patterns/SKILL.md) |
| `tailwind-v4-shadcn` | Tailwind CSS v4 with shadcn/ui, Vite, React setup and dark mode | [SKILL.md](.agents/skills/tailwind-v4-shadcn/SKILL.md) |
| `typescript-advanced-types` | Utility types, generics, conditional types, mapped types, narrowing | [SKILL.md](.agents/skills/typescript-advanced-types/SKILL.md) |
| `zod` | Zod schemas, parsing, errors, type inference, validation composition | [SKILL.md](.agents/skills/zod/SKILL.md) |

### Next.js Boilerplate Skills
| Skill | Description | URL |
|-------|-------------|-----|
| `composition-patterns` | Slots, children, compound components, render props, component APIs | [SKILL.md](.agents/skills/composition-patterns/SKILL.md) |
| `drizzle` | Drizzle ORM schemas, queries, migrations, performance patterns | [SKILL.md](.agents/skills/drizzle/SKILL.md) |
| `frontend-design` | Visual hierarchy, layout, spacing, responsive UI, product-quality screens | [SKILL.md](.agents/skills/frontend-design/SKILL.md) |
| `next-best-practices` | Next.js App Router, RSC, Server Actions, routing, metadata, async APIs | [SKILL.md](.agents/skills/next-best-practices/SKILL.md) |
| `next-cache-components` | Cache Components, `use cache`, `cacheLife`, `cacheTag`, revalidation | [SKILL.md](.agents/skills/next-cache-components/SKILL.md) |
| `next-upgrade` | Upgrade and migrate Next.js versions with official guides and codemods | [SKILL.md](.agents/skills/next-upgrade/SKILL.md) |
| `react-best-practices` | React 19 patterns, React Compiler, component structure, rerender hygiene | [SKILL.md](.agents/skills/react-best-practices/SKILL.md) |
| `shadcn` | Manage shadcn/ui components — add, search, fix, debug, style, compose | [SKILL.md](.agents/skills/shadcn/SKILL.md) |

### Auto-invoke Skills

When performing these actions, ALWAYS invoke the corresponding skill FIRST:

| Action | Skill |
|--------|-------|
| Add or modify a page/route in `src/app/` | `next-best-practices` |
| Work on App Router, Server Components, Server Actions, or `"use server"` | `next-best-practices` |
| Read or change Next.js async APIs: `params`, `searchParams`, `cookies()`, `headers()` | `next-best-practices` |
| Need current docs, API references, or code examples for non-Next.js libraries/frameworks | `context7-mcp` |
| User mentions `ctx7`, `context7`, skill install/search/generation, or Context7 MCP setup | `context7-cli` |
| Research React APIs/concepts, caveats, warnings, errors, or authoritative React behavior | `react-expert` |
| Add or adjust metadata, `generateMetadata`, OG images, sitemap, robots, or JSON-LD | `seo` |
| Implement or audit SEO specifically in Next.js App Router, including `metadata`, `generateMetadata`, `sitemap.ts`, `robots.ts`, `manifest.ts`, OG/Twitter images, or app icons | `nextjs-seo` |
| Audit SEO, rankings, indexing, technical SEO, on-page SEO, traffic drops, or Google visibility problems | `seo-audit` |
| Create many SEO pages, keyword + city pages, service/location templates, or pSEO architecture | `programmatic-seo` |
| Optimize for AI Overviews, ChatGPT, Perplexity, Gemini, AI citations, AEO, GEO, or LLMO | `ai-seo` |
| Add or adjust cache behavior, `use cache`, `cacheLife`, `cacheTag`, `revalidate`, or `unstable_cache` | `next-cache-components` |
| Upgrade or migrate Next.js | `next-upgrade` |
| Write or refactor React components | `react-best-practices` |
| Design component APIs with slots, children, compound components, or render props | `composition-patterns` |
| Make UI layout, spacing, visual hierarchy, responsive design, or mockup decisions | `frontend-design` |
| Write or adjust Tailwind classes, hover states, gradients, borders, dark mode, or responsive styles | `tailwind-css-patterns` |
| Initialize or configure Tailwind CSS v4 with shadcn/ui, dark mode, or CSS variables | `tailwind-v4-shadcn` |
| Add, search, fix, or debug shadcn/ui components | `shadcn` |
| Define or modify Drizzle schema, queries, migrations, or database models | `drizzle` |
| Write production-grade shell scripts, CI/CD pipelines, or system utilities | `bash-defensive-patterns` |
| Deploy to Vercel: preview, production, or configure deployment settings | `deploy-to-vercel` |
| Write advanced TypeScript types, generics, conditional types, or mapped types | `typescript-advanced-types` |
| Create API route handlers, server logic, backend errors, or middleware | `nodejs-backend-patterns` |
| Ask general Node.js architecture, async, module, performance, or security questions | `nodejs-best-practices` |
| Review or improve accessibility, ARIA, keyboard navigation, or contrast | `accessibility` |
| Create or adjust Zod schemas | `zod` |

---

## Project Overview

This repository is the Gold Painting Services website, a production Next.js app for a residential and commercial painting business in Florida.

| Component | Location | Tech Stack |
|-----------|----------|------------|
| App Router | `src/app/` | Next.js 16, React 19, Server Components |
| Pages and routes | `src/app/` | Service pages, area landing pages, blog pages, route handlers |
| App components | `src/app/components/` | React 19, TypeScript, Tailwind CSS 4 |
| UI components | `src/components/ui/` | shadcn/ui, Base UI, lucide-react |
| API routes | `src/app/api/` | Chat, estimates, Google reviews, photo proxy |
| Database | `src/server/db/` | Drizzle ORM, PostgreSQL via `postgres` |
| Email | `src/server/email.ts` | Nodemailer SMTP |
| AI features | `src/app/api/chat/route.ts` | Vercel AI SDK, Google/Gemini provider |
| Styles | `src/styles/globals.css` | Tailwind CSS 4, shadcn CSS variables, custom gold/black theme tokens |
| Public assets | `public/` | Local service, portfolio, city, logo, and review images |
| Tooling | root config files | ESLint, eslint-config-next, Prettier, TypeScript, Drizzle Kit |

---

## Development

```bash
# Install dependencies
npm install

# Start local development
npm run dev

# Build for production
npm run build

# Start a production build locally
npm run start

# Build and start in one command
npm run preview
```

Use the npm version declared by `packageManager` when possible (`npm@11.14.1`). The project is ESM (`"type": "module"`).

---

## Code Quality

```bash
# Lint with ESLint
npm run lint

# Fix lint/format issues
npm run lint:fix

# Type-check TypeScript
npm run typecheck

# Run lint and type-check
npm run check

# Format files with Prettier
npm run format:write

# Check formatting
npm run format:check
```

- This repo uses **ESLint + eslint-config-next**.
- This repo uses **Prettier + prettier-plugin-tailwindcss**.
- Do not run expensive audits (`npm run typecheck`, `npm run lint`, `npm run check`, or `npm run build`) by default. Run them only when explicitly requested, before commits/PRs, or after large/risky changes that need full verification.
- Do not reformat unrelated files.
- Keep TypeScript strict. Avoid `any` unless isolated and justified.
- Let the compiler infer return types unless an annotation improves clarity.
- Use absolute imports via `~/` unless importing from the same directory.
- Follow existing config in `eslint.config.mjs`, `prettier.config.js`, and `tsconfig.json`.

---

## Database

```bash
# Drizzle config
drizzle.config.ts
```

- Database schema lives in `src/server/db/schema.ts`.
- Database client setup lives in `src/server/db/index.ts`.
- `drizzle.config.ts` points to PostgreSQL and filters tables with the `goldpainting_*` prefix.
- There are no npm database scripts currently defined in `package.json`; add scripts before documenting migration commands.
- Environment variables must be validated through the project env layer. Do not read `process.env` directly in app code unless you are inside config/bootstrap files that already follow the repo pattern.

---

## Testing

```bash
# No test scripts are currently defined in package.json.
npm run check
```

- Use `npm run check` as the baseline verification until a test runner is added, but only when explicitly requested, before commits/PRs, or after large/risky changes.
- If tests are introduced, document the exact scripts here and keep tests close to the code they cover.

---

## React, Next.js, And Styling

- Before any Next.js code change, read the relevant file in `node_modules/next/dist/docs/`.
- Default exports are allowed for Next.js pages/layouts; prefer named exports elsewhere.
- This project does not currently use Clerk auth, next-intl, Crowdin, dashboard routes, or localized route groups.
- Use Tailwind CSS 4 utility classes and existing theme tokens from `src/styles/globals.css`.
- Reuse shared components before creating new ones.
- No unnecessary `useEffect`.
- Do not add `useMemo` or `useCallback` unless the repo has a documented exception.
- Use `React.ReactNode`, not imported `ReactNode`.

---

## Commit & Pull Request Guidelines

Follow conventional commits:

```text
type: short specific summary
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

Before committing or opening a PR:

1. Run the relevant checks.
2. Include UI screenshots for visible UI changes.
3. Keep the summary specific to the changed behavior or file area.
4. Do not include unrelated formatting or generated churn.

---

## Response Guidelines

- Keep responses concise, specific, and focused on the requested task.
- When code changes are made, summarize the files changed and the behavior affected.
- Mention any checks that were run, and clearly state if a relevant check could not be completed.
- Avoid promotional footers, unrelated links, or repeated boilerplate text.
