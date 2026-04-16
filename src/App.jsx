import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronRight, Heart, Shield, Briefcase, Scale, Search,
  CheckCircle, ArrowRight, Check, BookOpen, Mail, ChevronDown, Users,
} from 'lucide-react';

const C = {
  bg:       '#0a1232',
  surface:  '#131c45',
  card:     '#1b2555',
  border:   'rgba(255,255,255,.08)',
  bordH:    'rgba(255,255,255,.16)',
  text:     '#ffffff',
  textM:    'rgba(255,255,255,.65)',
  textD:    'rgba(255,255,255,.4)',
  blue:     '#002395',
  blueLt:   '#1e3ab8',
  blueD:    'rgba(0,35,149,.15)',
  blueM:    'rgba(0,35,149,.35)',
  red:      '#ED2939',
  redLt:    '#ff4454',
  redD:     'rgba(237,41,57,.12)',
  redM:     'rgba(237,41,57,.3)',
  white:    '#ffffff',
  whiteD:   'rgba(255,255,255,.08)',
  gold:     '#FFD700',
  goldLt:   '#FFEB66',
  goldD:    'rgba(255,215,0,.12)',
  goldM:    'rgba(255,215,0,.3)',
  green:    '#3fad5a',
};

const SEOMeta = () => {
  useEffect(() => {
    document.title = 'UNISSONS — Une voix pour 2027';
    const m = (n, c, p) => {
      const a = p ? 'property' : 'name';
      let el = document.querySelector(`meta[${a}="${n}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(a, n); document.head.appendChild(el); }
      el.setAttribute('content', c);
    };
    m('description', 'UNISSONS — Une voix pour 2027. Ni gauche, ni droite. Le mouvement citoyen qui rassemble compétences et bon sens pour la France.');
    m('keywords', 'UNISSONS, politique, France, 2027, mouvement citoyen, élections, solutions');
    m('author', 'Parti UNISSONS');
    m('robots', 'index, follow');
    m('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5');
    m('theme-color', '#0a1232');
    m('og:type', 'website', true);
    m('og:title', 'UNISSONS — Une voix pour 2027', true);
    m('og:description', 'Ni gauche, ni droite. Le mouvement citoyen pour une politique de solutions concrètes.', true);
    m('og:url', 'https://parti-unissons.fr', true);
    m('og:locale', 'fr_FR', true);
    m('twitter:card', 'summary_large_image');
    m('twitter:site', '@PartiUnissons');
    m('twitter:title', 'UNISSONS — Une voix pour 2027');
    m('twitter:description', 'Ni gauche, ni droite. Des solutions.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://parti-unissons.fr');
  }, []);
  return null;
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Inter', -apple-system, sans-serif; background: #0a1232; color: #ffffff; -webkit-font-smoothing: antialiased; line-height: 1.5; }
  a { text-decoration: none; color: inherit; }
  button { font-family: inherit; }
  ::selection { background: #ED2939; color: #ffffff; }
  .serif { font-family: 'Fraunces', 'Playfair Display', serif; }
  @keyframes up { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes dn { from { opacity: 0; transform: translateY(-14px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pop { from { opacity: 0; transform: scale(.96); } to { opacity: 1; transform: scale(1); } }
  @keyframes glow { 0%, 100% { box-shadow: 0 0 0 0 rgba(255,215,0,.5); } 50% { box-shadow: 0 0 0 10px rgba(255,215,0,0); } }
  @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
  .rv { opacity: 0; transform: translateY(28px); transition: all .7s cubic-bezier(.16,1,.3,1); }
  .rv.vis { opacity: 1; transform: translateY(0); }
  .pb { transition: width 1.1s cubic-bezier(.4,0,.2,1); }
  .btn-primary { background: #ED2939; color: #ffffff; transition: all .25s; }
  .btn-primary:hover { background: #ff4454; transform: translateY(-1px); box-shadow: 0 10px 30px rgba(237,41,57,.35); }
  .btn-ghost { background: rgba(255,255,255,.04); color: #ffffff; border: 1.5px solid rgba(255,255,255,.16); transition: all .25s; }
  .btn-ghost:hover { border-color: #ffffff; background: rgba(255,255,255,.08); }
  .scrollbar::-webkit-scrollbar { width: 6px; }
  .scrollbar::-webkit-scrollbar-track { background: transparent; }
  .scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,.16); border-radius: 3px; }
  @media (max-width: 768px) {
    .dnav { display: none !important; }
    .mbtn { display: flex !important; }
    .hcta { flex-direction: column; width: 100%; }
    .hcta button { width: 100% !important; justify-content: center; }
    .jform { flex-direction: column !important; }
    .fgrid { grid-template-columns: 1fr 1fr !important; }
    .dgrid { grid-template-columns: 1fr !important; }
    .dsep { display: none !important; }
    .stats-row { gap: 2rem !important; }
  }
  @media (max-width: 480px) { .fgrid { grid-template-columns: 1fr !important; } }
`;

const useReveal = () => {
  useEffect(() => {
    const run = () => {
      const o = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); o.unobserve(e.target); } });
      }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
      document.querySelectorAll('.rv:not(.vis)').forEach(el => o.observe(el));
      return () => o.disconnect();
    };
    run();
    const t = setTimeout(run, 300);
    return () => clearTimeout(t);
  });
};

