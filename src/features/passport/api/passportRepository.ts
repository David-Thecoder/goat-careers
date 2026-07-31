import { supabase } from '../../../lib/supabase/supabaseClient';

export async function getUserPassport(userId: string) {
  if (!supabase) return null;
  const { data, error } = await supabase.from('user_passports').select('*').eq('user_id', userId).maybeSingle();
  if (error) throw error;
  return data;
}

async function markProgress(userId: string, progressType: string, ids: { legend_id?: string; chapter_id?: string; moment_id?: string }) {
  if (!supabase) throw new Error('Supabase is not configured');
  const { data, error } = await supabase.from('user_progress').upsert(
    { user_id: userId, progress_type: progressType, ...ids },
    { onConflict: 'user_id,legend_id,chapter_id,moment_id,progress_type' },
  ).select().single();
  if (error) throw error;
  return data;
}

export const markLegendDiscovered = (userId: string, legendId: string) => markProgress(userId, 'legend_discovered', { legend_id: legendId });
export const markChapterViewed = (userId: string, chapterId: string) => markProgress(userId, 'chapter_viewed', { chapter_id: chapterId });
export const markMomentViewed = (userId: string, momentId: string) => markProgress(userId, 'moment_viewed', { moment_id: momentId });

