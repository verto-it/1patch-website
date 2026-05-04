import { Link } from 'react-router-dom';

const scenarios = [
  {
    id: '1',
    title: 'Malicious task injection via compromised management server',
    attack: 'Attacker attempts to push a task bundle to client devices without going through normal approval flow, using direct database access on the compromised management server.',
    normally: 'In most systems, a compromised management server means full control over all endpoints. Commands execute silently on every managed device.',
    reactions: [
      'Task bundles require a valid ES256 signature from the signing key — raw database writes produce unsigned bundles.',
      'Clients verify the signature before executing any task. Unsigned or tampered bundles are rejected silently.',
      'The signed ledger records every task bundle issued — attempts to forge history fail cryptographic verification.',
      'SIEM alert triggers on any client that receives a bundle it cannot verify.',
    ],
    resultType: 'blocked' as const,
    result: 'No task executes. Clients reject unsigned bundles. Verification failures are logged and forwarded to SIEM.',
  },
  {
    id: '2',
    title: 'Backend node forging task bundles',
    attack: 'A compromised backend node attempts to serve modified task bundles to client devices within its site — substituting legitimate tasks with attacker-controlled commands.',
    normally: 'In a hub-and-spoke model without end-to-end signing, a compromised relay is a full compromise of every device that trusts it.',
    reactions: [
      'Clients verify the management server\'s ES256 signature on every bundle — the backend node cannot produce a valid signature.',
      'mTLS between node and management server means the node cannot impersonate the control plane.',
      'Clients pin the management server\'s public key at enrollment — key substitution is detected immediately.',
      'Any bundle the node serves without a valid server signature is silently dropped.',
    ],
    resultType: 'blocked' as const,
    result: 'The backend node has no capability to sign task bundles. All clients reject the forged content.',
  },
  {
    id: '3',
    title: 'Replaying a previously signed task',
    attack: 'Attacker captures a legitimately signed task bundle and replays it later — attempting to re-execute a package install or modification on a device that has already processed it.',
    normally: 'Systems without replay protection execute signed payloads unconditionally. A valid signature is treated as perpetual authorization.',
    reactions: [
      'Task bundles carry a monotonic sequence number and expiration timestamp — replayed bundles fail sequence validation.',
      'The signed ledger records which bundle IDs have been applied — clients reject any bundle ID already present in their local log.',
      'SIEM alert generated on replay detection.',
    ],
    resultType: 'blocked' as const,
    result: 'Replay is detected. The bundle is rejected and a security event is emitted.',
  },
  {
    id: '4',
    title: 'Hidden task bypassing the UI',
    attack: 'An insider with admin access inserts a task into the database directly — one that never appears in the UI audit log or task queue — and signs it using a stolen key.',
    normally: 'Systems relying solely on UI visibility for auditability cannot detect out-of-band actions. The task executes invisibly.',
    reactions: [
      'Every signed task bundle is appended to the signed ledger — the ledger\'s chain signature covers all entries, making omissions detectable.',
      'Clients report applied bundle IDs back to the management server — discrepancies trigger reconciliation alerts.',
      'SIEM receives every task execution event from clients, independent of the UI\'s view.',
    ],
    resultType: 'detected' as const,
    result: 'The task executes if the key is valid — but the action is visible in the ledger and SIEM within seconds.',
  },
  {
    id: '5',
    title: 'Compromised admin pushing a mass update',
    attack: 'Attacker with a compromised admin account immediately pushes a task to all 1,284 devices — mass-installing a backdoored package before anyone notices.',
    normally: 'A privileged account is typically sufficient. The task deploys fleet-wide within minutes before any human can intervene.',
    reactions: [
      'Execution delay window (configurable, default 30 min for fleet-wide tasks) must elapse before clients act.',
      'MFA re-authorization required for fleet-wide tasks above a device count threshold.',
      'SIEM alert fires immediately on large-scope task creation — SOC has a window to intervene.',
      'Kill switch can halt all pending task execution fleet-wide in one action.',
    ],
    resultType: 'delayed' as const,
    result: 'Attack is not instant. The delay window and SIEM alert give the SOC time to cancel and revoke.',
  },
  {
    id: '6',
    title: 'Full management server compromise',
    attack: 'Attacker gains complete control of the management server — access to database, signing service, and all credentials. Attempts to silently take over the entire fleet.',
    normally: 'In most architectures, the management server is the trust root. Its compromise equals total endpoint compromise.',
    reactions: [
      'Signing key lives in HashiCorp Vault with strict access policy — the management server cannot extract the raw key.',
      'All task bundles must go through Vault\'s signing API, creating an auditable log of every signing operation.',
      'Clients enforce the delay window regardless of management server state — no execution is instant.',
      'The signed ledger is independently verifiable — forensic analysis can reconstruct the full attack timeline.',
      'SIEM receives real-time events directly from clients, independent of the management server\'s reporting.',
    ],
    resultType: 'detected' as const,
    result: 'The attacker can issue tasks — but not instantly, not silently, and not without a cryptographic trail. Blast radius is bounded by delay and kill switch.',
  },
];

const resultLabels: Record<string, string> = {
  blocked: 'Blocked',
  detected: 'Detected',
  delayed: 'Delayed & Visible',
};

