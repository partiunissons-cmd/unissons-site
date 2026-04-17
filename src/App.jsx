import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles.jsx';
import { Navbar, Footer } from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import PourquoiMaintenant from './pages/PourquoiMaintenant.jsx';
import Rejoindre from './pages/Rejoindre.jsx';
import NosPiliers from './pages/NosPiliers.jsx';
import MentionsLegales from './pages/MentionsLegales.jsx';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite.jsx';
import { C } from './theme.js';

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <div style={{ background: C.navy, minHeight: '100vh', color: C.text }}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pourquoi-maintenant" element={<PourquoiMaintenant />} />
          <Route path="/nos-piliers" element={<NosPiliers />} />
          <Route path="/rejoindre" element={<Rejoindre />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
