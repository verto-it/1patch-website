import { AlertTriangle, Bell, CalendarClock, CheckCircle2, ClipboardCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';

type Risk = 'low' | 'medium' | 'high' | 'critical';

type Template = {
  id: string;
  name: string;
  category: string;
  description: string;
  risk: Risk;
  mode: string;
  does: string[];
  inputs: string[];
  preview: string[];
};

const categories = ['Recommended', 'Patch Automation', 'Security / Inventory', 'Failure Handling', 'Compliance', 'Notifications'];

const templates: Template[] = [
  {
    id: 'weekly-browser-updates',
    name: 'Weekly Browser Updates',
    category: 'Recommended',
    description: 'Patch Chrome, Edge, and Firefox on Windows during a maintenance window.',
    risk: 'medium',
    mode: 'strict',
    does: ['weekly schedule', 'Windows browser packages', 'patch task draft'],
    inputs: ['target device group', 'maintenance window', 'max affected devices'],
    preview: ['run every Sunday at 03:00 UTC', 'target Windows devices in the selected group', 'update Chrome, Edge, and Firefox', 'require security scan', 'keep the rule disabled until review'],
  },
  {
    id: 'critical-patch-fast-track',
    name: 'Critical Patch Fast Track',
    category: 'Recommended',
    description: 'Fast-track critical package drafts while keeping production behind approval gates.',
    risk: 'high',
    mode: 'tinfoil',
    does: ['critical severity only', 'patch task draft', 'SIEM notification'],
    inputs: ['max affected devices'],
    preview: ['react to critical vulnerability detections', 'exclude production by default', 'create patch drafts only', 'require MFA approval for high risk', 'send SIEM events'],
  },
  {
    id: 'retry-failed-updates',
    name: 'Retry Failed Updates',
    category: 'Failure Handling',
    description: 'Retry transient failures with capped exponential backoff.',
    risk: 'medium',
    mode: 'strict',
    does: ['task.failed trigger', 'retryable failures', 'retry task draft'],
    inputs: ['retry limit'],
    preview: ['listen for failed tasks', 'retry only retryable failures', 'stop after the configured retry limit', 'use exponential backoff', 'avoid retry loops'],
  },
  {
    id: 'refresh-inventory-daily',
    name: 'Refresh Inventory Daily',
    category: 'Security / Inventory',
    description: 'Refresh stale inventory on a daily schedule.',
    risk: 'low',
    mode: 'normal',
    does: ['daily schedule', 'inventory refresh', 'low-risk security task'],
    inputs: ['target device group'],
    preview: ['run daily at 01:00 UTC', 'refresh inventory for the selected group', 'create a signed refresh task', 'avoid package execution actions'],
  },
  {
    id: 'patch-test-group-first',
    name: 'Patch Test Group First',
    category: 'Patch Automation',
    description: 'Patch test devices before any production rollout.',
    risk: 'low',
    mode: 'strict',
    does: ['weekly schedule', 'test group only', 'outdated packages'],
    inputs: ['max affected devices'],
    preview: ['run weekly against the test group', 'patch outdated packages first', 'keep production devices out of scope', 'require normal scan and approval policy'],
  },
  {
    id: 'notify-on-high-risk-task',
    name: 'Notify on High-Risk Task',
    category: 'Notifications',
    description: 'Send SIEM and configured notifications for risky task scans.',
    risk: 'low',
    mode: 'normal',
    does: ['scan completed trigger', 'risk score >= 70', 'notifications only'],
    inputs: [],
    preview: ['listen for completed security scans', 'match risk score 70 or higher', 'send SIEM event', 'send configured notification', 'create no execution task'],
  },
  {
    id: 'production-maintenance-window-only',
    name: 'Production Maintenance Window Only',
    category: 'Compliance',
    description: 'Permit production patch drafts only inside a configured maintenance window.',
    risk: 'high',
    mode: 'tinfoil',
    does: ['production group', 'maintenance window', 'approval required'],
    inputs: ['maintenance window', 'max affected devices'],
    preview: ['target production devices', 'run only in the configured window', 'create patch drafts for outdated packages', 'require delayed execution and approval'],
  },
  {
    id: 'block-unsafe-automation',
    name: 'Block Unsafe Automation',
    category: 'Compliance',
    description: 'Block unsafe automation candidates and notify admins.',
    risk: 'low',
    mode: 'tinfoil',
    does: ['critical risk checks', 'block action', 'SIEM notification'],
    inputs: [],
    preview: ['block critical-risk task candidates', 'block untrusted source hosts', 'block missing hashes', 'create no executable task', 'notify admins and SIEM'],
  },
];

export function RuleCreate() {
  const [category, setCategory] = useState('Recommended');
  const [selectedId, setSelectedId] = useState('weekly-browser-updates');
  const [drafted, setDrafted] = useState(false);
  const selected = templates.find((template) => template.id === selectedId) ?? templates[0];
  const visibleTemplates = useMemo(() => templates.filter((template) => template.category === category || (category === 'Recommended' && template.category === 'Recommended')), [category]);

  return (
    <div className="rule-create-page">
      <section className="rule-create-hero">
        <div className="wrap">
          <div className="rule-create-kicker"><Sparkles size={16} />Start from template</div>
          <h1 className="headline">Create safer rules without starting from a blank screen.</h1>
          <p className="sub">Templates pre-fill practical automation blueprints, then stop at a disabled draft so every trigger, condition, action, and approval setting can be reviewed before saving.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap rule-create-layout">
          <aside className="template-sidebar" aria-label="Template categories">
            {categories.map((item) => (
              <button className={item === category ? 'active' : ''} key={item} onClick={() => { setCategory(item); setDrafted(false); }}>
                {item}
              </button>
            ))}
          </aside>

          <div className="template-main">
            <div className="template-grid">
              {visibleTemplates.map((template) => (
                <button className={`template-card ${template.id === selected.id ? 'selected' : ''}`} key={template.id} onClick={() => { setSelectedId(template.id); setDrafted(false); }}>
                  <div className="template-card-head">
                    <strong>{template.name}</strong>
                    <span className={`risk-chip ${template.risk}`}>{template.risk}</span>
                  </div>
                  <p>{template.description}</p>
                  <div className="template-meta">
                    <span><ShieldCheck size={14} />{template.mode}</span>
                    <span><ClipboardCheck size={14} />{template.inputs.length || 'no'} inputs</span>
                  </div>
                  <div className="template-mini-list">
                    {template.does.slice(0, 3).map((item) => <em key={item}>{item}</em>)}
                  </div>
                </button>
              ))}
            </div>

            <div className="template-workbench">
              <div className="template-workbench-head">
                <div>
                  <span>Selected template</span>
                  <h2>{selected.name}</h2>
                </div>
                <button className="btn btn-primary" onClick={() => setDrafted(true)}>Generate draft</button>
              </div>

              <div className="template-detail-grid">
                <div className="template-inputs">
                  <h3>Required inputs</h3>
                  {selected.inputs.length ? selected.inputs.map((input) => (
                    <label key={input}>
                      <span>{input}</span>
                      <input placeholder={placeholderFor(input)} />
                    </label>
                  )) : (
                    <div className="no-inputs"><CheckCircle2 size={18} />No extra inputs required</div>
                  )}
                </div>

                <div className="template-preview">
                  <h3>Preview</h3>
                  <div className="preview-callout">
                    <AlertTriangle size={18} />
                    <span>Review before saving. Generated rules start disabled unless an admin explicitly enables them.</span>
                  </div>
                  <ul>
                    {selected.preview.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="preview-facts">
                    <span><CalendarClock size={15} />estimated devices: after group selection</span>
                    <span><ShieldCheck size={15} />required approvals: tenant policy</span>
                    <span><Bell size={15} />SIEM/audit: enabled</span>
                  </div>
                </div>
              </div>

              {drafted && (
                <div className="draft-review">
                  <CheckCircle2 size={20} />
                  <div>
                    <strong>Draft rule generated</strong>
                    <p>It is disabled, editable, and ready for the normal save, scan, approval, signing, and audit pipeline.</p>
                  </div>
                  <span>disabled</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function placeholderFor(input: string) {
  if (input.includes('group')) return 'Example: test';
  if (input.includes('window')) return 'Sunday 03:00-05:00 UTC';
  if (input.includes('devices')) return '25';
  if (input.includes('retry')) return '2';
  return 'Required';
}
