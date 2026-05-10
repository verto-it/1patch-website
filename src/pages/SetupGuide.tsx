import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clipboard,
  Database,
  KeyRound,
  Monitor,
  Network,
  Server,
  Settings,
  Shield,
  Terminal,
} from 'lucide-react';

const panel: React.CSSProperties = {
  background: 'var(--paper)',
  border: '1px solid var(--line)',
  borderRadius: '3px',
};

const tag: React.CSSProperties = {
  fontFamily: 'var(--mono)',
  fontSize: '10px',
  color: 'var(--mute-2)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

/**
 * Renders the code UI.
 *
 * @param props Component props supplied by the caller.
 * @returns The result produced by the operation.
 */
function Code({ children }: { children: string }) {
  return (
    <code
      style={{
        display: 'block',
        marginTop: '14px',
        fontFamily: 'var(--mono)',
        fontSize: '12px',
        lineHeight: '1.75',
        background: 'var(--ink)',
        color: 'var(--accent)',
        padding: '16px 18px',
        borderRadius: '3px',
        whiteSpace: 'pre',
        overflowX: 'auto',
      }}
    >
      {children}
    </code>
  );
}

/**
 * Renders the checklist UI.
 *
 * @param props Component props supplied by the caller.
 * @returns The result produced by the operation.
 */
function Checklist({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: '7px' }}>
      {items.map((item) => (
        <li key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
          <CheckCircle2 size={13} style={{ color: 'var(--accent-ink)', flexShrink: 0, marginTop: '3px' }} />
          <span style={{ fontSize: '13px', color: 'var(--mute)', lineHeight: '1.55' }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Renders the callout UI.
 *
 * @param props Component props supplied by the caller.
 * @returns The result produced by the operation.
 */
function Callout({ children, warn = false }: { children: React.ReactNode; warn?: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
        marginTop: '16px',
        background: warn ? 'oklch(97% 0.04 60)' : 'var(--accent-soft)',
        border: warn ? '1px solid var(--warn)' : '1px solid var(--accent)',
        borderRadius: '3px',
        padding: '12px 14px',
      }}
    >
      {warn ? (
        <AlertTriangle size={14} style={{ color: 'var(--warn)', flexShrink: 0, marginTop: '2px' }} />
      ) : (
        <Shield size={14} style={{ color: 'var(--accent-ink)', flexShrink: 0, marginTop: '2px' }} />
      )}
      <span style={{ fontSize: '13px', color: warn ? 'var(--ink-2)' : 'var(--accent-ink)', lineHeight: '1.55' }}>
        {children}
      </span>
    </div>
  );
}

/**
 * Renders the info card UI.
 *
 * @param props Component props supplied by the caller.
 * @returns The result produced by the operation.
 */
function InfoCard({
  icon,
  title,
  body,
  facts,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  facts: string[];
}) {
  return (
    <div style={{ ...panel, padding: '18px 20px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <div className="article-icon" style={{ marginBottom: 0, flexShrink: 0 }}>{icon}</div>
        <div>
          <h3 style={{ fontSize: '16px', marginBottom: '6px' }}>{title}</h3>
          <p style={{ fontSize: '13px', color: 'var(--mute)', lineHeight: 1.6 }}>{body}</p>
          <Checklist items={facts} />
        </div>
      </div>
    </div>
  );
}

/**
 * Renders the step UI.
 *
 * @param props Component props supplied by the caller.
 * @returns The result produced by the operation.
 */
function Step({
  num,
  screen,
  title,
  children,
}: {
  num: string;
  screen: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="step">
      <div className="step-num">{num}</div>
      <div className="step-content">
        <p style={{ ...tag, marginBottom: '6px' }}>{screen}</p>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

/**
 * Renders the field table UI.
 *
 * @param props Component props supplied by the caller.
 * @returns The result produced by the operation.
 */
function FieldTable({ rows }: { rows: Array<[string, string]> }) {
  return (
    <div style={{ ...panel, marginTop: '14px', overflow: 'hidden' }}>
      {rows.map(([name, description], index) => (
        <div
          key={name}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(140px, 190px) minmax(0, 1fr)',
            gap: '16px',
            padding: '11px 14px',
            borderTop: index === 0 ? 0 : '1px solid var(--line)',
          }}
        >
          <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink)', minWidth: 0, overflowWrap: 'anywhere' }}>{name}</span>
          <span style={{ fontSize: '13px', color: 'var(--mute)', lineHeight: 1.5, minWidth: 0, overflowWrap: 'anywhere' }}>{description}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * Renders the flow diagram UI.
 * @returns The result produced by the operation.
 */
function FlowDiagram() {
  const box = { fill: 'var(--paper)', stroke: 'var(--line)', strokeWidth: 1 } as React.CSSProperties;
  const accent = { fill: 'var(--accent-soft)', stroke: 'var(--accent)', strokeWidth: 1 } as React.CSSProperties;
  const muted = { fill: 'var(--bg-2)', stroke: 'var(--line)', strokeWidth: 1 } as React.CSSProperties;
  const title = { fill: 'var(--ink)', fontFamily: 'var(--sans)', fontSize: 13, fontWeight: '600' } as React.CSSProperties;
  const small = { fill: 'var(--mute)', fontFamily: 'var(--mono)', fontSize: 10 } as React.CSSProperties;
  const line = { stroke: 'var(--line-2)', strokeWidth: 1.5, fill: 'none' } as React.CSSProperties;

  return (
    <div style={{ overflowX: 'auto' }}>
      <svg viewBox="0 0 690 360" width="100%" style={{ maxWidth: 720, display: 'block' }} role="img" aria-label="1Patch setup flow">
        <rect x="34" y="36" width="190" height="82" rx="3" style={accent} />
        <text x="129" y="68" textAnchor="middle" style={title}>Management Setup</text>
        <text x="129" y="88" textAnchor="middle" style={small}>/setup in the browser</text>
        <text x="129" y="104" textAnchor="middle" style={small}>storage · owner · first node</text>

        <line x1="224" y1="77" x2="282" y2="77" style={line} />
        <polygon points="279,72 289,77 279,82" style={{ fill: 'var(--line-2)' }} />

        <rect x="290" y="36" width="190" height="82" rx="3" style={box} />
        <text x="385" y="68" textAnchor="middle" style={title}>Dashboard</text>
        <text x="385" y="88" textAnchor="middle" style={small}>nodes · devices · rules</text>
        <text x="385" y="104" textAnchor="middle" style={small}>generates setup JSON</text>

        <line x1="480" y1="77" x2="538" y2="77" style={line} />
        <polygon points="535,72 545,77 535,82" style={{ fill: 'var(--line-2)' }} />

        <rect x="546" y="36" width="110" height="82" rx="3" style={muted} />
        <text x="601" y="68" textAnchor="middle" style={title}>Operators</text>
        <text x="601" y="88" textAnchor="middle" style={small}>copy JSON</text>
        <text x="601" y="104" textAnchor="middle" style={small}>paste once</text>

        <line x1="385" y1="118" x2="385" y2="170" style={line} />
        <polygon points="380,167 385,177 390,167" style={{ fill: 'var(--line-2)' }} />

        <rect x="94" y="178" width="220" height="86" rx="3" style={box} />
        <text x="204" y="211" textAnchor="middle" style={title}>Backend Node Setup</text>
        <text x="204" y="231" textAnchor="middle" style={small}>paste node enrollment JSON</text>
        <text x="204" y="247" textAnchor="middle" style={small}>node appears online</text>

        <rect x="376" y="178" width="220" height="86" rx="3" style={box} />
        <text x="486" y="211" textAnchor="middle" style={title}>Client Setup</text>
        <text x="486" y="231" textAnchor="middle" style={small}>paste Add Clients JSON</text>
        <text x="486" y="247" textAnchor="middle" style={small}>device enrolls + reports inventory</text>

        <line x1="314" y1="221" x2="376" y2="221" style={{ ...line, strokeDasharray: '4 4' }} />
        <text x="345" y="213" textAnchor="middle" style={small}>agents use nodes</text>

        <rect x="212" y="304" width="266" height="34" rx="3" style={accent} />
        <text x="345" y="326" textAnchor="middle" style={{ ...title, fill: 'var(--accent-ink)' }}>Ready for rules, packages, and monitoring</text>
      </svg>
    </div>
  );
}

/**
 * Renders the setup guide UI.
 * @returns The result produced by the operation.
 */
export function SetupGuide() {
  return (
    <section className="page">
      <span className="eyebrow-page">Setup</span>
      <h1>First-Run Setup Guide</h1>
      <p className="lead compact">
        This guide starts where an operator actually starts: with the 1Patch setup page in a browser.
        You do not hand-write service files or run setup scripts. The management UI walks through the
        control plane, then the dashboard gives you JSON to paste into backend nodes and clients.
      </p>

      <section className="block">
        <div className="section-head">
          <div className="section-eyebrow"><span className="num">01</span>Before You Begin</div>
          <h2 className="section-title">Have these values ready</h2>
          <p className="section-lede">
            The first-run UI is straightforward when the required addresses and credentials are in front
            of you. If another team deployed 1Patch, ask them for these values before opening setup.
          </p>
        </div>

        <div className="grid two" style={{ maxWidth: '900px' }}>
          <InfoCard
            icon={<Server size={16} />}
            title="Management setup address"
            body="The browser URL for the first-run setup page. It normally ends in /setup."
            facts={[
              'Example: https://manage.example.com:4100/setup',
              'Use the final hostname users and agents will trust.',
              'If a certificate warning appears, fix that before enrolling production devices.',
            ]}
          />
          <InfoCard
            icon={<Database size={16} />}
            title="Storage connection values"
            body="The setup page needs PostgreSQL and DragonflyDB connection details."
            facts={[
              'PostgreSQL server URL, database name, and credentials.',
              'DragonflyDB URL for management runtime state.',
              'Use 1patch_management as the database name unless your environment standard says otherwise.',
            ]}
          />
          <InfoCard
            icon={<Network size={16} />}
            title="Backend node address"
            body="Each backend node needs a public URL that clients can reach."
            facts={[
              'Example: https://node-1.example.com:4200',
              'Do not reuse the management URL for the node URL.',
              'Have the node name, region, and site label ready.',
            ]}
          />
          <InfoCard
            icon={<KeyRound size={16} />}
            title="First owner account"
            body="The setup UI creates the first local owner account."
            facts={[
              'Use a real mailbox controlled by the customer or operations team.',
              'Use a strong password; the backend enforces password rules.',
              'This owner is used to enter the dashboard and generate device configs.',
            ]}
          />
        </div>
      </section>

      <section className="block">
        <div className="section-head">
          <div className="section-eyebrow"><span className="num">02</span>How Setup Works</div>
          <h2 className="section-title">Browser first, JSON after that</h2>
          <p className="section-lede">
            There are three setup surfaces: the management setup page, the backend node first-run console,
            and the client first-run console. Only the management setup page asks for infrastructure values.
          </p>
        </div>

        <FlowDiagram />

        <div style={{ display: 'grid', gap: '12px', maxWidth: '860px', marginTop: '32px' }}>
          <div style={{ ...panel, padding: '16px 20px' }}>
            <p style={{ fontWeight: 600, fontSize: '14px', marginBottom: '6px' }}>Management setup page</p>
            <p style={{ fontSize: '13px', color: 'var(--mute)', lineHeight: 1.6 }}>
              Validates storage, prepares the database schema automatically, creates the owner account,
              and creates a backend node enrollment JSON object.
            </p>
          </div>
          <div style={{ ...panel, padding: '16px 20px' }}>
            <p style={{ fontWeight: 600, fontSize: '14px', marginBottom: '6px' }}>Dashboard Add Clients wizard</p>
            <p style={{ fontSize: '13px', color: 'var(--mute)', lineHeight: 1.6 }}>
              Generates the one-line client JSON with enrollment token, management URL, trusted download hosts,
              and the scoped signing metadata clients need.
            </p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="section-head">
          <div className="section-eyebrow"><span className="num">03</span>Management Setup</div>
          <h2 className="section-title">Complete the setup page</h2>
          <p className="section-lede">
            Work through the setup tabs left to right. Do not create clients until storage, owner, and at
            least one backend node are healthy.
          </p>
        </div>

        <div className="steps-list" style={{ maxWidth: '860px' }}>
          <Step num="01" screen="/setup · Storage" title="Validate storage">
            <p>
              Enter the PostgreSQL and DragonflyDB values, then use the storage test action on the page.
              The app prepares its own database schema during this check and on normal startup. Continue
              only after both checks are green.
            </p>
            <FieldTable rows={[
              ['PostgreSQL server URL', 'The server-level connection string, without the database name appended.'],
              ['Database name', 'Usually 1patch_management. The setup page combines this with the server URL.'],
              ['DragonflyDB URL', 'Redis-compatible URL used by the management server.'],
              ['Owner email/password', 'Used by setup when preparing the first owner values.'],
            ]} />
            <Checklist items={[
              'A failed PostgreSQL test means the database host, credentials, firewall, or database name is wrong.',
              'A failed DragonflyDB test means management runtime state will not persist correctly.',
              'There is no separate database action for the operator.',
              'Fix red checks before moving to Owner.',
            ]} />
          </Step>

          <Step num="02" screen="/setup · Owner" title="Create the first owner">
            <p>
              Enter the owner email and password, then create the account. This is the first dashboard
              administrator. After this exists, setup actions that change the system require owner auth.
            </p>
            <Checklist items={[
              'Use a named admin mailbox, not a throwaway address.',
              'Store the password in the customer password manager.',
              'If the owner already exists, sign in normally and continue in the dashboard.',
            ]} />
          </Step>

          <Step num="03" screen="/setup · Backend Node" title="Create the first backend node enrollment">
            <p>
              Fill in the node name and its public URL, then create the enrollment. Copy the full JSON
              result. This is the object you paste into the backend node first-run console.
            </p>
            <FieldTable rows={[
              ['Node name', 'Human-readable name, such as Berlin Office or node-1.'],
              ['Node public URL', 'The URL clients can reach for this backend node. It must not be the management URL.'],
              ['Region', 'Optional location or cloud region label.'],
              ['Site', 'Optional site, office, tenant, or network label.'],
            ]} />
            <Code>{`{
  "managementUrl": "https://manage.example.com:4100",
  "nodePublicUrl": "https://node-1.example.com:4200",
  "nodeId": "generated-by-management",
  "nodeEnrollmentToken": "node_generated_token",
  "dragonflyUrl": "redis://localhost:6380"
}`}</Code>
          </Step>
        </div>
      </section>

      <section className="block">
        <div className="section-head">
          <div className="section-eyebrow"><span className="num">04</span>Backend Node</div>
          <h2 className="section-title">Paste the node JSON</h2>
          <p className="section-lede">
            A backend node with no configuration opens an interactive first-run setup. The default path is
            JSON input, because the management UI already generated the correct values.
          </p>
        </div>

        <div style={{ maxWidth: '860px' }}>
          <div style={{ ...panel, padding: '20px 22px' }}>
            <p style={{ fontWeight: 600, fontSize: '15px', marginBottom: '8px' }}>What the node operator does</p>
            <Checklist items={[
              'Open the backend node first-run console on the node machine.',
              'When asked for setup mode, choose JSON or press Enter.',
              'Paste the full enrollment JSON copied from management.',
              'If dragonflyUrl is blank, enter the node queue DragonflyDB URL.',
              'Confirm registration when prompted.',
            ]} />
            <Code>{`1Patch Backend Node Console Setup
Enter enrollment as JSON or individual fields? [json/individual]
Paste enrollment JSON, then press Enter on a blank line.`}</Code>
          </div>

          <Callout>
            Success looks like this: the backend node writes its local configuration, registers with
            management, receives its node certificate, and appears as online in the Nodes dashboard.
          </Callout>
        </div>
      </section>

      <section className="block">
        <div className="section-head">
          <div className="section-eyebrow"><span className="num">05</span>Clients</div>
          <h2 className="section-title">Generate and paste client JSON</h2>
          <p className="section-lede">
            Client setup is also copy/paste. The dashboard builds the JSON; the client first-run console
            stores it in appsettings.json and starts enrollment.
          </p>
        </div>

        <div className="steps-list" style={{ maxWidth: '860px' }}>
          <Step num="01" screen="Dashboard · Add Clients" title="Create the client config">
            <p>
              Open the dashboard and use Add Clients. Choose Single client for one named device or Batch
              for a reusable config with a maximum device count.
            </p>
            <FieldTable rows={[
              ['Tenant', 'Usually default unless you operate multiple tenants.'],
              ['Management URL', 'The public management URL agents use for bootstrap.'],
              ['Trusted download hosts', 'Allowed package origins. Keep this list short and explicit.'],
              ['Heartbeat seconds', 'How often agents report liveness and poll for work.'],
              ['Inventory minutes', 'How often agents report installed software inventory.'],
              ['Allowed devices', 'Batch mode limit. The same JSON stops working after this many enrollments.'],
            ]} />
          </Step>

          <Step num="02" screen="Dashboard · Config" title="Copy the JSON">
            <p>
              Use Copy JSON for the one-line value or Copy pretty JSON for readable appsettings format.
              Both contain the same required fields.
            </p>
            <Code>{`{
  "OnePatch": {
    "TenantId": "default",
    "ManagementUrl": "https://manage.example.com:4100",
    "EnrollmentToken": "client_generated_token",
    "TrustedSigningKeys": {
      "key_bootstrap_manifest_v1": { "...": "public signing metadata" },
      "key_task_bundle_v1": { "...": "public signing metadata" },
      "key_task_ledger_v1": { "...": "public signing metadata" },
      "key_kill_switch_v1": { "...": "public signing metadata" }
    },
    "TrustedDownloadHosts": ["https://manage.example.com:4100"],
    "HeartbeatSeconds": 60,
    "InventoryMinutes": 30,
    "NodeProbeTimeoutMilliseconds": 2000
  }
}`}</Code>
            <Callout>
              Do not hand-build signing metadata for production clients. The dashboard JSON includes the
              active scoped public signing keys the client must pin.
            </Callout>
          </Step>

          <Step num="03" screen="Client first-run setup" title="Paste the client JSON">
            <p>
              On the target machine, open the 1Patch client first-run console. Choose JSON or press Enter,
              paste the dashboard JSON, and let the client save its configuration.
            </p>
            <Code>{`1Patch Client Console Setup
Enter client config as JSON or individual fields? [json/individual]
Paste client JSON, then press Enter on a blank line.`}</Code>
            <Checklist items={[
              'The client discovers backend nodes from management.',
              'The client registers through a backend node using the enrollment token.',
              'The device appears in the dashboard, then inventory arrives on the configured interval.',
            ]} />
          </Step>
        </div>
      </section>

      <section className="block">
        <div className="section-head">
          <div className="section-eyebrow"><span className="num">06</span>Troubleshooting</div>
          <h2 className="section-title">Common first-run problems</h2>
          <p className="section-lede">
            Most setup issues are wrong URLs, missing storage connectivity, or copied JSON from the wrong
            environment.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '12px', maxWidth: '860px' }}>
          {[
            ['Storage test fails', 'Check the database URL, DragonflyDB URL, credentials, firewall rules, and whether the database exists.'],
            ['Owner creation fails', 'Use a password that satisfies policy, and confirm no owner already exists.'],
            ['Node asks for a different public URL', 'The node public URL cannot be the same origin as the management URL. Use the reachable node URL.'],
            ['Node stays pending', 'The enrollment JSON was not pasted, the token expired, or the node cannot reach management. Create a fresh enrollment.'],
            ['Client rejects config', 'Copy the dashboard JSON again. Production clients require TrustedSigningKeys.'],
            ['Device does not show inventory', 'Confirm at least one backend node is online, then wait for the configured inventory interval.'],
          ].map(([title, body]) => (
            <div key={title} style={{ ...panel, padding: '16px 20px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <AlertTriangle size={14} style={{ color: 'var(--warn)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: '14px', marginBottom: '6px' }}>{title}</p>
                  <p style={{ fontSize: '13px', color: 'var(--mute)', lineHeight: 1.6 }}>{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="block">
        <div className="section-head">
          <div className="section-eyebrow"><span className="num">07</span>Next Steps</div>
          <h2 className="section-title">Move into operations</h2>
          <p className="section-lede">
            Once storage is green, a node is online, and clients are reporting, move on to monitoring,
            rules, and security posture.
          </p>
        </div>

        <div className="grid three" style={{ maxWidth: '860px' }}>
          {[
            {
              icon: <Settings size={16} />,
              title: 'SIEM integration',
              desc: 'Forward patch events, audit logs, and policy changes to Sentinel, syslog, or webhooks.',
              to: '/settings/siem',
              cta: 'Configure SIEM',
            },
            {
              icon: <BookOpen size={16} />,
              title: 'Write your first rule',
              desc: 'Start from a template, review the disabled draft, then activate through the signed pipeline.',
              to: '/rules/create',
              cta: 'Open rule editor',
            },
            {
              icon: <Clipboard size={16} />,
              title: 'Review security',
              desc: 'Check signed payloads, enrollment state, audit events, and posture dashboard findings.',
              to: '/security',
              cta: 'Read the model',
            },
          ].map((item) => (
            <article key={item.title}>
              <div className="article-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link
                to={item.to}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--accent-ink)',
                }}
              >
                {item.cta}
                <ArrowRight size={13} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
