import { Monitor, Terminal } from 'lucide-react';

export function Downloads() {
  return (
    <section className="page">
      <span className="eyebrow">Agents</span>
      <h1>Downloads</h1>
      <p className="lead compact">
        Signed releases with SBOMs and SHA-256 checksums will be published with the v1 agent.
        Until then, build from source.
      </p>
      <div className="grid two" style={{ marginTop: '36px', maxWidth: '640px' }}>
        <article>
          <div className="article-icon"><Monitor size={17} /></div>
          <h3>Windows agent</h3>
          <p>C# worker service with winget support. Self-contained executable, no runtime required.</p>
          <code style={{
            display: 'block', marginTop: '14px',
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            background: '#030710', color: 'var(--cyan)',
            padding: '12px 14px', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
            whiteSpace: 'pre', lineHeight: '1.9',
          }}>
            {`dotnet publish -c Release \\\n  -r win-x64 --self-contained`}
          </code>
        </article>
        <article>
          <div className="article-icon"><Terminal size={17} /></div>
          <h3>Linux agent</h3>
          <p>Same C# worker service with an apt provider foundation. Builds identically for Linux targets.</p>
          <code style={{
            display: 'block', marginTop: '14px',
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            background: '#030710', color: 'var(--cyan)',
            padding: '12px 14px', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
            whiteSpace: 'pre', lineHeight: '1.9',
          }}>
            {`dotnet publish -c Release \\\n  -r linux-x64 --self-contained`}
          </code>
        </article>
      </div>
    </section>
  );
}
