import { createGlobalTimeline, createUniverseEdges, createUniversePassport } from '../features/universe/universeEngine';
import { GlobalPassport, GlobalWorldTimeline, UniverseMap } from '../components/mythic';
import { useLegends } from '../features/legends/hooks/useLegends';

export function UniversePage() {
  const { data: legends = [], error } = useLegends();
  const edges = createUniverseEdges(legends);
  const timeline = createGlobalTimeline(legends);
  const passport = createUniversePassport(legends);

  return (
    <article className="universe-page">
      <section className="universe-hero">
        <p className="eyebrow">GOAT Careers · Universe Mode</p>
        <h1>Five legends. One connected mythology.</h1>
        <p>Step 3 connects the founding five through shared eras, legacy bridges, rivalries, influence paths and a global passport.</p>
      </section>
      {error && <p role="alert">Unable to load the universe: {error.message}</p>}
      <UniverseMap legends={legends} edges={edges} />
      <GlobalWorldTimeline events={timeline} legends={legends} />
      <GlobalPassport passport={passport} />
    </article>
  );
}
