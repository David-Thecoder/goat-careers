import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useLegends } from '../features/legends/hooks/useLegends';

export function HomePage() {
  const { data: legends = [], error } = useLegends();
  return (
    <section className="home">
      <div className="home-hero">
        <p className="eyebrow">GOAT Careers V1 · Founding Five</p>
        <h1>Where legends become stories.</h1>
        <p>One engine. Five complete experiences. Now connected as one universe through eras, rivalries, legacy bridges and discovery flow.</p>
        <Link className="home-cta" to="/universe">Open the universe →</Link>
      </div>
      {error && <p role="alert">Unable to load legends: {error.message}</p>}
      <div className="home-grid">
        {legends.map((legend, index) => (
          <Link
            className="home-card"
            to={`/legends/${legend.slug}`}
            key={legend.slug}
            style={{ '--accent': legend.theme.accent, '--glow': legend.theme.glow } as CSSProperties}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{legend.shortName}</h2>
            <p>{legend.hero.title}</p>
            <small>{legend.hero.tags.join(' · ')}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}
