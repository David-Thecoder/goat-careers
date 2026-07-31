import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import type { Legend } from '../../types/legend';
import type { UniverseEdge } from '../../features/universe/types';

export function ConnectedLegendStrip({ legend, connectedLegends, edges }: { legend: Legend; connectedLegends: Legend[]; edges: UniverseEdge[] }) {
  if (!connectedLegends.length) return null;

  return (
    <section className="connected-strip">
      <div className="section-head">
        <p className="eyebrow">Universe Connections</p>
        <h2>{legend.shortName} is not an isolated story</h2>
      </div>
      <div className="connected-grid">
        {connectedLegends.map((target) => {
          const edge = edges.find((item) => item.from === target.id || item.to === target.id);
          return (
            <Link
              key={target.id}
              to={`/legends/${target.slug}`}
              style={{ '--accent': target.theme.accent, '--glow': target.theme.glow } as CSSProperties}
            >
              <span>{edge?.type ?? 'connection'}</span>
              <h3>{target.shortName}</h3>
              <p>{edge?.reason ?? target.hero.thesis}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
