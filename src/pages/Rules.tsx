import { Bell, CalendarClock, CheckCircle2, GitBranch, Play, Plus, ShieldCheck, SlidersHorizontal, ToggleRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { useT } from '../i18n';

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

/**
 * Renders the rules UI.
 * @returns The result produced by the operation.
 */
export function Rules() {
  const { t } = useT();
  const copy = t.rules;

  return (
    <div className="rules-page">
      <section className="rules-hero">
        <div className="wrap rules-hero-grid">
          <div className="rules-copy">
            <div className="eyebrow"><span className="pill">{copy.eyebrow}</span>{copy.automationLabel}</div>
            <h1 className="headline">{copy.heroTitle}</h1>
            <p className="sub">{copy.heroSub}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/rules/create">{copy.heroCta1} <span className="arrow">→</span></a>
              <a className="btn btn-secondary" href="#simulation">{copy.heroCta2}</a>
            </div>
          </div>
          <div className="rules-console" aria-label="Rules engine preview">
            <div className="rules-console-head">
              <span>rules / auto-patch-chrome</span>
              <span className="rules-state">{copy.stateEnabled}</span>
            </div>
            <div className="rules-flow">
              {copy.flowSteps.map((step, index) => (
                <div className="rules-flow-step" key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <b>{step}</b>
                </div>
              ))}
            </div>
            <div className="rules-guardrail">
              <ShieldCheck size={18} />
              <span>{copy.guardrail}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="builder" className="block">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">01</span>{copy.builderEyebrow}</div>
            <h2 className="section-title">{copy.builderTitle}</h2>
            <p className="section-lede">{copy.builderLede}</p>
          </div>
          <div className="rule-builder-shell">
            <aside className="rule-list-panel">
              <div className="rule-panel-head">
                <strong>{copy.rulesLabel}</strong>
                <button><Plus size={15} /></button>
              </div>
              {copy.ruleItems.map((name, i) => (
                <div className={`rule-list-item ${i === 0 ? 'active' : ''}`} key={name}>
                  <span>{name}</span>
                  <em>{copy.ruleItemTypes[i]}</em>
                </div>
              ))}
            </aside>
            <div className="rule-editor-panel">
              <div className="rule-editor-toolbar">
                <div>
                  <h3>{copy.editorTitle}</h3>
                  <p>{copy.editorMeta}</p>
                </div>
                <button className="toggle-button"><ToggleRight size={18} />{copy.enabledLabel}</button>
              </div>
              <div className="rule-section-grid">
                <RuleSection icon={<CalendarClock size={18} />} label={copy.sectionCards[0].label} value={copy.sectionCards[0].value} />
                <RuleSection icon={<GitBranch size={18} />} label={copy.sectionCards[1].label} value={copy.sectionCards[1].value} />
                <RuleSection icon={<SlidersHorizontal size={18} />} label={copy.sectionCards[2].label} value={copy.sectionCards[2].value} />
                <RuleSection icon={<ShieldCheck size={18} />} label={copy.sectionCards[3].label} value={copy.sectionCards[3].value} />
              </div>
              <div className="condition-board">
                <div className="condition-board-head">{copy.conditionGroup}</div>
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
                  <strong>{copy.previewLabel}</strong>
                  <span>{copy.previewSub}</span>
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
            <div className="section-eyebrow"><span className="num">02</span>{copy.simEyebrow}</div>
            <h2 className="section-title">{copy.simTitle}</h2>
            <p className="section-lede">{copy.simLede}</p>
          </div>
          <div className="simulation-grid">
            <div className="simulation-card">
              <div className="sim-device">
                <span>{copy.simDeviceLabel}</span>
                <strong>prod-win-042</strong>
              </div>
              <button className="btn btn-primary"><Play size={15} />{copy.simBtn}</button>
            </div>
            <div className="sim-result">
              <CheckCircle2 size={20} />
              <div>
                <strong>{copy.simWouldTrigger}</strong>
                <p>{copy.simWouldTriggerBody}</p>
              </div>
              <span>{copy.simRisk}</span>
            </div>
            <div className="sim-result muted-result">
              <Bell size={20} />
              <div>
                <strong>{copy.simWouldCreateDraft}</strong>
                <p>{copy.simWouldCreateDraftBody}</p>
              </div>
              <span>{copy.simVisible}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow"><span className="num">03</span>{copy.auditEyebrow}</div>
            <h2 className="section-title">{copy.auditTitle}</h2>
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

/**
 * Renders the rule section UI.
 *
 * @param props Component props supplied by the caller.
 * @returns The result produced by the operation.
 */
function RuleSection({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rule-section-card">
      <div>{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
