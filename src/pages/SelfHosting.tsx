import { useT } from '../i18n';

const stepCode = [
  `cd vault\n.\\init-pki.ps1 -ManagementHostname manage.1patch.local`,
  `.\\scripts\\setup-management.ps1 \`\n  -PostgresServerUrl "postgres://1patch:secret@localhost:5432" \`\n  -OwnerEmail        "owner@example.com" \`\n  -VaultAddr         "http://127.0.0.1:8200"`,
  `cd 1patch-backend-node\n.\\scripts\\setup-backend-node.ps1 \`\n  -ManagementUrl       "https://manage.1patch.local:4100" \`\n  -NodeId              "<nodeId>" \`\n  -NodeEnrollmentToken "<token>"`,
  `cd 1patch-client\ndotnet publish -c Release -r win-x64 --self-contained\n# Linux: -r linux-x64`,
] as const;

/**
 * Renders the self hosting UI.
 * @returns The result produced by the operation.
 */
export function SelfHosting() {
  const { t } = useT();

  return (
    <section className="page">
      <span className="eyebrow">{t.selfHosting.eyebrow}</span>
      <h1>{t.selfHosting.title}</h1>
      <p className="lead compact">{t.selfHosting.lede}</p>

      <div className="steps-list">
        {t.selfHosting.steps.map((step, i) => (
          <div key={step.title} className="step">
            <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {stepCode[i] && <code>{stepCode[i]}</code>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
