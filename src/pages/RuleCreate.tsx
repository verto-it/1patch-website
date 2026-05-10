import { AlertTriangle, Bell, CalendarClock, CheckCircle2, ClipboardCheck, Copy, ShieldCheck, Sparkles } from 'lucide-react';
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

/**
 * Handles the all templates operation.
 * @returns The result produced by the operation.
 */
function allTemplates(): Template[] {
  return Object.values(ruleTemplateConfigs).map((config) => ({
    id: config.id,
    name: config.name,
    category: config.category,
    description: config.description,
    risk: config.riskLevel,
    mode: config.recommendedSecurityMode,
    does: config.explanation.slice(0, 3),
    inputs: config.requiredInputs.map((input) => input.label.toLowerCase()),
    preview: templatePreview(config),
  }));
}

/**
 * Renders the rule create UI.
 * @returns The result produced by the operation.
 */
export function RuleCreate() {
  const templates = useMemo(() => allTemplates(), []);
  const [category, setCategory] = useState('Recommended');
  const [selectedId, setSelectedId] = useState('weekly-browser-updates');
  const [drafted, setDrafted] = useState(false);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const visibleTemplates = useMemo(() => templates.filter((template) => template.category === category || (category === 'Recommended' && template.category === 'Recommended')), [category]);
  const selected = visibleTemplates.find((template) => template.id === selectedId) ?? visibleTemplates[0] ?? templates[0];
  /**
   * Handles the select category operation.
   *
   * @param item item supplied to the function.
   */
  const selectCategory = (item: string) => {
    setCategory(item);
    setDrafted(false);
    const first = templates.find((template) => template.category === item);
    if (first) setSelectedId(first.id);
  };
  /**
   * Handles the copy template config operation.
   */
  const copyTemplateConfig = async () => {
    const copied = await copyText(templateConfigString(selected.id));
    setCopyState(copied ? 'copied' : 'failed');
    window.setTimeout(() => setCopyState('idle'), 2500);
  };

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
              <button className={item === category ? 'active' : ''} key={item} onClick={() => selectCategory(item)}>
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
                  <div className="template-actions">
                    <button type="button" className="btn btn-secondary" onClick={copyTemplateConfig}>
                      <Copy size={16} />{copyState === 'copied' ? 'Copied config' : copyState === 'failed' ? 'Copy failed' : 'Copy config'}
                    </button>
                    <button type="button" className="btn btn-primary" onClick={() => setDrafted(true)}>Generate draft</button>
                  </div>
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

/**
 * Handles the placeholder for operation.
 *
 * @param input input supplied to the function.
 * @returns The result produced by the operation.
 */
function placeholderFor(input: string) {
  if (input.includes('group')) return 'Example: test';
  if (input.includes('package')) return 'Example: Google Chrome';
  if (input.includes('window')) return 'Sunday 03:00-05:00 UTC';
  if (input.includes('devices')) return '25';
  if (input.includes('retry')) return '2';
  return 'Required';
}

/**
 * Handles the template preview operation.
 *
 * @param config Configuration object used by the operation.
 * @returns The result produced by the operation.
 */
function templatePreview(config: RuleTemplateConfig): string[] {
  return [
    triggerLine(config),
    targetLine(config),
    ...config.actions.map(actionLine),
    ...config.explanation,
    ...config.safety.slice(0, 2),
  ].filter((line): line is string => Boolean(line)).slice(0, 8);
}

/**
 * Handles the trigger line operation.
 *
 * @param config Configuration object used by the operation.
 * @returns The result produced by the operation.
 */
function triggerLine(config: RuleTemplateConfig) {
  if (config.trigger.type === 'schedule') return `schedule ${String(config.schedule.cron ?? 'configured window')}`;
  if (config.trigger.type === 'event') return `react to ${String(config.trigger.eventType ?? 'configured event')}`;
  return 'manual trigger';
}

/**
 * Handles the target line operation.
 *
 * @param config Configuration object used by the operation.
 * @returns The result produced by the operation.
 */
function targetLine(config: RuleTemplateConfig) {
  const group = findConditionValue(config.conditions, 'device.group');
  const os = findConditionValue(config.conditions, 'device.os');
  const packageName = findConditionValue(config.conditions, 'package.name');
  const parts = [
    group ? `group ${displayValue(group, 'selected group')}` : '',
    os ? String(os) : '',
    packageName ? `package ${displayValue(packageName, 'selected package')}` : '',
  ].filter(Boolean);
  return parts.length ? `target ${parts.join(' · ')}` : 'target devices matching the rule conditions';
}

/**
 * Handles the action line operation.
 *
 * @param action action supplied to the function.
 * @returns The result produced by the operation.
 */
function actionLine(action: Record<string, unknown>) {
  if (action.type === 'create_patch_task') {
    if (action.mode === 'all_outdated') return 'create patch drafts for all outdated packages in scope';
    const names = Array.isArray(action.packageNames) ? action.packageNames.join(', ') : displayValue(action.packageName, 'selected package');
    return `create patch drafts for ${names}`;
  }
  if (action.type === 'create_security_task') return `create ${String(action.task).replace('_', ' ')} task`;
  if (action.type === 'notify') return 'send SIEM notification';
  if (action.type === 'mark_device') return `tag device ${String(action.tag)}`;
  if (action.type === 'block_task_creation') return 'block task creation';
  return '';
}

/**
 * Finds the condition value record.
 *
 * @param group group supplied to the function.
 * @param field field supplied to the function.
 * @returns The result produced by the operation.
 */
function findConditionValue(group: Record<string, unknown>, field: string): unknown {
  const conditions = Array.isArray(group.conditions) ? group.conditions : [];
  for (const item of conditions) {
    if (!item || typeof item !== 'object') continue;
    const condition = item as Record<string, unknown>;
    if (condition.combinator) {
      const nested = findConditionValue(condition, field);
      if (nested !== undefined) return nested;
    } else if (condition.field === field) {
      return condition.value;
    }
  }
  return undefined;
}

/**
 * Handles the display value operation.
 *
 * @param value Value to read, render, or store.
 * @param inputLabel input label supplied to the function.
 * @returns The result produced by the operation.
 */
function displayValue(value: unknown, inputLabel: string) {
  if (typeof value === 'string' && value.startsWith('$input.')) return inputLabel;
  if (Array.isArray(value)) return value.join(', ');
  return String(value);
}

type RuleTemplateConfigInput = {
  id: string;
  label: string;
  type: 'string' | 'number' | 'device_group' | 'maintenance_window' | 'package_name' | 'boolean';
  required: boolean;
  description: string;
  defaultValue?: unknown;
};

type RuleTemplateConfig = {
  id: string;
  name: string;
  description: string;
  category: string;
  recommendedSecurityMode: string;
  riskLevel: Risk;
  tags: string[];
  trigger: Record<string, unknown>;
  conditions: Record<string, unknown>;
  actions: Array<Record<string, unknown>>;
  schedule: Record<string, unknown>;
  requiredInputs: RuleTemplateConfigInput[];
  explanation: string[];
  safety: string[];
};

const targetDeviceGroupInput: RuleTemplateConfigInput = {
  id: 'targetDeviceGroup',
  label: 'Target device group',
  type: 'device_group',
  required: true,
  description: 'Device group the generated rule should target.',
};

const packageNameInput: RuleTemplateConfigInput = {
  id: 'packageName',
  label: 'Package name',
  type: 'package_name',
  required: true,
  description: 'Exact package/app name this rule is allowed to patch.',
  defaultValue: 'Google Chrome',
};

const maintenanceWindowConfigInput: RuleTemplateConfigInput = {
  id: 'maintenanceWindow',
  label: 'Maintenance window',
  type: 'maintenance_window',
  required: true,
  description: 'UTC window in which scheduled patch tasks may be created.',
  defaultValue: { daysOfWeek: [0], startHourUtc: 3, endHourUtc: 5 },
};

const maxDevicesInput: RuleTemplateConfigInput = {
  id: 'maxDevices',
  label: 'Max devices per run',
  type: 'number',
  required: true,
  description: 'Upper bound for task drafts created by one rule execution.',
  defaultValue: 10,
};

const retryLimitInput: RuleTemplateConfigInput = {
  id: 'retryLimit',
  label: 'Retry limit',
  type: 'number',
  required: true,
  description: 'Maximum retry attempts before escalation.',
  defaultValue: 2,
};

const browserPackageNames = ['Google Chrome', 'Microsoft Edge', 'Mozilla Firefox'];
const developerToolPackageNames = ['Visual Studio Code', 'Git', 'Node.js'];
const collaborationPackageNames = ['Microsoft Teams', 'Zoom', 'Slack'];

const ruleTemplateConfigs: Record<string, RuleTemplateConfig> = {
  'weekly-browser-updates': {
    id: 'weekly-browser-updates',
    name: 'Weekly Browser Updates',
    description: 'Patch only Chrome, Edge, and Firefox on Windows during a maintenance window.',
    category: 'Recommended',
    recommendedSecurityMode: 'strict',
    riskLevel: 'medium',
    tags: ['browser', 'windows', 'weekly'],
    trigger: { type: 'schedule' },
    schedule: { cron: '0 3 * * 0', timezone: 'UTC', maintenanceWindow: { daysOfWeek: [0], startHourUtc: 3, endHourUtc: 5 } },
    conditions: {
      combinator: 'AND',
      conditions: [
        { field: 'device.group', operator: 'eq', value: '$input.targetDeviceGroup' },
        { field: 'device.os', operator: 'eq', value: 'windows' },
        { field: 'package.name', operator: 'in', value: browserPackageNames },
        { field: 'package.outdated', operator: 'eq', value: true },
        { field: 'currentTime.maintenanceWindow', operator: 'eq', value: true },
      ],
    },
    actions: [{ type: 'create_patch_task', mode: 'specific_package', packageNames: browserPackageNames, targetVersion: 'latest', maxDevices: '$input.maxDevices' }],
    requiredInputs: [targetDeviceGroupInput, maintenanceWindowConfigInput, { ...maxDevicesInput, defaultValue: 25 }],
    explanation: ['patch only Chrome, Edge, and Firefox packages', 'skip browsers that are already current', 'use delayed execution and security scanning before dispatch'],
    safety: ['specific package allow-list', 'maintenance window required', 'disabled by default'],
  },
  'critical-patch-fast-track': {
    id: 'critical-patch-fast-track',
    name: 'Critical Patch Fast Track',
    description: 'Fast-track one named critical package outside production while preserving approval gates.',
    category: 'Recommended',
    recommendedSecurityMode: 'tinfoil',
    riskLevel: 'high',
    tags: ['critical', 'vulnerability', 'approval'],
    trigger: { type: 'event', eventType: 'vulnerability.detected' },
    schedule: {},
    conditions: {
      combinator: 'AND',
      conditions: [
        { field: 'device.group', operator: 'neq', value: 'production' },
        { field: 'package.name', operator: 'eq', value: '$input.packageName' },
        { field: 'package.severity', operator: 'eq', value: 'critical' },
        { field: 'package.outdated', operator: 'eq', value: true },
      ],
    },
    actions: [
      { type: 'create_patch_task', mode: 'specific_package', packageName: '$input.packageName', targetVersion: 'latest', maxDevices: '$input.maxDevices' },
      { type: 'notify', channel: 'siem', message: 'Critical package fast-track draft created' },
    ],
    requiredInputs: [packageNameInput, maxDevicesInput],
    explanation: ['patch only the named critical package', 'exclude production by default', 'send a SIEM notification'],
    safety: ['specific package required', 'MFA approval applies through tenant policy', 'small max-device cap'],
  },
  'refresh-inventory-daily': {
    id: 'refresh-inventory-daily',
    name: 'Refresh Inventory Daily',
    description: 'Refresh stale device inventory once per day.',
    category: 'Security / Inventory',
    recommendedSecurityMode: 'normal',
    riskLevel: 'low',
    tags: ['inventory', 'daily'],
    trigger: { type: 'schedule' },
    schedule: { cron: '0 1 * * *', timezone: 'UTC' },
    conditions: {
      combinator: 'AND',
      conditions: [
        { field: 'device.group', operator: 'eq', value: '$input.targetDeviceGroup' },
        { field: 'device.lastInventoryAgeHours', operator: 'gt', value: 24 },
      ],
    },
    actions: [{ type: 'create_security_task', task: 'refresh_inventory' }],
    requiredInputs: [targetDeviceGroupInput],
    explanation: ['refresh inventory for devices whose data should stay current'],
    safety: ['low risk', 'uses supported signed refresh task'],
  },
  'patch-test-group-first': {
    id: 'patch-test-group-first',
    name: 'Patch Test Group First',
    description: 'Patch all outdated packages only in the test group before any wider rollout.',
    category: 'Recommended',
    recommendedSecurityMode: 'strict',
    riskLevel: 'low',
    tags: ['test-first', 'patch', 'pilot'],
    trigger: { type: 'schedule' },
    schedule: { cron: '0 2 * * 0', timezone: 'UTC', maintenanceWindow: { daysOfWeek: [0], startHourUtc: 2, endHourUtc: 5 } },
    conditions: {
      combinator: 'AND',
      conditions: [
        { field: 'device.group', operator: 'eq', value: 'test' },
        { field: 'package.outdated', operator: 'eq', value: true },
        { field: 'currentTime.maintenanceWindow', operator: 'eq', value: true },
      ],
    },
    actions: [{ type: 'create_patch_task', mode: 'all_outdated', targetVersion: 'latest', maxDevices: 10 }],
    requiredInputs: [],
    explanation: ['patch only the hard-coded test ring', 'allow broader all-outdated coverage only in that pilot ring'],
    safety: ['no production devices affected', 'max 10 devices per run', 'disabled by default'],
  },
  'chrome-zero-day-response': {
    id: 'chrome-zero-day-response',
    name: 'Chrome Zero-Day Response',
    description: 'Create capped Chrome patch drafts when a high-priority browser issue is detected.',
    category: 'Patch Automation',
    recommendedSecurityMode: 'tinfoil',
    riskLevel: 'high',
    tags: ['browser', 'zero-day', 'chrome'],
    trigger: { type: 'event', eventType: 'package.high_priority.detected' },
    schedule: {},
    conditions: {
      combinator: 'AND',
      conditions: [
        { field: 'device.os', operator: 'eq', value: 'windows' },
        { field: 'package.name', operator: 'eq', value: 'Google Chrome' },
        { field: 'package.outdated', operator: 'eq', value: true },
      ],
    },
    actions: [
      { type: 'create_patch_task', mode: 'specific_package', packageName: 'Google Chrome', targetVersion: 'latest', maxDevices: 10 },
      { type: 'notify', channel: 'siem', message: 'Chrome high-priority patch draft created' },
    ],
    requiredInputs: [],
    explanation: ['patch only Google Chrome', 'react to high-priority package events', 'notify SIEM'],
    safety: ['specific package only', 'max 10 devices per execution', 'high-risk approvals apply'],
  },
  'microsoft-edge-stable-ring': {
    id: 'microsoft-edge-stable-ring',
    name: 'Microsoft Edge Stable Ring',
    description: 'Patch Edge on a named Windows device group during a weekly window.',
    category: 'Patch Automation',
    recommendedSecurityMode: 'strict',
    riskLevel: 'medium',
    tags: ['browser', 'edge', 'windows'],
    trigger: { type: 'schedule' },
    schedule: { cron: '30 3 * * 0', timezone: 'UTC', maintenanceWindow: { daysOfWeek: [0], startHourUtc: 3, endHourUtc: 5 } },
    conditions: {
      combinator: 'AND',
      conditions: [
        { field: 'device.group', operator: 'eq', value: '$input.targetDeviceGroup' },
        { field: 'device.os', operator: 'eq', value: 'windows' },
        { field: 'package.name', operator: 'eq', value: 'Microsoft Edge' },
        { field: 'package.outdated', operator: 'eq', value: true },
        { field: 'currentTime.maintenanceWindow', operator: 'eq', value: true },
      ],
    },
    actions: [{ type: 'create_patch_task', mode: 'specific_package', packageName: 'Microsoft Edge', targetVersion: 'latest', maxDevices: '$input.maxDevices' }],
    requiredInputs: [targetDeviceGroupInput, maintenanceWindowConfigInput, { ...maxDevicesInput, defaultValue: 20 }],
    explanation: ['patch only Microsoft Edge', 'limit rollout to the selected group'],
    safety: ['specific package only', 'maintenance window required', 'device cap required'],
  },
  'firefox-maintenance-ring': {
    id: 'firefox-maintenance-ring',
    name: 'Firefox Maintenance Ring',
    description: 'Patch Firefox on a selected endpoint ring without touching other apps.',
    category: 'Patch Automation',
    recommendedSecurityMode: 'strict',
    riskLevel: 'medium',
    tags: ['browser', 'firefox'],
    trigger: { type: 'schedule' },
    schedule: { cron: '0 4 * * 0', timezone: 'UTC', maintenanceWindow: { daysOfWeek: [0], startHourUtc: 4, endHourUtc: 6 } },
    conditions: {
      combinator: 'AND',
      conditions: [
        { field: 'device.group', operator: 'eq', value: '$input.targetDeviceGroup' },
        { field: 'package.name', operator: 'eq', value: 'Mozilla Firefox' },
        { field: 'package.outdated', operator: 'eq', value: true },
        { field: 'currentTime.maintenanceWindow', operator: 'eq', value: true },
      ],
    },
    actions: [{ type: 'create_patch_task', mode: 'specific_package', packageName: 'Mozilla Firefox', targetVersion: 'latest', maxDevices: '$input.maxDevices' }],
    requiredInputs: [targetDeviceGroupInput, maintenanceWindowConfigInput, { ...maxDevicesInput, defaultValue: 20 }],
    explanation: ['patch only Mozilla Firefox', 'skip unrelated outdated software'],
    safety: ['specific package only', 'disabled by default'],
  },
  'developer-tooling-weekly': {
    id: 'developer-tooling-weekly',
    name: 'Developer Tooling Weekly',
    description: 'Patch VS Code, Git, and Node.js on developer workstations.',
    category: 'Patch Automation',
    recommendedSecurityMode: 'strict',
    riskLevel: 'medium',
    tags: ['developer', 'tooling', 'weekly'],
    trigger: { type: 'schedule' },
    schedule: { cron: '0 5 * * 6', timezone: 'UTC', maintenanceWindow: { daysOfWeek: [6], startHourUtc: 5, endHourUtc: 8 } },
    conditions: {
      combinator: 'AND',
      conditions: [
        { field: 'device.group', operator: 'eq', value: '$input.targetDeviceGroup' },
        { field: 'package.name', operator: 'in', value: developerToolPackageNames },
        { field: 'package.outdated', operator: 'eq', value: true },
        { field: 'currentTime.maintenanceWindow', operator: 'eq', value: true },
      ],
    },
    actions: [{ type: 'create_patch_task', mode: 'specific_package', packageNames: developerToolPackageNames, targetVersion: 'latest', maxDevices: '$input.maxDevices' }],
    requiredInputs: [targetDeviceGroupInput, { ...maintenanceWindowConfigInput, defaultValue: { daysOfWeek: [6], startHourUtc: 5, endHourUtc: 8 } }, { ...maxDevicesInput, defaultValue: 15 }],
    explanation: ['patch only common developer tools', 'avoid broad workstation updates'],
    safety: ['specific package allow-list', 'weekend maintenance default'],
  },
  'collaboration-app-weekly': {
    id: 'collaboration-app-weekly',
    name: 'Collaboration Apps Weekly',
    description: 'Patch Teams, Zoom, and Slack on office endpoints.',
    category: 'Patch Automation',
    recommendedSecurityMode: 'strict',
    riskLevel: 'medium',
    tags: ['collaboration', 'teams', 'zoom', 'slack'],
    trigger: { type: 'schedule' },
    schedule: { cron: '0 4 * * 6', timezone: 'UTC', maintenanceWindow: { daysOfWeek: [6], startHourUtc: 4, endHourUtc: 7 } },
    conditions: {
      combinator: 'AND',
      conditions: [
        { field: 'device.group', operator: 'eq', value: '$input.targetDeviceGroup' },
        { field: 'package.name', operator: 'in', value: collaborationPackageNames },
        { field: 'package.outdated', operator: 'eq', value: true },
        { field: 'currentTime.maintenanceWindow', operator: 'eq', value: true },
      ],
    },
    actions: [{ type: 'create_patch_task', mode: 'specific_package', packageNames: collaborationPackageNames, targetVersion: 'latest', maxDevices: '$input.maxDevices' }],
    requiredInputs: [targetDeviceGroupInput, { ...maintenanceWindowConfigInput, defaultValue: { daysOfWeek: [6], startHourUtc: 4, endHourUtc: 7 } }, { ...maxDevicesInput, defaultValue: 20 }],
    explanation: ['patch only Teams, Zoom, and Slack', 'keep unrelated apps out of scope'],
    safety: ['specific package allow-list', 'maintenance window required'],
  },
  'vpn-client-maintenance': {
    id: 'vpn-client-maintenance',
    name: 'VPN Client Maintenance',
    description: 'Patch one VPN client package on remote-user devices.',
    category: 'Patch Automation',
    recommendedSecurityMode: 'tinfoil',
    riskLevel: 'high',
    tags: ['vpn', 'remote-access'],
    trigger: { type: 'schedule' },
    schedule: { cron: '0 2 * * 6', timezone: 'UTC', maintenanceWindow: { daysOfWeek: [6], startHourUtc: 2, endHourUtc: 4 } },
    conditions: {
      combinator: 'AND',
      conditions: [
        { field: 'device.group', operator: 'eq', value: '$input.targetDeviceGroup' },
        { field: 'package.name', operator: 'eq', value: '$input.packageName' },
        { field: 'package.outdated', operator: 'eq', value: true },
        { field: 'currentTime.maintenanceWindow', operator: 'eq', value: true },
      ],
    },
    actions: [
      { type: 'create_patch_task', mode: 'specific_package', packageName: '$input.packageName', targetVersion: 'latest', maxDevices: '$input.maxDevices' },
      { type: 'notify', channel: 'siem', message: 'VPN client patch draft created' },
    ],
    requiredInputs: [targetDeviceGroupInput, { ...packageNameInput, defaultValue: 'FortiClient VPN' }, { ...maintenanceWindowConfigInput, defaultValue: { daysOfWeek: [6], startHourUtc: 2, endHourUtc: 4 } }, { ...maxDevicesInput, defaultValue: 10 }],
    explanation: ['patch only the named VPN client', 'notify security monitoring'],
    safety: ['specific package required', 'high-risk approvals apply'],
  },
  'notify-on-high-risk-task': {
    id: 'notify-on-high-risk-task',
    name: 'Notify on High-Risk Task',
    description: 'Notify security systems when a task scan returns high risk.',
    category: 'Notifications',
    recommendedSecurityMode: 'normal',
    riskLevel: 'low',
    tags: ['notification', 'siem'],
    trigger: { type: 'event', eventType: 'task.security_scan.completed' },
    schedule: {},
    conditions: { combinator: 'AND', conditions: [{ field: 'riskScore', operator: 'gte', value: 70 }] },
    actions: [{ type: 'notify', channel: 'siem', message: 'High-risk task detected by rule template' }],
    requiredInputs: [],
    explanation: ['send SIEM and configured tenant notifications for high-risk task scans'],
    safety: ['no execution action'],
  },
  'production-maintenance-window-only': {
    id: 'production-maintenance-window-only',
    name: 'Production Package Window',
    description: 'Patch one named production package only inside an explicit maintenance window.',
    category: 'Compliance',
    recommendedSecurityMode: 'tinfoil',
    riskLevel: 'high',
    tags: ['production', 'maintenance-window', 'specific-package'],
    trigger: { type: 'schedule' },
    schedule: { cron: '0 3 * * 0', timezone: 'UTC', maintenanceWindow: { daysOfWeek: [0], startHourUtc: 3, endHourUtc: 5 } },
    conditions: {
      combinator: 'AND',
      conditions: [
        { field: 'device.group', operator: 'eq', value: 'production' },
        { field: 'package.name', operator: 'eq', value: '$input.packageName' },
        { field: 'package.outdated', operator: 'eq', value: true },
        { field: 'currentTime.maintenanceWindow', operator: 'eq', value: true },
      ],
    },
    actions: [{ type: 'create_patch_task', mode: 'specific_package', packageName: '$input.packageName', targetVersion: 'latest', maxDevices: '$input.maxDevices' }],
    requiredInputs: [{ ...packageNameInput, defaultValue: 'Microsoft Edge' }, maintenanceWindowConfigInput, { ...maxDevicesInput, defaultValue: 5 }],
    explanation: ['patch only one named production package', 'create drafts only during the configured window'],
    safety: ['specific package required', 'max 5 devices by default', 'tinfoil approval defaults'],
  },
  'block-unsafe-automation': {
    id: 'block-unsafe-automation',
    name: 'Block Unsafe Automation',
    description: 'Stop automation candidates with critical risk, untrusted source, or missing hashes.',
    category: 'Compliance',
    recommendedSecurityMode: 'tinfoil',
    riskLevel: 'low',
    tags: ['block', 'guardrail'],
    trigger: { type: 'event', eventType: 'rule.task_candidate.created' },
    schedule: {},
    conditions: {
      combinator: 'OR',
      conditions: [
        { field: 'riskScore', operator: 'gte', value: 90 },
        { field: 'task.sourceHostTrusted', operator: 'eq', value: false },
        { field: 'task.hashPresent', operator: 'eq', value: false },
      ],
    },
    actions: [
      { type: 'block_task_creation', reason: 'Unsafe automation candidate' },
      { type: 'notify', channel: 'siem', message: 'Blocked unsafe automation candidate' },
    ],
    requiredInputs: [],
    explanation: ['do not create an executable task', 'notify admins and SIEM'],
    safety: ['no hidden task', 'no arbitrary command', 'blocks instead of executes'],
  },
  'retry-failed-updates': {
    id: 'retry-failed-updates',
    name: 'Retry Failed Package Update',
    description: 'Retry one named package after a transient failure with capped exponential backoff.',
    category: 'Failure Handling',
    recommendedSecurityMode: 'strict',
    riskLevel: 'medium',
    tags: ['retry', 'failed-task', 'specific-package'],
    trigger: { type: 'event', eventType: 'task.failed' },
    schedule: {},
    conditions: {
      combinator: 'AND',
      conditions: [
        { field: 'lastTask.failed', operator: 'eq', value: true },
        { field: 'lastTask.retryCount', operator: 'lt', value: '$input.retryLimit' },
        { field: 'lastTask.failureRetryable', operator: 'eq', value: true },
        { field: 'package.name', operator: 'eq', value: '$input.packageName' },
        { field: 'package.outdated', operator: 'eq', value: true },
      ],
    },
    actions: [{ type: 'create_patch_task', mode: 'specific_package', packageName: '$input.packageName', targetVersion: 'latest', retryLimit: '$input.retryLimit', backoff: 'exponential', maxDevices: 1 }],
    requiredInputs: [packageNameInput, retryLimitInput],
    explanation: ['retry only the named package', 'create at most one retry draft'],
    safety: ['exponential backoff', 'retry count prevents loops', 'no all-outdated retry'],
  },
  'repeated-failure-inventory-reset': {
    id: 'repeated-failure-inventory-reset',
    name: 'Repeated Failure Inventory Reset',
    description: 'Refresh inventory and notify SIEM after repeated update failures.',
    category: 'Failure Handling',
    recommendedSecurityMode: 'strict',
    riskLevel: 'low',
    tags: ['failure', 'inventory', 'siem'],
    trigger: { type: 'event', eventType: 'task.failed' },
    schedule: {},
    conditions: { combinator: 'AND', conditions: [{ field: 'lastTask.failed', operator: 'eq', value: true }, { field: 'lastTask.retryCount', operator: 'gte', value: 2 }] },
    actions: [{ type: 'create_security_task', task: 'refresh_inventory' }, { type: 'notify', channel: 'siem', message: 'Inventory refresh created after repeated patch failures' }],
    requiredInputs: [],
    explanation: ['refresh inventory instead of blindly retrying patches', 'notify SIEM after repeated failures'],
    safety: ['no package execution action', 'breaks retry loops'],
  },
  'failed-task-siem-escalation': {
    id: 'failed-task-siem-escalation',
    name: 'Failed Task SIEM Escalation',
    description: 'Escalate repeated failed tasks without creating new patch work.',
    category: 'Failure Handling',
    recommendedSecurityMode: 'normal',
    riskLevel: 'low',
    tags: ['failure', 'siem', 'tag'],
    trigger: { type: 'event', eventType: 'task.failed' },
    schedule: {},
    conditions: { combinator: 'AND', conditions: [{ field: 'lastTask.failed', operator: 'eq', value: true }, { field: 'lastTask.retryCount', operator: 'gte', value: 2 }] },
    actions: [{ type: 'mark_device', tag: 'patch-failure-review' }, { type: 'notify', channel: 'siem', message: 'Device marked for patch failure review' }],
    requiredInputs: [],
    explanation: ['tag devices after repeated failures', 'notify SIEM for manual follow-up'],
    safety: ['no retry task created', 'metadata-only device mark'],
  },
  'inventory-before-maintenance': {
    id: 'inventory-before-maintenance',
    name: 'Inventory Before Maintenance',
    description: 'Refresh stale inventory shortly before a patch window.',
    category: 'Security / Inventory',
    recommendedSecurityMode: 'normal',
    riskLevel: 'low',
    tags: ['inventory', 'preflight'],
    trigger: { type: 'schedule' },
    schedule: { cron: '0 0 * * 0', timezone: 'UTC' },
    conditions: { combinator: 'AND', conditions: [{ field: 'device.group', operator: 'eq', value: '$input.targetDeviceGroup' }, { field: 'device.lastInventoryAgeHours', operator: 'gt', value: 12 }] },
    actions: [{ type: 'create_security_task', task: 'refresh_inventory' }],
    requiredInputs: [targetDeviceGroupInput],
    explanation: ['refresh stale inventory before patch decisions are made'],
    safety: ['no package update action', 'uses signed inventory task'],
  },
  'low-trust-inventory-refresh': {
    id: 'low-trust-inventory-refresh',
    name: 'Low-Trust Inventory Refresh',
    description: 'Refresh and tag devices whose trust score drops below a review threshold.',
    category: 'Security / Inventory',
    recommendedSecurityMode: 'strict',
    riskLevel: 'low',
    tags: ['trust', 'inventory', 'review'],
    trigger: { type: 'event', eventType: 'device.inventory.updated' },
    schedule: {},
    conditions: { combinator: 'AND', conditions: [{ field: 'device.deviceTrustScore', operator: 'lt', value: 60 }] },
    actions: [{ type: 'create_security_task', task: 'refresh_inventory' }, { type: 'mark_device', tag: 'trust-review' }, { type: 'notify', channel: 'siem', message: 'Low-trust device inventory refresh requested' }],
    requiredInputs: [],
    explanation: ['refresh questionable inventory', 'tag the device for review', 'notify SIEM'],
    safety: ['no package execution action', 'metadata tag only'],
  },
  'stale-inventory-notification': {
    id: 'stale-inventory-notification',
    name: 'Stale Inventory Notification',
    description: 'Notify SIEM when devices in a group have stale inventory.',
    category: 'Notifications',
    recommendedSecurityMode: 'normal',
    riskLevel: 'low',
    tags: ['inventory', 'notification'],
    trigger: { type: 'schedule' },
    schedule: { cron: '0 8 * * *', timezone: 'UTC' },
    conditions: { combinator: 'AND', conditions: [{ field: 'device.group', operator: 'eq', value: '$input.targetDeviceGroup' }, { field: 'device.lastInventoryAgeHours', operator: 'gt', value: 72 }] },
    actions: [{ type: 'notify', channel: 'siem', message: 'Stale device inventory detected' }],
    requiredInputs: [targetDeviceGroupInput],
    explanation: ['notify without creating tasks', 'surface stale inventory for operations review'],
    safety: ['notification only', 'no endpoint execution'],
  },
  'production-hotfix-window': {
    id: 'production-hotfix-window',
    name: 'Production Hotfix Window',
    description: 'Create tightly capped production hotfix drafts for one critical package.',
    category: 'Compliance',
    recommendedSecurityMode: 'tinfoil',
    riskLevel: 'critical',
    tags: ['production', 'hotfix', 'critical'],
    trigger: { type: 'event', eventType: 'vulnerability.detected' },
    schedule: { maintenanceWindow: { daysOfWeek: [0], startHourUtc: 3, endHourUtc: 5 } },
    conditions: {
      combinator: 'AND',
      conditions: [
        { field: 'device.group', operator: 'eq', value: 'production' },
        { field: 'package.name', operator: 'eq', value: '$input.packageName' },
        { field: 'package.severity', operator: 'eq', value: 'critical' },
        { field: 'package.outdated', operator: 'eq', value: true },
        { field: 'currentTime.maintenanceWindow', operator: 'eq', value: true },
      ],
    },
    actions: [{ type: 'create_patch_task', mode: 'specific_package', packageName: '$input.packageName', targetVersion: 'latest', maxDevices: '$input.maxDevices' }, { type: 'notify', channel: 'siem', message: 'Production critical hotfix draft created' }],
    requiredInputs: [packageNameInput, maintenanceWindowConfigInput, { ...maxDevicesInput, defaultValue: 3 }],
    explanation: ['patch only the named critical production package', 'notify SIEM immediately'],
    safety: ['critical risk approval path', 'max 3 devices by default', 'maintenance window required'],
  },
  'block-production-outside-window': {
    id: 'block-production-outside-window',
    name: 'Block Production Outside Window',
    description: 'Block production task candidates outside the configured maintenance window.',
    category: 'Compliance',
    recommendedSecurityMode: 'tinfoil',
    riskLevel: 'low',
    tags: ['production', 'guardrail', 'maintenance-window'],
    trigger: { type: 'event', eventType: 'rule.task_candidate.created' },
    schedule: { maintenanceWindow: { daysOfWeek: [0], startHourUtc: 3, endHourUtc: 5 } },
    conditions: { combinator: 'AND', conditions: [{ field: 'device.group', operator: 'eq', value: 'production' }, { field: 'currentTime.maintenanceWindow', operator: 'eq', value: false }] },
    actions: [{ type: 'block_task_creation', reason: 'Production task candidate outside maintenance window' }, { type: 'notify', channel: 'siem', message: 'Blocked production task outside maintenance window' }],
    requiredInputs: [maintenanceWindowConfigInput],
    explanation: ['block instead of creating endpoint work', 'notify SIEM on policy violation'],
    safety: ['no executable task created', 'guardrail action only'],
  },
  'low-trust-automation-block': {
    id: 'low-trust-automation-block',
    name: 'Low-Trust Automation Block',
    description: 'Block task candidates for low-trust devices or high-risk automation.',
    category: 'Compliance',
    recommendedSecurityMode: 'tinfoil',
    riskLevel: 'low',
    tags: ['trust', 'block', 'guardrail'],
    trigger: { type: 'event', eventType: 'rule.task_candidate.created' },
    schedule: {},
    conditions: { combinator: 'OR', conditions: [{ field: 'device.deviceTrustScore', operator: 'lt', value: 40 }, { field: 'riskScore', operator: 'gte', value: 80 }, { field: 'task.sourceHostTrusted', operator: 'eq', value: false }, { field: 'task.hashPresent', operator: 'eq', value: false }] },
    actions: [{ type: 'block_task_creation', reason: 'Low-trust or high-risk automation candidate' }, { type: 'notify', channel: 'siem', message: 'Blocked low-trust automation candidate' }],
    requiredInputs: [],
    explanation: ['block risky automation candidates', 'notify SIEM with audit context'],
    safety: ['no hidden task', 'no arbitrary command', 'blocks instead of executes'],
  },
};

/**
 * Handles the template config string operation.
 *
 * @param templateId Identifier used to locate the target record.
 * @returns The result produced by the operation.
 */
function templateConfigString(templateId: string) {
  const template = ruleTemplateConfigs[templateId] ?? ruleTemplateConfigs['weekly-browser-updates'];
  return JSON.stringify({ kind: '1patch.rule-template', version: 1, template });
}

/**
 * Handles the copy text operation.
 *
 * @param text text supplied to the function.
 * @returns The result produced by the operation.
 */
async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall back to the selection path below.
    }
  }
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.left = '-9999px';
  document.body.appendChild(area);
  area.select();
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }
  document.body.removeChild(area);
  return copied;
}
