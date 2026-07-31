import type { Legend } from '../../types/legend';
export const getStoryProgress = (legend: Legend) => ({ chapters: legend.chapters.length, moments: legend.legendaryMoments.length, relationships: legend.relationships.length });
export const getChaptersByTone = (legend: Legend, tone: string) => legend.chapters.filter((chapter) => chapter.tone === tone);
