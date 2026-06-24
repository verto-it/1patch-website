import { CheckCircle2, Server, Boxes, ShieldCheck } from 'lucide-react';
import { useT } from '../i18n';

const icons = [Server, Boxes, ShieldCheck];

export function Features() {
  const { t } = useT();
  return (
    <section className="page">
      <span className="eyebrow">{t.features.eyebrow}</span>
      <h1>{t.features.title}</h1>
      <p className="lead compact">{t.features.lede}</p>

      {t.features.categories.map(({ label, features }, idx) => {
        const Icon = icons[idx];
        const iconClasses = ['icon-blue', 'icon-green', 'icon-purple'];
        return (
          <div key={label} className="feature-category">
            <div className="category-label">
              <div className={`category-icon ${iconClasses[idx]}`}><Icon size={14} /></div>
              <h2>{label}</h2>
            </div>
            <div className="feature-list">
              {features.map((f) => (
                <div key={f}>
                  <CheckCircle2 size={15} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
