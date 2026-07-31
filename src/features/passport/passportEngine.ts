import type { Legend } from '../../types/legend';
export const buildPassport = (legend: Legend) => ({ ...legend.passport, chapters: legend.chapters.length, moments: legend.legendaryMoments.length, relationships: legend.relationships.length });
