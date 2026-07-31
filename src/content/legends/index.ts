import type { Legend } from '../../types/legend';
import { cristianoRonaldo } from './cristiano-ronaldo';
import { michaelJordan } from './michael-jordan';
import { kobeBryant } from './kobe-bryant';
import { lebronJames } from './lebron-james';
import { stephenCurry } from './stephen-curry';

export const legends: Legend[] = [michaelJordan, kobeBryant, lebronJames, stephenCurry, cristianoRonaldo];
export const getLegendBySlug = (slug: string) => legends.find((legend) => legend.slug === slug);
export const getRelatedLegend = (slug: string) => legends.filter((legend) => legend.slug !== slug).slice(0, 3);
