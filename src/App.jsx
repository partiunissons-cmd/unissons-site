import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronRight, Heart, Shield, Briefcase, Scale, Search,
  CheckCircle, MessageCircle, ArrowRight, Check, BookOpen, Mail,
} from 'lucide-react';

// ============================================================
// Palette de couleurs UNISSONS (styles inline — 100% fiables)
// ============================================================
const C = {
  blue:      '#003399',
  blueDark:  '#002266',
  blueLight: '#e8eeff',
  red:       '#dc2626',
  gold:      '#FFD700',
  white:     '#ffffff',
  gray50:    '#f9fafb',
  gray100:   '#f3f4f6',
  gray200:   '#e5e7eb',
  gray300:   '#d1d5db',
  gray400:   '#9ca3af',
  gray500:   '#6b7280',
  gray600:   '#4b5563',
  gray700:   '#374151',
  gray900:   '#111827',
};

// ============================================================
// SEO
// ============================================================
const SEOMeta = () => {
  useEffect(() => {
    document.title = 'UNISSONS – Pour une politique de solutions';
    const setMeta = (name, content, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', 'UNISSONS rassemble citoyens, experts et professionnels pour une politique de solutions concrètes.');
    setMeta('keywords', 'UNISSONS, politique, solutions, France, mouvement citoyen');
    setMeta('author', 'Parti UNISSONS');
    setMeta('robots', 'index, follow');
    setMeta('og:type', 'website', true);
    setMeta('og:title', 'UNISSONS – Pour une politique de solutions', true);
    setMeta('og:description', 'Loin du bruit, près des solutions.', true);
    setMeta('og:url', 'https://parti-unissons.fr', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:site', '@PartiUnissons');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://parti-unissons.fr');
  }, []);
  return null;
};

// ============================================================
// Styles globaux (animations, hover helpers)
// ============================================================
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
  * { box-sizing: border-box; }
  body { margin: 0; font-family: 'Plus Jakarta Sans', sans-serif; -webkit-font-smoothing: antialiased; }
  h1,h2,h3,.logo-font { font-family: 'Outfit', sans-serif; letter-spacing: -0.02em; }
  html { scroll-behavior: smooth; }
  a { text-decoration: none; color: inherit; }

  @keyframes blob {
    0%   { transform: translate(0,0) scale(1); }
    33%  { transform: translate(30px,-50px) scale(1.1); }
    66%  { transform: translate(-20px,20px) scale(0.9); }
    100% { transform: translate(0,0) scale(1); }
  }
  .blob { animation: blob 7s infinite; }
  .blob-delay2 { animation-delay: 2s; }
  .blob-delay4 { animation-delay: 4s; }

  @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
  .fade-up { animation: fadeUp 0.45s ease-out forwards; }

  .poll-bar { transition: width 1.2s cubic-bezier(0.4,0,0.2,1); }

  .pilier-card { background:#fff; border:1px solid #e5e7eb; border-radius:16px; padding:24px; display:flex; flex-direction:column; cursor:pointer; height:100%; transition: box-shadow 0.3s, transform 0.3s; }
  .pilier-card:hover { box-shadow: 0 20px 40px rgba(0,0,0,0.10); transform: translateY(-4px); }

  .nav-link { color: rgba(255,255,255,0.88); font-weight:600; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; transition:color 0.2s; }
  .nav-link:hover { color: #FFD700; }

  .footer-link { color: #9ca3af; font-size:0.9rem; font-weight:500; display:block; margin-bottom:12px; transition:color 0.2s; }
  .footer-link:hover { color: #fff; }

  .social-btn { width:44px; height:44px; background:#1f2937; border-radius:50%; display:flex; align-items:center; justify-content:center; border:1px solid #374151; color:#fff; transition:background 0.2s, transform 0.2s; }
  .social-btn:hover { transform: scale(1.1); }
  .social-x:hover { background:#000; }
  .social-ig:hover { background:#c026d3; }
  .social-tt:hover { background:#000; }

  @media (max-width:768px) {
    .desktop-nav { display:none !important; }
    .mobile-burger { display:block !important; }
    .hero-btns { flex-direction:column; }
    .poll-layout { flex-direction:column !important; }
    .poll-left { width:100% !important; border-right:none !important; border-bottom:1px solid rgba(255,255,255,0.1); }
    .join-form { flex-direction:column !important; }
    .footer-grid { grid-template-columns: 1fr 1fr !important; }
  }
`;

// ============================================================
// Logo
// ============================================================
const UnissonsLogo = ({ size = 'large' }) => {
  const sm = size === 'small';
  return (
    <div className="logo-font" style={{ display:'flex', alignItems:'baseline', fontWeight:900, fontSize: sm ? '1.6rem' : '4.5rem', letterSpacing:'-0.04em', userSelect:'none', lineHeight:1 }}>
      <div style={{ position:'relative', marginRight:2 }}>
        <span style={{ color:'#fff', position:'relative', zIndex:2 }}>UNI</span>
        <div style={{ position:'absolute', top: sm ? '-8px' : '-20px', right: sm ? '-6px' : '-16px', color: C.gold, zIndex:3 }}>
          <svg width={sm?12:24} height={sm?12:24} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <svg style={{ position:'absolute', left:0, bottom: sm?'-6px':'-16px', width:'110%', height: sm?'10px':'24px', color: C.red, zIndex:1 }} viewBox="0 0 50 12" preserveAspectRatio="none">
          <path d="M2 6 Q 14 2, 25 6 T 48 6" fill="none" stroke="currentColor" strokeWidth={sm?5:4} strokeLinecap="round"/>
        </svg>
      </div>
      <span style={{ color:'#a0b0ff' }}>SSONS</span>
    </div>
  );
};

// ============================================================
// Navbar
// ============================================================
const Navbar = ({ onJoinClick }) => {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  const links = [
    { label:'Notre Approche', href:'#vision'   },
    { label:'Nos Valeurs',    href:'#themes'   },
    { label:'Sondage',        href:'#sondages' },
  ];
  return (
    <nav style={{ position:'fixed', width:'100%', zIndex:50, background: C.blue, boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.25)' : 'none', padding: scrolled ? '12px 0' : '20px 0', transition:'all 0.3s' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ cursor:'pointer' }} onClick={() => window.scrollTo(0,0)}><UnissonsLogo size="small"/></div>
        <div className="desktop-nav" style={{ display:'flex', alignItems:'center', gap:28 }}>
          {links.map(l => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
          <button onClick={onJoinClick} style={{ background: C.gold, color: C.blue, border:'none', borderRadius:999, padding:'10px 22px', fontWeight:700, fontSize:'0.85rem', cursor:'pointer', fontFamily:'Plus Jakarta Sans, sans-serif', transition:'background 0.2s' }}>
            Nous rejoindre
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="mobile-burger" style={{ display:'none', background:'none', border:'none', color:'#fff', cursor:'pointer', padding:8 }}>
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>
      {open && (
        <div style={{ background: C.blueDark, borderTop:'1px solid rgba(255,255,255,0.1)', padding:'8px 16px 24px' }}>
          {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display:'block', padding:'16px 12px', color:'#fff', fontWeight:500, borderRadius:8 }}>{l.label}</a>)}
          <button onClick={() => { onJoinClick(); setOpen(false); }} style={{ width:'100%', marginTop:12, background: C.gold, color: C.blue, border:'none', borderRadius:8, padding:'13px 0', fontWeight:700, fontSize:'1rem', cursor:'pointer', fontFamily:'Plus Jakarta Sans, sans-serif' }}>
            Nous rejoindre
          </button>
        </div>
      )}
    </nav>
  );
};

// ============================================================
// Hero
// ============================================================
const Hero = ({ onJoinClick }) => (
  <header style={{ position:'relative', background: C.blue, minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', paddingTop:80 }}>
    <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' }}>
      <div className="blob" style={{ position:'absolute', top:'-80px', right:'-80px', width:384, height:384, background:'#3b82f6', borderRadius:'50%', filter:'blur(80px)', opacity:0.2 }}/>
      <div className="blob blob-delay2" style={{ position:'absolute', top:160, left:'-80px', width:384, height:384, background:'#ef4444', borderRadius:'50%', filter:'blur(80px)', opacity:0.2 }}/>
    </div>
    <div style={{ position:'relative', zIndex:10, maxWidth:1000, margin:'0 auto', padding:'0 24px', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center' }}>
      <div style={{ marginBottom:40 }}><UnissonsLogo size="large"/></div>
      <h1 style={{ fontSize:'clamp(2.4rem, 7vw, 4.5rem)', fontWeight:800, color:'#fff', margin:'0 0 24px', lineHeight:1.15, fontFamily:'Outfit, sans-serif', letterSpacing:'-0.03em' }}>
        Pour une politique<br/><span style={{ color: C.gold }}>de solutions.</span>
      </h1>
      <p style={{ fontSize:'clamp(1rem, 2.5vw, 1.35rem)', color:'rgba(219,234,254,0.9)', maxWidth:580, margin:'0 auto 48px', lineHeight:1.75, fontWeight:300 }}>
        Loin du bruit, près des solutions.<br/>
        <strong style={{ color:'#fff', fontWeight:600 }}>Rassembler les compétences</strong> pour une France qui avance.
      </p>
      <div className="hero-btns" style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
        <button onClick={onJoinClick} style={{ background: C.red, color:'#fff', border:'none', borderRadius:999, padding:'15px 36px', fontSize:'1.1rem', fontWeight:700, cursor:'pointer', fontFamily:'Plus Jakarta Sans, sans-serif', display:'flex', alignItems:'center', gap:8, transition:'background 0.2s' }}>
          Rejoindre le mouvement <ArrowRight size={20}/>
        </button>
        <button onClick={() => document.getElementById('vision').scrollIntoView({ behavior:'smooth' })} style={{ background:'#fff', color: C.blue, border:'none', borderRadius:999, padding:'15px 36px', fontSize:'1.1rem', fontWeight:700, cursor:'pointer', fontFamily:'Plus Jakarta Sans, sans-serif', transition:'background 0.2s' }}>
          Lire le manifeste
        </button>
      </div>
    </div>
    <div style={{ position:'absolute', bottom:0, width:'100%', lineHeight:0 }}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display:'block', width:'calc(100% + 2px)', height:70 }}>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"/>
      </svg>
    </div>
  </header>
);

// ============================================================
// Manifeste
// ============================================================
const VisionSection = () => (
  <section id="vision" style={{ padding:'96px 24px', background: C.gray50, borderBottom:`1px solid ${C.gray200}` }}>
    <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
      <h2 style={{ fontSize:'clamp(2rem, 4vw, 2.8rem)', fontWeight:800, color: C.gray900, marginBottom:40, fontFamily:'Outfit, sans-serif' }}>L'Appel aux Compétences</h2>
      <div style={{ background:'#fff', borderRadius:24, boxShadow:'0 8px 40px rgba(0,0,0,0.07)', border:`1px solid ${C.gray100}`, padding:'clamp(32px,5vw,64px)', textAlign:'left', fontSize:'1.12rem', color: C.gray700, lineHeight:1.85 }}>
        <p style={{ marginTop:0, marginBottom:20 }}>
          <strong>Notre pays traverse une période de complexité inédite.</strong> Face aux défis éducatifs, sanitaires et économiques, les postures idéologiques ne suffisent plus. Les Français ne demandent ni des miracles, ni des conflits supplémentaires :{' '}
          <span style={{ color: C.blue, fontWeight:700, textDecoration:'underline', textDecorationColor: C.red, textUnderlineOffset:4 }}>ils demandent que l'État fonctionne.</span>
        </p>
        <p style={{ marginBottom:20 }}>Nous constatons aujourd'hui une déconnexion entre les moyens engagés et les résultats obtenus. Ce n'est pas une question de personnes, mais de méthode.</p>
        <p style={{ marginBottom:20 }}>
          UNISSONS naît d'une ambition simple :{' '}
          <span style={{ background:'#fef9c3', padding:'0 4px', fontWeight:600 }}>remettre la rationalité et l'efficacité au cœur de l'action publique.</span>{' '}
          Nous croyons que la politique doit cesser d'être une arène de communication pour redevenir un outil de gestion au service de l'intérêt général.
        </p>
        <p style={{ color: C.blue, fontWeight:700, margin:0 }}>Nous sommes un collectif de citoyens, d'experts et de professionnels décidés à mettre leur expérience au service du pays. Nous ne cherchons pas à avoir raison contre les autres, nous cherchons ce qui fonctionne pour tous.</p>
      </div>
    </div>
  </section>
);

// ============================================================
// 5 Piliers
// ============================================================
const ThemeModal = ({ theme, onClose }) => {
  if (!theme) return null;
  const Icon = theme.icon;
  return (
    <div style={{ position:'fixed', inset:0, zIndex:60, display:'flex', alignItems:'center', justifyContent:'center', padding:16 }}>
      <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.6)', backdropFilter:'blur(4px)' }} onClick={onClose}/>
      <div className="fade-up" style={{ background:'#fff', borderRadius:20, boxShadow:'0 30px 80px rgba(0,0,0,0.3)', width:'100%', maxWidth:680, maxHeight:'90vh', overflowY:'auto', position:'relative', zIndex:10 }}>
        <div style={{ background: C.blue, padding:24, color:'#fff', display:'flex', justifyContent:'space-between', alignItems:'flex-start', position:'sticky', top:0, zIndex:20, borderRadius:'20px 20px 0 0' }}>
          <div style={{ display:'flex', gap:16, alignItems:'center' }}>
            <div style={{ background:'rgba(255,255,255,0.15)', padding:12, borderRadius:'50%' }}><Icon size={32} color={C.gold}/></div>
            <div>
              <h3 style={{ margin:0, fontSize:'1.4rem', fontWeight:700 }}>{theme.title}</h3>
              <p style={{ margin:'4px 0 0', color:'#bfdbfe', fontSize:'0.85rem' }}>{theme.details}</p>
            </div>
          </div>
          <button onClick={onClose} style={{ background:'none', border:'none', color:'rgba(255,255,255,0.7)', cursor:'pointer', padding:4 }}><X size={28}/></button>
        </div>
        <div style={{ padding:32, display:'flex', flexDirection:'column', gap:20 }}>
          <div style={{ background: C.blueLight, borderLeft:`4px solid ${C.blue}`, padding:16, borderRadius:'0 8px 8px 0' }}>
            <p style={{ margin:0, color: C.blue, fontWeight:600, fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:4 }}>Notre Vision</p>
            <p style={{ margin:0, color: C.gray700, fontWeight:500 }}>{theme.constat}</p>
          </div>
          <p style={{ color: C.gray600, lineHeight:1.8, margin:0 }}>{theme.longDescription}</p>
          <div>
            <h4 style={{ color: C.red, fontWeight:700, marginBottom:14, display:'flex', alignItems:'center', gap:8, marginTop:0 }}>
              <span style={{ width:5, height:28, background: C.red, borderRadius:3, display:'inline-block' }}/>Les Axes Prioritaires
            </h4>
            {theme.points.map((p, i) => (
              <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start', background: C.gray50, padding:14, borderRadius:12, marginBottom:10 }}>
                <Check size={17} color="#16a34a" style={{ flexShrink:0, marginTop:2 }}/><p style={{ margin:0, color: C.gray700 }}>{p}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center' }}>
            <button onClick={() => { onClose(); document.getElementById('rejoindre').scrollIntoView({ behavior:'smooth' }); }}
              style={{ background: C.red, color:'#fff', border:'none', borderRadius:8, padding:'13px 28px', fontWeight:700, fontSize:'1rem', cursor:'pointer', fontFamily:'Plus Jakarta Sans, sans-serif' }}>
              Soutenir cette ambition
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PilierCard = ({ title, icon: Icon, description, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <div className="pilier-card" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}>
      <div style={{ width:54, height:54, borderRadius:14, background: hov ? C.blue : C.blueLight, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20, transition:'background 0.3s', flexShrink:0 }}>
        <Icon size={26} color={ hov ? '#fff' : C.blue } style={{ transition:'color 0.3s' }}/>
      </div>
      <h3 style={{ fontSize:'1.1rem', fontWeight:700, color: C.gray900, marginBottom:10, marginTop:0 }}>{title}</h3>
      <p style={{ color: C.gray600, lineHeight:1.7, flexGrow:1, fontSize:'0.93rem', margin:0 }}>{description}</p>
      <div style={{ marginTop:18, paddingTop:14, borderTop:`1px solid ${C.gray100}`, display:'flex', alignItems:'center', gap:2, fontSize:'0.78rem', fontWeight:700, color: C.red, transform: hov ? 'translateX(6px)' : 'none', transition:'transform 0.3s' }}>
        DÉCOUVRIR <ChevronRight size={14}/>
      </div>
    </div>
  );
};

const Features = () => {
  const [selected, setSelected] = useState(null);
  const themes = [
    { title:"I. ÉDUCATION",   icon:BookOpen, details:"L'Excellence pour Tous",  description:"Faire de l'école le socle inébranlable de la réussite républicaine.",           constat:"L'éducation est la clé de voûte de notre société.",      longDescription:"Nous portons la vision d'une école qui transmet les savoirs fondamentaux avec exigence et bienveillance. Une école qui permet à chaque enfant, quelle que soit son origine, de s'élever, de s'émanciper et de construire son avenir.",                                                          points:["Revaloriser le rôle central et l'autorité du savoir.","Garantir l'égalité des chances par la maîtrise des fondamentaux.","Offrir un environnement d'apprentissage serein et stimulant."] },
    { title:"II. SANTÉ",      icon:Heart,    details:"L'Humain au Cœur",        description:"Garantir un accès aux soins équitable et digne sur tout le territoire.",         constat:"La santé est notre bien le plus précieux.",              longDescription:"Nous défendons un système de santé solidaire où chaque citoyen trouve une réponse à ses maux. Il est temps de redonner du sens et des moyens à ceux qui nous soignent, et d'assurer une présence médicale dans chaque région.",                                                                  points:["Soutenir et valoriser nos soignants au quotidien.","Rapprocher la médecine de chaque citoyen.","Humaniser l'hôpital pour un parcours de soin apaisé."] },
    { title:"III. JUSTICE",   icon:Scale,    details:"Confiance & Paix",        description:"Restaurer la confiance par une justice efficace, protectrice et respectée.",     constat:"La justice est le ciment de notre pacte social.",        longDescription:"Nous œuvrons pour une justice qui dispose des moyens d'agir vite et bien. Restaurer l'autorité de l'institution judiciaire est indispensable pour assurer la tranquillité publique et protéger les plus vulnérables.",                                                                          points:["Renforcer les moyens pour une justice plus agile.","Garantir la protection de chaque citoyen.","Assurer une réponse judiciaire claire et équitable."] },
    { title:"IV. ÉCONOMIE",   icon:Briefcase,details:"Prospérité Partagée",     description:"Libérer les énergies, valoriser le travail et encourager l'initiative.",        constat:"La prospérité repose sur nos entreprises et travailleurs.", longDescription:"Notre projet économique vise à créer les conditions de la réussite pour tous. Nous croyons en une croissance responsable, fondée sur le mérite, l'innovation et une juste reconnaissance de l'effort de chacun.",                                                                                    points:["Faire du travail le premier vecteur de pouvoir d'achat.","Soutenir l'esprit d'entreprise et l'innovation.","Construire une économie durable et souveraine."] },
    { title:"V. GOUVERNANCE", icon:Search,   details:"Responsabilité",          description:"Un État exemplaire, transparent et au service exclusif de l'intérêt général.",  constat:"La confiance entre citoyens et élus doit être absolue.", longDescription:"Nous prônons une gestion publique rigoureuse et éthique. Chaque décision doit être guidée par l'efficacité et l'utilité réelle pour les Français. La transparence et la responsabilité sont les piliers de notre engagement.",                                                                       points:["Renforcer l'éthique et la transparence de l'action publique.","Évaluer l'impact réel de chaque politique menée.","Placer le citoyen au cœur de la décision démocratique."] },
  ];
  return (
    <section id="themes" style={{ padding:'96px 24px', background:'#fff' }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:64 }}>
          <h2 style={{ fontSize:'clamp(2rem, 4vw, 3rem)', fontWeight:800, color: C.blue, fontFamily:'Outfit, sans-serif', margin:0 }}>Nos 5 Piliers</h2>
          <p style={{ marginTop:12, fontSize:'1.1rem', color: C.gray500 }}>Une vision ambitieuse pour réunir et bâtir l'avenir.</p>
          <div style={{ width:96, height:6, background: C.red, borderRadius:3, margin:'20px auto 0' }}/>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(270px, 1fr))', gap:24 }}>
          {themes.map((t, i) => <PilierCard key={i} {...t} onClick={() => setSelected(t)}/>)}
          <div onClick={() => document.getElementById('rejoindre').scrollIntoView({ behavior:'smooth' })}
               style={{ background: C.gray50, border:`2px dashed ${C.gray300}`, borderRadius:16, padding:24, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', cursor:'pointer', minHeight:220 }}>
            <MessageCircle size={34} color={C.gray400} style={{ marginBottom:10 }}/>
            <h3 style={{ color: C.gray700, fontWeight:700, margin:'0 0 8px' }}>Votre Vision ?</h3>
            <p style={{ color: C.gray500, fontSize:'0.88rem', margin:0 }}>Nous avons besoin de toutes les forces vives.</p>
          </div>
        </div>
      </div>
      {selected && <ThemeModal theme={selected} onClose={() => setSelected(null)}/>}
    </section>
  );
};



// ============================================================
// Sondage dynamique
// ============================================================
const PollSection = () => {
  const KEY = 'unissons_poll_v1';
  const init = [
    { id:1, label:"Éducation : L'Excellence pour tous", votes:0, color: C.blue   },
    { id:2, label:"Santé : L'Accès aux soins garanti",  votes:0, color: C.red    },
    { id:3, label:"Justice : Sécurité et Efficacité",   votes:0, color:'#d97706' },
    { id:4, label:"Économie : Valoriser le Travail",    votes:0, color:'#16a34a' },
  ];
  const [opts, setOpts]         = useState(init);
  const [voted, setVoted]       = useState(false);
  const [selId, setSelId]       = useState(null);
  const [total, setTotal]       = useState(0);
  const [anim,  setAnim]        = useState(false);

  useEffect(() => {
    try { const s = localStorage.getItem(KEY); if (s) { const d = JSON.parse(s); setOpts(d.opts); setVoted(d.voted); setSelId(d.selId); setTotal(d.total); if (d.voted) setTimeout(() => setAnim(true), 100); } } catch(_) {}
  }, []);

  const vote = (id) => {
    const next = opts.map(o => o.id === id ? { ...o, votes: o.votes+1 } : o);
    const t = total + 1;
    setOpts(next); setVoted(true); setSelId(id); setTotal(t);
    setTimeout(() => setAnim(true), 50);
    try { localStorage.setItem(KEY, JSON.stringify({ opts:next, voted:true, selId:id, total:t })); } catch(_) {}
  };
  const pct = (v) => total === 0 ? 0 : Math.round((v / total) * 100);

  return (
    <section id="sondages" style={{ padding:'80px 24px', background:'#fff' }}>
      <div style={{ maxWidth:860, margin:'0 auto' }}>
        <div className="poll-layout" style={{ background: C.blue, borderRadius:24, overflow:'hidden', display:'flex', boxShadow:'0 10px 40px rgba(0,51,153,0.25)' }}>
          <div className="poll-left" style={{ padding:36, width:270, flexShrink:0, color:'#fff', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', borderRight:'1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ padding:14, background:'rgba(255,255,255,0.1)', borderRadius:'50%', marginBottom:16 }}><MessageCircle size={42} color={C.gold}/></div>
            <h3 style={{ fontSize:'1.7rem', fontWeight:700, margin:'0 0 8px' }}>Votre avis</h3>
            <p style={{ opacity:0.75, fontSize:'0.88rem', lineHeight:1.6, margin:0 }}>Quelle est votre priorité pour la France ? Soyez parmi les premiers à voter.</p>
            {voted && total > 0 && (
              <div style={{ background:'rgba(255,255,255,0.12)', borderRadius:12, padding:'10px 18px', marginTop:18 }}>
                <p style={{ color: C.gold, fontWeight:700, fontSize:'1.7rem', margin:0 }}>{total.toLocaleString('fr-FR')}</p>
                <p style={{ color:'#bfdbfe', fontSize:'0.68rem', textTransform:'uppercase', letterSpacing:'0.1em', margin:0 }}>{total === 1 ? 'vote enregistré' : 'votes enregistrés'}</p>
              </div>
            )}
          </div>
          <div style={{ background:'#fff', flex:1, padding:32, minWidth:0 }}>
            <h4 style={{ fontSize:'1.2rem', fontWeight:700, color: C.gray900, margin:'0 0 20px' }}>Quel chantier est prioritaire pour la France ?</h4>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {opts.map(opt => (
                <div key={opt.id}>
                  {voted ? (
                    <div>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5, alignItems:'center' }}>
                        <span style={{ fontSize:'0.88rem', fontWeight: selId === opt.id ? 700 : 500, color: selId === opt.id ? C.blue : C.gray600, display:'flex', alignItems:'center', gap:4 }}>
                          {selId === opt.id && <Check size={14} color="#16a34a"/>}{opt.label}
                        </span>
                        <span style={{ fontWeight:700, color: C.blue, fontSize:'0.88rem', marginLeft:8, flexShrink:0 }}>{pct(opt.votes)}%</span>
                      </div>
                      <div style={{ height:9, borderRadius:999, background: C.gray100, overflow:'hidden' }}>
                        <div className="poll-bar" style={{ height:'100%', borderRadius:999, background: opt.color, width: anim ? `${pct(opt.votes)}%` : '0%' }}/>
                      </div>
                    </div>
                  ) : (
                    <button onClick={() => vote(opt.id)} style={{ width:'100%', textAlign:'left', padding:'13px 18px', borderRadius:10, border:`2px solid ${C.gray200}`, background:'#fff', cursor:'pointer', fontWeight:600, color: C.gray700, display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'0.93rem', fontFamily:'Plus Jakarta Sans, sans-serif', transition:'border-color 0.2s, background 0.2s' }}
                      onMouseEnter={e=>{ e.currentTarget.style.borderColor=C.blue; e.currentTarget.style.background=C.blueLight; }}
                      onMouseLeave={e=>{ e.currentTarget.style.borderColor=C.gray200; e.currentTarget.style.background='#fff'; }}>
                      <span>{opt.label}</span>
                      <div style={{ width:18, height:18, borderRadius:'50%', border:`2px solid ${C.gray300}`, flexShrink:0 }}/>
                    </button>
                  )}
                </div>
              ))}
            </div>
            {voted && (
              <div style={{ marginTop:14, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <p style={{ fontSize:'0.83rem', fontWeight:600, color:'#16a34a', display:'flex', alignItems:'center', gap:5, margin:0 }}><CheckCircle size={14}/> Votre avis a été enregistré.</p>
                <button onClick={() => { setVoted(false); setSelId(null); setAnim(false); localStorage.removeItem(KEY); }} style={{ fontSize:'0.73rem', color: C.gray400, background:'none', border:'none', cursor:'pointer', textDecoration:'underline', fontFamily:'Plus Jakarta Sans, sans-serif' }}>Voter à nouveau</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// Rejoindre
// ============================================================
const JoinSection = () => {
  const [state, setState] = useState('idle');
  const submit = async (e) => {
    e.preventDefault(); setState('submitting');
    try {
      const r = await fetch("https://formspree.io/f/xeeljzay", { method:"POST", body:new FormData(e.target), headers:{ Accept:'application/json' } });
      if (r.ok) { setState('success'); e.target.reset(); } else { setState('idle'); alert("Erreur technique. Merci de réessayer."); }
    } catch { setState('idle'); alert("Problème de connexion."); }
  };
  return (
    <section id="rejoindre" style={{ padding:'96px 24px', background: C.blue, position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', opacity:0.1 }}>
        <div className="blob" style={{ position:'absolute', top:40, right:40, width:256, height:256, background:'#fff', borderRadius:'50%', filter:'blur(60px)' }}/>
        <div className="blob blob-delay4" style={{ position:'absolute', bottom:40, left:40, width:256, height:256, background: C.red, borderRadius:'50%', filter:'blur(60px)' }}/>
      </div>
      <div style={{ maxWidth:860, margin:'0 auto', position:'relative', zIndex:10, textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(2rem, 6vw, 3.5rem)', fontWeight:800, color:'#fff', margin:'0 0 18px', fontFamily:'Outfit, sans-serif' }}>
          UNISSONS : <span style={{ color: C.gold }}>Le courage du bon sens.</span>
        </h2>
        <p style={{ color:'#bfdbfe', fontSize:'1.1rem', maxWidth:540, margin:'0 auto 44px', fontWeight:300, lineHeight:1.7 }}>
          Nous recrutons des "têtes bien faites" : médecins, entrepreneurs, associatifs, citoyens engagés. Aidez-nous à construire les solutions.
        </p>
        {state === 'success' ? (
          <div className="fade-up" style={{ background:'#fff', borderRadius:20, padding:48, maxWidth:440, margin:'0 auto', display:'flex', flexDirection:'column', alignItems:'center', boxShadow:'0 20px 60px rgba(0,0,0,0.25)' }}>
            <div style={{ width:68, height:68, background:'#dcfce7', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:18 }}><CheckCircle size={34} color="#16a34a"/></div>
            <h3 style={{ fontWeight:700, fontSize:'1.35rem', color: C.gray900, margin:'0 0 8px' }}>C'est noté !</h3>
            <p style={{ color: C.gray600, textAlign:'center', margin:0 }}>Merci de votre intérêt. Nous vous recontacterons très prochainement.</p>
            <button onClick={() => setState('idle')} style={{ marginTop:22, color: C.blue, fontWeight:700, textDecoration:'underline', background:'none', border:'none', cursor:'pointer', fontFamily:'Plus Jakarta Sans, sans-serif' }}>Retour au formulaire</button>
          </div>
        ) : (
          <form onSubmit={submit} className="join-form" style={{ background:'#fff', borderRadius:14, padding:14, maxWidth:740, margin:'0 auto', display:'flex', flexWrap:'wrap', gap:10, boxShadow:'0 20px 60px rgba(0,0,0,0.25)' }}>
            <input name="email" type="email" placeholder="Votre adresse email" required style={{ flex:'1 1 200px', padding:'13px 18px', borderRadius:9, border:`2px solid ${C.gray100}`, background: C.gray50, outline:'none', fontSize:'0.93rem', color: C.gray900, fontFamily:'Plus Jakarta Sans, sans-serif' }}/>
            <select name="type" style={{ flex:'1 1 180px', padding:'13px 14px', borderRadius:9, border:`2px solid ${C.gray100}`, background: C.gray50, fontSize:'0.93rem', color: C.gray700, cursor:'pointer', outline:'none', fontFamily:'Plus Jakarta Sans, sans-serif' }}>
              <option value="info">Je veux être informé</option>
              <option value="expert">Rejoindre le comité</option>
              <option value="soutien">Je soutiens simplement</option>
            </select>
            <button type="submit" style={{ flex:'0 0 auto', background: C.red, color:'#fff', border:'none', borderRadius:9, padding:'13px 26px', fontWeight:700, fontSize:'0.95rem', cursor:'pointer', fontFamily:'Plus Jakarta Sans, sans-serif', transition:'background 0.2s' }}>
              {state === 'submitting' ? 'Envoi...' : 'Rejoindre'}
            </button>
          </form>
        )}
        <p style={{ marginTop:18, fontSize:'0.73rem', color:'rgba(191,219,254,0.7)', display:'flex', alignItems:'center', justifyContent:'center', gap:5 }}>
          <Shield size={12}/> Vos données restent confidentielles. Pas de spam.
        </p>
      </div>
    </section>
  );
};

// ============================================================
// Footer
// ============================================================
const Footer = () => (
  <footer style={{ background: C.gray900, color:'#fff', padding:'64px 24px', borderTop:'1px solid #1f2937' }}>
    <div className="footer-grid" style={{ maxWidth:1280, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(210px, 1fr))', gap:44 }}>
      <div>
        <UnissonsLogo size="small"/>
        <p style={{ color: C.gray400, marginTop:16, lineHeight:1.7, fontSize:'0.93rem' }}>Comprendre. Agir. Réussir.<br/>Le mouvement de la rationalité politique.</p>
      </div>
      <div>
        <h4 style={{ color: C.gold, fontWeight:700, fontSize:'0.72rem', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:18, marginTop:0 }}>Le Projet</h4>
        {[['#vision','Le Manifeste'],['#themes','Les 5 Piliers'],['#sondages','Consultation']].map(([href, label]) => (
          <a key={href} href={href} className="footer-link">{label}</a>
        ))}
      </div>
      <div>
        <h4 style={{ color: C.gold, fontWeight:700, fontSize:'0.72rem', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:18, marginTop:0 }}>Contact</h4>
        <a href="mailto:parti.unissons@gmail.com" style={{ display:'flex', alignItems:'center', gap:9, color: C.gray400, fontSize:'0.88rem', marginBottom:12, transition:'color 0.2s' }} className="footer-link">
          <Mail size={15}/> parti.unissons@gmail.com
        </a>
        <p style={{ color: C.gray400, fontSize:'0.88rem', display:'flex', alignItems:'center', gap:9, margin:0 }}>📍 Paris, France</p>
      </div>
      <div>
        <h4 style={{ color: C.gold, fontWeight:700, fontSize:'0.72rem', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:18, marginTop:0 }}>Suivez-nous</h4>
        <div style={{ display:'flex', gap:10 }}>
          <a href="https://x.com/PartiUnissons" target="_blank" rel="noopener noreferrer" className="social-btn social-x" title="X (Twitter)">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-btn social-ig" title="Instagram (lien à configurer)">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-btn social-tt" title="TikTok (lien à configurer)">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/></svg>
          </a>
        </div>
        <p style={{ color:'#4b5563', fontSize:'0.7rem', marginTop:10 }}>Remplacez les # par vos liens Instagram & TikTok.</p>
      </div>
    </div>
    <div style={{ maxWidth:1280, margin:'44px auto 0', paddingTop:22, borderTop:'1px solid #1f2937', textAlign:'center', color:'#4b5563', fontSize:'0.83rem' }}>
      © {new Date().getFullYear()} Parti UNISSONS. Tous droits réservés.
    </div>
  </footer>
);

// ============================================================
// App
// ============================================================
const App = () => {
  const toJoin = () => { const el = document.getElementById('rejoindre'); if (el) el.scrollIntoView({ behavior:'smooth' }); };
  return (
    <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", color: C.gray900, background:'#fff' }}>
      <SEOMeta/>
      <style>{globalStyles}</style>
      <Navbar onJoinClick={toJoin}/>
      <Hero onJoinClick={toJoin}/>
      <VisionSection/>
      <Features/>
      <PollSection/>
      <JoinSection/>
      <Footer/>
    </div>
  );
};

export default App;
