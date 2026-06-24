import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n';

export function Pricing() {
  const { t } = useT();
  const hrefs = ['/self-hosting', '/contact', '/contact'];
  const primaries = [false, true, false];
  return (
    <section className="page">
      <span className="eyebrow">{t.pricing.eyebrow}</span>
      <h1>{t.pricing.title}</h1>
      <p className="lead compact">{t.pricing.lede}</p>
      <div className="grid three" style={{ marginTop: '36px' }}>
        {t.pricing.plans.map((plan, idx) => (
          <article key={plan.name} className={primaries[idx] ? 'highlight' : ''}>
            <h2>{plan.name}</h2>
            <div>
              <span className="price">{plan.price}</span>
              {plan.period && <span className="price-period">{plan.period}</span>}
            </div>
            <p style={{ marginTop: '8px', fontSize: '13px', color: 'var(--muted)', lineHeight: '1.65' }}>
              {plan.desc}
            </p>
            <Link
              to={hrefs[idx]}
              className={primaries[idx] ? 'btn-primary' : 'btn-secondary'}
              style={{ marginTop: '16px', justifyContent: 'center' }}
            >
              {plan.cta}
            </Link>
            <ul className="pricing-features">
              {plan.features.map((f) => (
                <li key={f}>
                  <CheckCircle2 size={13} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
