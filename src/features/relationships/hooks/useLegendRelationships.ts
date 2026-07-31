import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../../lib/api/queryKeys';
import { getLegendRelationships } from '../api/relationshipRepository';

export function useLegendRelationships(legendId: string) {
  return useQuery({
    queryKey: queryKeys.relationships(legendId),
    queryFn: () => getLegendRelationships(legendId),
    enabled: Boolean(legendId),
  });
}
