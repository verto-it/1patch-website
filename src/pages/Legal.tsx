export function Legal({ title }: { title: string }) {
  return (
    <section className="page">
      <div className="section-eyebrow" style={{ marginBottom: 16 }}><span className="num">—</span>Legal</div>
      <h1 style={{ fontSize: 'clamp(34px,5vw,52px)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 20 }}>{title}</h1>
      <p className="lead compact">This page is a placeholder for the public release legal text.</p>
    </section>
  );
}
