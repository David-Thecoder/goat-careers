import type { CSSProperties } from 'react';
import type { Relationship } from '../../types/legend';
export function HumanNetwork({ items }: { items: Relationship[] }) { return <section className="network"><div className="section-head"><p className="eyebrow">Human Network</p><h2>People who changed the story</h2></div><div className="network-grid">{items.map((r) => <article key={`${r.name}-${r.role}`} style={{'--weight': r.weight} as CSSProperties}><span>{r.role}</span><h3>{r.name}</h3><strong>{r.label}</strong><p>{r.description}</p></article>)}</div></section>; }
