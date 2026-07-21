import { LegalDoc, LegalContent, OPERATOR, MailLink } from './LegalDoc';

const de: LegalContent = {
  eyebrow: 'Stand: Juli 2026',
  title: 'Datenschutzerklärung',
  intro: (
    <>
      Diese Datenschutzerklärung informiert Sie über die Verarbeitung personenbezogener Daten
      beim Besuch der Informationswebsite <strong>1patch.de</strong>. Der Schutz Ihrer Daten ist
      uns wichtig – wir beschränken die Erhebung auf das für den Betrieb dieser Website technisch
      erforderliche Minimum. Diese Website setzt <strong>keine Cookies</strong>, nutzt{' '}
      <strong>keine Analyse- oder Tracking-Dienste</strong> und bindet keine Inhalte Dritter
      (z. B. Schriftarten) von externen Servern ein. Der künftige gehostete 1Patch-Dienst unter
      1patch.app unterliegt einer eigenen Datenschutzinformation.
    </>
  ),
  sections: [
    {
      h: '1. Verantwortlicher',
      blocks: [
        {
          p: (
            <>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </>
          ),
        },
        {
          p: (
            <>
              {OPERATOR.name} – {OPERATOR.brand}<br />
              {OPERATOR.street}, {OPERATOR.city}, {OPERATOR.country.de}<br />
              E-Mail (allgemein): <MailLink address={OPERATOR.mailGeneral} /><br />
              E-Mail (Datenschutz): <MailLink address={OPERATOR.mailPrivacy} /><br />
              Telefon: <a href={OPERATOR.phoneHref}>{OPERATOR.phone}</a>
            </>
          ),
        },
        {
          p: (
            <>
              Eine gesetzliche Pflicht zur Benennung eines Datenschutzbeauftragten besteht nicht.
              Für alle Fragen zum Datenschutz erreichen Sie uns unter der oben genannten
              E-Mail-Adresse für Datenschutz.
            </>
          ),
        },
      ],
    },
    {
      h: '2. Hosting',
      blocks: [
        {
          p: (
            <>
              Diese Website wird bei einem externen Dienstleister betrieben, der die Website auf
              seinen Servern speichert und bereitstellt (Auftragsverarbeitung). Anbieter ist:
            </>
          ),
        },
        {
          p: (
            <>
              Ryzehosting<br />
              Hauptstraße 43<br />
              2563 Pottenstein<br />
              Österreich (EU/EWR)
            </>
          ),
        },
        {
          p: (
            <>
              Der Hoster verarbeitet die beim Aufruf der Website anfallenden Daten (siehe Ziffer 3)
              ausschließlich in unserem Auftrag und nach unseren Weisungen. Mit dem Anbieter besteht
              ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO. Die Server befinden sich
              innerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums.
            </>
          ),
        },
        {
          p: (
            <>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
              Interesse liegt in einer sicheren, stabilen und effizienten Bereitstellung unseres
              Online-Angebots.
            </>
          ),
        },
      ],
    },
    {
      h: '3. Server-Logfiles',
      blocks: [
        {
          p: (
            <>
              Bei jedem Aufruf einer Seite erhebt der Webserver automatisch Informationen, die Ihr
              Browser übermittelt, und speichert sie in sogenannten Server-Logfiles. Dies sind:
            </>
          ),
        },
        {
          list: [
            'IP-Adresse des anfragenden Endgeräts',
            'Datum und Uhrzeit des Zugriffs',
            'aufgerufene URL bzw. Name der abgerufenen Datei',
            'HTTP-Statuscode und übertragene Datenmenge',
            'Referrer-URL (die zuvor besuchte Seite, sofern vorhanden)',
            'verwendeter Browser und Betriebssystem (User-Agent)',
          ],
        },
        {
          p: (
            <>
              <strong>Zweck:</strong> Auslieferung der Website, Gewährleistung der Systemsicherheit
              und -stabilität sowie Abwehr und Auswertung von Angriffen.
            </>
          ),
        },
        {
          p: (
            <>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an der technisch fehlerfreien Darstellung und der Sicherheit der Website).
            </>
          ),
        },
        {
          p: (
            <>
              <strong>Speicherdauer:</strong> Die Logfiles werden für maximal 30 Tage gespeichert
              und anschließend automatisch gelöscht. Eine Zusammenführung dieser Daten mit anderen
              Datenquellen oder eine Auswertung zu Werbe- oder Profilbildungszwecken findet nicht
              statt.
            </>
          ),
        },
      ],
    },
    {
      h: '4. Kontaktaufnahme per E-Mail',
      blocks: [
        {
          p: (
            <>
              Wenn Sie uns per E-Mail (z. B. an <MailLink address={OPERATOR.mailGeneral} /> oder{' '}
              <MailLink address={OPERATOR.mailPrivacy} />) kontaktieren, verarbeiten wir Ihre
              E-Mail-Adresse sowie die in der Nachricht enthaltenen Angaben, um Ihr Anliegen zu
              bearbeiten und zu beantworten.
            </>
          ),
        },
        {
          p: (
            <>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage der
              Anbahnung oder Durchführung eines Vertrags dient; im Übrigen Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </>
          ),
        },
        {
          p: (
            <>
              <strong>Speicherdauer:</strong> Wir speichern Ihre Nachricht, bis Ihr Anliegen
              abschließend geklärt ist und kein Anlass zur weiteren Aufbewahrung mehr besteht.
              Bestehen gesetzliche Aufbewahrungspflichten – etwa für Geschäfts- und Handelsbriefe
              (6 Jahre gemäß § 257 HGB) oder für steuerlich relevante Unterlagen (bis zu 10 Jahre
              gemäß § 147 AO) – bewahren wir die betreffende Korrespondenz für die Dauer dieser
              Fristen auf und schränken die Verarbeitung bis zum Ablauf der Frist entsprechend ein.
            </>
          ),
        },
      ],
    },
    {
      h: '5. Cookies und lokale Speicherung',
      blocks: [
        {
          p: (
            <>
              Diese Website verwendet <strong>keine Cookies</strong> und keine vergleichbaren
              Wiedererkennungstechnologien zu Analyse- oder Marketingzwecken.
            </>
          ),
        },
        {
          p: (
            <>
              Zur Speicherung Ihrer bevorzugten Sprache (Deutsch/Englisch) wird ausschließlich ein
              technisch notwendiger Eintrag im lokalen Speicher (localStorage) Ihres Browsers unter
              dem Schlüssel <code>1patch-lang</code> abgelegt. Dieser Wert verbleibt lokal auf Ihrem
              Gerät, wird nicht an unseren Server oder Dritte übermittelt und dient allein dem
              Nutzungskomfort. Er bleibt gespeichert, bis Sie den Speicher Ihres Browsers löschen.
            </>
          ),
        },
        {
          p: (
            <>
              <strong>Rechtsgrundlage:</strong> Das Speichern dieser unbedingt erforderlichen
              Information ist nach § 25 Abs. 2 Nr. 2 TDDDG einwilligungsfrei zulässig; die
              zugrunde liegende Verarbeitung stützt sich auf Art. 6 Abs. 1 lit. f DSGVO. Da keine
              einwilligungsbedürftigen Cookies eingesetzt werden, ist kein Cookie-Banner
              erforderlich. Näheres finden Sie in unserer{' '}
              <a href="/cookies">Cookie-Richtlinie</a>.
            </>
          ),
        },
      ],
    },
    {
      h: '6. Schriftarten und statische Inhalte',
      blocks: [
        {
          p: (
            <>
              Alle Schriftarten (Inter, JetBrains Mono) sind lokal eingebunden und werden direkt
              von unserer eigenen Infrastruktur ausgeliefert. Es werden keine Verbindungen zu Google
              Fonts, Adobe Fonts oder anderen externen Schriftdiensten aufgebaut. Beim Aufruf der
              Website werden daher keine Ihrer Daten an solche Dritten übertragen.
            </>
          ),
        },
      ],
    },
    {
      h: '7. Externe Links',
      blocks: [
        {
          p: (
            <>
              Diese Website verweist über Links auf externe Angebote, insbesondere auf
              GitHub-Repositories der 1Patch-Komponenten. Erst wenn Sie einen solchen Link aktiv
              anklicken, werden Daten an den jeweiligen Anbieter übertragen; dann gilt dessen
              Datenschutzerklärung. Auf die Datenverarbeitung durch diese Dritten haben wir keinen
              Einfluss.
            </>
          ),
        },
      ],
    },
    {
      h: '8. Gehosteter 1Patch-Dienst',
      blocks: [
        {
          p: (
            <>
              Der gehostete 1Patch-Dienst (1patch.app) wird derzeit noch nicht angeboten. Sobald er
              verfügbar ist, erfolgt die Verarbeitung der Flottendaten unserer Kunden
              (Geräteinventare, Patch-Protokolle, Nutzerkonten) auf Grundlage eines gesonderten
              Auftragsverarbeitungsvertrags (AVV) nach Art. 28 DSGVO, der vor der Nutzung
              geschlossen wird. Für diesen Dienst gilt eine eigene Datenschutzinformation; die
              vorliegende Erklärung betrifft ausschließlich die Informationswebsite 1patch.de.
            </>
          ),
        },
      ],
    },
    {
      h: '9. Übermittlung in Drittländer',
      blocks: [
        {
          p: (
            <>
              Eine Übermittlung personenbezogener Daten an Empfänger in Ländern außerhalb der
              Europäischen Union oder des Europäischen Wirtschaftsraums findet im Rahmen dieser
              Website nicht statt.
            </>
          ),
        },
      ],
    },
    {
      h: '10. Ihre Rechte als betroffene Person',
      blocks: [
        {
          p: <>Sie haben in Bezug auf Ihre personenbezogenen Daten folgende Rechte:</>,
        },
        {
          table: {
            headers: ['Recht', 'Artikel', 'Bedeutung'],
            rows: [
              ['Auskunft', 'Art. 15', 'Auskunft über die zu Ihnen gespeicherten Daten'],
              ['Berichtigung', 'Art. 16', 'Korrektur unrichtiger oder unvollständiger Daten'],
              ['Löschung', 'Art. 17', 'Löschung Ihrer Daten („Recht auf Vergessenwerden“)'],
              ['Einschränkung', 'Art. 18', 'Einschränkung der Verarbeitung'],
              ['Datenübertragbarkeit', 'Art. 20', 'Herausgabe in einem maschinenlesbaren Format'],
              ['Widerspruch', 'Art. 21', 'Widerspruch gegen Verarbeitung aus berechtigtem Interesse'],
            ],
          },
        },
        {
          p: (
            <>
              Zur Ausübung dieser Rechte genügt eine E-Mail an{' '}
              <MailLink address={OPERATOR.mailPrivacy} />. Wir beantworten Ihr Anliegen
              unverzüglich, spätestens innerhalb eines Monats (Art. 12 Abs. 3 DSGVO).
            </>
          ),
        },
      ],
    },
    {
      h: '11. Widerspruchsrecht',
      blocks: [
        {
          p: (
            <>
              Soweit wir Daten auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO)
              verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen
              Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung einzulegen. Wir
              verarbeiten die betroffenen Daten dann nicht mehr, es sei denn, wir können zwingende
              schutzwürdige Gründe nachweisen, die Ihre Interessen überwiegen, oder die
              Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen.
            </>
          ),
        },
      ],
    },
    {
      h: '12. Beschwerderecht bei einer Aufsichtsbehörde',
      blocks: [
        {
          p: (
            <>
              Unbeschadet anderer Rechtsbehelfe haben Sie das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde zu beschweren. Die für uns zuständige Behörde ist:
            </>
          ),
        },
        {
          p: (
            <>
              Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
              Baden-Württemberg<br />
              Lautenschlagerstraße 20<br />
              70173 Stuttgart<br />
              Telefon: <a href="tel:+497116155410">+49 711 615541-0</a><br />
              E-Mail: <MailLink address="poststelle@lfdi.bwl.de" /><br />
              <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer">
                www.baden-wuerttemberg.datenschutz.de
              </a>
            </>
          ),
        },
      ],
    },
    {
      h: '13. Datensicherheit',
      blocks: [
        {
          p: (
            <>
              Diese Website wird über eine verschlüsselte TLS-Verbindung (HTTPS) ausgeliefert, um
              die übertragenen Daten gegen unbefugten Zugriff zu schützen. Zusätzlich treffen wir
              angemessene technische und organisatorische Maßnahmen, um Ihre Daten vor Verlust,
              Missbrauch und unbefugtem Zugriff zu schützen.
            </>
          ),
        },
      ],
    },
    {
      h: '14. Aktualität und Änderungen',
      blocks: [
        {
          p: (
            <>
              Diese Datenschutzerklärung hat den Stand Juli 2026. Durch die Weiterentwicklung
              unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann
              es notwendig werden, sie anzupassen. Die jeweils aktuelle Fassung ist stets auf dieser
              Seite abrufbar.
            </>
          ),
        },
      ],
    },
  ],
};

