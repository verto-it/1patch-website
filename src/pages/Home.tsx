import { useT } from '../i18n';

const githubRepos = [
  ['Management server', 'https://github.com/verto-it/1patch-management-server'],
  ['Client', 'https://github.com/verto-it/1patch-client'],
  ['Backend node', 'https://github.com/verto-it/1patch-backend-node'],
] as const;

const featureIcons = [
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="3" width="15" height="2.5" stroke="currentColor" strokeWidth="1.4"/><rect x="2.5" y="8.5" width="15" height="2.5" stroke="currentColor" strokeWidth="1.4"/><rect x="2.5" y="14" width="15" height="2.5" stroke="currentColor" strokeWidth="1.4"/></svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7h10M5 11h10M5 15h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M3 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.4"/><path d="M10 4v6l4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="3" stroke="currentColor" strokeWidth="1.4"/><rect x="3" y="9" width="14" height="3" stroke="currentColor" strokeWidth="1.4"/><rect x="3" y="14" width="14" height="3" stroke="currentColor" strokeWidth="1.4"/><circle cx="6" cy="5.5" r=".7" fill="currentColor"/><circle cx="6" cy="10.5" r=".7" fill="currentColor"/><circle cx="6" cy="15.5" r=".7" fill="currentColor"/></svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2 4 5v5c0 4 2.5 6.5 6 8 3.5-1.5 6-4 6-8V5l-6-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="m7.5 10 2 2 3.5-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
];