const Tri = ({ w = '100%', h = 2, radius = true, style = {} }) => (
  <div style={{ width: w, height: h, background: `linear-gradient(90deg, #002395 0%, #002395 33%, #FFD700 33%, #FFD700 66%, #ED2939 66%, #ED2939 100%)`, borderRadius: radius ? h : 0, ...style }} />
);

const TriSmooth = ({ w = '100%', h = 2, style = {} }) => (
  <div style={{ width: w, height: h, background: `linear-gradient(90deg, #002395, #ffffff 50%, #ED2939)`, borderRadius: h, ...style }} />
);

const Star = ({ size = 16, color, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color || '#FFD700'} style={style}>
    <path d="M12 2l2.9 6.3 6.8.7-5.1 4.7 1.4 6.7L12 17.3l-6 3.1 1.4-6.7L2.3 9l6.8-.7L12 2z" />
  </svg>
);

const Logo = ({ size = 'sm' }) => {
  const lg = size === 'lg';
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: lg ? 'center' : 'flex-start', gap: lg ? 10 : 5, userSelect: 'none' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: lg ? 14 : 7 }}>
        <span className="serif" style={{ fontSize: lg ? 'clamp(2.8rem, 9vw, 5rem)' : '1.4rem', fontWeight: 600, letterSpacing: lg ? '.1em' : '.13em', color: '#ffffff', lineHeight: 1 }}>UNISSONS</span>
        <Star size={lg ? 32 : 13} color="#FFD700" style={{ filter: lg ? 'drop-shadow(0 0 12px rgba(255,215,0,.4))' : 'none' }} />
      </div>
      <TriSmooth w={lg ? 'clamp(140px, 32vw, 220px)' : 52} h={lg ? 3 : 2} />
    </div>
  );
};

const Label = ({ children, className = '', align = 'left' }) => (
  <p className={className} style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.3em', textTransform: 'uppercase', color: '#ED2939', marginBottom: 16, textAlign: align }}>{children}</p>
);

