export function Privacy() {
  return (
    <section className="page">
      <div className="legal-doc">
        <div className="legal-eyebrow">Last updated: May 2026</div>
        <h1 className="legal-h1">Privacy Policy</h1>
        <p className="legal-intro">
          This policy explains what personal data Florian Busche ("we", "us") collects when you
          visit <strong>1patch.de</strong> (the informational website) and how we handle it.
          The hosted 1Patch service at <strong>1patch.app</strong> is subject to a separate
          privacy notice and Data Processing Agreement provided at onboarding. We keep data
          collection to the minimum required to operate this site.
        </p>

        {/* 1 */}
        <div className="legal-block">
          <h2 className="legal-h2">1. Data controller</h2>
          <p>
            Florian Busche<br />
            Blumenstraße 15, 71404 Korb, Deutschland<br />
            E-Mail (general): <a href="mailto:info@verto-it.com">info@verto-it.com</a><br />
            E-Mail (privacy): <a href="mailto:privacy@verto-it.com">privacy@verto-it.com</a><br />
            Phone: <a href="tel:+4971519761587">+49 7151 9761587</a>
          </p>
        </div>

        {/* 2 */}
        <div className="legal-block">
          <h2 className="legal-h2">2. Hosting and server logs</h2>
          <p>
            This website is hosted on servers located within the European Union. When you access any
            page, the web server automatically records the following data in access logs:
          </p>
          <ul className="legal-list">
            <li>IP address of the requesting device</li>
            <li>Date and time of the request</li>
            <li>URL of the page requested</li>
            <li>HTTP status code and bytes transferred</li>
            <li>Referrer URL (the page you came from, if any)</li>
            <li>Browser and operating system identifier (user-agent string)</li>
          </ul>
          <p>
            <strong>Legal basis:</strong> Art. 6(1)(f) GDPR — legitimate interest in detecting and
            defending against attacks, diagnosing errors, and ensuring stable operation.
          </p>
          <p>
            Logs are retained for a maximum of 30 days and then deleted. We do not combine log data
            with other sources or use it to build profiles.
          </p>
        </div>

        {/* 3 */}
        <div className="legal-block">
          <h2 className="legal-h2">3. Contact by e-mail</h2>
          <p>
            If you contact us at <a href="mailto:info@verto-it.com">info@verto-it.com</a> or
            {' '}<a href="mailto:privacy@verto-it.com">privacy@verto-it.com</a>, we
            process your e-mail address and the content of your message to respond to your enquiry.
          </p>
          <p>
            <strong>Legal basis:</strong> Art. 6(1)(b) GDPR where your message relates to a
            contract or pre-contractual steps; Art. 6(1)(f) GDPR (legitimate interest in responding
            to enquiries) in all other cases.
          </p>
          <p>
            We store correspondence only as long as necessary to resolve your enquiry and to comply
            with statutory retention obligations (typically up to 6 years for business
            correspondence under § 257 HGB / § 147 AO).
          </p>
        </div>

        {/* 4 */}
        <div className="legal-block">
          <h2 className="legal-h2">4. Cookies and tracking</h2>
          <p>
            This website sets <strong>no cookies</strong> and uses <strong>no analytics
            software</strong>, tracking pixels, or fingerprinting. No data is sent to advertising
            networks.
          </p>
        </div>

        {/* 5 */}
        <div className="legal-block">
          <h2 className="legal-h2">5. Fonts and static assets</h2>
          <p>
            All fonts (Inter, JetBrains Mono) are <strong>self-hosted</strong> and served directly
            from our own infrastructure. No requests are made to Google Fonts, Adobe Fonts, or any
            other external font service.
          </p>
        </div>

        {/* 6 */}
        <div className="legal-block">
          <h2 className="legal-h2">6. External links</h2>
          <p>
            This website links to external services including GitHub
            (github.com/Verto-It/1Patch). When you follow these links you leave our site and the
            respective provider's own privacy policy applies. We have no influence over the data
            those third parties collect.
          </p>
        </div>

        {/* 7 */}
        <div className="legal-block">
          <h2 className="legal-h2">7. Hosted 1Patch service</h2>
          <p>
            If you use the commercial hosted 1Patch service, the processing of your organisation's
            fleet data is governed by a separate Data Processing Agreement (DPA /
            Auftragsverarbeitungsvertrag) concluded prior to onboarding. That agreement sets out the
            scope, purpose, and duration of processing in detail. Fleet data (device inventories,
            patch logs, user accounts) is stored exclusively on servers within Germany or the
            EU / EEA.
          </p>
        </div>

        {/* 8 */}
        <div className="legal-block">
          <h2 className="legal-h2">8. Data transfers outside the EU / EEA</h2>
          <p>
            We do not transfer personal data to countries outside the European Union or the European
            Economic Area.
          </p>
        </div>

        {/* 9 */}
        <div className="legal-block">
          <h2 className="legal-h2">9. Your rights under the GDPR</h2>
          <p>You have the following rights regarding your personal data:</p>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead>
                <tr><th>Right</th><th>Article</th><th>What it means</th></tr>
              </thead>
              <tbody>
                <tr><td>Access</td><td>Art. 15</td><td>Obtain a copy of the data we hold about you</td></tr>
                <tr><td>Rectification</td><td>Art. 16</td><td>Correct inaccurate or incomplete data</td></tr>
                <tr><td>Erasure</td><td>Art. 17</td><td>Request deletion ("right to be forgotten")</td></tr>
                <tr><td>Restriction</td><td>Art. 18</td><td>Restrict processing while a dispute is resolved</td></tr>
                <tr><td>Portability</td><td>Art. 20</td><td>Receive your data in a machine-readable format</td></tr>
                <tr><td>Objection</td><td>Art. 21</td><td>Object to processing based on legitimate interest</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            To exercise any of these rights, e-mail{' '}
            <a href="mailto:privacy@verto-it.com">privacy@verto-it.com</a>. We will respond
            within 30 days.
          </p>
        </div>

        {/* 10 */}
        <div className="legal-block">
          <h2 className="legal-h2">10. Right to lodge a complaint</h2>
          <p>
            You have the right to lodge a complaint with the competent supervisory authority.
            The authority responsible for us is:
          </p>
          <p>
            Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
            Baden-Württemberg<br />
            Lautenschlagerstraße 20<br />
            70173 Stuttgart<br />
            Telefon: +49 711 615541-0<br />
            E-Mail: <a href="mailto:poststelle@lfdi.bwl.de">poststelle@lfdi.bwl.de</a><br />
            <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer">
              www.baden-wuerttemberg.datenschutz.de
            </a>
          </p>
        </div>

        {/* 11 */}
        <div className="legal-block">
          <h2 className="legal-h2">11. Changes to this policy</h2>
          <p>
            We may update this policy when our services or the applicable law changes. The current
            version is always available at this URL. We will not reduce your rights under this
            policy without explicit notice.
          </p>
        </div>
      </div>
    </section>
  );
}
