export function Downloads() {
  return (
    <section className="page">
      <h1>Downloads</h1>
      <p className="lead compact">Installers will be published with signed releases, SBOMs, and checksums once the v1 agent is ready.</p>
      <div className="grid two">
        <article><h2>Windows client</h2><p>C# worker service with winget support.</p></article>
        <article><h2>Linux client</h2><p>C# worker service with apt provider foundation.</p></article>
      </div>
    </section>
  );
}
