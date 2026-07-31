import { Link, Outlet } from 'react-router-dom';
import { Menu } from '../ui/Menu';
import { useLegends } from '../../features/legends/hooks/useLegends';
import { AuthControls } from '../../features/auth/AuthControls';

export function Layout() {
  const { data: legends = [] } = useLegends();
  return (
    <div className="site">
      <header className="topbar">
        <Link to="/" className="brand">GOAT<span>Careers</span></Link>
        <nav className="topnav" aria-label="Primary navigation">
          <Link to="/universe">Universe</Link>
          <Menu label="Legends">{legends.map((legend) => <Link key={legend.slug} to={`/legends/${legend.slug}`}>{legend.shortName}</Link>)}</Menu>
          <AuthControls />
        </nav>
      </header>
      <main><Outlet /></main>
      <footer><span>GOAT Careers V1</span><span>Founding Five connected universe · Step 3</span></footer>
    </div>
  );
}
