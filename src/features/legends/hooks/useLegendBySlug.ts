import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../../lib/api/queryKeys';
import { getLegendBySlug } from '../api/legendRepository';

export function useLegendBySlug(slug: string) {
  return useQuery({
    queryKey: queryKeys.legend(slug),
    queryFn: () => getLegendBySlug(slug),
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 20,
  });
}

