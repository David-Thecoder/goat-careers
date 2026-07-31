import type { CSSProperties } from 'react';
import type { Legend } from '../../types/legend';
import { legends } from '../../content/legends';
import { getUniverseForLegend } from '../../features/universe/universeEngine';
import { Hero } from './Hero';
import { StoryChapters } from './StoryChapters';
import { HumanNetwork } from './HumanNetwork';
import { Timeline } from './Timeline';
import { LegendaryMoments } from './LegendaryMoments';
import { LegacyBridge } from './LegacyBridge';
import { SportDNA } from './SportDNA';
import { DiscoveryFlow } from './DiscoveryFlow';
import { Passport } from './Passport';
import { ConnectedLegendStrip } from './ConnectedLegendStrip';
import { GlobalWorldTimeline } from './GlobalWorldTimeline';

export function LegendExperience({ legend }: { legend: Legend }) {
  const universe = getUniverseForLegend(legend, legends);

  return (
    <article className={`legend-page visual-${legend.theme.visual}`} style={{ '--accent': legend.theme.accent, '--secondary': legend.theme.secondary, '--glow': legend.theme.glow } as CSSProperties}>
      <Hero legend={legend} />
      <ConnectedLegendStrip legend={legend} connectedLegends={universe.connectedLegends} edges={universe.edges} />
      <StoryChapters legend={legend} />
      <HumanNetwork items={legend.relationships} />
      <Timeline events={legend.timeline} />
      <GlobalWorldTimeline events={universe.timeline} legends={legends} />
      <LegendaryMoments moments={legend.legendaryMoments} />
      <LegacyBridge items={legend.legacy} />
      <SportDNA dna={legend.sportDNA} />
      <DiscoveryFlow items={legend.discovery} />
      <Passport passport={legend.passport} />
    </article>
  );
}
