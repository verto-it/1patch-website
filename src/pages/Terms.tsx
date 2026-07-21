import { LegalDoc, LegalContent, OPERATOR, MailLink } from './LegalDoc';

const de: LegalContent = {
  eyebrow: 'Stand: Juli 2026',
  title: 'Allgemeine Geschäftsbedingungen (AGB)',
  intro: (
    <>
      Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der Informationswebsite{' '}
      <strong>1patch.de</strong> sowie – soweit künftig angeboten – des gehosteten 1Patch-Dienstes
      unter <strong>1patch.app</strong>, jeweils betrieben von {OPERATOR.name} – {OPERATOR.brand},{' '}
      {OPERATOR.street}, {OPERATOR.city}, {OPERATOR.country.de} („Betreiber“, „wir“, „uns“). Mit der
      Nutzung der Website erkennen Sie diese Bedingungen an.
    </>
  ),
  sections: [
    {
      h: '1. Geltungsbereich und Anbieter',
      blocks: [
        {
          p: (
            <>
              Diese AGB gelten für die Informationswebsite unter 1patch.de. Für die Nutzung der
              quelloffenen 1Patch-Software gelten ausschließlich die Bedingungen der jeweiligen
              Open-Source-Lizenz (siehe Ziffer 3), die Softwarelizenzfragen gegenüber diesen AGB
              vorgehen. Für einen künftig angebotenen gehosteten Dienst gelten ergänzend die dort
              vereinbarten gesonderten Bedingungen (Ziffer 4).
            </>
          ),
        },
      ],
    },
    {
      h: '2. Leistungsgegenstand der Website',
      blocks: [
        {
          p: (
            <>
              Die Website unter 1patch.de ist ein unentgeltliches Informationsangebot über das
              Open-Source-Projekt 1Patch. Sie dient der Darstellung des Projekts, seiner Funktionen
              und der Verweisung auf die zugehörigen Quellcode-Repositories. Ein Anspruch auf
              ständige Verfügbarkeit der Website besteht nicht; wir behalten uns vor, das Angebot zu
              ändern, einzuschränken oder einzustellen.
            </>
          ),
        },
      ],
    },
    {
      h: '3. Open-Source-Software',
      blocks: [
        {
          p: (
            <>
              Der 1Patch-Management-Server, die Backend-Node und der Client-Agent sind freie
              Software und unter der <strong>GNU Affero General Public License v3.0
              (AGPL-3.0-only)</strong> lizenziert. Sie dürfen die Software unter den Bedingungen
              dieser Lizenz nutzen, verändern und weiterverbreiten. Der vollständige Lizenztext
              liegt jedem Komponenten-Repository bei.
            </>
          ),
        },
        {
          p: (
            <>
              Die Software wird „wie besehen“ („as is“) ohne jegliche Gewährleistung bereitgestellt,
              soweit die AGPL-3.0 und das zwingende Recht dies zulassen. Maßgeblich für die
              Softwarenutzung ist allein der Lizenztext.
            </>
          ),
        },
      ],
    },
    {
      h: '4. Künftiger gehosteter Dienst (B2B)',
      blocks: [
        {
          p: (
            <>
              Der gehostete 1Patch-Dienst (1patch.app) wird derzeit noch nicht angeboten. Wird er
              künftig verfügbar, richtet er sich <strong>ausschließlich an Unternehmer</strong> im
              Sinne des § 14 BGB, Behörden und juristische Personen des öffentlichen Rechts.
              Verträge mit Verbrauchern (§ 13 BGB) werden nicht geschlossen. Der Zugang zum
              gehosteten Dienst setzt einen gesonderten Vertrag sowie – bei Verarbeitung
              personenbezogener Daten – einen Auftragsverarbeitungsvertrag (AVV) voraus; diese
              Dokumente gehen bei Widersprüchen diesen AGB vor.
            </>
          ),
        },
      ],
    },
    {
      h: '5. Nutzung der Website und Pflichten der Nutzer',
      blocks: [
        {
          p: <>Sie dürfen 1patch.de nur zu rechtmäßigen Zwecken nutzen. Insbesondere ist untersagt:</>,
        },
        {
          list: [
            'sich unbefugt Zugang zu Teilen der Website oder der zugrunde liegenden Infrastruktur zu verschaffen',
            'Schadsoftware zu übertragen, die Website in einer die Verfügbarkeit oder Leistung beeinträchtigenden Weise automatisiert abzurufen (Scraping) oder technische Schutzmaßnahmen zu umgehen',
            'eine Verbindung zu oder Beauftragung durch Verto-IT bzw. das 1Patch-Projekt vorzutäuschen oder Schutzrechte Dritter zu verletzen',
          ],
        },
      ],
    },
    {
      h: '6. Rechte an Inhalten und Marken',
      blocks: [
        {
          p: (
            <>
              Der Name „1Patch“, das Logo sowie die Inhalte dieser Website sind, soweit nicht anders
              gekennzeichnet, urheber- und kennzeichenrechtlich geschützt und stehen dem Betreiber
              zu. Die Quellcode-Repositories enthalten eigene Lizenzhinweise, die die Weiterverwendung
              des Codes regeln. Diese Website gewährt Ihnen kein Recht zur Nutzung unserer Marken
              ohne vorherige schriftliche Zustimmung.
            </>
          ),
        },
      ],
    },
    {
      h: '7. Haftung',
      blocks: [
        {
          p: (
            <>
              Die Inhalte dieser Website werden ausschließlich zu Informationszwecken bereitgestellt.
              Wir bemühen uns um Richtigkeit und Aktualität, übernehmen jedoch keine Gewähr für
              Vollständigkeit, Richtigkeit oder Eignung für einen bestimmten Zweck.
            </>
          ),
        },
        {
          p: (
            <>
              Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der
              Gesundheit sowie bei Vorsatz und grober Fahrlässigkeit. Bei einfacher Fahrlässigkeit
              haften wir nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht) und
              begrenzt auf den vertragstypischen, vorhersehbaren Schaden. Die Haftung nach dem
              Produkthaftungsgesetz bleibt unberührt. Eine darüber hinausgehende Haftung ist
              ausgeschlossen.
            </>
          ),
        },
      ],
    },
    {
      h: '8. Haftung für externe Links',
      blocks: [
        {
          p: (
            <>
              Diese Website enthält Links zu externen Websites Dritter (z. B. GitHub). Auf deren
              Inhalte haben wir keinen Einfluss und übernehmen hierfür keine Haftung. Für die Inhalte
              der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
            </>
          ),
        },
      ],
    },
    {
      h: '9. Änderungen dieser AGB',
      blocks: [
        {
          p: (
            <>
              Wir können diese AGB mit Wirkung für die Zukunft ändern, etwa bei geänderter Rechtslage
              oder Weiterentwicklung des Angebots. Die jeweils aktuelle Fassung ist stets auf dieser
              Seite abrufbar. Mit der weiteren Nutzung der Website nach einer Änderung erkennen Sie
              die geänderten Bedingungen an.
            </>
          ),
        },
      ],
    },
    {
      h: '10. Anwendbares Recht und Gerichtsstand',
      blocks: [
        {
          p: (
            <>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts
              (CISG). Ist der Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder
              öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle
              Streitigkeiten der Sitz des Betreibers (Korb, Baden-Württemberg).
            </>
          ),
        },
      ],
    },
    {
      h: '11. Schlussbestimmungen',
      blocks: [
        {
          p: (
            <>
              Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder
              werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </>
          ),
        },
        {
          p: (
            <>
              Kontakt: Allgemeine Anfragen <MailLink address={OPERATOR.mailGeneral} />, Datenschutz{' '}
              <MailLink address={OPERATOR.mailPrivacy} />.
            </>
          ),
        },
      ],
    },
  ],
};