const Nav = ({ onJoin }) => {
  const [open, setOpen] = useState(false);
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const h = () => setSc(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  const links = [['#manifeste', 'Manifeste'], ['#piliers', 'Piliers'], ['#sondage', 'Sondage']];
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: sc ? 'rgba(20,20,26,.88)' : 'transparent', backdropFilter: sc ? 'blur(18px)' : 'none', WebkitBackdropFilter: sc ? 'blur(18px)' : 'none', borderBottom: sc ? '1px solid rgba(255,255,255,.08)' : '1px solid transparent', padding: sc ? '12px 0' : '20px 0', transition: 'all .35s ease' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Logo /></div>
        <div className="dnav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map(([h, l]) => (
            <a key={h} href={h} style={{ fontSize: '.82rem', fontWeight: 500, color: 'rgba(255,255,255,.65)', letterSpacing: '.02em', transition: 'color .25s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.65)'}>{l}</a>
          ))}
          <button onClick={onJoin} className="btn-primary" style={{ border: 'none', borderRadius: 6, padding: '10px 22px', fontSize: '.82rem', fontWeight: 600, cursor: 'pointer', letterSpacing: '.02em' }}>Nous rejoindre</button>
        </div>
        <button className="mbtn" onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: 6, alignItems: 'center', justifyContent: 'center' }} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div style={{ background: '#131c45', borderTop: '1px solid rgba(255,255,255,.08)', padding: '8px 24px 20px' }}>
          {links.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} style={{ display: 'block', padding: '15px 0', fontWeight: 500, color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,.08)', fontSize: '.95rem' }}>{l}</a>
          ))}
          <button onClick={() => { onJoin(); setOpen(false); }} className="btn-primary" style={{ width: '100%', marginTop: 14, border: 'none', borderRadius: 6, padding: '14px', fontWeight: 600, fontSize: '.95rem', cursor: 'pointer' }}>Nous rejoindre</button>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ onJoin }) => (
  <header style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 80px', textAlign: 'center', position: 'relative', background: `radial-gradient(ellipse 60% 40% at 30% 30%, rgba(30,58,184,.3) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 70% 70%, rgba(237,41,57,.18) 0%, transparent 65%), radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,215,0,.05) 0%, transparent 60%), #0a1232` }}>
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(255,255,255,.16)', borderRadius: 100, padding: '8px 22px', marginBottom: 52, animation: 'dn .7s ease both', background: 'rgba(255,255,255,.02)' }}>
      <Star size={11} color="#FFD700" style={{ animation: 'glow 2.5s ease infinite', filter: 'drop-shadow(0 0 6px rgba(255,215,0,.6))' }} />
      <span style={{ fontSize: '.76rem', fontWeight: 600, color: '#ffffff', letterSpacing: '.14em', textTransform: 'uppercase' }}>Une voix pour 2027</span>
    </div>
    <div style={{ marginBottom: 44, animation: 'up .8s ease both .1s' }}><Logo size="lg" /></div>
    <p style={{ fontSize: 'clamp(.78rem, 1.8vw, .88rem)', fontWeight: 600, letterSpacing: '.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 32, animation: 'up .7s ease both .25s' }}>
      Ni gauche · Ni droite · <span style={{ color: '#ED2939' }}>Des solutions</span>
    </p>
    <h1 className="serif" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 500, lineHeight: 1.35, color: '#ffffff', maxWidth: 680, marginBottom: 20, fontStyle: 'italic', animation: 'up .7s ease both .35s' }}>
      Pas une révolution dans le sens négatif.<br />
      Une révolution dans le <span style={{ color: '#ED2939', fontStyle: 'italic' }}>sens commun.</span>
    </h1>
    <p style={{ fontSize: 'clamp(1rem, 2.2vw, 1.1rem)', color: 'rgba(255,255,255,.65)', maxWidth: 520, lineHeight: 1.75, fontWeight: 400, margin: '0 auto 48px', animation: 'up .7s ease both .45s' }}>
      Nous ne voulons pas le pouvoir pour le pouvoir. Nous voulons le pouvoir pour que <strong style={{ color: '#ffffff', fontWeight: 600 }}>ça change</strong>. Pour de bon.
    </p>
    <div className="hcta" style={{ display: 'flex', gap: 12, animation: 'up .7s ease both .55s' }}>
      <button onClick={onJoin} className="btn-primary" style={{ border: 'none', borderRadius: 8, padding: '15px 30px', fontSize: '.95rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
        Rejoindre le mouvement <ArrowRight size={17} />
      </button>
      <button onClick={() => document.getElementById('manifeste')?.scrollIntoView({ behavior: 'smooth' })} className="btn-ghost" style={{ borderRadius: 8, padding: '15px 30px', fontSize: '.95rem', fontWeight: 500, cursor: 'pointer' }}>Lire le manifeste</button>
    </div>
    <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2.5s ease infinite', color: 'rgba(255,255,255,.4)' }}>
      <ChevronDown size={20} />
    </div>
  </header>
);

const Manifesto = () => (
  <section id="manifeste" style={{ padding: '96px 24px', borderTop: '1px solid rgba(255,255,255,.08)' }}>
    <div style={{ maxWidth: 680, margin: '0 auto' }}>
      <Label className="rv">Notre Manifeste</Label>
      <h2 className="rv serif" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', fontWeight: 600, color: '#ffffff', marginBottom: 36, lineHeight: 1.3, letterSpacing: '-0.01em' }}>L'Appel aux compétences</h2>
      <div className="rv" style={{ background: '#131c45', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 'clamp(26px, 4.5vw, 40px)', fontSize: '1rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 18 }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Notre pays traverse une période de complexité inédite.</strong>{' '}Face aux défis éducatifs, sanitaires et économiques, les postures idéologiques ne suffisent plus.</p>
        <p style={{ marginBottom: 18 }}>Les Français ne demandent ni des miracles, ni des conflits supplémentaires :{' '}<span style={{ color: '#ffffff', fontWeight: 700, borderBottom: '2px solid #ED2939', paddingBottom: 1 }}>ils demandent que l'État fonctionne.</span></p>
        <p style={{ marginBottom: 22 }}>Nous constatons une déconnexion entre les moyens engagés et les résultats obtenus. Ce n'est pas une question de personnes, mais de méthode.</p>
        <div style={{ background: 'linear-gradient(135deg, rgba(0,35,149,.15), rgba(237,41,57,.12))', padding: '18px 22px', borderRadius: 10, borderLeft: '3px solid #ED2939', marginBottom: 22 }}>
          <p style={{ margin: 0, color: '#ffffff', fontWeight: 600, fontSize: '.98rem', lineHeight: 1.7 }}>UNISSONS naît d'une ambition simple : remettre la rationalité et l'efficacité au cœur de l'action publique.</p>
        </div>
        <p style={{ color: '#ffffff', fontWeight: 500, margin: 0 }}>Nous sommes un collectif de citoyens, d'experts et de professionnels décidés à mettre leur expérience au service du pays. Nous ne cherchons pas à avoir raison contre les autres — <span style={{ color: '#ED2939', fontWeight: 700 }}>nous cherchons ce qui fonctionne pour tous.</span></p>
      </div>
    </div>
  </section>
);

const Stats = () => {
  const [vis, setVis] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const ref = useRef(null);
  const T = [72, 54, 83];
  const L = ["des Français ne font plus\nconfiance aux partis", "d'abstention aux\ndernières élections", "veulent un renouveau\npolitique total"];
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); o.disconnect(); } }, { threshold: .4 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  useEffect(() => {
    if (!vis) return;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const p = 1 - Math.pow(1 - Math.min(step / 55, 1), 3);
      setCounts(T.map(v => Math.round(v * p)));
      if (step >= 55) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [vis]);
  return (
    <section ref={ref} style={{ padding: '56px 24px', background: '#131c45', borderTop: '1px solid rgba(255,255,255,.08)', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
      <div className="stats-row" style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 'clamp(2.5rem, 7vw, 5rem)', flexWrap: 'wrap', textAlign: 'center' }}>
        {counts.map((v, i) => (
          <div key={i} style={{ minWidth: 130 }}>
            <div className="serif" style={{ fontSize: 'clamp(2.4rem, 5vw, 3rem)', fontWeight: 600, color: ['#1e3ab8', '#ffffff', '#ED2939'][i], lineHeight: 1, letterSpacing: '-0.02em' }}>
              {v}<span style={{ fontSize: '.55em', marginLeft: 2 }}>%</span>
            </div>
            <div style={{ fontSize: '.7rem', letterSpacing: '.07em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginTop: 8, whiteSpace: 'pre-line', lineHeight: 1.5, fontWeight: 500 }}>{L[i]}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const themes = [
  { title: "Éducation", icon: BookOpen, tag: "L'excellence pour tous", desc: "Faire de l'école le socle de la réussite républicaine.", vision: "L'éducation est la clé de voûte de notre société.", long: "Une école qui transmet les savoirs fondamentaux avec exigence et bienveillance. Qui permet à chaque enfant, quelle que soit son origine, de s'élever, de s'émanciper et de construire son avenir.", pts: ["Revaloriser le rôle central et l'autorité du savoir.", "Garantir l'égalité des chances par la maîtrise des fondamentaux.", "Offrir un environnement d'apprentissage serein et stimulant."] },
  { title: "Santé", icon: Heart, tag: "L'humain au cœur", desc: "Un accès aux soins équitable et digne sur tout le territoire.", vision: "La santé est notre bien le plus précieux.", long: "Un système de santé solidaire où chaque citoyen trouve une réponse à ses maux. Il est temps de redonner du sens et des moyens à ceux qui nous soignent, et d'assurer une présence médicale dans chaque région.", pts: ["Soutenir et valoriser nos soignants au quotidien.", "Rapprocher la médecine de chaque citoyen.", "Humaniser l'hôpital pour un parcours de soin apaisé."] },
  { title: "Justice", icon: Scale, tag: "Confiance & paix", desc: "Une justice efficace, protectrice et respectée.", vision: "La justice est le ciment de notre pacte social.", long: "Nous œuvrons pour une justice qui dispose des moyens d'agir vite et bien. Restaurer l'autorité de l'institution judiciaire est indispensable pour assurer la tranquillité publique et protéger les plus vulnérables.", pts: ["Renforcer les moyens pour une justice plus agile.", "Garantir la protection de chaque citoyen.", "Assurer une réponse judiciaire claire et équitable."] },
  { title: "Économie", icon: Briefcase, tag: "Prospérité partagée", desc: "Valoriser le travail et encourager l'initiative.", vision: "La prospérité repose sur nos entreprises et travailleurs.", long: "Notre projet économique vise à créer les conditions de la réussite pour tous. Une croissance responsable, fondée sur le mérite, l'innovation et une juste reconnaissance de l'effort de chacun.", pts: ["Faire du travail le premier vecteur de pouvoir d'achat.", "Soutenir l'esprit d'entreprise et l'innovation.", "Construire une économie durable et souveraine."] },
  { title: "Gouvernance", icon: Search, tag: "Responsabilité", desc: "Un État exemplaire au service de l'intérêt général.", vision: "La confiance entre citoyens et élus doit être absolue.", long: "Nous prônons une gestion publique rigoureuse et éthique. Chaque décision doit être guidée par l'efficacité et l'utilité réelle pour les Français. La transparence et la responsabilité sont les piliers de notre engagement.", pts: ["Renforcer l'éthique et la transparence de l'action publique.", "Évaluer l'impact réel de chaque politique menée.", "Placer le citoyen au cœur de la décision démocratique."] },
];

const Modal = ({ t, onClose }) => {
  useEffect(() => {
    if (!t) return;
    document.body.style.overflow = 'hidden';
    const esc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', esc);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', esc); };
  }, [t, onClose]);
  if (!t) return null;
  const Icon = t.icon;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,15,.6)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} onClick={onClose} />
      <div className="scrollbar" style={{ background: '#131c45', border: '1px solid rgba(255,255,255,.16)', borderRadius: 18, width: '100%', maxWidth: 580, maxHeight: '88vh', overflowY: 'auto', position: 'relative', zIndex: 10, animation: 'pop .3s ease both' }}>
        <div style={{ padding: '26px 30px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(237,41,57,.12)', border: '1px solid rgba(237,41,57,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={20} color="#ED2939" />
            </div>
            <div>
              <h3 className="serif" style={{ fontSize: '1.4rem', fontWeight: 600, margin: 0, color: '#ffffff', letterSpacing: '-0.01em' }}>{t.title}</h3>
              <p style={{ fontSize: '.78rem', color: '#ED2939', fontWeight: 700, margin: '2px 0 0', letterSpacing: '.04em' }}>{t.tag}</p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: '#1b2555', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(255,255,255,.65)', transition: 'all .2s', flexShrink: 0 }} aria-label="Fermer"><X size={16} /></button>
        </div>
        <div style={{ padding: '22px 30px 30px' }}>
          <TriSmooth h={2} style={{ marginBottom: 22 }} />
          <div style={{ borderLeft: '2px solid #1e3ab8', padding: '12px 18px', margin: '0 0 22px', background: 'rgba(0,35,149,.15)', borderRadius: '0 10px 10px 0' }}>
            <p style={{ fontSize: '.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', color: '#1e3ab8', marginBottom: 6 }}>Notre vision</p>
            <p style={{ fontSize: '.95rem', color: '#ffffff', margin: 0, fontWeight: 500, lineHeight: 1.6 }}>{t.vision}</p>
          </div>
          <p style={{ color: 'rgba(255,255,255,.65)', lineHeight: 1.8, margin: '0 0 26px', fontSize: '.96rem' }}>{t.long}</p>
          <div style={{ margin: '0 0 26px' }}>
            <p style={{ fontSize: '.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.15em', color: '#ED2939', marginBottom: 12 }}>Axes prioritaires</p>
            {t.pts.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 0', borderBottom: i < t.pts.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(237,41,57,.12)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                  <Check size={11} color="#ED2939" strokeWidth={3} />
                </div>
                <span style={{ fontSize: '.93rem', color: '#ffffff', lineHeight: 1.6 }}>{p}</span>
              </div>
            ))}
          </div>
          <button onClick={() => { onClose(); setTimeout(() => document.getElementById('rejoindre')?.scrollIntoView({ behavior: 'smooth' }), 250); }} className="btn-primary" style={{ width: '100%', border: 'none', borderRadius: 10, padding: '14px', fontWeight: 700, fontSize: '.95rem', cursor: 'pointer' }}>Soutenir cette ambition</button>
        </div>
      </div>
    </div>
  );
};

const Pillars = () => {
  const [sel, setSel] = useState(null);
  return (
    <section id="piliers" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <Label className="rv">Nos piliers</Label>
        <h2 className="rv serif" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', fontWeight: 600, color: '#ffffff', marginBottom: 16, lineHeight: 1.3, letterSpacing: '-0.01em' }}>Ce pour quoi nous nous battons</h2>
        <p className="rv" style={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', lineHeight: 1.7, marginBottom: 48, maxWidth: 580 }}>Cinq priorités concrètes qui guident chacune de nos propositions. Cliquez sur un pilier pour explorer notre vision en détail.</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {themes.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} className="rv" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div onClick={() => setSel(t)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 16px', borderBottom: '1px solid rgba(255,255,255,.08)', cursor: 'pointer', transition: 'all .25s', borderRadius: 8 }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#131c45'; e.currentTarget.style.paddingLeft = '22px'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '16px'; }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 11, background: i % 2 === 0 ? 'rgba(0,35,149,.15)' : 'rgba(237,41,57,.12)', border: `1px solid ${i % 2 === 0 ? 'rgba(0,35,149,.35)' : 'rgba(237,41,57,.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} color={i % 2 === 0 ? '#1e3ab8' : '#ED2939'} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: '#ffffff' }}>{t.title}</h3>
                      <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.4)', margin: '3px 0 0', fontWeight: 400 }}>{t.desc}</p>
                    </div>
                  </div>
                  <ChevronRight size={17} color={i % 2 === 0 ? '#1e3ab8' : '#ED2939'} style={{ flexShrink: 0 }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {sel && <Modal t={sel} onClose={() => setSel(null)} />}
    </section>
  );
};

const Diff = () => {
  const them = ["Politiciens de carrière déconnectés", "Promesses jamais tenues", "Le pouvoir comme objectif", "Discours qui divisent", "La même politique depuis 40 ans"];
  const us = ["Citoyens issus du terrain", "Engagements vérifiables", "Le changement comme mission", "Un discours qui rassemble", "Une approche radicalement nouvelle"];
  return (
    <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,.08)', background: '#131c45' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <Label className="rv" align="center">Ce qui nous distingue</Label>
        <h2 className="rv serif" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 600, color: '#ffffff', textAlign: 'center', marginBottom: 48, letterSpacing: '-0.01em' }}>Une autre manière<br />de faire de la politique</h2>
        <div className="dgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 3px 1fr', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'start' }}>
          <div className="rv">
            <p style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 20 }}>Les autres</p>
            {them.map((t, i) => <p key={i} style={{ padding: '12px 0', color: 'rgba(255,255,255,.4)', textDecoration: 'line-through', textDecorationColor: 'rgba(255,255,255,.08)', fontSize: '.94rem', lineHeight: 1.6, borderBottom: i < them.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>{t}</p>)}
          </div>
          <div className="dsep" style={{ background: 'linear-gradient(to bottom, #002395 0%, #002395 33%, #ffffff 33%, #ffffff 66%, #ED2939 66%, #ED2939 100%)', borderRadius: 2, opacity: .9, minHeight: 280 }} />
          <div className="rv">
            <p style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#ED2939', marginBottom: 20 }}>Nous</p>
            {us.map((u, i) => <p key={i} style={{ padding: '12px 0', color: '#ffffff', fontWeight: 600, fontSize: '.94rem', lineHeight: 1.6, borderBottom: i < us.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>{u}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
};

const Poll = () => {
  const K = 'unissons_poll_v7';
  const init = [
    { id: 1, label: "Éducation", v: 0, c: '#1e3ab8' },
    { id: 2, label: "Santé", v: 0, c: '#ED2939' },
    { id: 3, label: "Justice", v: 0, c: '#ffffff' },
    { id: 4, label: "Économie", v: 0, c: '#3fad5a' },
  ];
  const [opts, setOpts] = useState(init);
  const [voted, setVoted] = useState(false);
  const [sid, setSid] = useState(null);
  const [tot, setTot] = useState(0);
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    try {
      const s = localStorage.getItem(K);
      if (s) { const d = JSON.parse(s); setOpts(d.o); setVoted(d.v); setSid(d.s); setTot(d.t); if (d.v) setTimeout(() => setAnim(true), 100); }
    } catch (_) {}
  }, []);
  const vote = (id) => {
    const next = opts.map(o => o.id === id ? { ...o, v: o.v + 1 } : o);
    const t = tot + 1;
    setOpts(next); setVoted(true); setSid(id); setTot(t);
    setTimeout(() => setAnim(true), 50);
    try { localStorage.setItem(K, JSON.stringify({ o: next, v: true, s: id, t })); } catch (_) {}
  };
  const pct = (v) => tot === 0 ? 0 : Math.round((v / tot) * 100);
  return (
    <section id="sondage" style={{ padding: '96px 24px', borderTop: '1px solid rgba(255,255,255,.08)' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <Label className="rv">Votre avis</Label>
        <h2 className="rv serif" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.9rem)', fontWeight: 600, color: '#ffffff', marginBottom: 12, lineHeight: 1.3, letterSpacing: '-0.01em' }}>Quel chantier est prioritaire ?</h2>
        <p className="rv" style={{ color: 'rgba(255,255,255,.65)', marginBottom: 28, fontSize: '.95rem', lineHeight: 1.6 }}>
          Votre voix compte. Aidez-nous à comprendre les priorités des Français.
          {tot > 0 && <span style={{ color: '#ED2939', fontWeight: 700 }}>{' '}· {tot.toLocaleString('fr-FR')} {tot === 1 ? 'vote' : 'votes'}</span>}
        </p>
        <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {opts.map(o => (
            <div key={o.id}>
              {voted ? (
                <div style={{ padding: '10px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7, alignItems: 'center' }}>
                    <span style={{ fontSize: '.9rem', fontWeight: sid === o.id ? 700 : 500, color: sid === o.id ? '#ffffff' : 'rgba(255,255,255,.65)', display: 'flex', alignItems: 'center', gap: 6 }}>
                      {sid === o.id && <Check size={14} color="#3fad5a" strokeWidth={3} />}{o.label}
                    </span>
                    <span style={{ fontSize: '.9rem', fontWeight: 700, color: sid === o.id ? '#ED2939' : '#ffffff' }}>{pct(o.v)}%</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#1b2555', overflow: 'hidden' }}>
                    <div className="pb" style={{ height: '100%', borderRadius: 3, background: o.c, width: anim ? `${pct(o.v)}%` : '0%' }} />
                  </div>
                </div>
              ) : (
                <button onClick={() => vote(o.id)} style={{ width: '100%', textAlign: 'left', padding: '15px 18px', borderRadius: 10, border: '1.5px solid rgba(255,255,255,.08)', background: '#131c45', cursor: 'pointer', fontWeight: 500, color: '#ffffff', fontSize: '.95rem', transition: 'all .2s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#ED2939'; e.currentTarget.style.background = '#1b2555'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; e.currentTarget.style.background = '#131c45'; }}>
                  <span>{o.label}</span>
                  <div style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid rgba(255,255,255,.16)' }} />
                </button>
              )}
            </div>
          ))}
        </div>
        {voted && (
          <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '.8rem', color: '#3fad5a', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle size={14} /> Vote enregistré</span>
            <button onClick={() => { setVoted(false); setSid(null); setAnim(false); localStorage.removeItem(K); }} style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.4)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit' }}>Revoter</button>
          </div>
        )}
      </div>
    </section>
  );
};

const Join = () => {
  const [st, setSt] = useState('idle');
  const sub = async (e) => {
    e.preventDefault(); setSt('sub');
    try {
      const r = await fetch("https://formspree.io/f/xeeljzay", { method: "POST", body: new FormData(e.target), headers: { Accept: 'application/json' } });
      if (r.ok) { setSt('ok'); e.target.reset(); }
      else { setSt('idle'); alert("Erreur technique. Merci de réessayer."); }
    } catch { setSt('idle'); alert("Problème de connexion. Vérifiez votre réseau."); }
  };
  return (
    <section id="rejoindre" style={{ padding: '100px 24px', background: '#131c45', borderTop: '1px solid rgba(255,255,255,.08)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: "'Fraunces', serif", fontSize: 'clamp(10rem, 25vw, 22rem)', fontWeight: 700, fontStyle: 'italic', color: 'rgba(255,255,255,.025)', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.05em' }}>2027</div>
      <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <TriSmooth w={56} h={2} style={{ margin: '0 auto 36px' }} />
        <h2 className="rv serif" style={{ fontSize: 'clamp(1.9rem, 5.5vw, 2.8rem)', fontWeight: 600, color: '#ffffff', marginBottom: 14, letterSpacing: '-0.02em', lineHeight: 1.2 }}>Unissons nos forces.</h2>
        <p className="rv" style={{ color: '#ED2939', fontSize: '.85rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 24 }}>Une voix pour 2027</p>
        <p className="rv" style={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', lineHeight: 1.7, marginBottom: 40, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>Médecins, enseignants, entrepreneurs, associatifs, citoyens engagés — construisons ensemble des solutions concrètes.</p>
        {st === 'ok' ? (
          <div className="rv vis" style={{ background: '#0a1232', border: '1px solid rgba(237,41,57,.3)', borderRadius: 14, padding: 36 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(63,173,90,.15)', border: '1px solid rgba(63,173,90,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <CheckCircle size={28} color="#3fad5a" />
            </div>
            <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 700, marginBottom: 8 }}>Merci pour votre engagement !</h3>
            <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '.93rem', lineHeight: 1.6 }}>Nous vous recontacterons très prochainement.</p>
            <button onClick={() => setSt('idle')} style={{ marginTop: 18, color: '#ED2939', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.88rem', textDecoration: 'underline' }}>Retour au formulaire</button>
          </div>
        ) : (
          <form onSubmit={sub} className="rv jform" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <input name="email" type="email" required placeholder="Votre adresse email" style={{ flex: '1 1 200px', padding: '14px 18px', borderRadius: 10, border: '1px solid rgba(255,255,255,.08)', background: '#0a1232', color: '#ffffff', fontSize: '.93rem', outline: 'none', fontFamily: 'inherit', transition: 'border-color .2s' }}
              onFocus={e => e.currentTarget.style.borderColor = '#ED2939'}
              onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'} />
            <select name="type" defaultValue="info" style={{ flex: '1 1 160px', padding: '14px 16px', borderRadius: 10, border: '1px solid rgba(255,255,255,.08)', background: '#0a1232', color: 'rgba(255,255,255,.65)', fontSize: '.93rem', cursor: 'pointer', outline: 'none', fontFamily: 'inherit' }}>
              <option value="info">Être informé</option>
              <option value="expert">Rejoindre le comité</option>
              <option value="soutien">Soutenir le mouvement</option>
            </select>
            <button type="submit" disabled={st === 'sub'} className="btn-primary" style={{ flex: '0 0 auto', border: 'none', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: '.93rem', cursor: st === 'sub' ? 'wait' : 'pointer', opacity: st === 'sub' ? .7 : 1 }}>
              {st === 'sub' ? 'Envoi…' : 'Rejoindre'}
            </button>
          </form>
        )}
        <p className="rv" style={{ marginTop: 18, fontSize: '.72rem', color: 'rgba(255,255,255,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <Shield size={11} /> Données confidentielles · Jamais de spam
        </p>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{ background: '#0b0b10', padding: '56px 24px 32px', borderTop: '1px solid rgba(255,255,255,.08)' }}>
    <div className="fgrid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 36, marginBottom: 44 }}>
      <div>
        <Logo />
        <p style={{ color: 'rgba(255,255,255,.4)', marginTop: 14, fontSize: '.88rem', lineHeight: 1.7 }}>Le mouvement du bon sens.<br />Comprendre. Agir. Réussir.</p>
      </div>
      <div>
        <p style={{ color: '#ED2939', fontSize: '.66rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 14 }}>Le projet</p>
        {[['#manifeste', 'Manifeste'], ['#piliers', 'Piliers'], ['#sondage', 'Consultation'], ['#rejoindre', 'Nous rejoindre']].map(([h, l]) => (
          <a key={h} href={h} style={{ display: 'block', color: 'rgba(255,255,255,.4)', fontSize: '.87rem', marginBottom: 10, transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.4)'}>{l}</a>
        ))}
      </div>
      <div>
        <p style={{ color: '#ED2939', fontSize: '.66rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 14 }}>Contact</p>
        <a href="mailto:parti.unissons@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,.4)', fontSize: '.87rem', transition: 'color .2s', marginBottom: 10 }}
          onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.4)'}>
          <Mail size={13} /> parti.unissons@gmail.com
        </a>
        <p style={{ color: 'rgba(255,255,255,.4)', fontSize: '.87rem' }}>Paris, France</p>
      </div>
      <div>
        <p style={{ color: '#ED2939', fontSize: '.66rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 14 }}>Suivez-nous</p>
        <div style={{ display: 'flex', gap: 10 }}>
          {[
            ['https://x.com/PartiUnissons', 'X', <svg key="x" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>],
            ['#', 'Instagram', <svg key="ig" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>],
            ['#', 'TikTok', <svg key="tt" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/></svg>],
          ].map(([href, label, icon]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ width: 36, height: 36, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,.08)', color: 'rgba(255,255,255,.4)', transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#ED2939'; e.currentTarget.style.borderColor = '#ED2939'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; }}>{icon}</a>
          ))}
        </div>
      </div>
    </div>
    <div style={{ maxWidth: 1100, margin: '0 auto', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <TriSmooth w={40} h={1.5} style={{ opacity: .4 }} />
      <p style={{ color: 'rgba(255,255,255,.4)', fontSize: '.76rem', textAlign: 'center' }}>© {new Date().getFullYear()} Parti UNISSONS — Tous droits réservés</p>
    </div>
  </footer>
);

const App = () => {
  const toJoin = () => document.getElementById('rejoindre')?.scrollIntoView({ behavior: 'smooth' });
  useReveal();
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#ffffff', background: '#0a1232', minHeight: '100vh' }}>
      <SEOMeta />
      <style>{css}</style>
      <Nav onJoin={toJoin} />
      <Hero onJoin={toJoin} />
      <Manifesto />
      <Stats />
      <Pillars />
      <Diff />
      <Poll />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
