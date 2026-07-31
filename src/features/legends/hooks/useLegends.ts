import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../../lib/api/queryKeys';
import { getLegends } from '../api/legendRepository';

export function useLegends() {
  return useQuery({ queryKey: queryKeys.legends, queryFn: getLegends, staleTime: 1000 * 60 * 20 });
}

