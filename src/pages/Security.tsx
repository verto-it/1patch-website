export function Security() {
  return (
    <section className="page">
      <h1>Security</h1>
      <div className="grid two">
        <article><h2>Identity</h2><p>First setup requires a local owner. Standalone auth supports MFA, recovery codes, lockout, session tracking, and OAuth linking later.</p></article>
        <article><h2>Agents</h2><p>Clients use signed backend manifests, per-device identity, HTTPS polling, and failover across backend nodes.</p></article>
        <article><h2>Execution</h2><p>Patch actions are allowlisted provider operations. MSI support will require hashes, signatures, and controlled arguments.</p></article>
        <article><h2>Audit</h2><p>Privileged actions create audit events for review, alerting, and compliance workflows.</p></article>
      </div>
    </section>
  );
}
