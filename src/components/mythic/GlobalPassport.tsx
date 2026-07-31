import type { UniversePassport } from '../../features/universe/types';

export function GlobalPassport({ passport }: { passport: UniversePassport }) {
  return (
    <section className="global-passport">
      <p className="eyebrow">GOAT Passport · Universe Mode</p>
      <h2>{passport.completion}% universe unlocked</h2>
      <div className="global-passport-grid">
        <div><strong>{passport.legends}</strong><span>legends</span></div>
        <div><strong>{passport.sports.length}</strong><span>sports</span></div>
        <div><strong>{passport.moments}</strong><span>moments</span></div>
        <div><strong>{passport.relationships}</strong><span>relationships</span></div>
      </div>
      <p>{passport.eras.join(' · ')}</p>
    </section>
  );
}
