import { LegalDoc, LegalContent, OPERATOR, MailLink } from './LegalDoc';

const de: LegalContent = {
  eyebrow: 'Angaben gemäß § 5 DDG',
  title: 'Impressum',
  sections: [
    {
      h: 'Diensteanbieter',
      blocks: [
        {
          p: (
            <>
              {OPERATOR.name} – {OPERATOR.brand}<br />
              Einzelunternehmen<br />
              {OPERATOR.street}<br />
              {OPERATOR.city}<br />
              {OPERATOR.country.de}
            </>
          ),
        },
      ],
    },
    {
      h: 'Kontakt',
      blocks: [
        {
          p: (
            <>
              Telefon: <a href={OPERATOR.phoneHref}>{OPERATOR.phone}</a><br />
              E-Mail: <MailLink address={OPERATOR.mailGeneral} /><br />
              Web: <a href={`https://${OPERATOR.website}`} target="_blank" rel="noopener noreferrer">{OPERATOR.website}</a>
            </>
          ),
        },
      ],
    },
    {
      h: 'Umsatzsteuer',
      blocks: [
        {
          p: (
            <>
              Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer
              berechnet und ausgewiesen. Eine Umsatzsteuer-Identifikationsnummer nach § 27a UStG
              liegt daher nicht vor.
            </>
          ),
        },
      ],
    },
    {
      h: 'Redaktionell verantwortlich nach § 18 Abs. 2 MStV',
      blocks: [
        {
          p: (
            <>
              {OPERATOR.name}<br />
              {OPERATOR.street}<br />
              {OPERATOR.city}
            </>
          ),
        },
      ],
    },
    {
      h: 'EU-Streitschlichtung',
      blocks: [
        {
          p: (
            <>
              Die Europäische Kommission stellt seit dem 20. Juli 2025 keine Plattform zur
              Online-Streitbeilegung (OS-Plattform) mehr bereit; diese wurde eingestellt. Ein
              Verweis auf eine solche Plattform entfällt daher.
            </>
          ),
        },
      ],
    },
    {
      h: 'Verbraucherstreitbeilegung',
      blocks: [
        {
          p: (
            <>
              1Patch und Verto-IT richten sich vorrangig an gewerbliche Kunden. Wir sind nicht
              bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle im Sinne des § 36 VSBG teilzunehmen.
            </>
          ),
        },
      ],
    },
    {
      h: 'Haftung für Inhalte',
      blocks: [
        {
          p: (
            <>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </>
          ),
        },
      ],
    },
    {
      h: 'Haftung für Links',
      blocks: [
        {
          p: (
            <>
              Unser Angebot enthält Links zu externen Websites Dritter (z. B. GitHub), auf deren
              Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte können wir keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Links umgehend entfernen.
            </>
          ),
        },
      ],
    },
    {
      h: 'Urheberrecht',
      blocks: [
        {
          p: (
            <>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Software von 1Patch ist unter der
              GNU Affero General Public License v3.0 (AGPL-3.0-only) lizenziert; für ihre Nutzung
              gelten die Bedingungen dieser Lizenz.
            </>
          ),
        },
      ],
    },
  ],
};

const en: LegalContent = {
  eyebrow: 'Legal information pursuant to § 5 DDG',
  title: 'Legal Notice',
  sections: [
    {
      h: 'Service provider',
      blocks: [
        {
          p: (
            <>
              {OPERATOR.name} – {OPERATOR.brand}<br />
              Sole proprietorship (Einzelunternehmen)<br />
              {OPERATOR.street}<br />
              {OPERATOR.city}<br />
              {OPERATOR.country.en}
            </>
          ),
        },
      ],
    },
    {
      h: 'Contact',
      blocks: [
        {
          p: (
            <>
              Phone: <a href={OPERATOR.phoneHref}>{OPERATOR.phone}</a><br />
              E-mail: <MailLink address={OPERATOR.mailGeneral} /><br />
              Web: <a href={`https://${OPERATOR.website}`} target="_blank" rel="noopener noreferrer">{OPERATOR.website}</a>
            </>
          ),
        },
      ],
    },
    {
      h: 'Value-added tax',
      blocks: [
        {
          p: (
            <>
              As a small business within the meaning of § 19 (1) of the German VAT Act (UStG),
              no value-added tax is charged or shown. Accordingly, no VAT identification number
              pursuant to § 27a UStG is held.
            </>
          ),
        },
      ],
    },
    {
      h: 'Responsible for content pursuant to § 18 (2) MStV',
      blocks: [
        {
          p: (
            <>
              {OPERATOR.name}<br />
              {OPERATOR.street}<br />
              {OPERATOR.city}
            </>
          ),
        },
      ],
    },
    {
      h: 'EU online dispute resolution',
      blocks: [
        {
          p: (
            <>
              Since 20 July 2025 the European Commission no longer provides an online dispute
              resolution (ODR) platform; the platform has been discontinued. A reference to such a
              platform is therefore no longer applicable.
            </>
          ),
        },
      ],
    },
    {
      h: 'Consumer dispute resolution',
      blocks: [
        {
          p: (
            <>
              1Patch and Verto-IT are aimed primarily at business customers. We are neither
              willing nor obliged to participate in dispute resolution proceedings before a
              consumer arbitration board within the meaning of § 36 VSBG.
            </>
          ),
        },
      ],
    },
    {
      h: 'Liability for content',
      blocks: [
        {
          p: (
            <>
              As a service provider, we are responsible for our own content on these pages under
              the general laws pursuant to § 7 (1) DDG. Pursuant to §§ 8 to 10 DDG, however, we
              are not obliged as a service provider to monitor transmitted or stored third-party
              information or to investigate circumstances that indicate unlawful activity.
              Obligations to remove or block the use of information under the general laws remain
              unaffected.
            </>
          ),
        },
      ],
    },
    {
      h: 'Liability for links',
      blocks: [
        {
          p: (
            <>
              Our website contains links to external third-party websites (e.g. GitHub) over
              whose content we have no influence. We therefore cannot accept any liability for
              such third-party content. The respective provider or operator of the linked pages
              is always responsible for their content. Upon becoming aware of any legal
              infringements, we will remove such links immediately.
            </>
          ),
        },
      ],
    },
    {
      h: 'Copyright',
      blocks: [
        {
          p: (
            <>
              The content and works created by the site operator on these pages are subject to
              German copyright law. The 1Patch software is licensed under the GNU Affero General
              Public License v3.0 (AGPL-3.0-only); its use is governed by the terms of that
              licence.
            </>
          ),
        },
      ],
    },
  ],
};

export function Imprint() {
  return <LegalDoc de={de} en={en} />;
}
