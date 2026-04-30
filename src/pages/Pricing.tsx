export function Pricing() {
  return (
    <section className="page">
      <h1>Pricing</h1>
      <div className="grid three">
        <article><h2>Community</h2><p className="price">Free</p><p>Self-host under AGPLv3. Ideal for labs, personal use, and contributors.</p></article>
        <article className="highlight"><h2>Hosted</h2><p className="price">Per device</p><p>Managed control plane, backups, updates, and support for teams.</p></article>
        <article><h2>Enterprise</h2><p className="price">Contact</p><p>Deployment support, custom integrations, and security review assistance.</p></article>
      </div>
    </section>
  );
}
