import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'npm:@supabase/supabase-js@2';

Deno.serve(async (request) => {
  const token = request.headers.get('Authorization');
  if (!token) return Response.json({ error: 'Authentication required' }, { status: 401 });
  const client = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    { global: { headers: { Authorization: token } } },
  );
  const { data, error } = await client.from('legends').select('id, slug, chapters(id), legendary_moments(id)').eq('status', 'published');
  if (error) return Response.json({ error: 'Validation failed' }, { status: 500 });
  const issues = (data ?? []).flatMap((legend) => [
    ...(legend.chapters.length ? [] : [{ legend: legend.slug, issue: 'missing_chapters' }]),
    ...(legend.legendary_moments.length ? [] : [{ legend: legend.slug, issue: 'missing_moments' }]),
  ]);
  return Response.json({ valid: issues.length === 0, issues });
});

