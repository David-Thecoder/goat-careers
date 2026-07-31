# Edge Functions

Serve locally with the Supabase CLI, then call:

```bash
supabase functions serve
curl -X POST http://127.0.0.1:54321/functions/v1/recommend-legends \
  -H "Content-Type: application/json" \
  -d '{"currentLegendSlug":"cristiano-ronaldo"}'
curl "http://127.0.0.1:54321/functions/v1/search-universe?q=jordan"
```

`validate-story-integrity` requires an authenticated bearer token. Keep JWT
verification enabled for deployed functions.
