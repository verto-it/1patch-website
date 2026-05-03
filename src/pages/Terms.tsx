export function Terms() {
  return (
    <section className="page">
      <div className="legal-doc">
        <div className="legal-eyebrow">Last updated: May 2026</div>
        <h1 className="legal-h1">Terms of Use</h1>
        <p className="legal-intro">
          These terms govern your use of <strong>1patch.de</strong> (the informational website)
          and, where applicable, the hosted 1Patch service at <strong>1patch.app</strong>, both
          operated by Florian Busche, Blumenstraße 15, 71404 Korb, Germany ("Operator", "we",
          "us"). By using either site you agree to these terms.
        </p>

        <div className="legal-block">
          <h2 className="legal-h2">1. Scope</h2>
          <p>
            These terms apply to the informational website at 1patch.de and to hosted
            1Patch service accounts at 1patch.app. Use of the open-source 1Patch software itself is governed
            solely by the GNU Affero General Public License v3.0 (AGPL-3.0), which takes
            precedence over these terms for software licensing matters.
          </p>
        </div>

        <div className="legal-block">
          <h2 className="legal-h2">2. Open-source software</h2>
          <p>
            The 1Patch server, backend node, and client agent are free software licensed under
            the <strong>AGPL-3.0-only</strong> licence. You may download, use, modify, and
            distribute the software under the conditions of that licence. The full licence text
            is included in every component repository.
          </p>
          <p>
            We make no warranties regarding the open-source software beyond those required by
            applicable law. The software is provided "as is".
          </p>
        </div>

        <div className="legal-block">
          <h2 className="legal-h2">3. Hosted service</h2>
          <p>
            Access to the commercially hosted 1Patch control plane is subject to a separate
            Service Agreement and, for organisations processing personal data, a Data Processing
            Agreement (DPA / Auftragsverarbeitungsvertrag). Those documents are provided during
            onboarding and prevail over these terms where they conflict.
          </p>
          <p>
            The hosted service is intended exclusively for <strong>business customers
            (B2B)</strong>. Consumer contracts (B2C) within the meaning of § 13 BGB are not
            accepted.
          </p>
        </div>

        <div className="legal-block">
          <h2 className="legal-h2">4. Permitted use of this website</h2>
          <p>You may use 1patch.de and 1patch.app for lawful purposes only. You must not:</p>
          <ul className="legal-list">
            <li>Attempt to gain unauthorised access to any part of the site or its infrastructure</li>
            <li>Transmit malicious code, scrape the site in a manner that impairs performance, or
              circumvent technical measures</li>
            <li>Misrepresent your affiliation with Verto-IT or the 1Patch project</li>
          </ul>
        </div>

        <div className="legal-block">
          <h2 className="legal-h2">5. Intellectual property</h2>
          <p>
            The 1Patch name, logo, and website content are the property of Florian Busche unless
            otherwise noted. The open-source software repositories contain their own licence
            statements which govern reuse of that code.
          </p>
          <p>
            Nothing on this site grants you a licence to use our trademarks without prior written
            consent.
          </p>
        </div>

        <div className="legal-block">
          <h2 className="legal-h2">6. Disclaimer of liability</h2>
          <p>
            The content on this website is provided for informational purposes only. We make
            reasonable efforts to keep information accurate and up to date, but we give no
            warranties as to its completeness, correctness, or fitness for a particular purpose.
          </p>
          <p>
            Our liability for damages is excluded to the extent permitted by law. Liability for
            intent and gross negligence, as well as liability under the Produkthaftungsgesetz
            (German Product Liability Act), remains unaffected.
          </p>
        </div>

        <div className="legal-block">
          <h2 className="legal-h2">7. External links</h2>
          <p>
            This website contains links to external sites (e.g. GitHub). We have no control over
            linked content and accept no liability for it. The respective operators of those sites
            are responsible for their content.
          </p>
        </div>

        <div className="legal-block">
          <h2 className="legal-h2">8. Governing law and jurisdiction</h2>
          <p>
            These terms are governed by the laws of the Federal Republic of Germany, excluding
            the UN Convention on Contracts for the International Sale of Goods (CISG). For
            disputes with merchants (Kaufleute) or legal entities under public law, the courts
            of the Operator's registered location (Korb, Baden-Württemberg) have exclusive
            jurisdiction.
          </p>
        </div>

        <div className="legal-block">
          <h2 className="legal-h2">9. Changes</h2>
          <p>
            We may update these terms at any time. The current version is always available at
            this URL. Continued use of the website after changes constitutes acceptance of the
            revised terms.
          </p>
        </div>

        <div className="legal-block">
          <h2 className="legal-h2">10. Contact</h2>
          <p>
            General enquiries: <a href="mailto:info@verto-it.com">info@verto-it.com</a><br />
            Privacy &amp; data protection: <a href="mailto:privacy@verto-it.com">privacy@verto-it.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
