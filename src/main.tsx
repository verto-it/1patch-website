import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Contact } from './pages/Contact';
import { Downloads } from './pages/Downloads';
import { Features } from './pages/Features';
import { Home } from './pages/Home';
import { Imprint } from './pages/Imprint';
import { Legal } from './pages/Legal';
import { Pricing } from './pages/Pricing';
import { Privacy } from './pages/Privacy';
import { Security } from './pages/Security';
import { SelfHosting } from './pages/SelfHosting';
import { Terms } from './pages/Terms';

/* Self-hosted fonts — no Google CDN, GDPR-compliant */
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/600.css';
import '@fontsource/jetbrains-mono/700.css';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/self-hosting" element={<SelfHosting />} />
          <Route path="/security" element={<Security />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* Fallback for old /legal/:title pattern */}
          <Route path="/legal/:title" element={<Legal title="Legal" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
