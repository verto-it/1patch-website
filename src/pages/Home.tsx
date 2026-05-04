const boardRows = [
  { state: '',       name: 'db-replica-04',    arch: 'linux/amd64', app: 'openssl', from: '3.0.13', to: '3.0.14' },
  { state: 'warn',   name: 'design-mbp-12',    arch: 'win11/arm',   app: 'firefox', from: '128.0.3', to: '130.0.0' },
  { state: '',       name: 'edge-fra-09',       arch: 'linux/arm64', app: 'nginx',   from: '1.26.1', to: '1.27.2' },
  { state: 'idle',   name: 'finance-laptop-7',  arch: 'win10/x64',   app: '7zip',    from: '23.01', to: '24.08' },
  { state: 'danger', name: 'build-runner-02',   arch: 'linux/amd64', app: 'curl',    from: '8.4.0', to: '8.10.1' },
  { state: '',       name: 'kiosk-berlin-31',   arch: 'win11/x64',   app: 'vlc',     from: '3.0.20', to: '3.0.21' },
] as const;

function copy(text: string) {
  navigator.clipboard?.writeText(text);
}

export function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">
                <span className="pill">v0.9</span> security-first patch orchestration platform
              </div>
              <h1 className="headline">
                Your endpoints<br />
                don't trust us.<br />
                <em>And that's the point.</em>
              </h1>
              <p className="sub">
                1Patch is a patch management system where endpoints verify every update before execution.
                Even if the control plane is compromised, endpoints do not blindly execute commands.
              </p>
              <div className="hero-actions">
                <a href="mailto:security@1patch.app" className="btn btn-primary">
                  Request a Security Demo
                  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="/#how" className="btn btn-secondary">See How It Works</a>
              </div>
              <div className="install-cmd">
                <span className="prompt">$</span>
                <span className="cmd">docker run -d ghcr.io/1patch/server:0.9</span>
                <button className="copy" onClick={() => copy('docker run -d ghcr.io/1patch/server:0.9')}>copy</button>
              </div>
            </div>

            {/* Fleet board */}
            <div className="board" aria-label="Fleet patch status">
              <div className="board-head">
                <span className="board-title">fleet · <b>acme-corp/prod</b></span>
                <span className="board-status"><span className="live-dot" />polling 30s</span>
              </div>
              <div className="board-stats">
                <div className="stat">
                  <div className="stat-num ok">1,284</div>
                  <div className="stat-label">devices online</div>
                </div>
                <div className="stat">
                  <div className="stat-num">47</div>
                  <div className="stat-label">apps tracked</div>
                </div>
                <div className="stat">
                  <div className="stat-num warn">23</div>
                  <div className="stat-label">updates queued</div>
                </div>
              </div>
              <div className="board-list">
                {boardRows.map((r) => (
                  <div className="board-row" key={r.name}>
                    <span className={`row-state ${r.state}`} />
                    <span className="row-name">{r.name} <span className="arch">·{r.arch}</span></span>
                    <span className="row-app">{r.app}</span>
                    <span className="row-version">
                      {r.from} <span className="arrow">→</span> <span className="new">{r.to}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="board-foot">
                <span>last sync 00:00:04 ago · node <b>fra-1</b></span>
                <span className="ok">98.2% compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Security signal strip ─────────────────────────── */}
      <div className="strip">
        <div className="wrap strip-inner">
          <span><b>ES256</b> · signed task bundles</span>
          <span className="strip-sep">/</span>
          <span><b>zero-trust</b> · endpoint verification</span>
          <span className="strip-sep">/</span>
          <span><b>mTLS</b> · node authentication</span>
          <span className="strip-sep">/</span>
          <span><b>delayed execution</b> · configurable hold window</span>
          <span className="strip-sep">/</span>
          <span><b>SIEM</b> · sentinel + webhook + syslog</span>
        </div>
      </div>

      {/* ── Why It Matters ───────────────────────────────────── */}
      <section className="block" id="why-matters" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <div className="section-eyebrow">Why this matters</div>
            <h2 className="section-title">Four risks. One platform designed around all of them.</h2>
          </div>
          <div className="why-matters-grid">
            {[
              'Prevent silent mass rollouts from compromised systems',
              'Reduce risk from malicious or tampered updates',
              'Gain full visibility into patch execution across all devices',
              'Control exactly when and how updates are applied',
            ].map(item => (
              <div className="why-matters-item" key={item}>
                <span className="why-matters-mark">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why 1Patch is Different ───────────────────────── */}
      <section className="block" id="why-different">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">01</span>Why 1Patch is different</div>
            <h2 className="section-title">Other tools trust the server. We designed for when you can't.</h2>
            <p className="section-lede">Traditional patch management assumes the control plane is safe. 1Patch assumes it might not be — and enforces trust at the endpoint regardless.</p>
          </div>
          <div className="diff-grid">
            <div className="diff-col diff-col-old">
              <div className="diff-col-head">
                <span className="diff-label diff-label-old">Traditional tools</span>
              </div>
              <ul className="diff-list">
                <li>Trust the server unconditionally</li>
                <li>Execute whatever the control plane sends</li>
                <li>No cryptographic proof of task origin</li>
                <li>Execution starts immediately on receipt</li>
                <li>Limited or no SIEM visibility</li>
                <li>No kill switch for in-progress operations</li>
                <li>Audit log lives in the same trust boundary</li>
              </ul>
            </div>
            <div className="diff-col diff-col-new">
              <div className="diff-col-head">
                <span className="diff-label diff-label-new">1Patch</span>
              </div>
              <ul className="diff-list">
                <li>Endpoints verify every task cryptographically</li>
                <li>ES256-signed bundles — nodes cannot forge or modify</li>
                <li>Pinned signing key, verified at the endpoint</li>
                <li>Configurable delay window reduces blast radius</li>
                <li>Real-time SIEM forwarding — Sentinel, webhook, syslog</li>
                <li>MFA-gated kill switch halts all pending execution</li>
                <li>Chain-signed ledger forwarded outside the control plane</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Security Architecture ─────────────────────────── */}
      <section className="block" id="security" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">02</span>Security architecture</div>
            <h2 className="section-title">Cryptographically enforced trust. At the endpoint.</h2>
            <p className="section-lede">Every task bundle is signed by the management server and verified by the agent against a pinned key — regardless of which backend node delivered it. No valid signature means no execution. Ever.</p>
          </div>
          <div className="sec-grid">
            <div className="sec-cell">
              <div className="sec-tag">S.01 · Identity</div>
              <h3>Local-first auth. No SSO tax.</h3>
              <p>First setup demands a local owner account. Standalone auth includes TOTP MFA, recovery codes, lockout policy, and session tracking. Fleet-wide tasks require MFA re-authorization above a device threshold. OAuth is opt-in, never required.</p>
              <ul className="sec-list">
                <li>TOTP MFA + recovery codes by default</li>
                <li>RBAC with org / team / device scopes</li>
                <li>Impossible-travel review queue</li>
                <li>Session tracking with instant revoke</li>
              </ul>
            </div>
            <div className="sec-cell">
              <div className="sec-tag">S.02 · Transport</div>
              <h3>Signed bundles. Outbound-only polling.</h3>
              <p>Clients pull from backend nodes over HTTPS. Task bundles and rule manifests are ES256-signed by the management server — backend nodes cannot forge or modify them. Each device carries a unique EC P-256 identity. Failover is automatic; verification is never skipped.</p>
              <ul className="sec-list">
                <li>ES256 task bundle signing (Vault PKI)</li>
                <li>Per-device EC P-256 identity</li>
                <li>Outbound-only HTTPS polling</li>
                <li>mTLS node ↔ management authentication</li>
              </ul>
            </div>
            <div className="sec-cell">
              <div className="sec-tag">S.03 · Execution</div>
              <h3>Zero-trust task execution.</h3>
              <p>The agent verifies every task bundle against the pinned management server signing key before executing — independent of the backend node that delivered it. No valid signature means no execution. No remote shell access exists at any layer.</p>
              <ul className="sec-list">
                <li>ES256 signature verification on every bundle</li>
                <li>Replay protection via sequence numbers</li>
                <li>No remote shell. No exceptions.</li>
                <li>Argument allowlists per package manager</li>
              </ul>
            </div>
            <div className="sec-cell">
              <div className="sec-tag">S.04 · Audit</div>
              <h3>Chain-signed ledger. No invisible actions.</h3>
              <p>Every task creates a chain-signed ledger entry. Agents cross-report applied bundle IDs — discrepancies trigger reconciliation alerts. All events stream to Microsoft Sentinel or any SIEM via webhook or syslog in real time, outside the control plane's trust boundary.</p>
              <ul className="sec-list">
                <li>Append-only chain-signed task ledger</li>
                <li>Microsoft Sentinel + webhook + syslog</li>
                <li>Real-time security event forwarding</li>
                <li>Alerting on signature verification failures</li>
              </ul>
            </div>
          </div>

          <div className="sec-highlights">
            {[
              ['Zero-trust execution', 'Endpoints verify every task bundle before executing, independent of the control plane.'],
              ['Signed task ledger', 'Every action is chain-signed. No task executes without a cryptographic trail.'],
              ['mTLS infrastructure', 'Backend nodes authenticate via short-lived Vault-issued EC P-256 certificates (24 h TTL).'],
              ['Delayed execution', 'Configurable hold window before fleet-wide tasks execute — time to review and cancel.'],
              ['Kill switch', 'Halt all pending fleet-wide execution in one MFA-gated action.'],
              ['SIEM integration', 'Structured security events forwarded to Microsoft Sentinel or any SIEM in real time.'],
            ].map(([title, desc]) => (
              <div className="sec-highlight" key={title}>
                <div className="sec-highlight-tag">✓</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <a href="/security" className="btn btn-secondary">Full security architecture →</a>
            <a href="/security/we-tried-to-break-it" className="btn btn-secondary">We tried to break it →</a>
          </div>
        </div>
      </section>

      {/* ── When Things Go Wrong ─────────────────────────── */}
      <section className="block" id="threat-model">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">03</span>When things go wrong</div>
            <h2 className="section-title">Built for when things go wrong.</h2>
            <p className="section-lede">Most systems assume the control plane is trusted. 1Patch is designed for when it isn't.</p>
          </div>
          <div className="core-guarantee">
            <div className="core-guarantee-intro">The four guarantees that hold even under adversarial conditions:</div>
            <div className="core-guarantee-list">
              {[
                'Endpoints verify every task before execution',
                'Tasks must be signed and visible in the system',
                'Execution is delayed to reduce blast radius',
                'Every action is observable via SIEM',
              ].map(item => (
                <div className="core-guarantee-item" key={item}>
                  <span className="core-guarantee-mark">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="scenario-grid">
            <div className="scenario">
              <div className="scenario-threat">Threat: compromised admin account</div>
              <h3>Approvals + delay limits the damage.</h3>
              <p>Fleet-wide tasks require MFA re-authorization above a device threshold. The configurable delay window gives your SOC time to detect and cancel suspicious tasks before they reach endpoints. Large-scope actions trigger SIEM alerts immediately on creation.</p>
              <div className="scenario-outcome">
                <span className="outcome-badge outcome-contained">Contained</span>
                <span className="outcome-detail">MFA gate + delay window + SIEM alert</span>
              </div>
            </div>
            <div className="scenario">
              <div className="scenario-threat">Threat: compromised backend node</div>
              <h3>Nodes cannot forge tasks.</h3>
              <p>Backend nodes are stateless delivery intermediaries — they hold no signing keys and cannot modify or create task bundles. A compromised node can withhold tasks or replay old ones, but cannot instruct endpoints to execute anything that wasn't signed by the management server.</p>
              <div className="scenario-outcome">
                <span className="outcome-badge outcome-blocked">Blocked</span>
                <span className="outcome-detail">Signature verification prevents forged execution</span>
              </div>
            </div>
            <div className="scenario">
              <div className="scenario-threat">Threat: network interception / MITM</div>
              <h3>Signatures fail. Execution stops.</h3>
              <p>Task bundles are ES256-signed and verified against a pinned key at the endpoint. Any tampering — substitution, replay, or modification — produces a verification failure. The agent halts, logs the event, and reports to the SIEM. No partial execution occurs.</p>
              <div className="scenario-outcome">
                <span className="outcome-badge outcome-blocked">Blocked</span>
                <span className="outcome-detail">Cryptographic verification at endpoint</span>
              </div>
            </div>
            <div className="scenario">
              <div className="scenario-threat">Threat: compromised control plane</div>
              <h3>Endpoints still verify. Delay still applies.</h3>
              <p>Even if an attacker gains full control of the management server, they cannot bypass endpoint verification without the signing key material. The delay window and SIEM forwarding remain active, giving your team time to detect the compromise and activate the kill switch.</p>
              <div className="scenario-outcome">
                <span className="outcome-badge outcome-contained">Contained</span>
                <span className="outcome-detail">Key material + delay window + kill switch</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 32 }}>
            <a href="/security/we-tried-to-break-it" className="btn btn-secondary">
              See the full adversarial analysis →
            </a>
          </div>
        </div>
      </section>

      {/* ── Security Posture + SIEM ───────────────────────── */}
      <section className="block" id="posture" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">04</span>Visibility and posture</div>
            <h2 className="section-title">Know exactly where you stand. In real time.</h2>
            <p className="section-lede">1Patch surfaces your security posture in a structured, machine-readable form — both in the dashboard and as a live event stream in your SIEM.</p>
          </div>
          <div className="posture-siem-grid">
            <div className="posture-card">
              <div className="posture-card-head">
                <span className="posture-card-label">Security posture dashboard</span>
                <span className="posture-mode-badge">Mode: Tinfoil</span>
              </div>
              <div className="posture-score-row">
                <div className="posture-score">91<span className="posture-score-denom">/100</span></div>
                <div className="posture-indicators">
                  <div className="posture-indicator">
                    <span className="pi-label">Critical issues</span>
                    <span className="pi-value pi-ok">0</span>
                  </div>
                  <div className="posture-indicator">
                    <span className="pi-label">Signing key active</span>
                    <span className="pi-value pi-ok">✓</span>
                  </div>
                  <div className="posture-indicator">
                    <span className="pi-label">Delay window</span>
                    <span className="pi-value pi-warn">4 h</span>
                  </div>
                  <div className="posture-indicator">
                    <span className="pi-label">SIEM forwarding</span>
                    <span className="pi-value pi-ok">active</span>
                  </div>
                </div>
              </div>
              <p className="posture-desc">The security posture score reflects MFA enrollment, delay window configuration, SIEM integration status, and recent verification failures. Each point maps to a specific, actionable control — not a vanity metric.</p>
            </div>
            <div className="siem-promo-card">
              <div className="siem-promo-head">
                <span className="siem-promo-label">SIEM integration</span>
                <span className="siem-badge">Microsoft Sentinel</span>
              </div>
              <h3>Integrates directly into your SOC.</h3>
              <p>Every security-relevant event in 1Patch — task execution, signature failure, kill switch activation, impossible-travel detection — is forwarded to your SIEM in structured, machine-readable format. No log scraping. No custom parsers required.</p>
              <div className="siem-channels">
                <div className="siem-channel"><b>Microsoft Sentinel</b> — native integration</div>
                <div className="siem-channel"><b>Webhook</b> — structured JSON events</div>
                <div className="siem-channel"><b>Syslog</b> — RFC 5424 formatted</div>
              </div>
              <a href="/security" className="btn btn-secondary" style={{ marginTop: 20, display: 'inline-flex' }}>View event schema →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────── */}
      <section className="block" id="features">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">05</span>Fleet management</div>
            <h2 className="section-title">Policy-driven orchestration. Across your entire fleet.</h2>
            <p className="section-lede">Controlled, verifiable execution for teams managing thousands of devices across sites. No marketing dashboards — actual primitives you compose into your patch policy.</p>
          </div>
          <div className="features-grid">
            <div className="feat">
              <div className="feat-num">F.01</div>
              <div className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="3" width="15" height="2.5" stroke="currentColor" strokeWidth="1.4"/><rect x="2.5" y="8.5" width="15" height="2.5" stroke="currentColor" strokeWidth="1.4"/><rect x="2.5" y="14" width="15" height="2.5" stroke="currentColor" strokeWidth="1.4"/></svg>
              </div>
              <h3>App catalog</h3>
              <p>Search every app on every device. Filter by manufacturer, GUID, package ID, oldest installed version, newest available — across the whole fleet.</p>
            </div>
            <div className="feat">
              <div className="feat-num">F.02</div>
              <div className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7h10M5 11h10M5 15h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M3 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3>Rule builder</h3>
              <p>Match by app name, manufacturer, GUID, or package ID. Pin versions, defer to a window, or trigger execution when a CVE drops. Rules cascade, like CSS.</p>
            </div>
            <div className="feat">
              <div className="feat-num">F.03</div>
              <div className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.4"/><path d="M10 4v6l4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              </div>
              <h3>Device-level control</h3>
              <p>Drill into any host. Update one app, update all, defer, exclude, or open the audit trail. Bulk actions stay one keystroke away. Every operation is signed and logged.</p>
            </div>
            <div className="feat">
              <div className="feat-num">F.04</div>
              <div className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="3" stroke="currentColor" strokeWidth="1.4"/><rect x="3" y="9" width="14" height="3" stroke="currentColor" strokeWidth="1.4"/><rect x="3" y="14" width="14" height="3" stroke="currentColor" strokeWidth="1.4"/><circle cx="6" cy="5.5" r=".7" fill="currentColor"/><circle cx="6" cy="10.5" r=".7" fill="currentColor"/><circle cx="6" cy="15.5" r=".7" fill="currentColor"/></svg>
              </div>
              <h3>Backend nodes</h3>
              <p>Deploy a node per site, region, or customer network. Clients route to the nearest healthy one. Nodes cache rules and queue device data while the control plane is unreachable.</p>
            </div>
            <div className="feat">
              <div className="feat-num">F.05</div>
              <div className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2 4 5v5c0 4 2.5 6.5 6 8 3.5-1.5 6-4 6-8V5l-6-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="m7.5 10 2 2 3.5-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3>Cross-platform agent</h3>
              <p>One C# agent for Windows (winget) and Linux (apt). Signed manifests. HTTPS polling. Per-device EC P-256 identity. No runtime required. No remote shell access at any layer.</p>
            </div>
            <div className="feat">
              <div className="feat-num">F.06</div>
              <div className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              </div>
              <h3>Access control</h3>
              <p>RBAC with org, team, and device scope. TOTP MFA required for admin and owner accounts. Fleet-wide tasks require MFA re-authorization above a device threshold. No SSO tax.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────── */}
      <section className="block" id="how" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">06</span>Architecture</div>
            <h2 className="section-title">One control plane. Endpoints never have to trust it blindly.</h2>
            <p className="section-lede">Run a single management server behind your load balancer. Attach backend nodes per site, region, or customer network. The control plane never needs to be directly reachable from your endpoints — and even if it's compromised, endpoints verify independently.</p>
          </div>
          <div className="topology">
            <div className="topo-head">
              <h3>Reference topology</h3>
              <div className="legend">
                <span><span className="swatch sw-ink" />signed RPC</span>
                <span><span className="swatch sw-accent" />healthy node</span>
                <span><span className="swatch sw-line" />polling client</span>
              </div>
            </div>
            <div className="topo-svg-wrap">
              <svg className="topo-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#161614" strokeWidth="1.4" fill="none">
                  <path d="M450 80 L180 180" /><path d="M450 80 L450 180" /><path d="M450 80 L720 180" />
                </g>
                <g stroke="#908a7e" strokeWidth="1" strokeDasharray="3 4" fill="none">
                  <path d="M180 220 L80 310" /><path d="M180 220 L180 310" /><path d="M180 220 L280 310" />
                  <path d="M450 220 L380 310" /><path d="M450 220 L450 310" /><path d="M450 220 L520 310" />
                  <path d="M720 220 L640 310" /><path d="M720 220 L720 310" /><path d="M720 220 L800 310" />
                </g>
                <rect x="380" y="40" width="140" height="40" fill="#fbf9f3" stroke="#161614" strokeWidth="1.4"/>
                <text x="450" y="58" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fill="#161614" fontWeight="600">CONTROL PLANE</text>
                <text x="450" y="72" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#6b6760">postgres · rules · audit</text>
                <rect x="120" y="180" width="120" height="40" fill="oklch(72% 0.21 132)" stroke="#161614" strokeWidth="1.4"/>
                <text x="180" y="198" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fill="#161614" fontWeight="600">node fra-1</text>
                <text x="180" y="212" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#1f1e1b">eu-central · 412 dev</text>
                <rect x="390" y="180" width="120" height="40" fill="oklch(72% 0.21 132)" stroke="#161614" strokeWidth="1.4"/>
                <text x="450" y="198" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fill="#161614" fontWeight="600">node nyc-1</text>
                <text x="450" y="212" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#1f1e1b">us-east · 580 dev</text>
                <rect x="660" y="180" width="120" height="40" fill="oklch(72% 0.21 132)" stroke="#161614" strokeWidth="1.4"/>
                <text x="720" y="198" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fill="#161614" fontWeight="600">node sgp-1</text>
                <text x="720" y="212" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#1f1e1b">ap-southeast · 292</text>
                {[
                  [50,'berlin-hq','412 win/lin'],[150,'munich-2','214 linux'],[250,'remote','88 mixed'],
                  [350,'nyc-office','240 win'],[420,'aws-prod','196 linux'],[490,'denver','144 win'],
                  [610,'tokyo-r&d','170 mixed'],[690,'sg-edge','68 linux'],[770,'syd-pop','54 linux'],
                ].map(([x, label, sub]) => (
                  <g key={String(x)} transform={`translate(${x},295)`}>
                    <rect width="60" height="30" fill="#fbf9f3" stroke="#c1b9a5" strokeWidth="1"/>
                    <text x="30" y="14" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#161614">{String(label)}</text>
                    <text x="30" y="24" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#6b6760">{String(sub)}</text>
                  </g>
                ))}
              </svg>
            </div>
            <div className="steps-row">
              {[
                ['01', 'Deploy server', 'Postgres + management container behind your LB.'],
                ['02', 'Create owner', 'First local user, MFA, recovery codes.'],
                ['03', 'Issue tokens', 'Enrollment tokens for backend nodes.'],
                ['04', 'Place nodes', 'One per site, region or customer.'],
                ['05', 'Roll out agent', 'C# agent on Windows + Linux devices.'],
              ].map(([n, title, desc]) => (
                <div className="step-item" key={n}>
                  <div className="step-n">{n}</div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Enterprise Readiness ──────────────────────────── */}
      <section className="block" id="enterprise">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">07</span>Enterprise readiness</div>
            <h2 className="section-title">Designed for high-security environments.</h2>
            <p className="section-lede">Every operation in 1Patch is auditable, delayable, and revocable. Built for teams with compliance requirements and a SOC that needs complete, independent visibility into every endpoint action. Security by design, not by assumption.</p>
          </div>
          <div className="ent-grid">
            <div className="ent-cell">
              <div className="ent-tag">E.01 · Auditability</div>
              <h3>Full auditability and traceability.</h3>
              <p>Every task creates an append-only, chain-signed ledger entry. Agents cross-report applied bundle IDs — discrepancies trigger reconciliation alerts. Forensic analysis available from day one, with retention policies per role.</p>
              <ul className="ent-list">
                <li>Append-only signed task ledger</li>
                <li>Bundle ID reconciliation alerts</li>
                <li>Complete privileged-action history</li>
                <li>Retention policies per role</li>
              </ul>
            </div>
            <div className="ent-cell">
              <div className="ent-tag">E.02 · SIEM</div>
              <h3>SOC-ready event pipeline.</h3>
              <p>1Patch integrates directly into your SIEM — including Microsoft Sentinel — allowing your SOC to monitor, detect, and respond to every critical action in real time, independent of the management UI.</p>
              <ul className="ent-list">
                <li>Microsoft Sentinel native support</li>
                <li>Structured webhook + syslog export</li>
                <li>Real-time event forwarding</li>
                <li>Machine-readable security event schemas</li>
              </ul>
            </div>
            <div className="ent-cell">
              <div className="ent-tag">E.03 · Access control</div>
              <h3>RBAC and MFA by default.</h3>
              <p>Role-based access at org, team, and device scope. TOTP MFA required for admin and owner accounts. Fleet-wide tasks require MFA re-authorization above a device threshold.</p>
              <ul className="ent-list">
                <li>RBAC with org / team / device scopes</li>
                <li>MFA re-auth for fleet-wide tasks</li>
                <li>Impossible-travel review queue</li>
                <li>Session tracking with instant revoke</li>
              </ul>
            </div>
            <div className="ent-cell">
              <div className="ent-tag">E.04 · Execution control</div>
              <h3>Delay window and kill switch.</h3>
              <p>Configurable execution delay gives your SOC time to review large-scope tasks before they reach endpoints. The kill switch halts all pending execution fleet-wide in a single MFA-gated action.</p>
              <ul className="ent-list">
                <li>Configurable delay before execution</li>
                <li>MFA-gated kill switch</li>
                <li>SIEM alert on large-scope tasks</li>
                <li>Deterministic, reproducible execution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── We Tried to Break It Promo ────────────────────── */}
      <section className="block wtb-promo-section" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
        <div className="wrap">
          <div className="wtb-promo">
            <div className="wtb-promo-content">
              <div className="section-eyebrow" style={{ marginBottom: 20 }}>
                <span className="num" style={{ background: 'var(--danger)', color: 'var(--paper)' }}>⚑</span>
                Red-team analysis
              </div>
              <h2 className="wtb-promo-title">We attacked our own system.</h2>
              <p className="wtb-promo-sub">We simulated compromised servers, malicious tasks, and insider threats. Here's what happened.</p>
              <a href="/security/we-tried-to-break-it" className="btn btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>
                Read the full breakdown
                <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div className="wtb-promo-results">
              {[
                ['Credential theft', 'Blocked'],
                ['Forged task bundle', 'Blocked'],
                ['Compromised node', 'Blocked'],
                ['Network MITM', 'Blocked'],
                ['Admin account takeover', 'Contained'],
                ['Control plane breach', 'Contained'],
              ].map(([attack, outcome]) => (
                <div className="wtb-result-row" key={attack}>
                  <span className="wtb-attack-name">{attack}</span>
                  <span className={`result-badge ${outcome === 'Blocked' ? 'result-blocked' : 'result-delayed'}`}>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Signals ────────────────────────────────── */}
      <section className="block" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="trust-signals">
            <div>
              <h2>Built for <span>paranoid</span> environments.</h2>
              <p>Designed for hostile conditions. Works even when the management server is under adversarial conditions. Full auditability and traceability at every layer. Security by design, not by assumption.</p>
            </div>
            <div className="trust-bullets">
              {[
                'Zero-trust principles throughout — not a bolt-on',
                'Endpoints remain safe even when the control plane is compromised',
                'Full auditability and traceability at every layer',
                'Cryptographically enforced trust at the endpoint',
                'Delay window reduces blast radius of any compromise',
                'Every action signed, logged, and forwarded to your SIEM',
              ].map(b => (
                <div className="trust-bullet" key={b}>
                  <span className="trust-bullet-mark">→</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────── */}
      <section className="block" id="pricing" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">08</span>Pricing</div>
            <h2 className="section-title">Free forever to self-host. Pay only when you don't want to.</h2>
            <p className="section-lede">Enterprise-grade architecture. Flexible deployment options. The community edition is the same code that runs hosted — same security model, same zero-trust execution stack. Every plan includes the full cryptographically verified execution stack. Pick the plan that fits how much operational load you want to carry.</p>
          </div>
          <div className="price-grid">
            <div className="plan">
              <div className="plan-name">Community</div>
              <h3>Self-hosted</h3>
              <p className="plan-desc">For labs, homelabs, contributors and teams that prefer their own infrastructure.</p>
              <div className="plan-price-row">
                <span className="plan-price">$0</span>
                <span className="plan-unit">/ forever, AGPL-3.0</span>
              </div>
              <ul className="plan-list">
                <li>All features, no device cap</li>
                <li>Unlimited backend nodes</li>
                <li>Community Discord + GitHub issues</li>
                <li>Bring your own Postgres</li>
              </ul>
              <a href="#downloads" className="plan-cta">Get it on GitHub <span>→</span></a>
            </div>
            <div className="plan featured">
              <div className="plan-name">Hosted</div>
              <h3>Managed control plane</h3>
              <p className="plan-desc">We run the control plane, backups, and updates. You run the nodes inside your network.</p>
              <div className="plan-price-row">
                <span className="plan-price">€2</span>
                <span className="plan-unit">/ device / mo, billed yearly</span>
              </div>
              <ul className="plan-list">
                <li>Managed control plane in EU</li>
                <li>Daily encrypted backups + PITR</li>
                <li>Email + chat support, 1 business day</li>
                <li>SOC2 controls (in progress)</li>
              </ul>
              <a href="#contact" className="plan-cta">Start free 30-day trial <span>→</span></a>
            </div>
            <div className="plan">
              <div className="plan-name">Enterprise</div>
              <h3>White-glove + air-gapped</h3>
              <p className="plan-desc">For regulated fleets, MSPs, and orgs with custom integrations or air-gap requirements.</p>
              <div className="plan-price-row">
                <span className="plan-price">Talk</span>
                <span className="plan-unit">/ scoped per deployment</span>
              </div>
              <ul className="plan-list">
                <li>Deployment + migration support</li>
                <li>Custom providers + integrations</li>
                <li>Dedicated security review channel</li>
                <li>Air-gapped registry mirror</li>
              </ul>
              <a href="#contact" className="plan-cta">Evaluate your security posture <span>→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Downloads ────────────────────────────────────── */}
      <section className="block" id="downloads">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">09</span>Downloads</div>
            <h2 className="section-title">Signed binaries. Reproducible builds. SBOMs included.</h2>
            <p className="section-lede">Installers ship with cosign signatures, SBOMs, and SHA-256 checksums. v1.0 is in release-candidate; v0.9 is production-stable for the agent.</p>
          </div>
          <div className="dl-grid">
            <div className="dl">
              <div className="dl-head">
                <div className="dl-os">
                  <div className="dl-os-icon">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="7" height="7" fill="#161614"/><rect x="12" y="3" width="7" height="7" fill="#161614"/><rect x="3" y="12" width="7" height="7" fill="#161614"/><rect x="12" y="12" width="7" height="7" fill="#161614"/></svg>
                  </div>
                  <div><h4>Windows agent</h4><span className="v">winget · win10 / win11 · x64 / arm64</span></div>
                </div>
                <span className="dl-tag">stable</span>
              </div>
              <div className="dl-row"><span className="pkg">1patch-agent_0.9.4_x64.msi</span><span className="sha">sha256: 7c1f…a04e</span><a href="#" className="get">download</a></div>
              <div className="dl-row"><span className="pkg">1patch-agent_0.9.4_arm64.msi</span><span className="sha">sha256: 6e09…b2f1</span><a href="#" className="get">download</a></div>
              <div className="dl-meta"><span><b>Size</b> 18.4 MB</span><span><b>Released</b> 2026-04-22</span><span><b>Signed</b> cosign + Authenticode</span></div>
            </div>
            <div className="dl">
              <div className="dl-head">
                <div className="dl-os">
                  <div className="dl-os-icon">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="#161614" strokeWidth="1.6"/><path d="M11 6c-1.5 1.5-1.5 3 0 4.5s1.5 3 0 4.5" stroke="#161614" strokeWidth="1.6" strokeLinecap="round"/></svg>
                  </div>
                  <div><h4>Linux agent</h4><span className="v">apt · deb / rpm · x64 / arm64</span></div>
                </div>
                <span className="dl-tag">stable</span>
              </div>
              <div className="dl-row"><span className="pkg">1patch-agent_0.9.4_amd64.deb</span><span className="sha">sha256: 4a82…91cd</span><a href="#" className="get">download</a></div>
              <div className="dl-row"><span className="pkg">1patch-agent_0.9.4_arm64.deb</span><span className="sha">sha256: ef10…7a03</span><a href="#" className="get">download</a></div>
              <div className="dl-meta"><span><b>Size</b> 14.2 MB</span><span><b>Released</b> 2026-04-22</span><span><b>Signed</b> cosign + GPG</span></div>
            </div>
            <div className="dl">
              <div className="dl-head">
                <div className="dl-os">
                  <div className="dl-os-icon">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="6" width="16" height="3" fill="#161614"/><rect x="3" y="11" width="16" height="3" fill="#161614"/><rect x="3" y="16" width="10" height="2" fill="#161614"/></svg>
                  </div>
                  <div><h4>Management server</h4><span className="v">docker · helm · postgres 14+</span></div>
                </div>
                <span className="dl-tag">stable</span>
              </div>
              <div className="dl-row"><span className="pkg">ghcr.io/1patch/server:0.9.4</span><span className="sha">digest: sha256:c8d2…ff70</span><a href="#" className="get">pull</a></div>
              <div className="dl-row"><span className="pkg">helm install 1patch oci://1patch/chart</span><span className="sha">chart: 0.9.4</span><a href="#" className="get">copy</a></div>
              <div className="dl-meta"><span><b>Image</b> 142 MB</span><span><b>Released</b> 2026-04-22</span><span><b>SBOM</b> SPDX 2.3</span></div>
            </div>
            <div className="dl">
              <div className="dl-head">
                <div className="dl-os">
                  <div className="dl-os-icon">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="6" cy="11" r="2.2" fill="#161614"/><circle cx="11" cy="11" r="2.2" fill="#161614"/><circle cx="16" cy="11" r="2.2" fill="#161614"/></svg>
                  </div>
                  <div><h4>Backend node</h4><span className="v">docker · stateless · per-site</span></div>
                </div>
                <span className="dl-tag pre">v1.0-rc</span>
              </div>
              <div className="dl-row"><span className="pkg">ghcr.io/1patch/node:1.0-rc.2</span><span className="sha">digest: sha256:9b41…2e88</span><a href="#" className="get">pull</a></div>
              <div className="dl-row"><span className="pkg">1patch-node_1.0-rc.2_amd64.deb</span><span className="sha">sha256: 18d0…06ab</span><a href="#" className="get">download</a></div>
              <div className="dl-meta"><span><b>Image</b> 64 MB</span><span><b>Released</b> 2026-04-29</span><span><b>Status</b> release candidate</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="block" id="contact" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="cta-block">
            <div>
              <h2>Stop chasing CVEs in spreadsheets.<br /><span>Start patching like you mean it.</span></h2>
              <p>1Patch is built by Verto-IT in Germany, AGPLv3 forever, and run in production on fleets that cannot afford downtime or silent compromises. Enterprise-grade architecture. Self-host in fifteen minutes, or talk to us about your specific security requirements.</p>
            </div>
            <div className="cta-actions">
              <a href="mailto:security@1patch.app" className="btn btn-primary">
                Request a security demo
                <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="mailto:security@1patch.app" className="btn btn-secondary">
                Get a technical walkthrough
                <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="/security/we-tried-to-break-it" className="btn btn-secondary">
                See how 1Patch behaves under attack
                <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
