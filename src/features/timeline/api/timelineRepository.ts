import { createGlobalTimeline } from '../../universe/universeEngine';
import { supabase } from '../../../lib/supabase/supabaseClient';
import type { GlobalTimelineEvent } from '../../universe/types';

export async function getGlobalTimeline(): Promise<GlobalTimelineEvent[]> {
  const localLegends = (await import('../../../content/legends')).legends;
  if (!supabase) return createGlobalTimeline(localLegends);
  const { data, error } = await supabase.from('timeline_events').select('*').order('event_year');
  if (error) throw error;
  return (data ?? []).map((row) => ({
    year: String(row.event_year),
    title: row.title,
    description: row.description ?? '',
    legendSlugs: [],
    era: row.era ?? 'Global Era',
  }));
}

export async function getLegendTimeline(legendId: string) {
  const localLegends = (await import('../../../content/legends')).legends;
  if (!supabase) return localLegends.find((legend) => legend.id === legendId)?.timeline ?? [];
  const { data, error } = await supabase.from('timeline_events').select('*').eq('legend_id', legendId).order('event_year');
  if (error) throw error;
  return (data ?? []).map((row) => ({ year: String(row.event_year), title: row.title, description: row.description ?? '' }));
}
