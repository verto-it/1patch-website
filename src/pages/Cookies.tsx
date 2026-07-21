import { LegalDoc, LegalContent } from './LegalDoc';

const de: LegalContent = {
  eyebrow: 'Stand: Juli 2026',
  title: 'Cookie-Richtlinie',
  intro: (
    <>
      Diese Cookie-Richtlinie erläutert, welche Cookies und ähnlichen Speichertechnologien auf der
      Website <strong>1patch.de</strong> zum Einsatz kommen. Kurz gesagt: Diese Website setzt{' '}
      <strong>keine Cookies</strong> und nutzt <strong>keine Tracking- oder Analysedienste</strong>.
      Lediglich eine technisch notwendige, lokale Speicherung Ihrer Sprachwahl findet statt – ohne
      Übermittlung an uns oder Dritte.
    </>
  ),
  sections: [
    {
      h: '1. Was sind Cookies und lokale Speicherung?',
      blocks: [
        {
          p: (
            <>
              Cookies sind kleine Textdateien, die eine Website beim Besuch auf Ihrem Endgerät
              ablegt und beim erneuten Aufruf wieder ausliest. Ähnlich funktionieren „localStorage“
              und „sessionStorage“ – hier speichert der Browser Informationen lokal, ohne sie bei
              jedem Seitenaufruf automatisch an den Server zu senden.
            </>
          ),
        },
      ],
    },
    {
      h: '2. Setzen wir Cookies?',
      blocks: [
        {
          p: (
            <>
              Nein. Diese Website setzt <strong>keine eigenen und keine fremden Cookies</strong>. Es
              werden weder Analyse-Cookies (z. B. Google Analytics) noch Marketing- oder
              Tracking-Cookies verwendet. Es findet kein Fingerprinting statt, und es werden keine
              Daten an Werbenetzwerke übermittelt.
            </>
          ),
        },
      ],
    },
    {
      h: '3. Technisch notwendige lokale Speicherung',
      blocks: [
        {
          p: (
            <>
              Wir speichern ausschließlich Ihre bevorzugte Anzeigesprache lokal im Browser, damit
              die Website bei Ihrem nächsten Besuch in der zuletzt gewählten Sprache erscheint:
            </>
          ),
        },
        {
          table: {
            headers: ['Name', 'Typ', 'Zweck', 'Speicherdauer'],
            rows: [
              [
                '1patch-lang',
                'localStorage',
                'Speichert die gewählte Sprache (Deutsch/Englisch)',
                'Bis zur Löschung des Browser-Speichers durch Sie',
              ],
            ],
          },
        },
        {
          p: (
            <>
              Dieser Eintrag ist unbedingt erforderlich für die von Ihnen gewünschte
              Komfortfunktion und wird nicht an unseren Server oder an Dritte übertragen. Seine
              Verwendung ist nach § 25 Abs. 2 Nr. 2 TDDDG einwilligungsfrei zulässig; die
              zugehörige Verarbeitung stützt sich auf Art. 6 Abs. 1 lit. f DSGVO.
            </>
          ),
        },
      ],
    },
    {
      h: '4. Warum kein Cookie-Banner?',
      blocks: [
        {
          p: (
            <>
              Ein Einwilligungsbanner ist nur erforderlich, wenn nicht unbedingt notwendige Cookies
              oder Speichervorgänge (z. B. für Analyse oder Werbung) eingesetzt werden. Da wir
              ausschließlich eine technisch notwendige lokale Speicherung nutzen und keinerlei
              Tracking betreiben, ist keine Einwilligung und damit kein Cookie-Banner erforderlich.
            </>
          ),
        },
      ],
    },
    {
      h: '5. Lokale Speicherung kontrollieren oder löschen',
      blocks: [
        {
          p: (
            <>
              Sie können lokal gespeicherte Daten jederzeit selbst löschen. Nutzen Sie dazu die
              Einstellungen Ihres Browsers („Browserdaten löschen“ bzw. „Websitedaten löschen“).
              Nach dem Löschen wird beim nächsten Besuch die anhand Ihrer Browsereinstellungen
              erkannte Sprache verwendet.
            </>
          ),
        },
      ],
    },
    {
      h: '6. Änderungen dieser Cookie-Richtlinie',
      blocks: [
        {
          p: (
            <>
              Sollten wir künftig weitere Speichertechnologien einsetzen, passen wir diese Richtlinie
              an und holen – soweit erforderlich – Ihre Einwilligung ein, bevor entsprechende
              Technologien aktiviert werden. Weitere Informationen zur Datenverarbeitung finden Sie
              in unserer <a href="/privacy">Datenschutzerklärung</a>.
            </>
          ),
        },
      ],
    },
  ],
};

