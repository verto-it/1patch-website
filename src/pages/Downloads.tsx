import { useT } from '../i18n';

const githubRepos = [
  ['Management server', 'https://github.com/verto-it/1patch-management-server'],
  ['Client', 'https://github.com/verto-it/1patch-client'],
  ['Backend node', 'https://github.com/verto-it/1patch-backend-node'],
] as const;

export function Downloads() {
  const { t } = useT();
  return (
    <section className="page">
      <span className="eyebrow">{t.downloads.eyebrow}</span>
      <h1>{t.downloads.title}</h1>

      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        marginTop: 16, marginBottom: 28,
        background: 'oklch(72% 0.21 132)', color: 'oklch(20% 0.08 132)',
        padding: '6px 14px', borderRadius: '2px',
        fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em',
      }}>
        {t.downloads.badge}
      </div>

      <p className="lead compact">{t.downloads.intro}</p>

      <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column' as const, gap: 32, maxWidth: 640 }}>
        {[
          { label: t.downloads.windowsLabel, detail: t.downloads.windowsDetail, cmd: 'dotnet publish -c Release \\\n  -r win-x64 --self-contained' },
          { label: t.downloads.linuxLabel, detail: t.downloads.linuxDetail, cmd: 'dotnet publish -c Release \\\n  -r linux-x64 --self-contained' },
        ].map(({ label, detail, cmd }) => (
          <div key={label} style={{
            border: '1px solid var(--line)', borderRadius: 'var(--radius, 4px)',
            padding: '24px 28px', background: 'var(--paper)',
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700 }}>{label}</h3>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--mute)' }}>{detail}</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--mute)', marginBottom: 14 }}>
              {t.downloads.buildFromSource}
            </p>
            <code style={{
              display: 'block',
              fontFamily: 'var(--mono)', fontSize: '12px',
              background: 'var(--ink)', color: 'oklch(72% 0.21 132)',
              padding: '12px 16px', borderRadius: '2px',
              whiteSpace: 'pre', lineHeight: '1.9',
            }}>
              {cmd}
            </code>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
        {githubRepos.map(([label, href], index) => (
          <a href={href} target="_blank" rel="noopener noreferrer" className={index === 0 ? 'btn btn-primary' : 'btn btn-secondary'} key={href}>
            {index === 0 ? t.downloads.github : label}
            {index === 0 && <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </a>
        ))}
        <a href="mailto:security@1patch.app" className="btn btn-secondary">
          {t.downloads.getNotified}
        </a>
      </div>
    </section>
  );
}
