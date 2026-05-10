import { useState } from 'react';
import { Activity, CheckCircle2, ChevronRight, Clipboard, Globe, Shield, XCircle, Zap } from 'lucide-react';

type SiemType = 'sentinel' | 'splunk' | 'webhook';
type Step = 1 | 2 | 3 | 4;
type TestStatus = 'idle' | 'testing' | 'success' | 'error';

interface SentinelFields { workspaceId: string; sharedKey: string; logType: string }
interface SplunkFields   { url: string; token: string }
interface WebhookFields  { url: string; secret: string }

const SIEM_META: Record<SiemType, { label: string; icon: React.ReactNode; description: string }> = {
  sentinel: {
    label: 'Microsoft Sentinel',
    icon: <Shield size={22} />,
    description: 'Azure Log Analytics workspace via HTTP Data Collector API',
  },
  splunk: {
    label: 'Splunk',
    icon: <Zap size={22} />,
    description: 'Splunk HTTP Event Collector (HEC) endpoint',
  },
  webhook: {
    label: 'Generic Webhook',
    icon: <Globe size={22} />,
    description: 'Any HTTPS endpoint — optional HMAC-SHA256 signing',
  },
};

const KQL_QUERIES = [
  { label: 'Critical events', query: 'OnePatchEvents\n| where severity == "critical"' },
  { label: 'High-risk tasks', query: 'OnePatchEvents\n| where type == "task.high_risk_detected"' },
  { label: 'Event summary', query: 'OnePatchEvents\n| summarize count() by type' },
];

const SPLUNK_QUERIES = [
  { label: 'Critical events', query: 'index=onepatch severity=critical' },
  { label: 'High-risk tasks', query: 'index=onepatch type=task.high_risk_detected' },
];

/**
 * Renders the siem setup UI.
 * @returns The result produced by the operation.
 */
