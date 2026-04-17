import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { C } from '../theme.js';
import { Logo, TriSmooth } from './Shared.jsx';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sc, setSc] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setSc(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    ['/', 'Accueil'],
    ['/pourquoi-maintenant', 'Pourquoi maintenant ?'],
    ['/nos-piliers', 'Nos piliers'],
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: sc ? 'rgba(11,20,54,.92)' : 'transparent',
      backdropFilter: sc ? 'blur(18px)' : 'none',
      WebkitBackdropFilter: sc ? 'blur(18px)' : 'none',
      borderBottom: sc ? `1px solid ${C.border}` : '1px solid transparent',
      padding: sc ? '12px 0' : '20px 0',
      transition: 'all .35s ease',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'inline-flex' }}>
          <Logo size="sm" />
        </Link>

        <div className="dnav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map(([to, label]) => {
            const active = location.pathname === to;
            return (
              <Link key={to} to={to} style={{
                fontSize: '.84rem', fontWeight: 500,
                color: active ? C.text : C.textM, letterSpacing: '.02em',
                transition: 'color .2s', position: 'relative',
                paddingBottom: 4,
                borderBottom: active ? `1.5px solid ${C.red}` : '1.5px solid transparent',
              }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = C.text; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = C.textM; }}
              >{label}</Link>
            );
          })}
          <Link to="/rejoindre" className="btn-accent" style={{
            border: 'none', borderRadius: 6, padding: '10px 22px',
            fontSize: '.82rem', cursor: 'pointer', letterSpacing: '.02em',
            display: 'inline-block',
          }}>Rejoindre</Link>
        </div>

        <button className="mbtn" onClick={() => setOpen(!open)} style={{
          display: 'none', background: 'none', border: 'none',
          color: C.text, cursor: 'pointer', padding: 6,
          alignItems: 'center', justifyContent: 'center',
        }} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div style={{ background: C.surface, borderTop: `1px solid ${C.border}`, padding: '8px 24px 20px' }}>
          {links.map(([to, label]) => (
            <Link key={to} to={to} style={{
              display: 'block', padding: '15px 0',
              fontWeight: 500, color: C.text,
              borderBottom: `1px solid ${C.border}`,
              fontSize: '.95rem',
            }}>{label}</Link>
          ))}
          <Link to="/rejoindre" className="btn-accent" style={{
            display: 'block', width: '100%', marginTop: 14, borderRadius: 6,
            padding: '14px', fontSize: '.95rem', cursor: 'pointer', textAlign: 'center',
          }}>Rejoindre le mouvement</Link>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => (
  <footer style={{ background: C.deep, padding: '64px 24px 32px', borderTop: `1px solid ${C.border}` }}>
    <div className="fgrid" style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 44, marginBottom: 48 }}>
      <div>
        <Logo size="sm" />
        <p style={{ color: C.textD, marginTop: 16, fontSize: '.88rem', lineHeight: 1.7, maxWidth: 260 }}>
          La voix de la majorité silencieuse.<br />
          Ni gauche, ni droite — des solutions.
        </p>
      </div>

      <div>
        <p style={{ color: C.red, fontSize: '.66rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: 16 }}>Le mouvement</p>
        {[['/', 'Accueil'], ['/pourquoi-maintenant', 'Pourquoi maintenant ?'], ['/nos-piliers', 'Nos piliers'], ['/rejoindre', 'Rejoindre']].map(([to, l]) => (
          <Link key={to} to={to} style={{ display: 'block', color: C.textD, fontSize: '.87rem', marginBottom: 10, transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = C.text}
            onMouseLeave={e => e.currentTarget.style.color = C.textD}>{l}</Link>
        ))}
      </div>

      <div>
        <p style={{ color: C.red, fontSize: '.66rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: 16 }}>Contact</p>
        <a href="mailto:parti.unissons@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 8, color: C.textD, fontSize: '.87rem', transition: 'color .2s', marginBottom: 10 }}
          onMouseEnter={e => e.currentTarget.style.color = C.text}
          onMouseLeave={e => e.currentTarget.style.color = C.textD}>
          <Mail size={14} /> parti.unissons@gmail.com
        </a>
        <p style={{ color: C.textD, fontSize: '.87rem' }}>Paris, France</p>
      </div>

      <div>
        <p style={{ color: C.red, fontSize: '.66rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: 16 }}>Légal</p>
        <Link to="/mentions-legales" style={{ display: 'block', color: C.textD, fontSize: '.87rem', marginBottom: 10, transition: 'color .2s' }}
          onMouseEnter={e => e.currentTarget.style.color = C.text}
          onMouseLeave={e => e.currentTarget.style.color = C.textD}>Mentions légales</Link>
        <Link to="/politique-confidentialite" style={{ display: 'block', color: C.textD, fontSize: '.87rem', marginBottom: 16, transition: 'color .2s' }}
          onMouseEnter={e => e.currentTarget.style.color = C.text}
          onMouseLeave={e => e.currentTarget.style.color = C.textD}>Politique de confidentialité</Link>

        <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
          <a href="https://x.com/PartiUnissons" target="_blank" rel="noopener noreferrer" aria-label="X"
            style={{ width: 34, height: 34, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.border}`, color: C.textD, transition: 'all .2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = C.red; e.currentTarget.style.borderColor = C.red; }}
            onMouseLeave={e => { e.currentTarget.style.color = C.textD; e.currentTarget.style.borderColor = C.border; }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            style={{ width: 34, height: 34, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.border}`, color: C.textD, transition: 'all .2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = C.red; e.currentTarget.style.borderColor = C.red; }}
            onMouseLeave={e => { e.currentTarget.style.color = C.textD; e.currentTarget.style.borderColor = C.border; }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
            style={{ width: 34, height: 34, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.border}`, color: C.textD, transition: 'all .2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = C.red; e.currentTarget.style.borderColor = C.red; }}
            onMouseLeave={e => { e.currentTarget.style.color = C.textD; e.currentTarget.style.borderColor = C.border; }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z" /></svg>
          </a>
        </div>
      </div>
    </div>

    <div style={{ maxWidth: 1160, margin: '0 auto', paddingTop: 28, borderTop: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <TriSmooth w={40} h={1.5} style={{ opacity: .4 }} />
      <p style={{ color: C.textD, fontSize: '.76rem', textAlign: 'center' }}>
        © {new Date().getFullYear()} UNISSONS — La voix de la majorité silencieuse
      </p>
    </div>
  </footer>
);
