import React, { useEffect } from 'react';
import { C } from './theme';

// Filet tricolore dégradé
export const TriSmooth = ({ w = '100%', h = 2, style = {} }) => (
  <div style={{ width: w, height: h, background: `linear-gradient(90deg, ${C.blueFr}, ${C.text} 50%, ${C.red})`, borderRadius: h, ...style }} />
);

// Filet tricolore en aplats
export const TriBlock = ({ w = '100%', h = 2, style = {} }) => (
  <div style={{ width: w, height: h, background: `linear-gradient(90deg, ${C.blueFr} 0%, ${C.blueFr} 33%, ${C.text} 33%, ${C.text} 66%, ${C.red} 66%, ${C.red} 100%)`, borderRadius: h, ...style }} />
);

// Filet doré fin (pour l'étoile européenne et éléments stratégiques)
export const GoldBar = ({ w = 40, h = 1.5, style = {} }) => (
  <div style={{ width: w, height: h, background: C.gold, borderRadius: h, ...style }} />
);

// Étoile dorée — couronne européenne
export const Star = ({ size = 16, color, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color || C.gold} style={style}>
    <path d="M12 2l2.9 6.3 6.8.7-5.1 4.7 1.4 6.7L12 17.3l-6 3.1 1.4-6.7L2.3 9l6.8-.7L12 2z" />
  </svg>
);

// Logo UNISSONS
export const Logo = ({ size = 'sm' }) => {
  const lg = size === 'lg';
  const md = size === 'md';
  const fontSize = lg ? 'clamp(2.8rem, 9vw, 5rem)' : md ? '1.9rem' : '1.3rem';
  const starSize = lg ? 32 : md ? 18 : 12;
  const barW = lg ? 'clamp(140px, 32vw, 220px)' : md ? 80 : 48;
  const barH = lg ? 3 : md ? 2.5 : 2;
  const gap = lg ? 14 : md ? 10 : 6;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: lg ? 'center' : 'flex-start', gap: lg ? 10 : 4, userSelect: 'none' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap }}>
        <span className="serif" style={{ fontSize, fontWeight: 600, letterSpacing: lg ? '.1em' : '.13em', color: C.text, lineHeight: 1 }}>UNISSONS</span>
        <Star size={starSize} color={C.gold} style={{ filter: lg ? 'drop-shadow(0 0 12px rgba(234,192,73,.4))' : 'none' }} />
      </div>
      <TriSmooth w={barW} h={barH} />
    </div>
  );
};

// Label de section (surtitre rouge en petites caps)
export const SectionLabel = ({ children, className = '', align = 'left', color = C.red }) => (
  <p className={className} style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.3em', textTransform: 'uppercase', color, marginBottom: 16, textAlign: align }}>{children}</p>
);

// Gestion SEO dynamique par page
export const SEO = ({ title, description, url = 'https://mouvement-unissons.fr' }) => {
  useEffect(() => {
    document.title = title;
    const m = (n, c, p) => {
      const a = p ? 'property' : 'name';
      let el = document.querySelector(`meta[${a}="${n}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(a, n); document.head.appendChild(el); }
      el.setAttribute('content', c);
    };
    m('description', description);
    m('author', 'Mouvement UNISSONS');
    m('robots', 'index, follow');
    m('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5');
    m('theme-color', C.navy);
    m('og:type', 'website', true);
    m('og:title', title, true);
    m('og:description', description, true);
    m('og:url', url, true);
    m('og:locale', 'fr_FR', true);
    m('og:site_name', 'UNISSONS', true);
    m('twitter:card', 'summary_large_image');
    m('twitter:site', '@PartiUnissons');
    m('twitter:title', title);
    m('twitter:description', description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', url);
  }, [title, description, url]);
  return null;
};
