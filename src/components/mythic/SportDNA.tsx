import type { SportDNA as DNA } from '../../types/legend';
export function SportDNA({ dna }: { dna: DNA }) { return <section className="sport-dna"><div className="section-head"><p className="eyebrow">Sport DNA</p><h2>{dna.code}</h2></div><p>{dna.style}</p><div>{dna.primary.map((p) => <span key={p}>{p}</span>)}</div></section>; }
