# GOAT Careers — Multisport Story Engine

A scalable, data-driven documentary platform for athlete careers across multiple sports.

## Architecture

- `src/domain`: stable content contracts (`Athlete`, `Sport`, story blocks, sources, media, statistics).
- `src/core/registry.ts`: one metadata registry and one lazy loader per athlete.
- `src/content/sports`: sport definitions and vocabulary.
- `src/content/athletes`: athlete editorial content.
- `src/features/athlete-story`: generic block renderer.
- `src/lib/validation`: fail-fast registry and content checks.

The home page, sport archives, routes, navigation, next story and story sections are generated from the registries.

## Add an athlete

1. Add one content module in `src/content/athletes/<slug>.ts` with `defineAthlete(...)`.
2. Add one manifest entry in `src/core/registry.ts` with its lazy `import()`.
3. Reuse an existing `visualMode`; add a custom visual only when the story truly needs one.

No page component needs to be copied.

## Add a sport

Add one `SportDefinition` in `src/content/sports/index.ts`. Athlete pages remain sport-agnostic.

## PWA

The production build registers `public/sw.js` and exposes `public/manifest.webmanifest`. The service worker uses a small app-shell cache and runtime cache without adding a dependency.

## Local development

```bash
npm ci
npm run dev
```

## Production check

```bash
npm run build
```

GitHub Pages deployment remains configured in `.github/workflows/deploy.yml`.


## Tailwind CSS

This build uses Tailwind CSS as the styling pipeline.

```bash
npm install
npm run dev
```

Key files:

- `tailwind.config.ts`
- `postcss.config.mjs`
- `src/index.css`
- `src/design/tokens.ts`

UI primitives use Tailwind utilities directly. Mythic storytelling sections use semantic classes defined in `@layer components`.

## Phase Backend Foundation

The UI now reads through TanStack Query hooks and typed repositories. When
Supabase is configured, PostgreSQL is the source of truth. Without environment
variables, the founding-five TypeScript content remains available as a local
development fallback.

### Environment

Copy `.env.example` to `.env.local` and use the Project URL plus the
**publishable key** from the Supabase Connect dialog:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

Never place a secret or `service_role` key in a `VITE_` variable.

### Supabase setup

Install the current Supabase CLI, then:

```bash
supabase init
supabase start
supabase db reset
supabase functions serve
```

The foundation migration creates content and user tables, indexes, public-read
policies, owner-only user policies, and five Storage buckets. It also grants
Data API access explicitly because new Supabase tables are not automatically
exposed.

For a hosted project, link it and push only after reviewing the target:

```bash
supabase link --project-ref YOUR_PROJECT_REF
supabase db push
supabase functions deploy recommend-legends
supabase functions deploy search-universe
supabase functions deploy validate-story-integrity
```

Keep JWT verification enabled for deployed functions. After applying schema
changes, run Supabase security and performance advisors and regenerate
`src/lib/supabase/database.types.ts` from the connected project.

### Checks

```bash
npm ci
npm test
npm run build
npm run dev
```

Playwright is intentionally not installed yet. Add it with the first connected
test project so auth credentials and seeded data can be exercised rather than
committing placeholder browser tests.

### Deployment

GitHub Pages remains the current static deployment target. For Vercel, import
the repository as a Vite project, set the two `VITE_SUPABASE_*` variables for
Preview and Production, use `npm run build`, and publish `dist`. Validate a
preview before promoting it to production.

### MCP workflow

- Before implementation: inspect the local repository, connected Supabase
  schema/advisors, current GitHub issue or PR, and the exact Figma file when one
  is supplied.
- After implementation: run tests and build, exercise public and authenticated
  flows, inspect deployment logs, then open a focused PR explaining what
  changed, why, and how to test.
- Prefer versioned migrations and repository changes over manual dashboard
  edits. MCP is an engineering aid, not the application backend.

### Remaining content migration

The schema is ready, but the five editorial modules have not been inserted as
partial placeholder rows. Import each complete legend, its chapters, moments,
timeline and relationships in one reviewed migration, then remove the static
fallback after the hosted dataset passes route and visual checks.
