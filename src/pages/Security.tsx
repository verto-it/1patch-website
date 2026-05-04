import { KeyRound, LockKeyhole, ShieldCheck, Activity, Package, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const layerCards = [
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
    title: 'Signed ledger',
    body: 'Every task bundle issued creates an append-only ledger entry signed by the management server. Clients report applied bundle IDs — discrepancies trigger reconciliation alerts. The ledger cannot be silently modified.',
    tag: { label: 'Append-only · chain-signed', style: { background: 'rgba(34,211,238,.08)', color: 'var(--cyan)' } },
  },
  {
    Icon: Package,
    iconStyle: { background: 'rgba(52,211,153,.08)', color: 'var(--green)' },
    title: 'Package integrity',
    body: 'SHA-256 verified on upload and again before execution on the client. MSI support requires code signatures and controlled argument allow-lists. Patch actions are limited to allow-listed provider operations — no arbitrary execution.',
    tag: { label: 'SHA-256 · signed payloads', style: { background: 'rgba(52,211,153,.08)', color: 'var(--green)' } },
  },
] as const;

export function Security() {
  return (
    <div className="page">
      <span className="eyebrow-page">Security model</span>
      <h1>Security</h1>
      <p className="lead compact">
        Layered throughout the stack — from identity and transport through to the signed task
        bundles that execute on managed machines. Report vulnerabilities privately to{' '}
        <a href="mailto:security@1patch.app" style={{ color: 'var(--cyan)', fontWeight: 500 }}>
          security@1patch.app
        </a>.
      </p>

      {/* ── Architecture Overview ──────────────────────── */}
      <section className="arch-section">
        <h2>Architecture overview</h2>
        <p>
          1Patch separates the control plane (management server) from execution paths (backend nodes
          and clients). No component has unilateral power to execute arbitrary actions. Every
          operation crosses multiple verification boundaries.
        </p>
        <div className="trust-boundary-grid">
          <div className="tb-cell">
            <div className="tb-label">Layer 1</div>
            <h3>Management server</h3>
            <p>
              Central control plane. Holds policy, audit log, and task queue. Issues signed task
              bundles via HashiCorp Vault — cannot act directly on endpoints.
            </p>
            <ul className="tb-props">
              <li>Postgres + Vault backend</li>
              <li>ES256 signing via Vault PKI</li>
              <li>Append-only signed ledger</li>
              <li>MFA-gated admin actions</li>
              <li>Delay window enforcement</li>
            </ul>
          </div>
          <div className="tb-cell">
            <div className="tb-label">Layer 2</div>
            <h3>Backend nodes</h3>
            <p>
              Stateless relays per site or region. Cache and distribute signed bundles. Authenticated
              to the management server via short-lived mTLS certificates — no signing authority.
            </p>
            <ul className="tb-props">
              <li>mTLS client cert (24 h TTL, Vault-issued)</li>
              <li>Cannot sign task bundles</li>
              <li>Operates offline (caches last bundle set)</li>
              <li>Clients detect forged responses</li>
              <li>Automatic failover across nodes</li>
            </ul>
          </div>
          <div className="tb-cell">
            <div className="tb-label">Layer 3</div>
            <h3>Clients (endpoints)</h3>
            <p>
              Each device holds a unique EC P-256 identity. Verifies every payload against the
              pinned management server public key before executing any task — regardless of which
              node delivered it.
            </p>
            <ul className="tb-props">
              <li>Per-device EC P-256 key pair</li>
              <li>ES256 signature verification on all bundles</li>
              <li>Sequence number + replay protection</li>
              <li>Reports applied bundle IDs to server</li>
              <li>Outbound-only HTTPS polling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Key Concepts ──────────────────────────────── */}
      <section className="arch-section">
        <h2>Key security concepts</h2>
        <p>
          These are the mechanisms that make the trust model work — not policy statements,
          but concrete technical controls.
        </p>
        <div className="concept-list">
          {[
            ['Signed task execution', 'ES256 / Vault PKI', 'Every task bundle is signed by the management server\'s signing key held in HashiCorp Vault. Clients verify the signature locally before executing. A task without a valid signature is silently rejected — the node that delivered it has no way to forge one.'],
            ['mTLS node identity', 'EC P-256 · 24 h TTL', 'Each backend node receives a unique EC P-256 mTLS client certificate from Vault PKI, valid for 24 hours and auto-renewed. The management server mutually authenticates every node connection. A compromised or revoked node cannot masquerade as a legitimate one.'],
            ['Signed ledger', 'Append-only · chain-signed', 'Every task bundle issued creates an immutable, chain-signed ledger entry. Omissions are detectable — a bundle that was issued but not in the ledger indicates tampering. Clients cross-report applied bundle IDs for reconciliation.'],
            ['Delayed execution', 'Configurable window', 'Fleet-wide tasks are held in a pending state for a configurable delay window before clients act. This window gives operators time to detect, review, and cancel a compromised action. The kill switch can halt all pending execution fleet-wide instantly.'],
            ['Kill switch', 'Immediate halt', 'A single privileged action suspends all pending task execution across the entire fleet. MFA-gated. Clients check kill switch state on every poll cycle. Designed for containment when a compromise is detected.'],
            ['SIEM integration', 'Sentinel · webhook · syslog', '1Patch integrates directly into your SIEM — including Microsoft Sentinel — via structured webhook and syslog export. Every critical action, anomaly, and verification failure generates a security event. Your SOC sees what 1Patch sees, in real time.'],
          ].map(([name, code, desc]) => (
            <div className="concept-item" key={name}>
              <div className="concept-key">
                <h3>{name}</h3>
                <code>{code}</code>
              </div>
              <div className="concept-val">
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Layer by Layer ────────────────────────────── */}
      <section className="arch-section">
        <h2>Layer by layer</h2>
        <p>Each layer of the stack applies independent controls — compromise at one layer does not cascade unconditionally to the next.</p>
        <div className="security-grid">
          {layerCards.map((card) => (
            <div key={card.title} className="security-card">
              <div style={{
                width: 34, height: 34, borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 14,
                ...card.iconStyle,
              }}>
                <card.Icon size={16} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <div className="security-tag" style={{ ...card.tag.style, marginTop: 14 }}>{card.tag.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SIEM Integration ──────────────────────────── */}
      <section className="arch-section">
        <h2>SIEM integration</h2>
        <p>
          Every critical action in 1Patch emits a structured security event. Your SOC sees
          the same signal 1Patch does — in real time, independent of the management UI.
        </p>
        <div className="siem-block">
          <div>
            <h3>Microsoft Sentinel and beyond</h3>
            <p>
              1Patch integrates directly into your SIEM, including Microsoft Sentinel, allowing
              your SOC to monitor, detect, and respond to every critical action across the fleet.
              Events are forwarded via structured webhook or syslog export with consistent,
              machine-readable schemas.
            </p>
            <p style={{ marginTop: 14 }}>
              Events include: task bundle issuance, client verification failures, replay detection,
              kill switch activation, large-scope task creation, impossible-travel flags, admin
              MFA failures, and node enrollment anomalies.
            </p>
            <div className="siem-tags" style={{ marginTop: 18 }}>
              {['Microsoft Sentinel', 'Webhook export', 'Syslog (RFC 5424)', 'Structured JSON events', 'Real-time forwarding', 'SOC-ready schemas'].map(t => (
                <span className="siem-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
          <span className="siem-badge">SIEM ready</span>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <div className="security-page-cta">
        <div>
          <h2>See how 1Patch behaves under attack</h2>
          <p>Read the red-team report or request a technical walkthrough with the team.</p>
        </div>
        <div className="security-page-cta-actions">
          <Link to="/security/we-tried-to-break-it" className="btn btn-primary">
            We tried to break it
            <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a href="mailto:security@1patch.app" className="btn btn-secondary">
            Request a security demo
          </a>
        </div>
      </div>
    </div>
  );
}
