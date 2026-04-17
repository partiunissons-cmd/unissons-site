import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Scale, Briefcase, Search, Check, ArrowRight } from 'lucide-react';
import { C } from '../theme.js';
import { SEO, SectionLabel, Star } from '../components/Shared.jsx';
import { useReveal } from '../styles.jsx';

const piliers = [
  {
    num: 'I', title: 'Éducation', tag: "L'excellence pour tous",
    icon: BookOpen,
    vision: "L'école doit redevenir le socle de la promesse républicaine.",
    long: "Nous portons la vision d'une école qui transmet les savoirs fondamentaux avec exigence et bienveillance. Une école qui permet à chaque enfant, quelle que soit son origine, de s'élever, de s'émanciper et de construire son avenir.",
    pts: [
      "Revaloriser le rôle central et l'autorité du savoir.",
      "Garantir l'égalité des chances par la maîtrise des fondamentaux.",
      "Offrir un environnement d'apprentissage serein et stimulant.",
    ],
  },
  {
    num: 'II', title: 'Santé', tag: "L'humain au cœur",
    icon: Heart,
    vision: "La santé ne doit souffrir d'aucune fracture territoriale ni sociale.",
    long: "Un système de santé solidaire où chaque citoyen trouve une réponse à ses maux. Il est temps de redonner du sens et des moyens à ceux qui nous soignent, et d'assurer une présence médicale dans chaque région.",
    pts: [
      "Soutenir et valoriser nos soignants au quotidien.",
      "Rapprocher la médecine de chaque citoyen.",
      "Humaniser l'hôpital pour un parcours de soin apaisé.",
    ],
  },
  {
    num: 'III', title: 'Justice', tag: "Confiance et paix",
    icon: Scale,
    vision: "La justice est le ciment de notre pacte social.",
    long: "Nous œuvrons pour une justice qui dispose des moyens d'agir vite et bien. Restaurer l'autorité de l'institution judiciaire est indispensable pour assurer la tranquillité publique et protéger les plus vulnérables.",
    pts: [
      "Renforcer les moyens pour une justice plus agile.",
      "Garantir la protection de chaque citoyen.",
      "Assurer une réponse judiciaire claire et équitable.",
    ],
  },
  {
    num: 'IV', title: 'Économie', tag: "Prospérité partagée",
    icon: Briefcase,
    vision: "La prospérité repose sur nos entreprises et ceux qui travaillent.",
    long: "Notre projet économique vise à créer les conditions de la réussite pour tous. Une croissance responsable, fondée sur le mérite, l'innovation et une juste reconnaissance de l'effort de chacun.",
    pts: [
      "Faire du travail le premier vecteur de pouvoir d'achat.",
      "Soutenir l'esprit d'entreprise et l'innovation.",
      "Construire une économie durable et souveraine.",
    ],
  },
  {
    num: 'V', title: 'Gouvernance', tag: "Responsabilité",
    icon: Search,
    vision: "La confiance entre citoyens et élus doit redevenir la règle.",
    long: "Nous prônons une gestion publique rigoureuse et éthique. Chaque décision doit être guidée par l'efficacité et l'utilité réelle pour les Français. La transparence et la responsabilité sont les piliers de notre engagement.",
    pts: [
      "Renforcer l'éthique et la transparence de l'action publique.",
      "Évaluer l'impact réel de chaque politique menée.",
      "Placer le citoyen au cœur de la décision démocratique.",
    ],
  },
];