export function SiemSetup() {
  const [step, setStep]           = useState<Step>(1);
  const [siemType, setSiemType]   = useState<SiemType | null>(null);
  const [sentinel, setSentinel]   = useState<SentinelFields>({ workspaceId: '', sharedKey: '', logType: 'OnePatchEvents' });
  const [splunk, setSplunk]       = useState<SplunkFields>({ url: '', token: '' });
  const [webhook, setWebhook]     = useState<WebhookFields>({ url: '', secret: '' });
  const [testStatus, setTestStatus] = useState<TestStatus>('idle');
  const [testError, setTestError] = useState('');
  const [enabled, setEnabled]     = useState(false);
  const [copied, setCopied]       = useState<string | null>(null);

  /**
   * Handles the select type operation.
   *
   * @param t t supplied to the function.
   */
  function selectType(t: SiemType) {
    setSiemType(t);
    setStep(2);
    setTestStatus('idle');
    setEnabled(false);
  }

  /**
   * Validates can advance to test rules.
   * @returns The result produced by the operation.
   */
  function canAdvanceToTest() {
    if (!siemType) return false;
    if (siemType === 'sentinel') return sentinel.workspaceId.trim() !== '' && sentinel.sharedKey.trim() !== '';
    if (siemType === 'splunk')   return splunk.url.startsWith('https://') && splunk.token.trim() !== '';
    if (siemType === 'webhook')  return webhook.url.startsWith('https://');
    return false;
  }

  /**
   * Handles the run test operation.
   */
  function runTest() {
    setTestStatus('testing');
    setTestError('');
    // Simulate network round-trip
    setTimeout(() => {
      const fail = siemType === 'splunk' && splunk.token === 'fail';
      if (fail) {
        setTestStatus('error');
        setTestError('HTTP 403 — Splunk HEC token rejected');
      } else {
        setTestStatus('success');
      }
    }, 1400);
  }

  /**
   * Handles the copy to clipboard operation.
   *
   * @param text text supplied to the function.
   * @param key key supplied to the function.
   */
  function copyToClipboard(text: string, key: string) {
    navigator.clipboard.writeText(text).catch(() => undefined);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  }

  const stepLabels: Record<Step, string> = {
    1: 'Select SIEM',
    2: 'Configure',
    3: 'Test connection',
    4: 'Enable',
  };

  return (
    <div className="siem-page">
      {/* ── Page hero ── */}
      <section className="siem-hero">
        <div className="wrap siem-hero-inner">
          <div className="siem-hero-copy">
            <div className="eyebrow"><span className="pill">Easy SIEM Connect</span>Under 2 minutes</div>
            <h1 className="headline">Send 1Patch events to your SIEM.</h1>
            <p className="sub">Connect Microsoft Sentinel, Splunk, or any HTTPS endpoint with a guided 4-step wizard. No scripting required.</p>
          </div>
          <div className="siem-badge-row">
            {(['sentinel', 'splunk', 'webhook'] as SiemType[]).map((t) => (
              <div className="siem-badge" key={t}>
                <span className="siem-badge-icon">{SIEM_META[t].icon}</span>
                <span>{SIEM_META[t].label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wizard ── */}
      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">01</span>Setup wizard</div>
            <h2 className="section-title">Connect in 4 steps</h2>
            <p className="section-lede">Select your SIEM, enter minimal credentials, send a test event, and go live.</p>
          </div>

          {/* Step indicator */}
          <div className="siem-steps">
            {([1, 2, 3, 4] as Step[]).map((s) => (
              <div
                key={s}
                className={`siem-step-dot ${step === s ? 'active' : ''} ${step > s ? 'done' : ''}`}
                onClick={() => { if (step > s) setStep(s); }}
              >
                <span className="siem-step-num">{step > s ? <CheckCircle2 size={14} /> : s}</span>
                <span className="siem-step-label">{stepLabels[s]}</span>
              </div>
            ))}
          </div>

          <div className="siem-wizard">
            {/* Step 1 — Select SIEM */}
            {step === 1 && (
              <div className="siem-panel">
                <h3 className="siem-panel-title">Which SIEM are you connecting?</h3>
                <div className="siem-type-grid">
                  {(['sentinel', 'splunk', 'webhook'] as SiemType[]).map((t) => (
                    <button key={t} className="siem-type-card" onClick={() => selectType(t)}>
                      <span className="siem-type-icon">{SIEM_META[t].icon}</span>
                      <strong>{SIEM_META[t].label}</strong>
                      <p>{SIEM_META[t].description}</p>
                      <span className="siem-type-arrow"><ChevronRight size={16} /></span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 — Configure */}
            {step === 2 && siemType && (
              <div className="siem-panel">
                <div className="siem-panel-head">
                  <span className="siem-panel-icon">{SIEM_META[siemType].icon}</span>
                  <div>
                    <h3 className="siem-panel-title">{SIEM_META[siemType].label}</h3>
                    <p className="siem-panel-sub">{SIEM_META[siemType].description}</p>
                  </div>
                </div>

                {siemType === 'sentinel' && (
                  <div className="siem-form">
                    <label className="siem-label">
                      Workspace ID <span className="req">*</span>
                      <input
                        className="siem-input"
                        placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                        value={sentinel.workspaceId}
                        onChange={(e) => setSentinel({ ...sentinel, workspaceId: e.target.value })}
                      />
                    </label>
                    <label className="siem-label">
                      Shared Key <span className="req">*</span>
                      <input
                        className="siem-input"
                        type="password"
                        placeholder="Base64-encoded primary or secondary key"
                        value={sentinel.sharedKey}
                        onChange={(e) => setSentinel({ ...sentinel, sharedKey: e.target.value })}
                      />
                      <span className="siem-hint">Find this in Azure Portal → Log Analytics workspace → Agents</span>
                    </label>
                    <label className="siem-label">
                      Log Type
                      <input
                        className="siem-input"
                        placeholder="OnePatchEvents"
                        value={sentinel.logType}
                        onChange={(e) => setSentinel({ ...sentinel, logType: e.target.value })}
                      />
                      <span className="siem-hint">Custom table name created in your workspace</span>
                    </label>
                  </div>
                )}

                {siemType === 'splunk' && (
                  <div className="siem-form">
                    <label className="siem-label">
                      HEC Endpoint URL <span className="req">*</span>
                      <input
                        className="siem-input"
                        placeholder="https://splunk.example.com:8088/services/collector"
                        value={splunk.url}
                        onChange={(e) => setSplunk({ ...splunk, url: e.target.value })}
                      />
                      {splunk.url && !splunk.url.startsWith('https://') && (
                        <span className="siem-error-hint">URL must start with https://</span>
                      )}
                    </label>
                    <label className="siem-label">
                      HEC Token <span className="req">*</span>
                      <input
                        className="siem-input"
                        type="password"
                        placeholder="Splunk HEC token"
                        value={splunk.token}
                        onChange={(e) => setSplunk({ ...splunk, token: e.target.value })}
                      />
                      <span className="siem-hint">Settings → Data Inputs → HTTP Event Collector</span>
                    </label>
                  </div>
                )}

                {siemType === 'webhook' && (
                  <div className="siem-form">
                    <label className="siem-label">
                      Endpoint URL <span className="req">*</span>
                      <input
                        className="siem-input"
                        placeholder="https://hooks.example.com/1patch"
                        value={webhook.url}
                        onChange={(e) => setWebhook({ ...webhook, url: e.target.value })}
                      />
                      {webhook.url && !webhook.url.startsWith('https://') && (
                        <span className="siem-error-hint">URL must start with https://</span>
                      )}
                    </label>
                    <label className="siem-label">
                      Signing Secret <span className="siem-optional">(optional)</span>
                      <input
                        className="siem-input"
                        type="password"
                        placeholder="HMAC-SHA256 secret"
                        value={webhook.secret}
                        onChange={(e) => setWebhook({ ...webhook, secret: e.target.value })}
                      />
                      <span className="siem-hint">1Patch will sign payloads with x-1patch-signature</span>
                    </label>
                  </div>
                )}

                <div className="siem-actions">
                  <button className="btn btn-secondary" onClick={() => setStep(1)}>← Back</button>
                  <button
                    className="btn btn-primary"
                    disabled={!canAdvanceToTest()}
                    onClick={() => setStep(3)}
                  >
                    Continue <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 — Test connection */}
            {step === 3 && siemType && (
              <div className="siem-panel">
                <h3 className="siem-panel-title">Test your connection</h3>
                <p className="siem-panel-sub">1Patch will send a synthetic test event to verify credentials and reachability.</p>

                <div className="siem-test-event">
                  <div className="siem-test-event-head">
                    <span className="siem-mono">Test event payload</span>
                  </div>
                  <pre className="siem-code">{JSON.stringify({
                    type: 'siem.test',
                    message: '1Patch SIEM integration working',
                    timestamp: new Date().toISOString(),
                    source: '1patch-siem-test',
                  }, null, 2)}</pre>
                </div>

                {testStatus === 'idle' && (
                  <button className="btn btn-primary siem-test-btn" onClick={runTest}>
                    <Activity size={16} /> Send test event
                  </button>
                )}

                {testStatus === 'testing' && (
                  <div className="siem-test-status testing">
                    <span className="siem-spinner" />
                    Sending test event to {SIEM_META[siemType].label}…
                  </div>
                )}

                {testStatus === 'success' && (
                  <div className="siem-test-status success">
                    <CheckCircle2 size={18} />
                    Test successful — {SIEM_META[siemType].label} received the event
                  </div>
                )}

                {testStatus === 'error' && (
                  <div className="siem-test-status error">
                    <XCircle size={18} />
                    <div>
                      <strong>Test failed</strong>
                      <p>{testError}</p>
                    </div>
                  </div>
                )}

                <div className="siem-actions">
                  <button className="btn btn-secondary" onClick={() => setStep(2)}>← Back</button>
                  {testStatus === 'error' && (
                    <button className="btn btn-secondary" onClick={runTest}>Retry</button>
                  )}
                  <button
                    className="btn btn-primary"
                    disabled={testStatus !== 'success'}
                    onClick={() => setStep(4)}
                  >
                    Continue <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4 — Enable */}
            {step === 4 && siemType && (
              <div className="siem-panel">
                {!enabled ? (
                  <>
                    <h3 className="siem-panel-title">Enable SIEM integration</h3>
                    <p className="siem-panel-sub">
                      Configuration is validated and the test event was accepted.
                      Enabling will start forwarding events immediately.
                    </p>
                    <div className="siem-summary">
                      <div className="siem-summary-row">
                        <span>Integration</span>
                        <strong>{SIEM_META[siemType].label}</strong>
                      </div>
                      <div className="siem-summary-row">
                        <span>Event mode</span>
                        <strong>standard</strong>
                      </div>
                      {siemType === 'sentinel' && (
                        <div className="siem-summary-row">
                          <span>Workspace ID</span>
                          <strong className="siem-mono">{sentinel.workspaceId || '—'}</strong>
                        </div>
                      )}
                      {siemType === 'splunk' && (
                        <div className="siem-summary-row">
                          <span>HEC URL</span>
                          <strong className="siem-mono">{splunk.url || '—'}</strong>
                        </div>
                      )}
                      {siemType === 'webhook' && (
                        <div className="siem-summary-row">
                          <span>Endpoint</span>
                          <strong className="siem-mono">{webhook.url || '—'}</strong>
                        </div>
                      )}
                    </div>
                    <div className="siem-actions">
                      <button className="btn btn-secondary" onClick={() => setStep(3)}>← Back</button>
                      <button className="btn btn-primary siem-enable-btn" onClick={() => setEnabled(true)}>
                        Enable SIEM integration
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="siem-enabled-state">
                    <div className="siem-enabled-icon"><CheckCircle2 size={36} /></div>
                    <h3>Integration enabled</h3>
                    <p>1Patch is now forwarding events to <strong>{SIEM_META[siemType].label}</strong>.</p>
                    <div className="siem-health-pill connected">
                      <span className="live-dot" />
                      Connected · Last success just now
                    </div>
                    <button className="btn btn-secondary" onClick={() => { setStep(1); setSiemType(null); setEnabled(false); setTestStatus('idle'); }}>
                      Configure another
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Health panel ── */}
      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">02</span>Health panel</div>
            <h2 className="section-title">Live integration status</h2>
            <p className="section-lede">Monitor SIEM connectivity from your dashboard. Near real-time refresh.</p>
          </div>

          <div className="siem-health-board">
            <div className="siem-health-board-head">
              <span className="board-title">SIEM Status</span>
              <span className="board-status"><span className="live-dot" />live</span>
            </div>
            <div className="siem-health-rows">
              {[
                { name: 'Microsoft Sentinel', status: 'connected', lastSuccess: '2 min ago', failures: 0, error: null },
                { name: 'Splunk HEC',         status: 'failing',   lastSuccess: '1 hr ago',  failures: 3, error: 'HTTP 503 — upstream unavailable' },
                { name: 'Generic Webhook',    status: 'disabled',  lastSuccess: null,          failures: 0, error: null },
              ].map((row) => (
                <div key={row.name} className={`siem-health-row status-${row.status}`}>
                  <div className="siem-health-row-name">
                    <span className={`siem-status-dot ${row.status}`} />
                    <strong>{row.name}</strong>
                  </div>
                  <div className="siem-health-row-meta">
                    {row.status === 'connected' && <span className="siem-tag ok">Connected ✅</span>}
                    {row.status === 'failing'   && <span className="siem-tag warn">Failing ⚠</span>}
                    {row.status === 'disabled'  && <span className="siem-tag off">Disabled ❌</span>}
                  </div>
                  <div className="siem-health-row-detail">
                    {row.lastSuccess && <span>Last success: {row.lastSuccess}</span>}
                    {row.failures > 0 && <span className="siem-failures">{row.failures} failure{row.failures !== 1 ? 's' : ''}</span>}
                    {row.error && <span className="siem-last-error">{row.error}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Prebuilt queries ── */}
      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">03</span>Prebuilt queries</div>
            <h2 className="section-title">Start analyzing immediately</h2>
            <p className="section-lede">Copy these queries directly into your SIEM. No customization needed to get started.</p>
          </div>

          <div className="siem-queries-grid">
            <div className="siem-query-col">
              <div className="siem-query-header">
                <Shield size={16} />
                <span>Microsoft Sentinel (KQL)</span>
              </div>
              {KQL_QUERIES.map((q) => (
                <div key={q.label} className="siem-query-block">
                  <div className="siem-query-block-head">
                    <span className="siem-query-label">{q.label}</span>
                    <button
                      className="siem-copy-btn"
                      onClick={() => copyToClipboard(q.query, `kql-${q.label}`)}
                    >
                      <Clipboard size={13} />
                      {copied === `kql-${q.label}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="siem-code">{q.query}</pre>
                </div>
              ))}
            </div>

            <div className="siem-query-col">
              <div className="siem-query-header">
                <Zap size={16} />
                <span>Splunk SPL</span>
              </div>
              {SPLUNK_QUERIES.map((q) => (
                <div key={q.label} className="siem-query-block">
                  <div className="siem-query-block-head">
                    <span className="siem-query-label">{q.label}</span>
                    <button
                      className="siem-copy-btn"
                      onClick={() => copyToClipboard(q.query, `spl-${q.label}`)}
                    >
                      <Clipboard size={13} />
                      {copied === `spl-${q.label}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="siem-code">{q.query}</pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
