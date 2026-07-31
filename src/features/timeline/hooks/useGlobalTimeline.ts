import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../../lib/api/queryKeys';
import { getGlobalTimeline } from '../api/timelineRepository';

export function useGlobalTimeline() {
  return useQuery({ queryKey: queryKeys.timeline, queryFn: getGlobalTimeline, staleTime: 1000 * 60 * 20 });
}

