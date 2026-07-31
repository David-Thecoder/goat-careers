import { supabase } from '../supabase/supabaseClient';

export function getPublicStorageUrl(bucket: string, path: string) {
  if (!supabase) return path;
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}
