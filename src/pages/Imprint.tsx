/**
 * Renders the imprint UI.
 * @returns The result produced by the operation.
 */
export function Imprint() {
  return (
    <section className="page">
      <div className="legal-doc">
        <div className="legal-eyebrow">Angaben gemäß § 5 TMG</div>
        <h1 className="legal-h1">Impressum</h1>

        <div className="legal-block">
          <h2 className="legal-h2">Anbieter</h2>
          <p>
            Florian Busche<br />
            Blumenstraße 15<br />
            71404 Korb<br />
            Deutschland
          </p>
        </div>

        <div className="legal-block">
          <h2 className="legal-h2">Kontakt</h2>
          <p>
            Telefon: <a href="tel:+4971519761587">+49 7151 9761587</a><br />
            E-Mail: <a href="mailto:info@verto-it.com">info@verto-it.com</a>
          </p>
        </div>

        <div className="legal-block">
          <h2 className="legal-h2">Verantwortlich für den Inhalt nach § 55 Abs. 2 MStV</h2>
          <p>
            Florian Busche<br />
            Blumenstraße 15<br />
            71404 Korb
          </p>
        </div>

        <div className="legal-block">
          <h2 className="legal-h2">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>

        <div className="legal-block">
          <h2 className="legal-h2">Verbraucherstreitbeilegung</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </section>
  );
}
