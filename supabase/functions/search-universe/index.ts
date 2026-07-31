import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'npm:@supabase/supabase-js@2';

Deno.serve(async (request) => {
  const query = new URL(request.url).searchParams.get('q')?.trim() ?? '';
  if (query.length < 2 || query.length > 80) return Response.json({ error: 'q must contain 2 to 80 characters' }, { status: 400 });
  const client = createClient(Deno.env.get('SUPABASE_URL') ?? '', Deno.env.get('SUPABASE_ANON_KEY') ?? '');
  const { data, error } = await client.from('legends').select('id, slug, name, title').eq('status', 'published').ilike('name', `%${query}%`).limit(10);
  if (error) return Response.json({ error: 'Search failed' }, { status: 500 });
  return Response.json({ results: data ?? [] });
});

