# Architecture decisions

## Current scale

Five athletes, two sports, static TypeScript content, lazy athlete bundles and one generic story engine.

## Scaling contract

Adding an athlete changes the registry and one content module. Adding a sport changes the sport registry. The rendering engine has no athlete or sport branches.

## Intentional simplifications

- `defineAthlete` adapts the existing compact section format into typed story blocks. `ponytail:` split identity/story/stats/sources/media into separate files only when an athlete has enough real media and sourced facts to justify the extra files.
- Custom visuals currently render a placeholder. `ponytail:` introduce the component registry when the first production visual is implemented, not before.
- Static TypeScript content remains the source of truth. Upgrade to a headless CMS when multiple editors require previews, permissions and workflow.
- The service worker uses a dependency-free runtime cache. Upgrade to a versioned Workbox strategy when media/offline requirements exceed the small app shell.
