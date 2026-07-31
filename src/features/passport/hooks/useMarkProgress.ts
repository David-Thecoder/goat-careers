import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../../lib/api/queryKeys';
import { markChapterViewed, markLegendDiscovered, markMomentViewed } from '../api/passportRepository';

type ProgressInput =
  | { type: 'legend'; id: string }
  | { type: 'chapter'; id: string }
  | { type: 'moment'; id: string };

export function useMarkProgress(userId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: ProgressInput) => {
      if (input.type === 'legend') return markLegendDiscovered(userId, input.id);
      if (input.type === 'chapter') return markChapterViewed(userId, input.id);
      return markMomentViewed(userId, input.id);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.passport(userId) }),
  });
}

