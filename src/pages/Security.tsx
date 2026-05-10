import { KeyRound, LockKeyhole, ShieldCheck, Activity, Package, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const layerCards = [
  {
    Icon: Users,
    iconStyle: { background: 'rgba(34,211,238,.08)', color: 'var(--cyan)' },
    title: 'Identity & access',
    body: 'Passwords are bcrypt-hashed at cost 12 and must be at least 12 characters with uppercase, lowercase, and numeric characters. Sessions are 8-hour JWTs. Failed password attempts lock accounts after 5 tries for 15 minutes. TOTP MFA is supported for login and used for fresh task-signing approvals when tenant policy requires it.',
    tag: { label: 'bcrypt · JWT · RBAC · TOTP', style: { background: 'rgba(34,211,238,.08)', color: 'var(--cyan)' } },
  },
  {
    Icon: LockKeyhole,
    iconStyle: { background: 'rgba(167,139,250,.08)', color: 'var(--purple)' },
    title: 'Transport security',
    body: 'In production the management server runs HTTPS and requires backend nodes to present a Vault-issued client certificate on node-facing routes. Clients and nodes use configured HTTPS URLs; local development can run over plain HTTP with explicit warnings and production-only fallbacks disabled.',
    tag: { label: 'HTTPS · node mTLS', style: { background: 'rgba(167,139,250,.08)', color: 'var(--purple)' } },
  },
  {
    Icon: KeyRound,
    iconStyle: { background: 'rgba(251,191,36,.08)', color: 'var(--amber)' },
    title: 'Node authentication',
    body: 'Backend node enrollment tokens are bcrypt-hashed, one-time use, and expire after 24 hours. After registration, Vault issues each node a 24-hour EC P-256 mTLS certificate that the node renews before expiry. Node decommissioning uses a unique per-node token and revokes the Vault certificate.',
    tag: { label: 'Vault PKI · one-time enrollment', style: { background: 'rgba(251,191,36,.08)', color: 'var(--amber)' } },
  },
  {
    Icon: ShieldCheck,
    iconStyle: { background: 'rgba(52,211,153,.08)', color: 'var(--green)' },
    title: 'Client security',
    body: 'Each client generates a hardware-derived device ID and EC P-256 key pair. After enrollment, every client-to-node request is ES256-signed with a five-minute timestamp window. Clients pin scoped management public keys and verify bootstrap manifests, kill-switch state, task ledgers, and executable task bundles locally.',
    tag: { label: 'per-device keys · signed requests', style: { background: 'rgba(52,211,153,.08)', color: 'var(--green)' } },
  },
  {
    Icon: Activity,
    iconStyle: { background: 'rgba(34,211,238,.08)', color: 'var(--cyan)' },
    title: 'Task authorization',
    body: 'Tasks move from draft to security scan, MFA-backed approval, signing, delay window, and executable state. Each executable task carries a signed task_ledger entry with the task hash, approvals, risk score, not-before time, expiry, and dashboard visibility flag. Clients reject hidden, revoked, expired, unsigned, or modified tasks.',
    tag: { label: 'security scan · signed ledger', style: { background: 'rgba(34,211,238,.08)', color: 'var(--cyan)' } },
  },
  {
    Icon: Package,
    iconStyle: { background: 'rgba(52,211,153,.08)', color: 'var(--green)' },
    title: 'Package integrity',
    body: 'Downloadable packages require SHA-256 metadata. Uploaded files are hashed server-side, and clients re-hash downloads before execution. MSI arguments are allowlisted, winget/apt/package commands are invoked without shell interpolation, and executable task types are limited to update_package and refresh_inventory.',
    tag: { label: 'SHA-256 · allowlisted execution', style: { background: 'rgba(52,211,153,.08)', color: 'var(--green)' } },
  },
] as const;

/**
 * Renders the security UI.
 * @returns The result produced by the operation.
 */
export function Security() {
  return (
    <div className="page">
      <span className="eyebrow-page">Security model</span>
      <h1>Security</h1>
      <p className="lead compact">
        Security in 1Patch is mostly about making patch execution hard to forge, hard to hide,
        and easy to stop. The management server signs what is allowed, backend nodes relay signed
        envelopes, and clients verify the final task locally before doing anything. Report
        vulnerabilities privately to{' '}
        <a href="mailto:security@1patch.app" style={{ color: 'var(--cyan)', fontWeight: 500 }}>
          security@1patch.app
        </a>.
      </p>

      {/* ── Architecture Overview ──────────────────────── */}
      <section className="arch-section">
        <h2>Architecture overview</h2>
        <p>
          1Patch separates the control plane (management server) from execution paths (backend nodes
          and clients). Backend nodes are durable relays, not authorities: they cache and forward
          signed work, while clients decide locally whether a task is trustworthy enough to run.
        </p>
        <div className="trust-boundary-grid">
          <div className="tb-cell">
            <div className="tb-label">Layer 1</div>
            <h3>Management server</h3>
            <p>
              Central control plane. Holds users, RBAC policy, packages, rules, node registry,
              task state, audit events, SIEM configuration, and scoped ES256 management signing
              keys.
            </p>
            <ul className="tb-props">
              <li>JWT auth, RBAC, bcrypt password hashes</li>
              <li>Scoped ES256 signing keys per payload class</li>
              <li>Vault PKI for backend node certificates</li>
              <li>Security scan, approval, signing, delay workflow</li>
              <li>Hash-chained audit log and SIEM pipeline</li>
            </ul>
          </div>
          <div className="tb-cell">
            <div className="tb-label">Layer 2</div>
            <h3>Backend nodes</h3>
            <p>
              Site or region relays with a local Dragonfly queue. Nodes authenticate to management
              with short-lived mTLS certificates, pull signed task bundles, cache packages, and
              forward device events when the control plane is reachable.
            </p>
            <ul className="tb-props">
              <li>Vault-issued mTLS client cert, 24 h TTL</li>
              <li>Cannot sign task bundles</li>
              <li>Durable offline event queue</li>
              <li>Refuses bundles without active visible ledgers</li>
              <li>Relays signed kill-switch state to clients</li>
            </ul>
          </div>
          <div className="tb-cell">
            <div className="tb-label">Layer 3</div>
            <h3>Clients (endpoints)</h3>
            <p>
              Endpoint worker service. Generates its own EC P-256 device identity, signs
              post-enrollment requests to backend nodes, and verifies management-signed payloads
              before execution.
            </p>
            <ul className="tb-props">
              <li>Per-device EC P-256 key pair</li>
              <li>ES256 verification with scoped pinned keys</li>
              <li>Task ledger, hash, expiry, and not-before checks</li>
              <li>Trusted download origin and SHA-256 checks</li>
              <li>Fails closed if kill-switch state cannot be verified</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Key Concepts ──────────────────────────────── */}
      <section className="arch-section">
        <h2>Key security concepts</h2>
        <p>
          These are the mechanisms the current code enforces. Some hardening choices, such as
          externalizing signing keys from environment configuration, are surfaced by the posture
          dashboard as enterprise-readiness findings.
        </p>
        <div className="concept-list">
          {[
            ['Scoped signing keys', 'ES256 · one scope per payload', 'Production requires active ES256 signing metadata for bootstrap_manifest, rule_bundle, task_bundle, task_ledger, kill_switch, and recovery_task. Wildcard signing keys, dev keys, missing metadata, duplicate active keys, and shared active key material are rejected or reported as posture findings.'],
            ['mTLS node identity', 'Vault PKI · 24 h TTL', 'Each backend node registers once with a hashed enrollment token, then receives a Vault-issued EC P-256 client certificate. Management node endpoints authenticate the TLS peer certificate and extract the nodeId from the certificate CN. Renewal happens before expiry, and decommissioning revokes the cert.'],
            ['Signed task ledger', 'task_ledger scope', 'A task can only become executable after security scan and approval. Signing creates a ledger entry with taskHash, approvals, risk score, notBefore, expiresAt, and visibleInDashboard=true. Backend nodes and clients reject bundles with missing, hidden, revoked, expired, or invalid ledgers.'],
            ['Client-side final gate', 'pinned scoped keys', 'The client verifies the task_bundle signature, payload hash, tenant, expiry, ledger signature, ledger hash, taskHash, notBefore, allowed source host, and SHA-256 package hash before execution. Tinfoil mode also requires at least two approvals.'],
            ['Kill switch', 'signed stop state', 'The management server signs kill-switch state with the kill_switch scope. Backend nodes cache and relay it; clients verify it each cycle and skip execution when active. If a client cannot verify kill-switch state, it fails closed for that task cycle.'],
            ['Security posture', 'checks · safe fixes', 'The dashboard scores tenant readiness across task security, signing keys, nodes, admin MFA, audit integrity, SIEM, policy, and kill switch. Safe fixes can enable MFA-backed task approval and enforce the minimum execution delay; critical fixes remain manual.'],
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
        <p>Each layer applies controls the next layer can independently verify. A relay compromise should not be enough to forge executable work.</p>
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
          1Patch emits structured operational security events through a non-blocking SIEM
          pipeline. Export failures are retried and moved to a dead-letter queue without blocking
          authentication, task execution, or node operations.
        </p>
        <div className="siem-block">
          <div>
            <h3>Microsoft Sentinel and beyond</h3>
            <p>
              Events are queued in Dragonfly, persisted in PostgreSQL, hash-chained, filtered by
              tenant SIEM mode, and exported to Webhook, Syslog, or Microsoft Sentinel. Webhook
              exports can include an HMAC signature; Syslog uses RFC 5424 severity mapping; Sentinel
              uses the Azure Log Analytics HTTP Data Collector API.
            </p>
            <p style={{ marginTop: 14 }}>
              Current events include: authentication success and failure, MFA success and failure,
              node registration and certificate issuance, task creation, security scan completion,
              high-risk task detection, task approval, task signing, task revocation, and kill-switch
              activation or deactivation.
            </p>
            <div className="siem-tags" style={{ marginTop: 18 }}>
              {['Microsoft Sentinel', 'Webhook export', 'Syslog (RFC 5424)', 'Hash-chained events', 'Retry + DLQ', 'Mode-based filtering'].map(t => (
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
          <h2>See how the trust boundaries behave under attack</h2>
          <p>Read the breakage notes or request a technical walkthrough with the team.</p>
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
