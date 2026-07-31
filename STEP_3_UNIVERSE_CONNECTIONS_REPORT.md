# GOAT Careers — Step 3 Universe Connections

## Status
Implemented.

## Scope
Step 3 transforms the Founding Five from separate legend pages into one connected universe.

## Added

### Universe Engine
- `src/features/universe/types.ts`
- `src/features/universe/universeEngine.ts`

Responsibilities:
- create universe nodes
- create cross-legend edges
- generate global world timeline
- compute global GOAT Passport
- compute legend-specific universe connections

### Universe Components
- `UniverseMap`
- `GlobalWorldTimeline`
- `GlobalPassport`
- `ConnectedLegendStrip`

### New Pages / Routes
- `/universe`
- `/timeline`

### Connected Legend Pages
Each legend page now includes:
- personal hero
- universe connections
- story chapters
- human network
- personal timeline
- global timeline slice
- legendary moments
- legacy bridges
- sport DNA
- discovery flow
- passport

## Connected Bridges
- Jordan → Kobe
- Kobe → LeBron
- LeBron → Curry
- Ronaldo → Jordan
- Ronaldo → Kobe
- Jordan → LeBron
- Curry → Ronaldo

## Global Timeline
Includes shared era events from 1984 to 2024:
- Jordan entering NBA
- Kobe arrival
- 2003 LeBron + Ronaldo breakthrough
- 2008 Ronaldo Ballon d'Or + Kobe Beijing
- 2014 Décima + Warriors shift
- 2016 LeBron/Ronaldo/Curry pressure year
- 2022 Curry answer
- 2024 Olympic memory era

## Tailwind
Step 3 keeps Tailwind as the visual foundation and adds universe-specific component classes through `@layer components`.

## Validation
- Added a project-level `.npmrc` that uses the public npm registry and a workspace-local cache, avoiding both the internal registry's missing `@types/react` package and restricted access to the user-level npm cache.
- `npm ci` completed successfully from `package-lock.json`.
- `npm run build` completed successfully with TypeScript and Vite.
