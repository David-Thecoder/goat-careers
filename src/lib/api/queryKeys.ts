export const queryKeys = {
  legends: ['legends'] as const,
  legend: (slug: string) => ['legend', slug] as const,
  timeline: ['timeline'] as const,
  relationships: (legendId: string) => ['relationships', legendId] as const,
  passport: (userId: string) => ['passport', userId] as const,
  favorites: (userId: string) => ['favorites', userId] as const,
};

