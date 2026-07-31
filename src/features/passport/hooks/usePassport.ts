import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../../lib/api/queryKeys';
import { supabase } from '../../../lib/supabase/supabaseClient';
import { getUserPassport } from '../api/passportRepository';

export function usePassport(userId?: string) {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: queryKeys.passport(userId ?? ''),
    queryFn: () => getUserPassport(userId!),
    enabled: Boolean(userId),
    staleTime: 1000 * 60,
  });

  useEffect(() => {
    if (!supabase || !userId) return;
    const client = supabase;
    const channel = client.channel(`passport:${userId}`).on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'user_passports', filter: `user_id=eq.${userId}` },
      () => void queryClient.invalidateQueries({ queryKey: queryKeys.passport(userId) }),
    ).subscribe();
    return () => { void client.removeChannel(channel); };
  }, [queryClient, userId]);

  return query;
}
