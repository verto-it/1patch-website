import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Community',
    price: 'Free',
    period: '',
    description: 'Self-host under AGPLv3. Full platform, no restrictions — ideal for labs, open-source projects, and contributors.',
    cta: { label: 'Start self-hosting', href: '/self-hosting', primary: false },
    features: [
      'Management server + backend nodes',
      'Unlimited devices and nodes',
      'Full security model (MFA, RBAC, audit log)',
      'Windows (winget) and Linux (apt) agents',
      'Community support via GitHub',
    ],
  },
  {
    name: 'Hosted',
    price: 'Per device',
    period: '/mo',
    description: 'Managed control plane with backups, updates, and monitoring — so your team can focus on fleet operations, not infrastructure.',
    cta: { label: 'Contact us', href: '/contact', primary: true },
    highlight: true,
    features: [
      'Everything in Community',
      'Managed management server',
      'Automatic backups and updates',
      'Uptime monitoring and alerting',
      'Email support with SLA',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    period: '',
    description: 'Volume pricing, deployment support, security review assistance, and dedicated integration help for larger deployments.',
    cta: { label: 'Get in touch', href: '/contact', primary: false },
    features: [
      'Everything in Hosted',
      'Volume device pricing',
      'Deployment and onboarding support',
      'Security review assistance',
      'Custom integrations',
      'Dedicated account management',
    ],
  },
] as const;

export function Pricing() {
  return (
    <section className="page">
      <span className="eyebrow">Pricing</span>
      <h1>Simple pricing</h1>
      <p className="lead compact">
        Start free. Upgrade when you want managed operations or enterprise support.
      </p>
      <div className="grid three" style={{ marginTop: '36px' }}>
        {plans.map((plan) => (
          <article key={plan.name} className={'highlight' in plan && plan.highlight ? 'highlight' : ''}>
            <h2>{plan.name}</h2>
            <div>
              <span className="price">{plan.price}</span>
              {plan.period && <span className="price-period">{plan.period}</span>}
            </div>
            <p style={{ marginTop: '8px', fontSize: '13px', color: 'var(--muted)', lineHeight: '1.65' }}>
              {plan.description}
            </p>
            <Link
              to={plan.cta.href}
              className={plan.cta.primary ? 'btn-primary' : 'btn-secondary'}
              style={{ marginTop: '16px', justifyContent: 'center' }}
            >
              {plan.cta.label}
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
