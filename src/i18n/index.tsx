import React, { createContext, useContext, useState } from 'react';
import { en } from './en';
import { de } from './de';

export type Lang = 'en' | 'de';

// Replace all string/boolean literal types with their base types
// so that de.ts can use different string values without TS errors.
type Widen<T> =
  T extends string ? string :
  T extends boolean ? boolean :
  T extends number ? number :
  T extends readonly (infer U)[] ? readonly Widen<U>[] :
  T extends object ? { readonly [K in keyof T]: Widen<T[K]> } :
  T;

export type Translations = Widen<typeof en>;

const translations: Record<Lang, Translations> = { en, de };

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangCtx>({ lang: 'en', setLang: () => {}, t: en });

function detectLang(): Lang {
  try {
    const s = localStorage.getItem('1patch-lang') as Lang | null;
    if (s === 'en' || s === 'de') return s;
  } catch { /* ignore */ }
  try {
    return navigator.language.startsWith('de') ? 'de' : 'en';
  } catch {
    return 'en';
  }
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  function setLang(l: Lang) {
    setLangState(l);
    try { localStorage.setItem('1patch-lang', l); } catch { /* ignore */ }
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useT() {
  return useContext(LangContext);
}
