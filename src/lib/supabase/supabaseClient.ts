import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const isSupabaseConfigured = Boolean(url && key);

// ponytail: keep the static experience runnable until a project is connected.
export const supabase = isSupabaseConfigured
  ? createClient<Database>(url, key)
  : null;

