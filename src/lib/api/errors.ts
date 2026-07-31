export function assertSupabaseData<T>(data: T | null, error: unknown): T {
  if (error) throw error;
  if (data === null) throw new Error('No data returned from Supabase');
  return data;
}

