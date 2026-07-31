import type { Legend } from '../../types/legend';
export const getWorldTimeline = (legend: Legend) => [...legend.timeline].sort((a, b) => a.year.localeCompare(b.year));
