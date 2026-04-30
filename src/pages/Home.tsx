import { Link } from 'react-router-dom';
import { Boxes, Cloud, LockKeyhole, Server } from 'lucide-react';

export function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">Open-source patch management</p>
          <h1>1Patch</h1>
          <p className="lead">
            Manage software updates across Windows and Linux fleets with a self-hosted control plane,
            scalable backend nodes, and a hosted option for teams that want operations handled.
          </p>
          <div className="actions">
            <Link to="/self-hosting" className="primary">Start self-hosting</Link>
            <Link to="/features" className="secondary">Explore features</Link>
          </div>
        </div>
      </section>

      <section className="grid four">
        <article><Server /><h2>Management server</h2><p>Control rules, apps, users, nodes, package metadata, and audit logs.</p></article>
        <article><Boxes /><h2>Backend nodes</h2><p>Add unlimited nodes so clients can use the nearest healthy node.</p></article>
        <article><LockKeyhole /><h2>Secure by default</h2><p>Standalone auth, MFA, RBAC, signed manifests, and audited actions.</p></article>
        <article><Cloud /><h2>Hosted or self-hosted</h2><p>Run it yourself under AGPLv3 or use the paid hosted service.</p></article>
      </section>
    </>
  );
}
