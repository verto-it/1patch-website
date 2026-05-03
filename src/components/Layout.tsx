import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="wrap nav-inner">
          <a href="/#top" className="brand">
            <div className="brand-mark">1</div>
            <span className="brand-name"><b>1Patch</b></span>
            <span className="brand-tag">v0.9 · AGPL-3.0</span>
          </a>
          <div className="nav-links">
            <a href="/#features">Features</a>
            <a href="/#how">How it works</a>
            <a href="/#security">Security</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#downloads">Downloads</a>
            <a href="/#contact" className="nav-cta">
              <span className="nav-dot" />
              Get hosted
            </a>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="brand">
                <div className="brand-mark">1</div>
                <span className="brand-name"><b>1Patch</b></span>
                <span className="brand-tag">v0.9 · AGPL-3.0</span>
              </div>
              <p>Open-source patch management for Windows and Linux fleets. Built by Verto-IT, used by teams that can't afford downtime.</p>
            </div>
            <div className="foot-col">
              <h5>Product</h5>
              <ul>
                <li><a href="/#features">Features</a></li>
                <li><a href="/#how">How it works</a></li>
                <li><a href="/#pricing">Pricing</a></li>
                <li><a href="/#downloads">Downloads</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Resources</h5>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Changelog</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="https://github.com/Verto-It/1Patch" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Company</h5>
              <ul>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/terms">Terms</Link></li>
                <li><Link to="/imprint">Imprint</Link></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Verto-IT GmbH · 1Patch is licensed AGPL-3.0-only</span>
            <div className="foot-links">
              <a href="https://github.com/Verto-It/1Patch" target="_blank" rel="noopener noreferrer">github.com/verto-it/1patch</a>
              <a href="#">status</a>
              <a href="#">rss</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
