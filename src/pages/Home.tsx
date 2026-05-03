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
                <span className="pill">v0.9</span> open-source patch management
              </div>
              <h1 className="headline">
                Keep every box up to date.<br />
                <em>Every site. Every OS.</em><br />
                <span className="strike">No downtime.</span>
              </h1>
              <p className="sub">
                1Patch is a self-hosted control plane and a fleet of backend nodes that pushes signed
                updates to <b>Windows and Linux</b> devices — without exposing your network, without
                vendor lock-in, and without the spreadsheet.
              </p>
              <div className="hero-actions">
                <a href="#downloads" className="btn btn-primary">
                  Start self-hosting
                  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#pricing" className="btn btn-secondary">See hosted pricing</a>
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

      {/* ── Tech strip ───────────────────────────────────── */}
      <div className="strip">
        <div className="wrap strip-inner">
          <span><b>winget</b> · windows package manager</span>
          <span className="strip-sep">/</span>
          <span><b>apt</b> · debian + ubuntu</span>
          <span className="strip-sep">/</span>
          <span><b>msi</b> · custom installers <span style={{ color: 'var(--mute-2)' }}>(roadmap)</span></span>
          <span className="strip-sep">/</span>
          <span><b>postgres</b> · your database</span>
          <span className="strip-sep">/</span>
          <span><b>kubernetes-ready</b></span>
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────── */}
      <section className="block" id="features">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">01</span>Features</div>
            <h2 className="section-title">Built for fleet operators, not for screenshots.</h2>
            <p className="section-lede">Real workflows for teams managing thousands of devices across sites. No marketing dashboards — actual primitives you compose into your patch policy.</p>
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
              <p>Match by app name, manufacturer, GUID, or package ID. Pin versions, defer to a window, or auto-update when a CVE drops. Rules cascade, like CSS.</p>
            </div>
            <div className="feat">
              <div className="feat-num">F.03</div>
              <div className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.4"/><path d="M10 4v6l4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              </div>
              <h3>Device-level control</h3>
              <p>Drill into any host. Update one app, update all apps, defer, exclude, or open the audit trail. Bulk actions stay one keystroke away.</p>
            </div>
            <div className="feat">
              <div className="feat-num">F.04</div>
              <div className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="3" stroke="currentColor" strokeWidth="1.4"/><rect x="3" y="9" width="14" height="3" stroke="currentColor" strokeWidth="1.4"/><rect x="3" y="14" width="14" height="3" stroke="currentColor" strokeWidth="1.4"/><circle cx="6" cy="5.5" r=".7" fill="currentColor"/><circle cx="6" cy="10.5" r=".7" fill="currentColor"/><circle cx="6" cy="15.5" r=".7" fill="currentColor"/></svg>
              </div>
              <h3>Backend nodes</h3>
              <p>Drop a node per site, region, or customer. Clients route to the nearest healthy one. Nodes cache rules and queue device data while the control plane is offline.</p>
            </div>
            <div className="feat">
              <div className="feat-num">F.05</div>
              <div className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2 4 5v5c0 4 2.5 6.5 6 8 3.5-1.5 6-4 6-8V5l-6-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="m7.5 10 2 2 3.5-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3>Cross-platform agent</h3>
              <p>One C# worker for both Windows (winget) and Linux (apt foundation). Signed manifests. HTTPS polling. Per-device identity. No runtime required.</p>
            </div>
            <div className="feat">
              <div className="feat-num">F.06</div>
              <div className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              </div>
              <h3>Auth that fits ops</h3>
              <p>Standalone owner account, MFA, recovery codes, RBAC, session tracking, impossible-travel review, optional OAuth linking. No SSO tax.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────── */}
      <section className="block" id="how" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">02</span>How it works</div>
            <h2 className="section-title">One control plane. As many nodes as your topology needs.</h2>
            <p className="section-lede">Run a single management server behind your load balancer. Attach backend nodes per site, region, or customer network. Devices choose the nearest healthy one. The control plane never has to be reachable from your endpoints.</p>
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
                ['05', 'Roll out client', 'C# worker on Windows + Linux devices.'],
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

      {/* ── Security ─────────────────────────────────────── */}
      <section className="block" id="security">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">03</span>Security</div>
            <h2 className="section-title">A patch tool that doesn't widen your attack surface.</h2>
            <p className="section-lede">Standalone identity, signed manifests, allowlisted provider operations, full audit. Self-host inside your perimeter and your endpoints never need to talk to the public internet.</p>
          </div>
          <div className="sec-grid">
            <div className="sec-cell">
              <div className="sec-tag">S.01 · Identity</div>
              <h3>Local-first auth, no SSO tax.</h3>
              <p>First setup demands a local owner. Standalone auth ships with MFA, recovery codes, lockout, session tracking. OAuth linking is opt-in, later.</p>
              <ul className="sec-list">
                <li>TOTP MFA + recovery codes by default</li>
                <li>RBAC with org / team / device scopes</li>
                <li>Impossible-travel review queue</li>
                <li>Session tracking with revoke</li>
              </ul>
            </div>
            <div className="sec-cell">
              <div className="sec-tag">S.02 · Agents</div>
              <h3>Signed everything, polled outbound.</h3>
              <p>Clients pull from backend nodes over HTTPS. Manifests are signed by the control plane. Per-device identity. Failover across nodes is automatic.</p>
              <ul className="sec-list">
                <li>Signed backend manifests (ES256)</li>
                <li>Per-device long-lived identity</li>
                <li>Outbound-only HTTPS poll</li>
                <li>Automatic node failover</li>
              </ul>
            </div>
            <div className="sec-cell">
              <div className="sec-tag">S.03 · Execution</div>
              <h3>Allowlisted operations only.</h3>
              <p>Patch actions are restricted to provider-approved ops. MSI support requires hashes, signatures, and controlled arguments — no arbitrary execution.</p>
              <ul className="sec-list">
                <li>winget &amp; apt provider gates</li>
                <li>Hash + signature pinning for MSI</li>
                <li>No remote shell. Ever.</li>
                <li>Argument allowlists per package</li>
              </ul>
            </div>
            <div className="sec-cell">
              <div className="sec-tag">S.04 · Audit</div>
              <h3>Every privileged action, on the record.</h3>
              <p>Every privileged action emits an audit event for review, alerting, and compliance workflows. Stream to your SIEM or query it in place.</p>
              <ul className="sec-list">
                <li>Append-only audit log</li>
                <li>Webhook + syslog export</li>
                <li>Alerting on policy bypass</li>
                <li>Retention policies per role</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────── */}
      <section className="block" id="pricing" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">04</span>Pricing</div>
            <h2 className="section-title">Free forever to self-host. Pay only when you don't want to.</h2>
            <p className="section-lede">The community edition is the same code that runs hosted — same features, same primitives. Pick the plan that fits how much of the operational load you want to carry.</p>
          </div>
          <div className="price-grid">
            <div className="plan">
              <div className="plan-name">Community</div>
              <h3>Self-hosted</h3>
              <p className="plan-desc">For labs, homelabs, contributors and teams that prefer their own metal.</p>
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
              <a href="#contact" className="plan-cta">Contact sales <span>→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Downloads ────────────────────────────────────── */}
      <section className="block" id="downloads">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">05</span>Downloads</div>
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
              <p>1Patch is built by Verto-IT in Germany, AGPLv3 forever, and run in production on fleets that genuinely cannot afford downtime. Pull the image, run the migration, enroll the first node — you're in business in fifteen minutes.</p>
            </div>
            <div className="cta-actions">
              <a href="#downloads" className="btn btn-primary">
                Pull the container
                <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="mailto:hello@1patch.app" className="btn btn-secondary">
                hello@1patch.app
                <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