export function WeTriedToBreakIt() {
  return (
    <div className="page">
      <span className="eyebrow-page">Security · Red-team report</span>
      <h1>We Tried to Break 1Patch</h1>
      <p className="lead compact">
        Instead of assuming 1Patch was secure, we attacked it. The scenarios below are real threat
        models we designed and tested — what we attempted, what normally happens in other systems,
        and how 1Patch responded.
      </p>

      {/* ── Threat Model ──────────────────────────────── */}
      <section className="wtb-section">
        <h2>Threat Model</h2>
        <p>
          We assumed no component was trusted by default. Each scenario starts from a realistic
          compromise condition that a motivated attacker or insider could achieve.
        </p>
        <div className="threat-grid">
          {[
            ['A', 'Management server compromised', 'An attacker gains full access to the control plane — can read all data, issue arbitrary commands.'],
            ['B', 'Backend node compromised', 'A site node is fully under attacker control. Can serve modified responses to clients in its region.'],
            ['C', 'Admin account compromised', 'An attacker has valid admin credentials. Can log in, issue tasks, and modify rules.'],
            ['D', 'Network attacker (MITM)', 'An attacker can intercept and modify traffic between any two components in the architecture.'],
            ['E', 'Insider threat', 'A trusted operator deliberately tries to push unauthorized changes to production devices.'],
          ].map(([id, title, desc]) => (
            <div className="threat-card" key={id}>
              <div className="threat-label">Assumption {id}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Attack Scenarios ───────────────────────────── */}
      <section className="wtb-section">
        <h2>Attack Scenarios</h2>
        <div className="attack-list">
          {scenarios.map((s) => (
            <div className="attack" key={s.id}>
              <div className="attack-title">
                <span>Scenario {s.id}</span>
                <b>{s.title}</b>
              </div>
              <div className="attack-body">
                <div className="attack-field">
                  <div className="attack-field-label">Attack attempt</div>
                  <p>{s.attack}</p>
                </div>
                <div className="attack-field">
                  <div className="attack-field-label">What would normally happen</div>
                  <p>{s.normally}</p>
                </div>
              </div>
              <div className="attack-reactions">
                <div className="attack-reactions-label">What happens in 1Patch</div>
                <div className="attack-reactions-grid">
                  {s.reactions.map((r, i) => (
                    <div className="attack-reaction" key={i}>{r}</div>
                  ))}
                </div>
              </div>
              <div className="attack-result">
                <span className={`result-badge result-${s.resultType}`}>{resultLabels[s.resultType]}</span>
                <p>{s.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── What Still Works for Attackers ────────────── */}
      <section className="wtb-section">
        <h2>What Still Works for Attackers</h2>
        <p>
          Trust is built on honesty. These are real limitations of 1Patch's security model —
          knowing them lets you plan compensating controls.
        </p>
        <div className="honesty-list">
          <div className="honesty-item">
            <h3>Signing key compromise is critical</h3>
            <p>
              1Patch's security model depends on the integrity of the ES256 signing key. If an
              attacker extracts the private key from Vault — through a Vault vulnerability, a stolen
              root token, or a misconfigured policy — they can sign arbitrary task bundles. The delay
              window and kill switch remain effective, but the cryptographic guarantee is broken.
              Protect your Vault with the same diligence as a CA private key.
            </p>
          </div>
          <div className="honesty-item">
            <h3>Multiple simultaneous admin compromise</h3>
            <p>
              MFA requirements and SIEM alerts are effective against a single compromised account.
              If an attacker simultaneously controls the admin account <em>and</em> the SIEM
              pipeline, they can suppress alerts during the delay window. Your SIEM and alerting
              infrastructure must be independent of 1Patch's management plane.
            </p>
          </div>
          <div className="honesty-item">
            <h3>Client-side compromise is out of scope</h3>
            <p>
              1Patch verifies what arrives at the client. It cannot protect against an OS-level
              attacker that intercepts the agent process, pre-empts execution, or tampers with
              installed packages after the fact. Client integrity depends on the endpoint's own
              security posture — EDR, secure boot, and OS-level integrity checks remain
              complementary controls.
            </p>
          </div>
        </div>
      </section>

      {/* ── Design Philosophy ─────────────────────────── */}
      <section className="wtb-section">
        <h2>Design Philosophy</h2>
        <p>Every security decision in 1Patch traces back to a small set of principles.</p>
        <div className="philosophy-list">
          {[
            ['01', 'Endpoints never blindly trust the control plane', 'Every task bundle is signed and verified locally. The management server is authoritative for policy, not for execution trust. A compromised control plane cannot force execution — it can only produce bundles that clients will verify and may reject.'],
            ['02', 'Every action must be verifiable', 'The signed ledger exists so that any party — a SOC analyst, a compliance auditor, a forensic investigator — can independently verify the complete history of every task executed across the fleet. Visibility is not optional.'],
            ['03', 'Visibility over secrecy', 'We do not hide attack activity from users. SIEM integration surfaces every anomaly. We would rather your SOC have too many alerts than miss a real incident. Observable security beats security by obscurity.'],
            ['04', 'Delay reduces blast radius', 'Forced execution delay is not a UX compromise — it is a security control. A 30-minute window between task authorization and fleet-wide execution gives your team time to detect, review, and cancel a compromised action.'],
            ['05', 'Detection is as important as prevention', 'No system is unbreachable. 1Patch is designed to make breaches detectable, not invisible. Every security boundary emits structured events. Every anomaly generates an alert. If you are compromised, your SOC should know before the attacker has finished their work.'],
          ].map(([n, title, desc]) => (
            <div className="philosophy-item" key={n}>
              <div className="philosophy-num">{n}</div>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Conclusion ────────────────────────────────── */}
      <div className="wtb-conclusion">
        <p>
          Security is not about being unbreakable.{' '}
          <strong>It's about making attacks hard, visible, and controllable.</strong>
        </p>
        <p className="wtb-conclusion-sub">
          1Patch can be compromised. What it cannot do is hide that fact from you. Every critical
          action is signed, logged, delayed, and forwarded to your SIEM. The blast radius is
          bounded. The forensic trail is intact.
        </p>
        <div className="wtb-actions">
          <Link to="/security" className="btn btn-primary">
            Security architecture
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
