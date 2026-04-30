import { Outlet, Link, NavLink } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const nav = [
  ['Features', '/features'],
  ['Pricing', '/pricing'],
  ['Self-hosting', '/self-hosting'],
  ['Security', '/security'],
  ['Downloads', '/downloads'],
] as const;

export function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="brand">
          <ShieldCheck aria-hidden />
          <span>1Patch</span>
        </Link>
        <nav>
          {nav.map(([label, href]) => (
            <NavLink key={href} to={href}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link className="header-action" to="/contact">Contact</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <span>1Patch is AGPLv3 open-source patch management.</span>
        <div>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/imprint">Imprint</Link>
        </div>
      </footer>
    </div>
  );
}
