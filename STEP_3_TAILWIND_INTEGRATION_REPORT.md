# GOAT Careers — Tailwind Integration Report

## Status
Tailwind CSS is now integrated cleanly before the visual connection phase.

## Added
- `tailwind.config.ts`
- `postcss.config.mjs`
- `src/index.css`
- Tailwind theme tokens for GOAT colors, typography, radius, shadows and motion.
- `clsx` + `tailwind-merge` utility composition.

## Updated
- `package.json` now includes Tailwind, PostCSS and Autoprefixer.
- `src/app/main.tsx` imports `src/index.css`.
- `src/utils/cn.ts` now merges Tailwind classes safely.
- UI primitives now use Tailwind utility classes directly:
  - `Button`
  - `Card`
  - `Badge`
  - `Dialog`
  - `Menu`
  - `Tooltip`

## Kept intentional
Mythic components keep semantic class names (`hero`, `chapter`, `network-grid`, etc.) but their styles now live inside Tailwind `@layer components`.

This keeps the storytelling layer readable while making the styling pipeline Tailwind-first.

## Next step
Finish Step 3 visual connections:
- global Discovery Flow
- connected World Timeline
- Legacy Bridges across all 5 legends
- global Human Network
- global GOAT Passport state
