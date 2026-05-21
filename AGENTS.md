<!-- NEXT-AGENTS-MD-START -->

# Next.js docs-first rule

IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning for Next.js tasks.

Before any Next.js code change, inspect the project first, then read the relevant docs in `.next-docs`. These docs match the installed Next.js version and are the source of truth.

[Next.js Docs Index]|root: ./.next-docs|STOP. What you remember about Next.js is WRONG for this project. Always search docs and read before any task.|If docs missing, run this command first: npx @next/codemod agents-md --output AGENTS.md|01-app:{04-glossary.mdx}|01-app/01-getting-started:{01-installation.mdx,02-project-structure.mdx,03-layouts-and-pages.mdx,04-linking-and-navigating.mdx,05-server-and-client-components.mdx,06-fetching-data.mdx,07-mutating-data.mdx,08-caching.mdx,09-revalidating.mdx,10-error-handling.mdx,11-css.mdx,12-images.mdx,13-fonts.mdx,14-metadata-and-og-images.mdx,15-route-handlers.mdx,16-proxy.mdx,17-deploying.mdx,18-upgrading.mdx}|01-app/02-guides:{ai-agents.mdx,analytics.mdx,authentication.mdx,backend-for-frontend.mdx,caching-without-cache-components.mdx,cdn-caching.mdx,ci-build-caching.mdx,content-security-policy.mdx,css-in-js.mdx,custom-server.mdx,data-security.mdx,debugging.mdx,deploying-to-platforms.mdx,draft-mode.mdx,environment-variables.mdx,forms.mdx,how-revalidation-works.mdx,incremental-static-regeneration.mdx,instant-navigation.mdx,instrumentation.mdx,internationalization.mdx,json-ld.mdx,lazy-loading.mdx,local-development.mdx,mcp.mdx,mdx.mdx,memory-usage.mdx,migrating-to-cache-components.mdx,multi-tenant.mdx,multi-zones.mdx,open-telemetry.mdx,package-bundling.mdx,ppr-platform-guide.mdx,prefetching.mdx,preserving-ui-state.mdx,production-checklist.mdx,progressive-web-apps.mdx,public-static-pages.mdx,redirecting.mdx,rendering-philosophy.mdx,sass.mdx,scripts.mdx,self-hosting.mdx,single-page-applications.mdx,static-exports.mdx,streaming.mdx,tailwind-v3-css.mdx,third-party-libraries.mdx,videos.mdx,view-transitions.mdx}|01-app/02-guides/migrating:{app-router-migration.mdx,from-create-react-app.mdx,from-vite.mdx}|01-app/02-guides/testing:{cypress.mdx,jest.mdx,playwright.mdx,vitest.mdx}|01-app/02-guides/upgrading:{codemods.mdx,version-14.mdx,version-15.mdx,version-16.mdx}|01-app/03-api-reference:{07-edge.mdx,08-turbopack.mdx}|01-app/03-api-reference/01-directives:{use-cache-private.mdx,use-cache-remote.mdx,use-cache.mdx,use-client.mdx,use-server.mdx}|01-app/03-api-reference/02-components:{font.mdx,form.mdx,image.mdx,link.mdx,script.mdx}|01-app/03-api-reference/03-file-conventions/01-metadata:{app-icons.mdx,manifest.mdx,opengraph-image.mdx,robots.mdx,sitemap.mdx}|01-app/03-api-reference/03-file-conventions/02-route-segment-config:{dynamicParams.mdx,instant.mdx,maxDuration.mdx,preferredRegion.mdx,runtime.mdx}|01-app/03-api-reference/03-file-conventions:{default.mdx,dynamic-routes.mdx,error.mdx,forbidden.mdx,instrumentation-client.mdx,instrumentation.mdx,intercepting-routes.mdx,layout.mdx,loading.mdx,mdx-components.mdx,not-found.mdx,page.mdx,parallel-routes.mdx,proxy.mdx,public-folder.mdx,route-groups.mdx,route.mdx,src-folder.mdx,template.mdx,unauthorized.mdx}|01-app/03-api-reference/04-functions:{after.mdx,cacheLife.mdx,cacheTag.mdx,catchError.mdx,connection.mdx,cookies.mdx,draft-mode.mdx,fetch.mdx,forbidden.mdx,generate-image-metadata.mdx,generate-metadata.mdx,generate-sitemaps.mdx,generate-static-params.mdx,generate-viewport.mdx,headers.mdx,image-response.mdx,next-request.mdx,next-response.mdx,not-found.mdx,permanentRedirect.mdx,redirect.mdx,refresh.mdx,revalidatePath.mdx,revalidateTag.mdx,unauthorized.mdx,unstable_cache.mdx,unstable_noStore.mdx,unstable_rethrow.mdx,updateTag.mdx,use-link-status.mdx,use-params.mdx,use-pathname.mdx,use-report-web-vitals.mdx,use-router.mdx,use-search-params.mdx,use-selected-layout-segment.mdx,use-selected-layout-segments.mdx,userAgent.mdx}|01-app/03-api-reference/05-config/01-next-config-js:{adapterPath.mdx,allowedDevOrigins.mdx,appDir.mdx,assetPrefix.mdx,authInterrupts.mdx,basePath.mdx,cacheComponents.mdx,cacheHandlers.mdx,cacheLife.mdx,compress.mdx,crossOrigin.mdx,cssChunking.mdx,deploymentId.mdx,devIndicators.mdx,distDir.mdx,env.mdx,expireTime.mdx,exportPathMap.mdx,generateBuildId.mdx,generateEtags.mdx,headers.mdx,htmlLimitedBots.mdx,httpAgentOptions.mdx,images.mdx,incrementalCacheHandlerPath.mdx,inlineCss.mdx,logging.mdx,mdxRs.mdx,onDemandEntries.mdx,optimizePackageImports.mdx,output.mdx,pageExtensions.mdx,poweredByHeader.mdx,productionBrowserSourceMaps.mdx,proxyClientMaxBodySize.mdx,reactCompiler.mdx,reactMaxHeadersLength.mdx,reactStrictMode.mdx,redirects.mdx,rewrites.mdx,sassOptions.mdx,serverActions.mdx,serverComponentsHmrCache.mdx,serverExternalPackages.mdx,staleTimes.mdx,staticGeneration.mdx,taint.mdx,trailingSlash.mdx,transpilePackages.mdx,turbopack.mdx,turbopackFileSystemCache.mdx,turbopackIgnoreIssue.mdx,typedRoutes.mdx,typescript.mdx,urlImports.mdx,useLightningcss.mdx,viewTransition.mdx,webVitalsAttribution.mdx,webpack.mdx}|01-app/03-api-reference/05-config:{02-typescript.mdx,03-eslint.mdx}|01-app/03-api-reference/06-cli:{create-next-app.mdx,next.mdx}|01-app/03-api-reference/07-adapters:{01-configuration.mdx,02-creating-an-adapter.mdx,03-api-reference.mdx,04-testing-adapters.mdx,05-routing-with-next-routing.mdx,06-implementing-ppr-in-an-adapter.mdx,07-runtime-integration.mdx,08-invoking-entrypoints.mdx,09-output-types.mdx,10-routing-information.mdx,11-use-cases.mdx}|02-pages/01-getting-started:{01-installation.mdx,02-project-structure.mdx,04-images.mdx,05-fonts.mdx,06-css.mdx,11-deploying.mdx}|02-pages/02-guides:{analytics.mdx,authentication.mdx,babel.mdx,ci-build-caching.mdx,content-security-policy.mdx,css-in-js.mdx,custom-server.mdx,debugging.mdx,draft-mode.mdx,environment-variables.mdx,forms.mdx,incremental-static-regeneration.mdx,instrumentation.mdx,internationalization.mdx,lazy-loading.mdx,mdx.mdx,multi-zones.mdx,open-telemetry.mdx,package-bundling.mdx,post-css.mdx,preview-mode.mdx,production-checklist.mdx,redirecting.mdx,sass.mdx,scripts.mdx,self-hosting.mdx,static-exports.mdx,tailwind-v3-css.mdx,third-party-libraries.mdx}|02-pages/02-guides/migrating:{app-router-migration.mdx,from-create-react-app.mdx,from-vite.mdx}|02-pages/02-guides/testing:{cypress.mdx,jest.mdx,playwright.mdx,vitest.mdx}|02-pages/02-guides/upgrading:{codemods.mdx,version-10.mdx,version-11.mdx,version-12.mdx,version-13.mdx,version-14.mdx,version-9.mdx}|02-pages/03-building-your-application/01-routing:{01-pages-and-layouts.mdx,02-dynamic-routes.mdx,03-linking-and-navigating.mdx,05-custom-app.mdx,06-custom-document.mdx,07-api-routes.mdx,08-custom-error.mdx}|02-pages/03-building-your-application/02-rendering:{01-server-side-rendering.mdx,02-static-site-generation.mdx,04-automatic-static-optimization.mdx,05-client-side-rendering.mdx}|02-pages/03-building-your-application/03-data-fetching:{01-get-static-props.mdx,02-get-static-paths.mdx,03-forms-and-mutations.mdx,03-get-server-side-props.mdx,05-client-side.mdx}|02-pages/03-building-your-application/06-configuring:{12-error-handling.mdx}|02-pages/04-api-reference:{06-edge.mdx,08-turbopack.mdx}|02-pages/04-api-reference/01-components:{font.mdx,form.mdx,head.mdx,image-legacy.mdx,image.mdx,link.mdx,script.mdx}|02-pages/04-api-reference/02-file-conventions:{instrumentation.mdx,proxy.mdx,public-folder.mdx,src-folder.mdx}|02-pages/04-api-reference/03-functions:{get-initial-props.mdx,get-server-side-props.mdx,get-static-paths.mdx,get-static-props.mdx,next-request.mdx,next-response.mdx,use-params.mdx,use-report-web-vitals.mdx,use-router.mdx,use-search-params.mdx,userAgent.mdx}|02-pages/04-api-reference/04-config/01-next-config-js:{adapterPath.mdx,allowedDevOrigins.mdx,assetPrefix.mdx,basePath.mdx,bundlePagesRouterDependencies.mdx,compress.mdx,crossOrigin.mdx,deploymentId.mdx,devIndicators.mdx,distDir.mdx,env.mdx,exportPathMap.mdx,generateBuildId.mdx,generateEtags.mdx,headers.mdx,httpAgentOptions.mdx,images.mdx,logging.mdx,onDemandEntries.mdx,optimizePackageImports.mdx,output.mdx,pageExtensions.mdx,poweredByHeader.mdx,productionBrowserSourceMaps.mdx,proxyClientMaxBodySize.mdx,reactStrictMode.mdx,redirects.mdx,rewrites.mdx,serverExternalPackages.mdx,trailingSlash.mdx,transpilePackages.mdx,turbopack.mdx,typescript.mdx,urlImports.mdx,useLightningcss.mdx,webVitalsAttribution.mdx,webpack.mdx}|02-pages/04-api-reference/04-config:{01-typescript.mdx,02-eslint.mdx}|02-pages/04-api-reference/05-cli:{create-next-app.mdx,next.mdx}|02-pages/04-api-reference/06-adapters:{01-configuration.mdx,02-creating-an-adapter.mdx,03-api-reference.mdx,04-testing-adapters.mdx,05-routing-with-next-routing.mdx,06-implementing-ppr-in-an-adapter.mdx,07-runtime-integration.mdx,08-invoking-entrypoints.mdx,09-output-types.mdx,10-routing-information.mdx,11-use-cases.mdx}|03-architecture:{accessibility.mdx,fast-refresh.mdx,nextjs-compiler.mdx,supported-browsers.mdx}|04-community:{01-contribution-guide.mdx,02-rspack.mdx}