const en: LegalContent = {
  eyebrow: 'Last updated: July 2026',
  title: 'Cookie Policy',
  intro: (
    <>
      This cookie policy explains which cookies and similar storage technologies are used on the
      website <strong>1patch.de</strong>. In short: this website sets <strong>no cookies</strong>{' '}
      and uses <strong>no tracking or analytics services</strong>. The only thing stored is a
      strictly necessary local record of your language choice — with no transmission to us or to
      any third party.
    </>
  ),
  sections: [
    {
      h: '1. What are cookies and local storage?',
      blocks: [
        {
          p: (
            <>
              Cookies are small text files that a website places on your device when you visit and
              reads again on your return. "localStorage" and "sessionStorage" work similarly — here
              the browser stores information locally without automatically sending it to the server
              on every page load.
            </>
          ),
        },
      ],
    },
    {
      h: '2. Do we set cookies?',
      blocks: [
        {
          p: (
            <>
              No. This website sets <strong>no first-party and no third-party cookies</strong>.
              Neither analytics cookies (e.g. Google Analytics) nor marketing or tracking cookies
              are used. No fingerprinting takes place, and no data is transmitted to advertising
              networks.
            </>
          ),
        },
      ],
    },
    {
      h: '3. Strictly necessary local storage',
      blocks: [
        {
          p: (
            <>
              We store only your preferred display language locally in the browser, so that the
              website appears in your last chosen language on your next visit:
            </>
          ),
        },
        {
          table: {
            headers: ['Name', 'Type', 'Purpose', 'Storage duration'],
            rows: [
              [
                '1patch-lang',
                'localStorage',
                'Stores the selected language (German/English)',
                'Until you clear your browser storage',
              ],
            ],
          },
        },
        {
          p: (
            <>
              This entry is strictly necessary for the convenience function you requested and is not
              transmitted to our server or to any third party. Its use is permitted without consent
              under § 25 (2) no. 2 TDDDG; the associated processing is based on Art. 6(1)(f) GDPR.
            </>
          ),
        },
      ],
    },
    {
      h: '4. Why no cookie banner?',
      blocks: [
        {
          p: (
            <>
              A consent banner is only required where non-essential cookies or storage operations
              (e.g. for analytics or advertising) are used. Since we use only strictly necessary
              local storage and carry out no tracking whatsoever, no consent — and therefore no
              cookie banner — is required.
            </>
          ),
        },
      ],
    },
    {
      h: '5. Controlling or deleting local storage',
      blocks: [
        {
          p: (
            <>
              You can delete locally stored data yourself at any time using your browser's settings
              ("clear browsing data" or "clear site data"). After deletion, your next visit will use
              the language detected from your browser settings.
            </>
          ),
        },
      ],
    },
    {
      h: '6. Changes to this cookie policy',
      blocks: [
        {
          p: (
            <>
              Should we use additional storage technologies in the future, we will amend this policy
              and — where required — obtain your consent before activating such technologies. For
              more information on data processing, see our <a href="/privacy">Privacy Policy</a>.
            </>
          ),
        },
      ],
    },
  ],
};

export function Cookies() {
  return <LegalDoc de={de} en={en} />;
}
