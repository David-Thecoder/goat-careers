import type { Legend } from '../../types/legend';
import { legends } from '../../content/legends';
export const recommendationsFor = (legend: Legend) => legend.discovery.map((item) => ({ ...item, legend: legends.find((candidate) => candidate.slug === item.slug) })).filter((item) => item.legend);
