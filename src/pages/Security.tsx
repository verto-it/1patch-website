import { KeyRound, LockKeyhole, ShieldCheck, Activity, Package, Users } from 'lucide-react';

const cards = [
  {
    Icon: Users,
    iconStyle: { background: 'rgba(34,211,238,.08)', color: 'var(--cyan)' },
    title: 'Identity & access',
    body: 'bcrypt (cost 12), minimum 16-char passwords with complexity requirements. TOTP MFA required for owner and admin. Brute-force lockout, recovery codes, session tracking, impossible-travel review.',
    tag: { label: 'bcrypt · TOTP · RBAC', style: { background: 'rgba(34,211,238,.08)', color: 'var(--cyan)' } },
  },
  {
    Icon: LockKeyhole,
    iconStyle: { background: 'rgba(167,139,250,.08)', color: 'var(--purple)' },
    title: 'Transport security',
    body: 'HTTPS everywhere. mTLS enforced on every backend node ↔ management connection. Clients connect to backend nodes over HTTPS with manifest-pinned certificates.',
    tag: { label: 'HTTPS · mTLS everywhere', style: { background: 'rgba(167,139,250,.08)', color: 'var(--purple)' } },
  },
  {
    Icon: KeyRound,
    iconStyle: { background: 'rgba(251,191,36,.08)', color: 'var(--amber)' },
    title: 'Node authentication',
    body: 'HashiCorp Vault issues EC P-256 mTLS client certificates for each backend node (24 h TTL, auto-renewed). Root CA private key never leaves Vault. One-time enrollment token — no shared secret after registration.',
    tag: { label: 'Vault PKI · EC P-256 · 24 h TTL', style: { background: 'rgba(251,191,36,.08)', color: 'var(--amber)' } },
  },
  {
    Icon: ShieldCheck,
    iconStyle: { background: 'rgba(52,211,153,.08)', color: 'var(--green)' },
    title: 'Client security',
    body: 'Each device gets a unique EC P-256 key pair at enrollment. Bootstrap manifests, rule bundles, and task bundles are ES256-signed by the management server. Clients pin the public key and verify all payloads before execution.',
    tag: { label: 'ES256-signed · per-device keys', style: { background: 'rgba(52,211,153,.08)', color: 'var(--green)' } },
  },
  {
    Icon: Activity,
    iconStyle: { background: 'rgba(34,211,238,.08)', color: 'var(--cyan)' },
    title: 'Audit log',
    body: 'All privileged actions — user creation, role changes, node enrollment, package uploads, rule changes — create immutable audit events available for review, alerting, and compliance workflows.',
    tag: { label: 'Append-only · all actions', style: { background: 'rgba(34,211,238,.08)', color: 'var(--cyan)' } },
  },
  {
    Icon: Package,
    iconStyle: { background: 'rgba(52,211,153,.08)', color: 'var(--green)' },
    title: 'Package integrity',
    body: 'SHA-256 verified on upload and again before execution on the client. MSI support will require code signatures and controlled argument allow-lists. Patch actions are limited to allow-listed provider operations.',
    tag: { label: 'SHA-256 · signed payloads', style: { background: 'rgba(52,211,153,.08)', color: 'var(--green)' } },
  },
] as const;

export function Security() {
  return (
    <section className="page">
      <span className="eyebrow">Security model</span>
      <h1>Security</h1>
      <p className="lead compact">
        Layered throughout the stack — from identity and transport through to the signed task bundles
        that execute on managed machines.{' '}
        Report vulnerabilities privately to{' '}
        <a href="mailto:security@1patch.app" style={{ color: 'var(--cyan)', fontWeight: 500 }}>
          security@1patch.app
        </a>.
      </p>

      <div className="security-grid">
        {cards.map((card) => (
          <div key={card.title} className="security-card">
            <div style={{
              width: 34, height: 34, borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              ...card.iconStyle,
            }}>
              <card.Icon size={16} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
            <div className="security-tag" style={card.tag.style}>{card.tag.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
