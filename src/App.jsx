import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import PourquoiMaintenant from './pages/PourquoiMaintenant';
import Rejoindre from './pages/Rejoindre';
import NosPiliers from './pages/NosPiliers';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import { C } from './theme';

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
