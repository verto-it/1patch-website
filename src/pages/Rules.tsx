import { Bell, CalendarClock, CheckCircle2, GitBranch, Play, Plus, ShieldCheck, SlidersHorizontal, ToggleRight } from 'lucide-react';
import type { ReactNode } from 'react';

const conditions = [
  ['device.os', '==', 'windows'],
  ['device.group', '==', 'production'],
  ['package.name', 'matches', 'chrome'],
  ['package.outdated', '==', 'true'],
];

const auditRows = [
  ['rule.triggered', 'prod-win-042', 'matched', 'risk 42'],
  ['task.security_scan.completed', 'Chrome update', 'approval required', 'risk 64'],
  ['rule.executed', 'task draft', 'visible', 'ledger pending'],
];

export function Rules() {
  return (
    <div className="rules-page">
      <section className="rules-hero">
        <div className="wrap rules-hero-grid">
          <div className="rules-copy">
            <div className="eyebrow"><span className="pill">Policy engine</span>Zero-trust automation</div>
            <h1 className="headline">Rules that create tasks, not shortcuts.</h1>
            <p className="sub">Automate patch and security workflows while preserving scan, approval, delay, signing, ledger, and SIEM guarantees.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#builder">Open builder <span className="arrow">→</span></a>
              <a className="btn btn-secondary" href="#simulation">Test simulation</a>
            </div>
          </div>
          <div className="rules-console" aria-label="Rules engine preview">
            <div className="rules-console-head">
              <span>rules / auto-patch-chrome</span>
              <span className="rules-state">enabled</span>
            </div>
            <div className="rules-flow">
              {['trigger', 'evaluate', 'draft', 'scan', 'approval', 'sign', 'delay', 'dispatch'].map((step, index) => (
                <div className="rules-flow-step" key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <b>{step}</b>
                </div>
              ))}
            </div>
            <div className="rules-guardrail">
              <ShieldCheck size={18} />
              <span>Client receives signed task bundles only</span>
            </div>
          </div>
        </div>
      </section>

      <section id="builder" className="block">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">01</span>Builder</div>
            <h2 className="section-title">A visual editor for composable policy</h2>
            <p className="section-lede">Use grouped conditions, safe action types, rate limits, and preview output before a rule is enabled.</p>
          </div>
          <div className="rule-builder-shell">
            <aside className="rule-list-panel">
              <div className="rule-panel-head">
                <strong>Rules</strong>
                <button><Plus size={15} /></button>
              </div>
              {['Auto patch Chrome weekly', 'Retry failed updates', 'Production safe mode'].map((name, i) => (
                <div className={`rule-list-item ${i === 0 ? 'active' : ''}`} key={name}>
                  <span>{name}</span>
                  <em>{i === 0 ? 'schedule' : i === 1 ? 'event' : 'manual'}</em>
                </div>
              ))}
            </aside>
            <div className="rule-editor-panel">
              <div className="rule-editor-toolbar">
                <div>
                  <h3>Auto patch Chrome weekly</h3>
                  <p>Priority 100 · safe mode enabled</p>
                </div>
                <button className="toggle-button"><ToggleRight size={18} />Enabled</button>
              </div>
              <div className="rule-section-grid">
                <RuleSection icon={<CalendarClock size={18} />} label="Trigger" value="Schedule · 0 2 * * 0" />
                <RuleSection icon={<GitBranch size={18} />} label="Conditions" value="AND group · 4 checks" />
                <RuleSection icon={<SlidersHorizontal size={18} />} label="Actions" value="Create patch task · all outdated" />
                <RuleSection icon={<ShieldCheck size={18} />} label="Guards" value="Max 25 devices · approval over risk 60" />
              </div>
              <div className="condition-board">
                <div className="condition-board-head">AND group</div>
                {conditions.map(([field, op, value]) => (
                  <div className="condition-row" key={field}>
                    <code>{field}</code>
                    <span>{op}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <div className="preview-panel">
                <div>
                  <strong>Preview</strong>
                  <span>Rule output is a task draft routed into the existing security gate.</span>
                </div>
                <code>createDraft → securityScan → approval → sign → notBefore</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="simulation" className="block">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">02</span>Simulation</div>
            <h2 className="section-title">Test a rule against a real device before it does work</h2>
            <p className="section-lede">The simulator explains match logic, planned actions, conflicts, rate-limit state, and estimated risk.</p>
          </div>
          <div className="simulation-grid">
            <div className="simulation-card">
              <div className="sim-device">
                <span>Sample device</span>
                <strong>prod-win-042</strong>
              </div>
              <button className="btn btn-primary"><Play size={15} />Test Rule</button>
            </div>
            <div className="sim-result">
              <CheckCircle2 size={20} />
              <div>
                <strong>Would trigger</strong>
                <p>Chrome is outdated, device is Windows, production group matched, maintenance window is open.</p>
              </div>
              <span>risk 42</span>
            </div>
            <div className="sim-result muted-result">
              <Bell size={20} />
              <div>
                <strong>Would create task draft</strong>
                <p>Security scan and normal approval/signing policy still apply before dispatch.</p>
              </div>
              <span>visible</span>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">03</span>Audit</div>
            <h2 className="section-title">Every rule execution leaves a trail</h2>
          </div>
          <div className="audit-table">
            {auditRows.map(([event, target, result, risk]) => (
              <div className="audit-row" key={event}>
                <code>{event}</code>
                <span>{target}</span>
                <strong>{result}</strong>
                <em>{risk}</em>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function RuleSection({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rule-section-card">
      <div>{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
