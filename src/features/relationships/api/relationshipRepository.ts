import { supabase } from '../../../lib/supabase/supabaseClient';
import type { Relationship } from '../../../types/legend';
import { createUniverseEdges } from '../../universe/universeEngine';

export async function getLegendRelationships(legendId: string): Promise<Relationship[]> {
  const localLegends = (await import('../../../content/legends')).legends;
  if (!supabase) return localLegends.find((legend) => legend.id === legendId)?.relationships ?? [];
  const { data, error } = await supabase.from('relationships').select('*').eq('source_legend_id', legendId).order('strength', { ascending: false });
  if (error) throw error;
  return (data ?? []).map((row) => ({
    name: row.title,
    role: row.relationship_type as Relationship['role'],
    label: row.title,
    description: row.description ?? '',
    weight: Math.max(1, Math.min(5, row.strength)) as Relationship['weight'],
  }));
}

export async function getGlobalRelationshipGraph() {
  const localLegends = (await import('../../../content/legends')).legends;
  if (!supabase) return createUniverseEdges(localLegends);
  const { data, error } = await supabase.from('relationships').select('*');
  if (error) throw error;
  return data ?? [];
}