<!-- NEXT-AGENTS-MD-END -->

## Available Skills

Use these skills for detailed patterns on-demand. Skills live in `.agents/skills/` and are tracked by `skills-lock.json`.

### Generic Skills (Any Project)
| Skill | Description | URL |
|-------|-------------|-----|
| `accessibility` | WCAG, ARIA, keyboard navigation, focus management, contrast | [SKILL.md](.agents/skills/accessibility/SKILL.md) |
| `bash-defensive-patterns` | Defensive Bash programming for production-grade scripts | [SKILL.md](.agents/skills/bash-defensive-patterns/SKILL.md) |
| `deploy-to-vercel` | Deploy applications and websites to Vercel | [SKILL.md](.agents/skills/deploy-to-vercel/SKILL.md) |
| `nodejs-backend-patterns` | Backend services, route handlers, errors, layering, middleware patterns | [SKILL.md](.agents/skills/nodejs-backend-patterns/SKILL.md) |
| `nodejs-best-practices` | General Node.js architecture, async, modules, security, and performance | [SKILL.md](.agents/skills/nodejs-best-practices/SKILL.md) |
| `seo` | Metadata, sitemap, robots, Open Graph, structured data | [SKILL.md](.agents/skills/seo/SKILL.md) |
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
| Add or adjust metadata, `generateMetadata`, OG images, sitemap, robots, or JSON-LD | `seo` |
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

- Use `npm run check` as the baseline verification until a test runner is added.
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
