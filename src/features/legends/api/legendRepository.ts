import { supabase } from '../../../lib/supabase/supabaseClient';
import type { Chapter, Legend, LegendaryMoment } from '../../../types/legend';

const getLocalLegends = async () => (await import('../../../content/legends')).legends;

type LegendRow = NonNullable<typeof supabase> extends never ? never : {
  id: string; slug: string; name: string; short_name: string; nationality: string | null;
  era: string | null; theme: unknown; hero: unknown; stats: unknown; legacy: unknown;
  sport_dna: unknown; discovery: unknown; passport_template: unknown;
};

function mergeLegend(row: LegendRow, fallback?: Legend): Legend {
  if (!fallback) throw new Error(`Legend ${row.slug} is missing display content`);
  const base = fallback;
  return {
    ...base,
    id: row.id,
    slug: row.slug,
    name: row.name,
    shortName: row.short_name,
    country: row.nationality ?? base.country,
    era: row.era ?? base.era,
    theme: (row.theme as Legend['theme']) ?? base.theme,
    hero: (row.hero as Legend['hero']) ?? base.hero,
    stats: (row.stats as Legend['stats']) ?? base.stats,
    legacy: (row.legacy as Legend['legacy']) ?? base.legacy,
    sportDNA: (row.sport_dna as Legend['sportDNA']) ?? base.sportDNA,
    discovery: (row.discovery as Legend['discovery']) ?? base.discovery,
    passport: (row.passport_template as Legend['passport']) ?? base.passport,
  };
}

export async function getLegends(): Promise<Legend[]> {
  const localLegends = await getLocalLegends();
  if (!supabase) return localLegends;
  const { data, error } = await supabase.from('legends').select('*').eq('status', 'published').order('name');
  if (error) throw error;
  return (data ?? []).map((row) => mergeLegend(row, localLegends.find((item) => item.slug === row.slug)));
}

export async function getLegendBySlug(slug: string): Promise<Legend | undefined> {
  const localLegends = await getLocalLegends();
  const fallback = localLegends.find((item) => item.slug === slug);
  if (!supabase) return fallback;

  const { data: row, error } = await supabase.from('legends').select('*').eq('slug', slug).eq('status', 'published').maybeSingle();
  if (error) throw error;
  if (!row) return undefined;

  const [chapters, moments] = await Promise.all([getLegendChapters(row.id), getLegendMoments(row.id)]);
  return { ...mergeLegend(row, fallback), chapters, legendaryMoments: moments };
}

export async function getLegendChapters(legendId: string): Promise<Chapter[]> {
  const localLegends = await getLocalLegends();
  if (!supabase) return localLegends.find((item) => item.id === legendId)?.chapters ?? [];
  const { data, error } = await supabase.from('chapters').select('*').eq('legend_id', legendId).order('sort_order');
  if (error) throw error;
  return (data ?? []).map((row) => ({
    id: row.id,
    title: row.title,
    period: row.period ?? [row.era_start, row.era_end].filter(Boolean).join('–'),
    tone: (row.tone ?? 'mythic') as Chapter['tone'],
    summary: row.summary ?? '',
    beats: Array.isArray(row.beats) ? row.beats.filter((beat): beat is string => typeof beat === 'string') : [],
  }));
}

export async function getLegendMoments(legendId: string): Promise<LegendaryMoment[]> {
  const localLegends = await getLocalLegends();
  if (!supabase) return localLegends.find((item) => item.id === legendId)?.legendaryMoments ?? [];
  const { data, error } = await supabase.from('legendary_moments').select('*').eq('legend_id', legendId).order('sort_order');
  if (error) throw error;
  return (data ?? []).map((row) => ({
    title: row.title,
    date: row.happened_at ?? (row.year ? String(row.year) : undefined),
    context: row.context ?? row.description ?? '',
    whyItMatters: row.why_it_matters ?? '',
  }));
}
