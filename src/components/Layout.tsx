import { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useT } from '../i18n';

const githubRepos = [
  ['Management server', 'https://github.com/verto-it/1patch-management-server'],
  ['Client', 'https://github.com/verto-it/1patch-client'],
  ['Backend node', 'https://github.com/verto-it/1patch-backend-node'],
] as const;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function LangToggle() {
  const { lang, setLang } = useT();
  const nextLang = lang === 'en' ? 'de' : 'en';

  return (
    <button
      onClick={() => setLang(nextLang)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30px',
        height: '30px',
        flex: '0 0 30px',
        fontSize: '18px',
        lineHeight: 1,
        background: 'transparent',
        border: 0,
        borderRadius: '4px',
        padding: 0,
        cursor: 'pointer',
        transition: 'background-color 160ms ease, transform 160ms ease',
      }}
      aria-label={`Switch to ${nextLang === 'de' ? 'German' : 'English'}`}
      title={`Switch to ${nextLang === 'de' ? 'German' : 'English'}`}
    >
      {nextLang === 'de' ? '🇩🇪' : '🇬🇧'}
    </button>
  );
}

export function Layout() {
  const { t } = useT();
  return (
    <div className="app-shell">
      <div style={{
        background: 'oklch(72% 0.21 132)',
        color: 'oklch(20% 0.08 132)',
        textAlign: 'center' as const,
        padding: '9px 16px',
        fontSize: '13px',
        fontWeight: '500',
        lineHeight: '1.5',
      }}>
        {t.layout.devBannerText}{' '}
        <a
          href={githubRepos[0][1]}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 700, textDecoration: 'underline', color: 'inherit' }}
        >
          {t.layout.devBannerLink}
        </a>
      </div>
      <header className="site-header">
        <div className="wrap nav-inner">
          <a href="/#top" className="brand">
            <img src="/logo.png" alt="1Patch" className="brand-logo" />
            <span className="brand-name"><b>1Patch</b></span>
          </a>
          <div className="nav-links">
            <a href="/#features">{t.layout.navFeatures}</a>
            <a href="/#how">{t.layout.navHowItWorks}</a>
            <Link to="/setup-guide">{t.layout.navSetup}</Link>
            <Link to="/rules">{t.layout.navRules}</Link>
            <Link to="/security">{t.layout.navSecurity}</Link>
            <a href="/#pricing">{t.layout.navPricing}</a>
            <a href="/#downloads">
              {t.layout.navDownloads}{' '}
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', opacity: 0.6 }}>{t.layout.navDownloadsSoon}</span>
            </a>
            <LangToggle />
            <a href="mailto:security@1patch.app" className="nav-cta">
              <span className="nav-dot" />
              <span>{t.layout.navSecurityDemo}</span>
            </a>
          </div>
        </div>
      </header>
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="brand">
                <img src="/logo.png" alt="1Patch" className="brand-logo" />
                <span className="brand-name"><b>1Patch</b></span>
                <span className="brand-tag">{t.layout.footerTagline}</span>
              </div>
              <p>{t.layout.footerDescription}</p>
            </div>
            <div className="foot-col">
              <h5>{t.layout.footerProductTitle}</h5>
              <ul>
                <li><a href="/#features">{t.layout.footerProductLinks[0]}</a></li>
                <li><a href="/#how">{t.layout.footerProductLinks[1]}</a></li>
                <li><a href="/#pricing">{t.layout.footerProductLinks[2]}</a></li>
                <li><a href="/#downloads">{t.layout.footerProductLinks[3]}</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>{t.layout.footerSecurityTitle}</h5>
              <ul>
                <li><Link to="/security">{t.layout.footerSecurityLinks[0]}</Link></li>
                <li><Link to="/security/we-tried-to-break-it">{t.layout.footerSecurityLinks[1]}</Link></li>
                <li><a href="mailto:security@1patch.app">{t.layout.footerSecurityLinks[2]}</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>{t.layout.footerResourcesTitle}</h5>
              <ul>
                <li><Link to="/setup-guide">{t.layout.footerResourcesLinks[0]}</Link></li>
                <li><a href="#">{t.layout.footerResourcesLinks[1]}</a></li>
                <li><a href="#">{t.layout.footerResourcesLinks[2]}</a></li>
                <li><a href="#">{t.layout.footerResourcesLinks[3]}</a></li>
                <li><a href={githubRepos[0][1]} target="_blank" rel="noopener noreferrer">{t.layout.footerResourcesLinks[4]}</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>{t.layout.footerCompanyTitle}</h5>
              <ul>
                <li><Link to="/contact">{t.layout.footerCompanyLinks[0]}</Link></li>
                <li><Link to="/privacy">{t.layout.footerCompanyLinks[1]}</Link></li>
                <li><Link to="/terms">{t.layout.footerCompanyLinks[2]}</Link></li>
                <li><Link to="/imprint">{t.layout.footerCompanyLinks[3]}</Link></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>{t.layout.footerCopyright}</span>
            <div className="foot-links">
              {githubRepos.map(([label, href]) => (
                <a href={href} target="_blank" rel="noopener noreferrer" key={href}>{label}</a>
              ))}
              <a href="#">status</a>
              <a href="#">rss</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