const en: LegalContent = {
  eyebrow: 'Last updated: July 2026',
  title: 'Privacy Policy',
  intro: (
    <>
      This privacy policy explains how personal data is processed when you visit the
      informational website <strong>1patch.de</strong>. Protecting your data matters to us — we
      limit collection to the minimum technically required to operate this site. This website sets{' '}
      <strong>no cookies</strong>, uses <strong>no analytics or tracking services</strong>, and
      embeds no third-party content (such as fonts) from external servers. The future hosted
      1Patch service at 1patch.app is subject to its own privacy notice.
    </>
  ),
  sections: [
    {
      h: '1. Data controller',
      blocks: [
        { p: <>The controller within the meaning of the General Data Protection Regulation (GDPR) is:</> },
        {
          p: (
            <>
              {OPERATOR.name} – {OPERATOR.brand}<br />
              {OPERATOR.street}, {OPERATOR.city}, {OPERATOR.country.en}<br />
              E-mail (general): <MailLink address={OPERATOR.mailGeneral} /><br />
              E-mail (privacy): <MailLink address={OPERATOR.mailPrivacy} /><br />
              Phone: <a href={OPERATOR.phoneHref}>{OPERATOR.phone}</a>
            </>
          ),
        },
        {
          p: (
            <>
              There is no statutory obligation to appoint a data protection officer. For any
              privacy-related questions, please contact us at the privacy e-mail address above.
            </>
          ),
        },
      ],
    },
    {
      h: '2. Hosting',
      blocks: [
        {
          p: (
            <>
              This website is operated by an external service provider that stores and serves the
              website on its servers (processing on our behalf). The provider is:
            </>
          ),
        },
        {
          p: (
            <>
              Ryzehosting<br />
              Hauptstraße 43<br />
              2563 Pottenstein<br />
              Austria (EU/EEA)
            </>
          ),
        },
        {
          p: (
            <>
              The host processes the data arising when the website is accessed (see section 3)
              exclusively on our behalf and in accordance with our instructions. A data processing
              agreement pursuant to Art. 28 GDPR is in place with the provider. The servers are
              located within the European Union / European Economic Area.
            </>
          ),
        },
        {
          p: (
            <>
              <strong>Legal basis:</strong> Art. 6(1)(f) GDPR. Our legitimate interest lies in the
              secure, stable, and efficient provision of our online offering.
            </>
          ),
        },
      ],
    },
    {
      h: '3. Server log files',
      blocks: [
        {
          p: (
            <>
              Each time a page is accessed, the web server automatically records information
              transmitted by your browser and stores it in what are known as server log files.
              These are:
            </>
          ),
        },
        {
          list: [
            'IP address of the requesting device',
            'date and time of the request',
            'URL / name of the file requested',
            'HTTP status code and volume of data transferred',
            'referrer URL (the previously visited page, if any)',
            'browser and operating system used (user agent)',
          ],
        },
        {
          p: (
            <>
              <strong>Purpose:</strong> delivery of the website, safeguarding system security and
              stability, and defending against and analysing attacks.
            </>
          ),
        },
        {
          p: (
            <>
              <strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interest in the
              technically correct presentation and the security of the website).
            </>
          ),
        },
        {
          p: (
            <>
              <strong>Retention period:</strong> Log files are stored for a maximum of 30 days and
              then automatically deleted. This data is not merged with other data sources and is
              not evaluated for advertising or profiling purposes.
            </>
          ),
        },
      ],
    },
    {
      h: '4. Contact by e-mail',
      blocks: [
        {
          p: (
            <>
              If you contact us by e-mail (e.g. at <MailLink address={OPERATOR.mailGeneral} /> or{' '}
              <MailLink address={OPERATOR.mailPrivacy} />), we process your e-mail address and the
              information contained in your message in order to handle and respond to your enquiry.
            </>
          ),
        },
        {
          p: (
            <>
              <strong>Legal basis:</strong> Art. 6(1)(b) GDPR where your enquiry relates to the
              initiation or performance of a contract; otherwise Art. 6(1)(f) GDPR (legitimate
              interest in responding to enquiries).
            </>
          ),
        },
        {
          p: (
            <>
              <strong>Retention period:</strong> We store your message until your enquiry has been
              fully dealt with and there is no further reason to retain it. Where statutory
              retention obligations apply — for example for business and commercial correspondence
              (6 years under § 257 HGB) or for tax-relevant documents (up to 10 years under § 147
              AO) — we retain the relevant correspondence for the duration of those periods and
              restrict its processing accordingly until they expire.
            </>
          ),
        },
      ],
    },
    {
      h: '5. Cookies and local storage',
      blocks: [
        {
          p: (
            <>
              This website uses <strong>no cookies</strong> and no comparable recognition
              technologies for analytics or marketing purposes.
            </>
          ),
        },
        {
          p: (
            <>
              To remember your preferred language (German/English), a single, strictly necessary
              entry is placed in your browser's local storage under the key <code>1patch-lang</code>.
              This value stays locally on your device, is not transmitted to our server or to any
              third party, and serves only to improve usability. It remains stored until you clear
              your browser's storage.
            </>
          ),
        },
        {
          p: (
            <>
              <strong>Legal basis:</strong> Storing this strictly necessary information is
              permitted without consent under § 25 (2) no. 2 TDDDG; the underlying processing is
              based on Art. 6(1)(f) GDPR. As no consent-requiring cookies are used, no cookie
              banner is required. For details, see our <a href="/cookies">Cookie Policy</a>.
            </>
          ),
        },
      ],
    },
    {
      h: '6. Fonts and static assets',
      blocks: [
        {
          p: (
            <>
              All fonts (Inter, JetBrains Mono) are embedded locally and served directly from our
              own infrastructure. No connections are established to Google Fonts, Adobe Fonts, or
              any other external font service. Accessing the website therefore transfers none of
              your data to such third parties.
            </>
          ),
        },
      ],
    },
    {
      h: '7. External links',
      blocks: [
        {
          p: (
            <>
              This website links to external offerings, in particular the GitHub repositories of
              the 1Patch components. Data is only transferred to the respective provider once you
              actively click such a link; that provider's privacy policy then applies. We have no
              influence over the data processing carried out by these third parties.
            </>
          ),
        },
      ],
    },
    {
      h: '8. Hosted 1Patch service',
      blocks: [
        {
          p: (
            <>
              The hosted 1Patch service (1patch.app) is not yet offered. Once it becomes available,
              the processing of our customers' fleet data (device inventories, patch logs, user
              accounts) will be carried out on the basis of a separate data processing agreement
              (DPA) pursuant to Art. 28 GDPR concluded before use. That service is subject to its
              own privacy notice; the present policy concerns exclusively the informational website
              1patch.de.
            </>
          ),
        },
      ],
    },
    {
      h: '9. Transfers to third countries',
      blocks: [
        {
          p: (
            <>
              Within the scope of this website, no personal data is transferred to recipients in
              countries outside the European Union or the European Economic Area.
            </>
          ),
        },
      ],
    },
    {
      h: '10. Your rights as a data subject',
      blocks: [
        { p: <>You have the following rights regarding your personal data:</> },
        {
          table: {
            headers: ['Right', 'Article', 'What it means'],
            rows: [
              ['Access', 'Art. 15', 'Information about the data stored about you'],
              ['Rectification', 'Art. 16', 'Correction of inaccurate or incomplete data'],
              ['Erasure', 'Art. 17', 'Deletion of your data ("right to be forgotten")'],
              ['Restriction', 'Art. 18', 'Restriction of processing'],
              ['Portability', 'Art. 20', 'Release of your data in a machine-readable format'],
              ['Objection', 'Art. 21', 'Objection to processing based on legitimate interest'],
            ],
          },
        },
        {
          p: (
            <>
              To exercise these rights, an e-mail to <MailLink address={OPERATOR.mailPrivacy} /> is
              sufficient. We will respond to your request without undue delay and at the latest
              within one month (Art. 12(3) GDPR).
            </>
          ),
        },
      ],
    },
    {
      h: '11. Right to object',
      blocks: [
        {
          p: (
            <>
              Where we process data on the basis of legitimate interests (Art. 6(1)(f) GDPR), you
              have the right to object at any time, on grounds relating to your particular
              situation, to that processing. We will then no longer process the data concerned
              unless we can demonstrate compelling legitimate grounds that override your interests,
              or the processing serves to assert, exercise, or defend legal claims.
            </>
          ),
        },
      ],
    },
    {
      h: '12. Right to lodge a complaint with a supervisory authority',
      blocks: [
        {
          p: (
            <>
              Without prejudice to any other remedy, you have the right to lodge a complaint with a
              data protection supervisory authority. The authority responsible for us is:
            </>
          ),
        },
        {
          p: (
            <>
              Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
              Baden-Württemberg<br />
              Lautenschlagerstraße 20<br />
              70173 Stuttgart<br />
              Phone: <a href="tel:+497116155410">+49 711 615541-0</a><br />
              E-mail: <MailLink address="poststelle@lfdi.bwl.de" /><br />
              <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer">
                www.baden-wuerttemberg.datenschutz.de
              </a>
            </>
          ),
        },
      ],
    },
    {
      h: '13. Data security',
      blocks: [
        {
          p: (
            <>
              This website is delivered over an encrypted TLS connection (HTTPS) to protect the
              transmitted data against unauthorised access. In addition, we take appropriate
              technical and organisational measures to protect your data against loss, misuse, and
              unauthorised access.
            </>
          ),
        },
      ],
    },
    {
      h: '14. Currency and changes',
      blocks: [
        {
          p: (
            <>
              This privacy policy is dated July 2026. As our website evolves or in response to
              changed legal or regulatory requirements, it may become necessary to amend it. The
              current version is always available on this page.
            </>
          ),
        },
      ],
    },
  ],
};

export function Privacy() {
  return <LegalDoc de={de} en={en} />;
}
