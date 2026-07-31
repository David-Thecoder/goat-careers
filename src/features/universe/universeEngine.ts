import type { Legend } from '../../types/legend';
import type { GlobalTimelineEvent, UniverseEdge, UniverseNode, UniversePassport } from './types';

const yearNumber = (year: string) => Number(year.replace(/[^0-9]/g, '').slice(0, 4)) || 0;

export function createUniverseNodes(legends: Legend[]): UniverseNode[] {
  return legends.map((legend) => ({
    id: legend.id,
    slug: legend.slug,
    type: 'legend',
    label: legend.shortName,
    subtitle: legend.hero.title,
    accent: legend.theme.accent
  }));
}

export function createUniverseEdges(legends: Legend[]): UniverseEdge[] {
  const edges: UniverseEdge[] = [];
  const add = (from: string, to: string, type: UniverseEdge['type'], label: string, reason: string, weight: UniverseEdge['weight']) => {
    edges.push({ id: `${from}-${to}-${type}`, from, to, type, label, reason, weight });
  };

  add('michael-jordan', 'kobe-bryant', 'legacy', 'The Standard → The Obsession', 'Kobe studied Jordan as a blueprint for competitive immortality.', 5);
  add('kobe-bryant', 'lebron-james', 'influence', 'Mamba bridge', 'LeBron inherited part of the emotional NBA stage Kobe helped define.', 4);
  add('lebron-james', 'stephen-curry', 'rivalry', 'Power vs Geometry', 'Their Finals rivalry shifted the league from physical control to spacing revolution.', 5);
  add('cristiano-ronaldo', 'michael-jordan', 'shared-dna', 'Impossible standards', 'Both turned obsession, brand and pressure into a global language of greatness.', 5);
  add('cristiano-ronaldo', 'kobe-bryant', 'shared-dna', 'Work as identity', 'Both made discipline feel like a personality rather than a habit.', 5);
  add('michael-jordan', 'lebron-james', 'rivalry', 'The measurement debate', 'LeBron’s career is permanently read against the standard Jordan created.', 5);
  add('stephen-curry', 'cristiano-ronaldo', 'same-era', 'Late-era global icons', 'Both carried old assumptions into a new era of global sports media.', 3);

  const validIds = new Set(legends.map((legend) => legend.id));
  return edges.filter((edge) => validIds.has(edge.from) && validIds.has(edge.to));
}

export function createGlobalTimeline(legends: Legend[]): GlobalTimelineEvent[] {
  const timeline: GlobalTimelineEvent[] = [
    { year: '1984', title: 'The Air era begins', description: 'Michael Jordan enters the NBA and the modern athlete-as-myth model starts forming.', legendSlugs: ['michael-jordan'], sport: 'basketball', era: 'Air Era' },
    { year: '1996', title: 'The heir arrives', description: 'Kobe Bryant enters the league while Jordan’s second three-peat defines the standard.', legendSlugs: ['michael-jordan', 'kobe-bryant'], sport: 'basketball', era: 'Inheritance Era' },
    { year: '2003', title: 'Two futures appear', description: 'LeBron enters the NBA and Cristiano Ronaldo joins Ferguson’s Manchester United.', legendSlugs: ['lebron-james', 'cristiano-ronaldo'], sport: 'multi-sport', era: 'Chosen Futures' },
    { year: '2008', title: 'Obsession becomes gold', description: 'Ronaldo wins his first Ballon d’Or while Kobe helps restore Team USA in Beijing.', legendSlugs: ['cristiano-ronaldo', 'kobe-bryant'], sport: 'multi-sport', era: 'Global Proof' },
    { year: '2014', title: 'The tenth and the next dynasty', description: 'Ronaldo reaches La Décima while the Warriors’ core prepares to change basketball.', legendSlugs: ['cristiano-ronaldo', 'stephen-curry'], sport: 'multi-sport', era: 'Dynasty Shift' },
    { year: '2016', title: 'Pressure creates icons', description: 'LeBron completes the 3–1 comeback, Ronaldo wins Euro 2016, and Curry’s 73–9 season changes NBA math.', legendSlugs: ['lebron-james', 'cristiano-ronaldo', 'stephen-curry'], sport: 'multi-sport', era: 'Pressure Year' },
    { year: '2022', title: 'The revolution answers', description: 'Curry wins again and owns the authorship of his dynasty.', legendSlugs: ['stephen-curry'], sport: 'basketball', era: 'Answer Era' },
    { year: '2024', title: 'The last dance of a generation', description: 'LeBron and Curry share the Olympic stage while the connected universe enters its memory phase.', legendSlugs: ['lebron-james', 'stephen-curry'], sport: 'basketball', era: 'Memory Era' }
  ];

  const knownSlugs = new Set(legends.map((legend) => legend.slug));
  return timeline.filter((event) => event.legendSlugs.every((slug) => knownSlugs.has(slug))).sort((a, b) => yearNumber(a.year) - yearNumber(b.year));
}

export function createUniversePassport(legends: Legend[]): UniversePassport {
  const sports = [...new Set(legends.map((legend) => legend.sport))];
  const moments = legends.reduce((total, legend) => total + legend.legendaryMoments.length, 0);
  const relationships = legends.reduce((total, legend) => total + legend.relationships.length, 0);
  const eras = [...new Set(createGlobalTimeline(legends).map((event) => event.era))];

  return {
    legends: legends.length,
    sports,
    moments,
    relationships,
    eras,
    completion: Math.min(100, Math.round((legends.length / 5) * 100))
  };
}

export function getUniverseForLegend(legend: Legend, legends: Legend[]) {
  const edges = createUniverseEdges(legends).filter((edge) => edge.from === legend.id || edge.to === legend.id);
  const connectedIds = new Set(edges.flatMap((edge) => [edge.from, edge.to]).filter((id) => id !== legend.id));
  const connectedLegends = legends.filter((item) => connectedIds.has(item.id));
  const timeline = createGlobalTimeline(legends).filter((event) => event.legendSlugs.includes(legend.slug));
  return { edges, connectedLegends, timeline };
}
