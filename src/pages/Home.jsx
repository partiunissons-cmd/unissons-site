import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, BookOpen, Users, Heart, Scale, Search, Cpu } from 'lucide-react';
import { C } from '../theme.js';
import { SEO, Logo, GoldBar, Star, SectionLabel } from '../components/Shared.jsx';
import { useReveal } from '../styles.jsx';

const COUNTER_SEED = 52;

const Counter = () => {
  const [n, setN] = useState(0);
  useEffect(() => {
    let step = 0;
    const target = COUNTER_SEED;
    const timer = setInterval(() => {
      step++;
      const p = 1 - Math.pow(1 - Math.min(step / 60, 1), 3);
      setN(Math.round(target * p));
      if (step >= 60) clearInterval(timer);
    }, 22);
    return () => clearInterval(timer);
  }, []);
  return (
    <span style={{ color: C.gold, fontWeight: 700, fontFamily: "'Fraunces', serif" }}>{n.toLocaleString('fr-FR')}</span>
  );
};

const Home = () => {
  useReveal();

  return (
    <>
      <SEO
        title="UNISSONS — La voix de la majorité silencieuse"
        description="Le mouvement citoyen de ceux que l'on n'entend plus. Ni gauche, ni droite — des solutions."
        url="https://mouvement-unissons.fr"
      />

      {/* ─────────── BLOC 1 — HERO ─────────── */}
      <header style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '120px 24px 80px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
        background: `
          radial-gradient(ellipse 60% 40% at 30% 30%, rgba(0,35,149,.22) 0%, transparent 65%),
          radial-gradient(ellipse 50% 40% at 70% 70%, rgba(237,41,57,.15) 0%, transparent 65%),
          ${C.navy}
        `,
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          border: `1px solid ${C.bordH}`, borderRadius: 100,
          padding: '8px 22px', marginBottom: 48,
          animation: 'dn .7s ease both',
          background: 'rgba(255,255,255,.02)',
        }}>
          <Star size={11} color={C.gold} style={{ animation: 'glow 2.8s ease infinite' }} />
          <span style={{ fontSize: '.74rem', fontWeight: 600, color: C.text, letterSpacing: '.2em', textTransform: 'uppercase' }}>
            Le mouvement du bon sens
          </span>
        </div>

        <div style={{ marginBottom: 56, animation: 'up .8s ease both .1s' }}>
          <Logo size="lg" />
        </div>

        <h1 className="serif" style={{
          fontSize: 'clamp(2.2rem, 6vw, 4rem)',
          fontWeight: 500, lineHeight: 1.15,
          color: C.text, maxWidth: 820,
          marginBottom: 24, letterSpacing: '-0.02em',
          animation: 'up .7s ease both .3s',
        }}>
          La voix de la majorité silencieuse.
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: C.cream, maxWidth: 620,
          lineHeight: 1.7, fontWeight: 400,
          margin: '0 auto 52px',
          animation: 'up .7s ease both .45s',
        }}>
          UNISSONS est le mouvement de ceux que l'on n'entend plus.<br />
          Ni gauche, ni droite — <span style={{ color: C.text, fontWeight: 500 }}>des solutions.</span>
        </p>

        <div className="hcta" style={{ display: 'flex', gap: 14, animation: 'up .7s ease both .6s' }}>
          <Link to="/rejoindre" className="btn-primary" style={{
            border: 'none', borderRadius: 8,
            padding: '15px 32px', fontSize: '.95rem',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
          }}>Rejoindre le mouvement <ArrowRight size={16} /></Link>
          <Link to="/pourquoi-maintenant" className="btn-secondary" style={{
            borderRadius: 8, padding: '15px 32px',
            fontSize: '.95rem', cursor: 'pointer',
          }}>Pourquoi maintenant ?</Link>
        </div>

        <p style={{
          marginTop: 72, fontSize: '.88rem', color: C.textM,
          animation: 'count 1s ease both .9s',
        }}>
          Nous sommes déjà <Counter /> à avoir rejoint le mouvement.
        </p>

        <div style={{
          position: 'absolute', bottom: 28, left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2.5s ease infinite',
          color: C.textD,
        }}>
          <ChevronDown size={20} />
        </div>
      </header>

      {/* ─────────── BLOC 2 — LE CONSTAT (Variante B) ─────────── */}
      <section style={{
        padding: '112px 24px',
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <div className="rv serif" style={{
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 500, lineHeight: 1.5,
            color: C.text, marginBottom: 48, fontStyle: 'italic',
          }}>
            <p style={{ marginBottom: 20 }}>Nous sommes la majorité. Nous travaillons, nous élevons nos enfants, nous payons nos impôts.</p>
            <p style={{ marginBottom: 20 }}>Nous ne crions pas sur les plateaux, nous n'incendions pas les réseaux.</p>
            <p>Et depuis trop longtemps, personne ne parle vraiment pour nous.</p>
          </div>
          <GoldBar w={40} h={2} style={{ margin: '0 auto' }} />
        </div>
      </section>

      {/* ─────────── BLOC 3 — NOTRE RÉPONSE ─────────── */}
      <section style={{ padding: '112px 24px', background: C.navy }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <SectionLabel className="rv" align="center">Notre méthode</SectionLabel>
            <h2 className="rv serif" style={{
              fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
              fontWeight: 600, color: C.text,
              marginBottom: 24, letterSpacing: '-0.015em',
            }}>Notre réponse.</h2>
            <p className="rv" style={{
              color: C.cream, fontSize: '1.05rem',
              lineHeight: 1.75, maxWidth: 680, margin: '0 auto',
            }}>
              Nous ne cherchons ni à ajouter du bruit, ni à promettre l'impossible. Nous portons une méthode simple : écouter ceux qui vivent les problèmes, bâtir des solutions avec ceux qui les connaissent, rendre des comptes à ceux qui nous font confiance. Nous unissons les idées, nous avisons ensuite.
            </p>
          </div>

          <div className="engrid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}>
            {[
              { title: 'Écouter', desc: "Partir de ceux qui vivent les problèmes au quotidien. Pas des sondages, pas des plateaux, pas des consultants." },
              { title: 'Proposer', desc: "Des solutions bâties avec des experts, des professionnels et des citoyens de terrain. Du concret, vérifié, évalué." },
              { title: 'Rendre des comptes', desc: "Transparence, responsabilité, méthode. Tenir ce que nous disons, dire ce que nous faisons, reconnaître quand nous nous trompons." },
            ].map((e, i) => (
              <div key={i} className="rv" style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                padding: '32px 26px',
                transitionDelay: `${i * 0.08}s`,
              }}>
                <div style={{
                  fontSize: '.72rem', fontWeight: 700,
                  letterSpacing: '.18em', textTransform: 'uppercase',
                  color: C.red, marginBottom: 14,
                }}>0{i + 1}</div>
                <h3 className="serif" style={{ fontSize: '1.4rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>{e.title}</h3>
                <p style={{ color: C.textM, fontSize: '.95rem', lineHeight: 1.7 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── BLOC 4 — LES 5 PILIERS (NOUVEL ORDRE) ─────────── */}
      <section style={{
        padding: '112px 24px',
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <SectionLabel className="rv" align="center">Nos priorités</SectionLabel>
            <h2 className="rv serif" style={{
              fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
              fontWeight: 600, color: C.text,
              marginBottom: 16, letterSpacing: '-0.015em',
            }}>Cinq piliers, une conviction.</h2>
            <p className="rv" style={{
              color: C.textM, fontSize: '1rem',
              lineHeight: 1.7, maxWidth: 540, margin: '0 auto',
            }}>
              Cinq chantiers concrets. Un horizon commun : vivre ensemble.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { num: 'I', title: 'Éducation', tag: 'Socle de tout le reste.', icon: BookOpen },
              { num: 'II', title: 'Les travailleurs', tag: 'Cœur battant de la France.', icon: Users },
              { num: 'III', title: 'Les soins', tag: "L'humain au cœur.", icon: Heart },
              { num: 'IV', title: 'La justice', tag: 'Confiance et paix.', icon: Scale },
              { num: 'V', title: 'La gouvernance', tag: 'Responsabilité et méthode.', icon: Search },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <Link key={i} to="/nos-piliers" className="rv" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '22px 18px',
                  borderBottom: `1px solid ${C.border}`,
                  transition: 'all .25s', borderRadius: 8,
                  transitionDelay: `${i * 0.05}s`,
                  color: 'inherit',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.03)'; e.currentTarget.style.paddingLeft = '26px'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '18px'; }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
                    <div style={{
                      minWidth: 42,
                      color: C.gold,
                      fontSize: '.9rem', fontWeight: 600,
                      letterSpacing: '.1em',
                      fontFamily: "'Fraunces', serif",
                    }}>{p.num}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <Icon size={18} color={i % 2 === 0 ? C.textM : C.red} style={{ flexShrink: 0 }} />
                      <div>
                        <h3 className="serif" style={{ fontSize: '1.2rem', fontWeight: 600, color: C.text, marginBottom: 2 }}>{p.title}</h3>
                        <p style={{ fontSize: '.87rem', color: C.textM }}>{p.tag}</p>
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={16} color={C.textD} style={{ flexShrink: 0 }} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── BLOC 5 — TEASER IA (renvoie vers page dédiée) ─────────── */}
      <section style={{
        padding: '112px 24px',
        background: C.navy,
        borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel className="rv" align="center">Un enjeu transversal</SectionLabel>

          <h2 className="rv serif" style={{
            fontSize: 'clamp(1.9rem, 4.5vw, 2.6rem)',
            fontWeight: 600, color: C.text,
            marginBottom: 24, letterSpacing: '-0.015em',
          }}>
            Notre regard sur<br />l'intelligence artificielle.
          </h2>

          <p className="rv" style={{
            color: C.cream, fontSize: '1.05rem',
            lineHeight: 1.8, maxWidth: 600, margin: '0 auto 40px',
          }}>
            L'intelligence artificielle n'est pas un sujet parmi d'autres. C'est une révolution comparable à celle de l'imprimerie ou de l'électricité, qui traverse déjà l'école, le travail, la santé, la justice et la gouvernance. Nous refusons à la fois la fascination aveugle et la panique morale.
          </p>

          <Link to="/intelligence-artificielle" className="rv btn-secondary" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            borderRadius: 8, padding: '14px 28px',
            fontSize: '.93rem', cursor: 'pointer',
          }}>
            Lire notre position <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ─────────── BLOC 6 — TÉMOIGNAGES ─────────── */}
      <section style={{
        padding: '112px 24px',
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel className="rv" align="center">Vos voix</SectionLabel>
          <h2 className="rv serif" style={{
            fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
            fontWeight: 600, color: C.text,
            marginBottom: 20, letterSpacing: '-0.015em',
          }}>Ils rejoignent le mouvement.</h2>
          <p className="rv" style={{ color: C.textM, fontSize: '1rem', lineHeight: 1.7, marginBottom: 48, maxWidth: 560, margin: '0 auto 48px' }}>
            Derrière chaque inscription, une histoire. Les premières voix de celles et ceux qui ont choisi de sortir du silence arrivent bientôt.
          </p>

          <div className="rv" style={{
            background: C.navy,
            border: `1px solid ${C.border}`,
            borderRadius: 14, padding: '40px 32px',
            maxWidth: 560, margin: '0 auto',
          }}>
            <Star size={24} style={{ marginBottom: 16 }} />
            <h3 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 10 }}>
              Vous voulez raconter pourquoi vous nous rejoignez ?
            </h3>
            <p style={{ color: C.textM, fontSize: '.93rem', lineHeight: 1.7, marginBottom: 24 }}>
              Un paragraphe, une phrase, une conviction. Les voix du mouvement seront celles de ses sympathisants.
            </p>
            <a href="mailto:parti.unissons@gmail.com?subject=Mon%20t%C3%A9moignage%20UNISSONS"
              className="btn-accent" style={{
                display: 'inline-block', border: 'none', borderRadius: 8,
                padding: '12px 24px', fontSize: '.88rem', cursor: 'pointer',
              }}>Partager mon témoignage</a>
          </div>
        </div>
      </section>

      {/* ─────────── BLOC 7 — CTA FINAL (sans 2027) ─────────── */}
      <section style={{
        padding: '120px 24px',
        background: C.navy,
        borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center' }}>
          <div className="rv" style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <Star size={28} style={{ animation: 'glow 2.8s ease infinite' }} />
          </div>

          <h2 className="rv serif" style={{
            fontSize: 'clamp(2rem, 5.5vw, 2.8rem)',
            fontWeight: 600, color: C.text,
            marginBottom: 20, letterSpacing: '-0.02em',
          }}>Rejoignez-nous.</h2>

          <p className="rv" style={{
            color: C.cream, fontSize: '1.05rem',
            lineHeight: 1.75, marginBottom: 36, maxWidth: 500, margin: '0 auto 36px',
          }}>
            Un prénom, un email, un code postal. C'est tout. Nous construisons un mouvement qui s'installe dans la durée, pas une campagne qui s'achève au soir d'un scrutin. Votre voix compte maintenant, et elle comptera demain.
          </p>

          <Link to="/rejoindre" className="btn-accent" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            border: 'none', borderRadius: 8,
            padding: '15px 34px', fontSize: '1rem', cursor: 'pointer',
          }}>Je rejoins le mouvement <ArrowRight size={16} /></Link>

          <p className="rv" style={{ marginTop: 24, fontSize: '.82rem', color: C.textD }}>
            ou écrivez-nous directement : <a href="mailto:parti.unissons@gmail.com" style={{ color: C.textM, textDecoration: 'underline' }}>parti.unissons@gmail.com</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
