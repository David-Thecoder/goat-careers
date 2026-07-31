import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import type { Legend } from '../../types/legend';
import type { UniverseEdge } from '../../features/universe/types';

export function UniverseMap({ legends, edges }: { legends: Legend[]; edges: UniverseEdge[] }) {
  return (
    <section className="universe-map">
      <div className="section-head">
        <p className="eyebrow">Connected Universe</p>
        <h2>One sporting mythology, five entry points</h2>
      </div>
      <div className="universe-board">
        <div className="universe-nodes">
          {legends.map((legend) => (
            <Link
              key={legend.id}
              to={`/legends/${legend.slug}`}
              className="universe-node"
              style={{ '--accent': legend.theme.accent, '--glow': legend.theme.glow } as CSSProperties}
            >
              <span>{legend.sport}</span>
              <strong>{legend.shortName}</strong>
              <small>{legend.hero.title}</small>
            </Link>
          ))}
        </div>
        <div className="universe-edges">
          {edges.map((edge) => (
            <article key={edge.id}>
              <span>{edge.label}</span>
              <p>{edge.reason}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
