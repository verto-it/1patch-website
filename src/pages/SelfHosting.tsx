const steps = [
  {
    title: 'Initialize Vault and the PKI',
    description: "Install HashiCorp Vault on the management server host. The init script creates an internal root CA, issues the management server's TLS certificate, and prints the AppRole credentials you'll need next. The root CA private key never leaves Vault.",
    code: `cd vault\n.\\init-pki.ps1 -ManagementHostname manage.1patch.local`,
  },
  {
    title: 'Deploy the management server',
    description: 'Connect the management server to PostgreSQL, DragonflyDB, and Vault. The setup script creates the database schema and registers the Vault AppRole. First login creates the owner account — MFA is required.',
    code: `.\\scripts\\setup-management.ps1 \`\n  -PostgresServerUrl "postgres://1patch:secret@localhost:5432" \`\n  -OwnerEmail        "owner@example.com" \`\n  -VaultAddr         "http://127.0.0.1:8200"`,
  },
  {
    title: 'Enroll and deploy backend nodes',
    description: 'Create an enrollment token on the management server, then run the setup script on each node machine. On first start, the node registers with management and receives a Vault-issued mTLS certificate (24 h TTL). No shared secret after initial enrollment.',
    code: `cd 1patch-backend-node\n.\\scripts\\setup-backend-node.ps1 \`\n  -ManagementUrl       "https://manage.1patch.local:4100" \`\n  -NodeId              "<nodeId>" \`\n  -NodeEnrollmentToken "<token>"`,
  },
  {
    title: 'Install the agent on each machine',
    description: "Create a device enrollment on the management server. Edit appsettings.json on each device with the management URL, enrollment token, and signing public key. The agent discovers the nearest healthy backend node and fails over automatically.",
    code: `cd 1patch-client\ndotnet publish -c Release -r win-x64 --self-contained\n# Linux: -r linux-x64`,
  },
  {
    title: 'Build rules and apply patches',
    description: 'Log in to the management dashboard, create rules matching app names, GUIDs, or package IDs, and assign them to device groups. Clients pull signed rule bundles from their nearest backend node and apply updates via winget, Chocolatey, Scoop, or apt.',
  },
];

/**
 * Renders the self hosting UI.
 * @returns The result produced by the operation.
 */
export function SelfHosting() {
  return (
    <section className="page">
      <span className="eyebrow">Deployment</span>
      <h1>Self-hosting</h1>
      <p className="lead compact">
        Run the management server behind your load balancer, deploy backend nodes per site or region,
        and let clients choose the nearest healthy node. All components are horizontally scalable.
      </p>

      <div className="steps-list">
        {steps.map((step, i) => (
          <div key={step.title} className="step">
            <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {step.code && <code>{step.code}</code>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
