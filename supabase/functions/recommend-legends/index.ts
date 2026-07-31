import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'npm:@supabase/supabase-js@2';

Deno.serve(async (request) => {
  if (request.method !== 'POST') return Response.json({ error: 'Method not allowed' }, { status: 405 });
  const body = await request.json().catch(() => null);
  const slug = body && typeof body.currentLegendSlug === 'string' ? body.currentLegendSlug : '';
  if (!slug) return Response.json({ error: 'currentLegendSlug is required' }, { status: 400 });

  const client = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    { global: { headers: { Authorization: request.headers.get('Authorization') ?? '' } } },
  );
  const { data, error } = await client.from('legends').select('slug, title').eq('status', 'published').neq('slug', slug).limit(3);
  if (error) return Response.json({ error: 'Unable to load recommendations' }, { status: 500 });
  return Response.json({ recommendations: (data ?? []).map((legend) => ({ slug: legend.slug, reason: legend.title ?? 'Explore another connected career.' })) });
});

