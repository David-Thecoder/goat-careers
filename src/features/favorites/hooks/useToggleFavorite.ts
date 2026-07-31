import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../../lib/api/queryKeys';
import { toggleLegendFavorite } from '../api/favoriteRepository';

export function useToggleFavorite(userId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ legendId, favorite }: { legendId: string; favorite: boolean }) => toggleLegendFavorite(userId, legendId, favorite),
    onSettled: () => queryClient.invalidateQueries({ queryKey: queryKeys.favorites(userId) }),
  });
}

