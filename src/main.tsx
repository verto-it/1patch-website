import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Contact } from './pages/Contact';
import { Downloads } from './pages/Downloads';
import { Features } from './pages/Features';
import { Home } from './pages/Home';
import { Legal } from './pages/Legal';
import { Pricing } from './pages/Pricing';
import { Security } from './pages/Security';
import { SelfHosting } from './pages/SelfHosting';
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
          <Route path="/privacy" element={<Legal title="Privacy" />} />
          <Route path="/terms" element={<Legal title="Terms" />} />
          <Route path="/imprint" element={<Legal title="Imprint" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
