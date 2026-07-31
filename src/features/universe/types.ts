import type { Sport } from '../../types/legend';

export type UniverseNodeType = 'legend' | 'era' | 'moment' | 'sport';
export type UniverseEdgeType = 'legacy' | 'rivalry' | 'influence' | 'shared-dna' | 'same-era';

export interface UniverseNode {
  id: string;
  slug?: string;
  type: UniverseNodeType;
  label: string;
  subtitle: string;
  accent: string;
}

export interface UniverseEdge {
  id: string;
  from: string;
  to: string;
  type: UniverseEdgeType;
  label: string;
  reason: string;
  weight: 1 | 2 | 3 | 4 | 5;
}

export interface GlobalTimelineEvent {
  year: string;
  title: string;
  description: string;
  legendSlugs: string[];
  sport?: Sport | 'multi-sport';
  era: string;
}

export interface UniversePassport {
  legends: number;
  sports: Sport[];
  moments: number;
  relationships: number;
  eras: string[];
  completion: number;
}
