export type Sport = 'football' | 'basketball';
export type RelationshipType = 'mentor' | 'coach' | 'teammate' | 'rival' | 'family' | 'friend' | 'opponent' | 'inspiration' | 'business' | 'legacy';
export type ChapterTone = 'origin' | 'rise' | 'conflict' | 'peak' | 'reinvention' | 'legacy' | 'mythic';

export interface LegendHero { title: string; subtitle: string; archetype: string; thesis: string; tags: string[]; }
export interface Stat { value: string; label: string; context?: string; }
export interface Chapter { id: string; title: string; period: string; tone: ChapterTone; summary: string; beats: string[]; }
export interface TimelineEvent { year: string; title: string; description: string; }
export interface Relationship { name: string; role: RelationshipType; label: string; description: string; weight: 1 | 2 | 3 | 4 | 5; }
export interface LegendaryMoment { title: string; date?: string; context: string; whyItMatters: string; }
export interface LegacyBridge { from: string; to: string; link: string; }
export interface SportDNA { sport: Sport; primary: string[]; style: string; code: string; }
export interface Discovery { slug: string; title: string; reason: string; }
export interface Passport { legendId: string; chapters: number; moments: number; relationships: number; sportsUnlocked: Sport[]; completionHint: string; }
export interface Legend { id: string; slug: string; name: string; shortName: string; country: string; era: string; sport: Sport; theme: { accent: string; secondary: string; glow: string; visual: string }; hero: LegendHero; stats: Stat[]; chapters: Chapter[]; timeline: TimelineEvent[]; relationships: Relationship[]; legendaryMoments: LegendaryMoment[]; legacy: LegacyBridge[]; sportDNA: SportDNA; discovery: Discovery[]; passport: Passport; }
