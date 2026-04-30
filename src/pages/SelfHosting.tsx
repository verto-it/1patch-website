export function SelfHosting() {
  return (
    <section className="page">
      <h1>Self-hosting</h1>
      <p className="lead compact">Run management servers behind your load balancer, attach as many backend nodes as your sites need, and let clients choose the best healthy node.</p>
      <ol className="steps">
        <li>Deploy PostgreSQL and the management server.</li>
        <li>Create the first local owner user and enable MFA.</li>
        <li>Create backend-node enrollment tokens.</li>
        <li>Deploy backend nodes per site, region, or customer network.</li>
        <li>Install the C# client worker on Windows and Linux devices.</li>
      </ol>
    </section>
  );
}
