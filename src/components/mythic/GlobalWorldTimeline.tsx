import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import type { Legend } from '../../types/legend';
import type { GlobalTimelineEvent } from '../../features/universe/types';

export function GlobalWorldTimeline({ events, legends }: { events: GlobalTimelineEvent[]; legends: Legend[] }) {
  const bySlug = new Map(legends.map((legend) => [legend.slug, legend]));

  return (
    <section className="world-timeline-global">
      <div className="section-head">
        <p className="eyebrow">World Timeline</p>
        <h2>The same era seen across different sports</h2>
      </div>
      <div className="world-timeline-list">
        {events.map((event) => (
          <article key={`${event.year}-${event.title}`}>
            <div>
              <span>{event.year}</span>
              <small>{event.era}</small>
            </div>
            <div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="timeline-links">
                {event.legendSlugs.map((slug) => {
                  const legend = bySlug.get(slug);
                  if (!legend) return null;
                  return (
                    <Link key={slug} to={`/legends/${slug}`} style={{ '--accent': legend.theme.accent } as CSSProperties}>
                      {legend.shortName}
                    </Link>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
