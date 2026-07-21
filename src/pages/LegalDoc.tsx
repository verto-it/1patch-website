import React from 'react';
import { useT } from '../i18n';

/**
 * Shared, fully bilingual (DE/EN) renderer for the legal documents
 * (Impressum, Datenschutz, Cookie-Richtlinie, AGB).
 *
 * Content is authored as data per language so the German and English
 * versions stay structurally parallel and switch with the site-wide
 * language toggle. Inline links (e-mail, URLs) are preserved as JSX.
 */

export type Block =
  | { p: React.ReactNode }
  | { h3: string }
  | { list: React.ReactNode[] }
  | { table: { headers: string[]; rows: React.ReactNode[][] } };

export interface Section {
  h: string;
  blocks: Block[];
}

export interface LegalContent {
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  sections: Section[];
  footnote?: React.ReactNode;
}

function BlockView({ block }: { block: Block }) {
  if ('p' in block) return <p>{block.p}</p>;
  if ('h3' in block) return <h3 className="legal-h3">{block.h3}</h3>;
  if ('list' in block) {
    return (
      <ul className="legal-list">
        {block.list.map((li, i) => <li key={i}>{li}</li>)}
      </ul>
    );
  }
  // table
  return (
    <div className="legal-table-wrap">
      <table className="legal-table">
        <thead>
          <tr>{block.table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {block.table.rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LegalDoc({ de, en }: { de: LegalContent; en: LegalContent }) {
  const { lang } = useT();
  const doc = lang === 'de' ? de : en;

  return (
    <section className="page">
      <div className="legal-doc">
        <div className="legal-eyebrow">{doc.eyebrow}</div>
        <h1 className="legal-h1">{doc.title}</h1>
        {doc.intro && <p className="legal-intro">{doc.intro}</p>}
        {doc.sections.map((s, i) => (
          <div className="legal-block" key={i}>
            <h2 className="legal-h2">{s.h}</h2>
            {s.blocks.map((b, j) => <BlockView key={j} block={b} />)}
          </div>
        ))}
        {doc.footnote && <p className="legal-note">{doc.footnote}</p>}
      </div>
    </section>
  );
}

/* Shared operator details — single source of truth across all legal pages. */
export const OPERATOR = {
  name: 'Florian Busche',
  brand: 'Verto-IT',
  street: 'Blumenstraße 15',
  city: '71404 Korb',
  country: { de: 'Deutschland', en: 'Germany' },
  phone: '+49 7151 9761587',
  phoneHref: 'tel:+4971519761587',
  mailGeneral: 'hello@verto-it.com',
  mailPrivacy: 'privacy@verto-it.com',
  website: 'www.verto-it.com',
} as const;

export function MailLink({ address }: { address: string }) {
  return <a href={`mailto:${address}`}>{address}</a>;
}