const NosPiliers = () => {
  useReveal();

  return (
    <>
      <SEO
        title="Nos piliers — UNISSONS"
        description="Éducation, Santé, Justice, Économie, Gouvernance — les cinq chantiers où la France attend autre chose que des postures."
        url="https://mouvement-unissons.fr/nos-piliers"
      />

      <header style={{
        minHeight: '50vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '160px 24px 60px', textAlign: 'center',
        background: C.navy,
      }}>
        <SectionLabel className="rv" align="center">Nos priorités</SectionLabel>
        <h1 className="serif" style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 500, lineHeight: 1.15,
          color: C.text, marginBottom: 24,
          letterSpacing: '-0.025em', maxWidth: 780,
          animation: 'up .7s ease both',
        }}>
          Cinq piliers.<br />Une conviction.
        </h1>
        <p className="rv" style={{
          fontSize: '1.05rem', color: C.cream,
          maxWidth: 560, lineHeight: 1.7,
        }}>
          Les cinq chantiers où la France attend autre chose que des postures — et où nous portons des solutions concrètes, construites avec ceux qui vivent le terrain.
        </p>
      </header>

      <section style={{ padding: '40px 24px 96px', background: C.navy }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {piliers.map((p, i) => {
            const Icon = p.icon;
            return (
              <article key={p.num} className="rv" style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 16,
                padding: 'clamp(28px, 4vw, 40px)',
                marginBottom: 24,
                transitionDelay: `${i * 0.06}s`,
              }}>
                <div style={{
                  display: 'flex', alignItems: 'flex-start',
                  gap: 20, marginBottom: 24, flexWrap: 'wrap',
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: i % 2 === 0 ? C.blueFrD : C.redD,
                    border: `1px solid ${i % 2 === 0 ? C.blueFrM : C.redM}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={22} color={i % 2 === 0 ? '#4a6dd1' : C.red} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      color: C.gold, fontSize: '.85rem',
                      fontWeight: 600, letterSpacing: '.2em',
                      fontFamily: "'Fraunces', serif",
                      marginBottom: 6,
                    }}>{p.num}</div>
                    <h2 className="serif" style={{
                      fontSize: 'clamp(1.5rem, 3vw, 1.9rem)',
                      fontWeight: 600, color: C.text,
                      marginBottom: 6, letterSpacing: '-0.015em',
                    }}>{p.title}</h2>
                    <p style={{ color: C.red, fontSize: '.82rem', fontWeight: 700, letterSpacing: '.04em' }}>{p.tag}</p>
                  </div>
                </div>

                <div style={{
                  borderLeft: `2px solid ${C.gold}`,
                  padding: '12px 18px',
                  marginBottom: 20,
                  background: 'rgba(234,192,73,.05)',
                  borderRadius: '0 8px 8px 0',
                }}>
                  <p style={{
                    fontSize: '.72rem', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '.15em',
                    color: C.gold, marginBottom: 6,
                  }}>Notre vision</p>
                  <p style={{ fontSize: '.95rem', color: C.text, fontWeight: 500, lineHeight: 1.6 }}>{p.vision}</p>
                </div>

                <p style={{ color: C.cream, lineHeight: 1.8, marginBottom: 24, fontSize: '.98rem' }}>{p.long}</p>

                <div>
                  <p style={{
                    fontSize: '.72rem', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '.15em',
                    color: C.red, marginBottom: 14,
                  }}>Axes prioritaires</p>
                  {p.pts.map((pt, j) => (
                    <div key={j} style={{
                      display: 'flex', gap: 12, alignItems: 'flex-start',
                      padding: '10px 0',
                      borderBottom: j < p.pts.length - 1 ? `1px solid ${C.border}` : 'none',
                    }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: '50%',
                        background: C.redD,
                        flexShrink: 0, display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        marginTop: 3,
                      }}>
                        <Check size={11} color={C.red} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '.93rem', color: C.text, lineHeight: 1.6 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section style={{ padding: '96px 24px', background: C.surface, borderTop: `1px solid ${C.border}`, textAlign: 'center' }}>
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <div className="rv" style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <Star size={24} />
          </div>
          <h2 className="rv serif" style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            fontWeight: 600, color: C.text,
            marginBottom: 20, letterSpacing: '-0.02em',
          }}>
            Ces priorités vous parlent ?
          </h2>
          <p className="rv" style={{ color: C.cream, marginBottom: 32, fontSize: '1rem', lineHeight: 1.7 }}>
            Rejoignez le mouvement. Nous avons besoin de toutes les compétences — et de toutes les voix.
          </p>
          <Link to="/rejoindre" className="btn-accent" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            border: 'none', borderRadius: 8,
            padding: '15px 32px', fontSize: '.98rem', cursor: 'pointer',
          }}>Rejoindre le mouvement <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
};

export default NosPiliers;
