import { CheckCircle2, Server, Boxes, ShieldCheck } from 'lucide-react';

const categories = [
  {
    icon: Server,
    iconClass: 'icon-blue',
    label: 'Fleet management',
    features: [
      'App catalog with search, filters, oldest installed version, and newest available version.',
      'Device-level app details with update-one and update-all workflows.',
      'Rule builder matching on app name, manufacturer, GUID, and package ID.',
      'Windows winget, Chocolatey, and Scoop support; Linux dpkg/apt on Debian/Ubuntu; MSI direct install with SHA-256 verification.',
    ],
  },
  {
    icon: Boxes,
    iconClass: 'icon-green',
    label: 'Resilient infrastructure',
    features: [
      'Backend nodes cache rules and queue device data while management is offline.',
      'Deploy a node per site, region, or customer network — scale horizontally.',
      'Clients discover the nearest healthy node at startup and fail over automatically.',
      'Event queue persists locally on each node and syncs when management reconnects.',
    ],
  },
  {
    icon: ShieldCheck,
    iconClass: 'icon-purple',
    label: 'Security',
    features: [
      'Standalone auth with MFA (TOTP), recovery codes, brute-force lockout, and session tracking.',
      'RBAC with role-based access control and impossible-travel review.',
      'ES256-signed bootstrap manifests, rule bundles, and task bundles — verified before execution.',
      'Vault-issued mTLS certificates (EC P-256, 24 h TTL) for all node ↔ management traffic.',
      'Per-device EC P-256 key pair, bcrypt-hashed enrollment tokens, SHA-256 package verification.',
      'Append-only audit log covering all privileged actions.',
    ],
  },
] as const;

/**
 * Renders the features UI.
 * @returns The result produced by the operation.
 */
export function Features() {
  return (
    <section className="page">
      <span className="eyebrow">Platform</span>
      <h1>Features</h1>
      <p className="lead compact">
        Everything you need to manage patches across a distributed fleet,
        with security and resilience built in from day one.
      </p>

      {categories.map(({ icon: Icon, iconClass, label, features }) => (
        <div key={label} className="feature-category">
          <div className="category-label">
            <div className={`category-icon ${iconClass}`}><Icon size={14} /></div>
            <h2>{label}</h2>
          </div>
          <div className="feature-list">
            {features.map((f) => (
              <div key={f}>
                <CheckCircle2 size={15} />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
