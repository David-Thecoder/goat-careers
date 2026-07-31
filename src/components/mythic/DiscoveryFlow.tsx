import { Link } from 'react-router-dom';
import type { Discovery } from '../../types/legend';
export function DiscoveryFlow({ items }: { items: Discovery[] }) { return <section className="discovery"><div className="section-head"><p className="eyebrow">Discovery Flow</p><h2>Continue the universe</h2></div><div className="discovery-grid">{items.map((d) => <Link key={d.slug} to={`/legends/${d.slug}`}><h3>{d.title}</h3><p>{d.reason}</p><span>Open story →</span></Link>)}</div></section>; }
