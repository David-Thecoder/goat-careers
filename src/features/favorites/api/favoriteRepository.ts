import { supabase } from '../../../lib/supabase/supabaseClient';

export async function getUserFavorites(userId: string) {
  if (!supabase) return [];
  const { data, error } = await supabase.from('user_favorites').select('*').eq('user_id', userId);
  if (error) throw error;
  return data ?? [];
}

export async function toggleLegendFavorite(userId: string, legendId: string, favorite: boolean) {
  if (!supabase) throw new Error('Supabase is not configured');
  if (favorite) {
    const { error } = await supabase.from('user_favorites').insert({ user_id: userId, legend_id: legendId });
    if (error) throw error;
  } else {
    const { error } = await supabase.from('user_favorites').delete().eq('user_id', userId).eq('legend_id', legendId);
    if (error) throw error;
  }
}