const en: LegalContent = {
  eyebrow: 'Last updated: July 2026',
  title: 'Terms and Conditions',
  intro: (
    <>
      These terms and conditions govern the use of the informational website{' '}
      <strong>1patch.de</strong> and — where offered in future — the hosted 1Patch service at{' '}
      <strong>1patch.app</strong>, each operated by {OPERATOR.name} – {OPERATOR.brand},{' '}
      {OPERATOR.street}, {OPERATOR.city}, {OPERATOR.country.en} ("Operator", "we", "us"). By using
      the website you accept these terms.
    </>
  ),
  sections: [
    {
      h: '1. Scope and provider',
      blocks: [
        {
          p: (
            <>
              These terms apply to the informational website at 1patch.de. Use of the open-source
              1Patch software is governed solely by the terms of the applicable open-source licence
              (see section 3), which prevail over these terms in software licensing matters. Any
              hosted service offered in future is additionally governed by the separate terms agreed
              there (section 4).
            </>
          ),
        },
      ],
    },
    {
      h: '2. Subject matter of the website',
      blocks: [
        {
          p: (
            <>
              The website at 1patch.de is a free informational offering about the open-source
              project 1Patch. It presents the project, its features, and links to the associated
              source-code repositories. There is no entitlement to continuous availability of the
              website; we reserve the right to change, restrict, or discontinue the offering.
            </>
          ),
        },
      ],
    },
    {
      h: '3. Open-source software',
      blocks: [
        {
          p: (
            <>
              The 1Patch management server, backend node, and client agent are free software
              licensed under the <strong>GNU Affero General Public License v3.0
              (AGPL-3.0-only)</strong>. You may use, modify, and redistribute the software under the
              conditions of that licence. The full licence text is included in every component
              repository.
            </>
          ),
        },
        {
          p: (
            <>
              The software is provided "as is" without any warranty, to the extent permitted by the
              AGPL-3.0 and mandatory law. The licence text alone is authoritative for use of the
              software.
            </>
          ),
        },
      ],
    },
    {
      h: '4. Future hosted service (B2B)',
      blocks: [
        {
          p: (
            <>
              The hosted 1Patch service (1patch.app) is not yet offered. If it becomes available in
              future, it will be directed <strong>exclusively at businesses</strong> within the
              meaning of § 14 BGB, public authorities, and legal entities under public law. Contracts
              with consumers (§ 13 BGB) will not be concluded. Access to the hosted service requires
              a separate agreement and — where personal data is processed — a data processing
              agreement (DPA); those documents prevail over these terms in the event of conflict.
            </>
          ),
        },
      ],
    },
    {
      h: '5. Use of the website and user obligations',
      blocks: [
        {
          p: <>You may use 1patch.de for lawful purposes only. In particular, you must not:</>,
        },
        {
          list: [
            'gain unauthorised access to any part of the website or the underlying infrastructure',
            'transmit malicious code, access the website in an automated manner that impairs its availability or performance (scraping), or circumvent technical protection measures',
            'misrepresent any affiliation with or engagement by Verto-IT or the 1Patch project, or infringe third-party rights',
          ],
        },
      ],
    },
    {
      h: '6. Rights to content and trademarks',
      blocks: [
        {
          p: (
            <>
              The name "1Patch", the logo, and the content of this website are, unless otherwise
              indicated, protected by copyright and trademark law and belong to the Operator. The
              source-code repositories contain their own licence notices governing reuse of the
              code. This website grants you no right to use our trademarks without prior written
              consent.
            </>
          ),
        },
      ],
    },
    {
      h: '7. Liability',
      blocks: [
        {
          p: (
            <>
              The content of this website is provided for informational purposes only. We strive for
              accuracy and currency but give no warranty as to completeness, correctness, or fitness
              for a particular purpose.
            </>
          ),
        },
        {
          p: (
            <>
              We are liable without limitation for damages arising from injury to life, body, or
              health and in cases of intent and gross negligence. In cases of simple negligence we
              are liable only for breach of a material contractual obligation (cardinal obligation)
              and limited to the foreseeable damage typical for the contract. Liability under the
              German Product Liability Act (Produkthaftungsgesetz) remains unaffected. Any further
              liability is excluded.
            </>
          ),
        },
      ],
    },
    {
      h: '8. Liability for external links',
      blocks: [
        {
          p: (
            <>
              This website contains links to external third-party websites (e.g. GitHub). We have no
              influence over their content and accept no liability for it. The respective provider or
              operator is always responsible for the content of the linked pages.
            </>
          ),
        },
      ],
    },
    {
      h: '9. Changes to these terms',
      blocks: [
        {
          p: (
            <>
              We may change these terms with effect for the future, for example in response to
              changed law or the further development of the offering. The current version is always
              available on this page. By continuing to use the website after a change, you accept the
              amended terms.
            </>
          ),
        },
      ],
    },
    {
      h: '10. Governing law and jurisdiction',
      blocks: [
        {
          p: (
            <>
              The law of the Federal Republic of Germany applies, excluding the UN Convention on
              Contracts for the International Sale of Goods (CISG). If the user is a merchant, a legal
              entity under public law, or a special fund under public law, the exclusive place of
              jurisdiction for all disputes is the Operator's registered location (Korb,
              Baden-Württemberg).
            </>
          ),
        },
      ],
    },
    {
      h: '11. Final provisions',
      blocks: [
        {
          p: (
            <>
              Should individual provisions of these terms be or become invalid or unenforceable, the
              validity of the remaining provisions shall remain unaffected.
            </>
          ),
        },
        {
          p: (
            <>
              Contact: general enquiries <MailLink address={OPERATOR.mailGeneral} />, data protection{' '}
              <MailLink address={OPERATOR.mailPrivacy} />.
            </>
          ),
        },
      ],
    },
  ],
};

export function Terms() {
  return <LegalDoc de={de} en={en} />;
}
