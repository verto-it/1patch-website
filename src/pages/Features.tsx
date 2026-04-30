import { CheckCircle2 } from 'lucide-react';

const features = [
  'App catalog with search, filters, oldest installed version, and newest available version.',
  'Device-level app details with update-one and update-all workflows.',
  'Rule builder for app name, manufacturer, GUID, and package ID matching.',
  'Windows winget support first, Linux apt provider foundation, MSI library roadmap.',
  'Backend nodes cache rules and queue device data while management is offline.',
  'Standalone auth, optional OAuth linking, MFA, RBAC, audit events, and impossible-travel review.',
];

export function Features() {
  return (
    <section className="page">
      <h1>Features</h1>
      <div className="feature-list">
        {features.map((feature) => (
          <div key={feature}><CheckCircle2 /><span>{feature}</span></div>
        ))}
      </div>
    </section>
  );
}
