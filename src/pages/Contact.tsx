import { useT } from '../i18n';

export function Contact() {
  const { t } = useT();
  return (
    <section className="page">
      <div className="section-eyebrow" style={{ marginBottom: 16 }}><span className="num">—</span>{t.contact.eyebrow}</div>
      <h1 style={{ fontSize: 'clamp(34px,5vw,52px)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 20 }}>{t.contact.title}</h1>
      <p className="lead compact">{t.contact.lead}</p>
      <a className="btn btn-primary inline" href="mailto:info@verto-it.com" style={{ marginTop: 32 }}>
        info@verto-it.com
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </a>
    </section>
  );
}