function Arrow() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SectionHead({ num, eyebrow, title, lede }: { num?: string; eyebrow: string; title: string; lede?: string }) {
  return (
    <div className="section-head">
      <div className="section-eyebrow">{num && <span className="num">{num}</span>}{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {lede && <p className="section-lede">{lede}</p>}
    </div>
  );
}

function splitSignal(item: string) {
  const [lead, ...rest] = item.split(' · ');
  return { lead, rest: rest.join(' · ') };
}

export function Home() {
  const { lang, t } = useT();
  const h = t.home;
  const planPrices = lang === 'de' ? ['$0', '€2', 'Sprechen'] : ['$0', '€2', 'Talk'];

  return (
    <>
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <h1 className="headline">
                {h.heroHeadline1}<br />
                {h.heroHeadline2}<br />
                <em>{h.heroHeadlineEm}</em>
              </h1>
              <p className="sub">{h.heroSub}</p>
              <div className="hero-actions">
                <a href="mailto:security@1patch.app" className="btn btn-primary">{h.heroCta1}<Arrow /></a>
                <a href="/#how" className="btn btn-secondary">{h.heroCta2}</a>
              </div>
            </div>

            <figure className="dashboard-preview" aria-label="1Patch management dashboard preview">
              <img src="/demo_1patch.png" alt="1Patch Management dashboard showing fleet overview with patch coverage, alarms, tasks, apps, and devices." />
            </figure>
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="wrap strip-inner">
          {h.stripItems.map((item, idx) => {
            const { lead, rest } = splitSignal(item);
            return (
              <span key={item}>
                <b>{lead}</b>{rest && ` · ${rest}`}
                {idx < h.stripItems.length - 1 && <span className="strip-sep">/</span>}
              </span>
            );
          })}
        </div>
      </div>

      <section className="block" id="why-matters" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <div className="section-eyebrow">{h.whyMattersEyebrow}</div>
            <h2 className="section-title">{h.whyMattersTitle}</h2>
          </div>
          <div className="why-matters-grid">
            {h.whyMattersItems.map(item => (
              <div className="why-matters-item" key={item}>
                <span className="why-matters-mark">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="why-different">
        <div className="wrap">
          <SectionHead num="01" eyebrow={h.whyDiffEyebrow} title={h.whyDiffTitle} lede={h.whyDiffLede} />
          <div className="diff-grid">
            <div className="diff-col diff-col-old">
              <div className="diff-col-head"><span className="diff-label diff-label-old">{h.whyDiffOldHead}</span></div>
              <ul className="diff-list">{h.whyDiffOldItems.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="diff-col diff-col-new">
              <div className="diff-col-head"><span className="diff-label diff-label-new">{h.whyDiffNewHead}</span></div>
              <ul className="diff-list">{h.whyDiffNewItems.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="security" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <SectionHead num="02" eyebrow={h.secEyebrow} title={h.secTitle} lede={h.secLede} />
          <div className="sec-grid">
            {h.secCells.map(cell => (
              <div className="sec-cell" key={cell.tag}>
                <div className="sec-tag">{cell.tag}</div>
                <h3>{cell.title}</h3>
                <p>{cell.body}</p>
                <ul className="sec-list">{cell.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>

          <div className="sec-highlights">
            {h.secHighlights.map(({ title, desc }) => (
              <div className="sec-highlight" key={title}>
                <div className="sec-highlight-tag">✓</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/security" className="btn btn-secondary">{h.secLinkFull}</a>
            <a href="/security/we-tried-to-break-it" className="btn btn-secondary">{h.secLinkRedTeam}</a>
          </div>
        </div>
      </section>

      <section className="block" id="threat-model">
        <div className="wrap">
          <SectionHead num="03" eyebrow={h.threatEyebrow} title={h.threatTitle} lede={h.threatLede} />
          <div className="core-guarantee">
            <div className="core-guarantee-intro">{h.threatGuaranteeIntro}</div>
            <div className="core-guarantee-list">
              {h.threatGuaranteeItems.map(item => (
                <div className="core-guarantee-item" key={item}>
                  <span className="core-guarantee-mark">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="scenario-grid">
            {h.threatScenarios.map((scenario, idx) => (
              <div className="scenario" key={scenario.title}>
                <div className="scenario-threat">{scenario.threat}</div>
                <h3>{scenario.title}</h3>
                <p>{scenario.body}</p>
                <div className="scenario-outcome">
                  <span className={`outcome-badge ${idx === 0 || idx === 3 ? 'outcome-contained' : 'outcome-blocked'}`}>{scenario.badge}</span>
                  <span className="outcome-detail">{scenario.detail}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <a href="/security/we-tried-to-break-it" className="btn btn-secondary">{h.threatAdversarial}</a>
          </div>
        </div>
      </section>

      <section className="block" id="posture" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <SectionHead num="04" eyebrow={h.postureEyebrow} title={h.postureTitle} lede={h.postureLede} />
          <div className="posture-siem-grid">
            <div className="posture-card">
              <div className="posture-card-head">
                <span className="posture-card-label">{h.postureCardLabel}</span>
                <span className="posture-mode-badge">{h.postureMode}</span>
              </div>
              <div className="posture-score-row">
                <div className="posture-score">91<span className="posture-score-denom">/100</span></div>
                <div className="posture-indicators">
                  {h.postureIndicators.map((item, idx) => (
                    <div className="posture-indicator" key={item.label}>
                      <span className="pi-label">{item.label}</span>
                      <span className={`pi-value ${idx === 2 ? 'pi-warn' : 'pi-ok'}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="posture-desc">{h.postureDesc}</p>
            </div>
            <div className="siem-promo-card">
              <div className="siem-promo-head">
                <span className="siem-promo-label">{h.siemPromoLabel}</span>
                <span className="siem-badge">Microsoft Sentinel</span>
              </div>
              <h3>{h.siemPromoTitle}</h3>
              <p>{h.siemPromoBody}</p>
              <div className="siem-channels">
                {h.siemChannels.map(channel => {
                  const [label, detail] = channel.split(' — ');
                  return <div className="siem-channel" key={channel}><b>{label}</b>{detail && ` — ${detail}`}</div>;
                })}
              </div>
              <a href="/security" className="btn btn-secondary" style={{ marginTop: 20, display: 'inline-flex' }}>{h.siemLink}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="features">
        <div className="wrap">
          <SectionHead num="05" eyebrow={h.featEyebrow} title={h.featTitle} lede={h.featLede} />
          <div className="features-grid">
            {h.featItems.map((item, idx) => (
              <div className="feat" key={item.num}>
                <div className="feat-num">{item.num}</div>
                <div className="feat-icon">{featureIcons[idx]}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="how" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <SectionHead num="06" eyebrow={h.howEyebrow} title={h.howTitle} lede={h.howLede} />
          <div className="topology">
            <div className="topo-head">
              <h3>{h.howTopologyHead}</h3>
              <div className="legend">
                <span><span className="swatch sw-ink" />{h.howLegendSigned}</span>
                <span><span className="swatch sw-accent" />{h.howLegendHealthy}</span>
                <span><span className="swatch sw-line" />{h.howLegendPolling}</span>
              </div>
            </div>
            <div className="steps-row">
              {h.howSteps.map(step => (
                <div className="step-item" key={step.n}>
                  <div className="step-n">{step.n}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="enterprise">
        <div className="wrap">
          <SectionHead num="07" eyebrow={h.entEyebrow} title={h.entTitle} lede={h.entLede} />
          <div className="ent-grid">
            {h.entCells.map(cell => (
              <div className="ent-cell" key={cell.tag}>
                <div className="ent-tag">{cell.tag}</div>
                <h3>{cell.title}</h3>
                <p>{cell.body}</p>
                <ul className="ent-list">{cell.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block wtb-promo-section" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
        <div className="wrap">
          <div className="wtb-promo">
            <div className="wtb-promo-content">
              <div className="section-eyebrow" style={{ marginBottom: 20 }}>
                <span className="num" style={{ background: 'var(--danger)', color: 'var(--paper)' }}>⚑</span>
                {h.wtbEyebrow}
              </div>
              <h2 className="wtb-promo-title">{h.wtbTitle}</h2>
              <p className="wtb-promo-sub">{h.wtbSub}</p>
              <a href="/security/we-tried-to-break-it" className="btn btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>
                {h.wtbCta}<Arrow />
              </a>
            </div>
            <div className="wtb-promo-results">
              {h.wtbResults.map((result, idx) => (
                <div className="wtb-result-row" key={result.attack}>
                  <span className="wtb-attack-name">{result.attack}</span>
                  <span className={`result-badge ${idx < 4 ? 'result-blocked' : 'result-delayed'}`}>{result.outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="trust-signals">
            <div>
              <h2>{h.trustTitle} <span>{h.trustTitleEm}</span> {h.trustTitleSuffix}</h2>
              <p>{h.trustBody}</p>
            </div>
            <div className="trust-bullets">
              {h.trustBullets.map(item => (
                <div className="trust-bullet" key={item}>
                  <span className="trust-bullet-mark">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="pricing" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <SectionHead num="08" eyebrow={h.pricingEyebrow} title={h.pricingTitle} lede={h.pricingLede} />
          <div className="price-grid">
            {h.pricingPlans.map((plan, idx) => (
              <div className={`plan ${idx === 1 ? 'featured' : ''}`} key={plan.name}>
                <div className="plan-name">{plan.name}</div>
                <h3>{plan.subtitle}</h3>
                <p className="plan-desc">{plan.desc}</p>
                <div className="plan-price-row">
                  <span className="plan-price">{planPrices[idx]}</span>
                  <span className="plan-unit">{plan.priceNote}</span>
                </div>
                <ul className="plan-list">{plan.items.map(item => <li key={item}>{item}</li>)}</ul>
                <a href={idx === 0 ? githubRepos[0][1] : idx === 1 ? 'mailto:security@1patch.app' : '#contact'} target={idx === 0 ? '_blank' : undefined} rel={idx === 0 ? 'noopener noreferrer' : undefined} className="plan-cta">
                  {plan.cta} <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="downloads">
        <div className="wrap">
          <SectionHead num="09" eyebrow={h.dlEyebrow} title={h.dlTitle} lede={h.dlLede} />
          <div style={{
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius, 4px)',
            padding: '40px 48px',
            background: 'var(--paper)',
            maxWidth: '720px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 600,
                background: 'oklch(72% 0.21 132)', color: 'oklch(20% 0.08 132)',
                padding: '3px 10px', borderRadius: '2px', letterSpacing: '0.04em',
              }}>{h.dlBadge}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--mute)' }}>{h.dlStatusTarget}</span>
            </div>
            <ul style={{ marginTop: 0, display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none' }}>
              {h.dlComponents.map(component => (
                <li key={component.name} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span style={{ color: 'var(--mute-2)', fontFamily: 'var(--mono)', fontSize: '12px', flexShrink: 0 }}>·</span>
                  <span style={{ fontWeight: 600, fontSize: '14px' }}>{component.name}</span>
                  <span style={{ fontSize: '13px', color: 'var(--mute)', fontFamily: 'var(--mono)' }}>{component.detail}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '13px', color: 'var(--mute)', lineHeight: '1.6' }}>{h.dlSecurityNote}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 4 }}>
              <a href={githubRepos[0][1]} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{h.dlGithub}<Arrow /></a>
              {githubRepos.slice(1).map(([label, href]) => (
                <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" key={href}>{label}</a>
              ))}
              <a href="mailto:security@1patch.app" className="btn btn-secondary">{h.dlGetNotified}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="contact" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="cta-block">
            <div>
              <h2>{h.ctaTitle1}<br /><span>{h.ctaTitle2}</span></h2>
              <p>{h.ctaBody}</p>
            </div>
            <div className="cta-actions">
              <a href="mailto:security@1patch.app" className="btn btn-primary">{h.ctaDemo}<Arrow /></a>
              <a href="mailto:security@1patch.app" className="btn btn-secondary">{h.ctaWalkthrough}<Arrow /></a>
              <a href="/security/we-tried-to-break-it" className="btn btn-secondary">{h.ctaBreakIt}<Arrow /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
