import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Heart, Scale, Search, Check, ArrowRight } from 'lucide-react';
import { C } from '../theme.js';
import { SEO, SectionLabel, Star } from '../components/Shared.jsx';
import { useReveal } from '../styles.jsx';

const piliers = [
  {
    num: 'I',
    title: 'Éducation',
    tag: 'Socle de tout le reste',
    icon: BookOpen,
    vision: "L'école et la formation tout au long de la vie sont le socle sur lequel tout le reste repose.",
    long: "Nous portons la vision d'une école qui transmet les savoirs fondamentaux avec exigence et bienveillance, et qui forme des citoyens capables de penser par eux-mêmes dans un monde qui évolue vite. La révolution numérique et l'intelligence artificielle bouleversent déjà la nature même des métiers et des compétences. Nous devons préparer nos enfants, mais aussi accompagner les adultes par une formation continue ambitieuse. L'école doit redevenir le lieu où se construit le vivre ensemble, celui où la promesse républicaine se tient pour chacun, quelle que soit son origine.",
    pts: [
      "Revaloriser le rôle central et l'autorité du savoir.",
      "Garantir l'égalité des chances par la maîtrise des fondamentaux.",
      "Former tout au long de la vie, face aux mutations technologiques.",
    ],
  },
  {
    num: 'II',
    title: 'Les travailleurs',
    tag: 'Cœur battant de la France',
    icon: Users,
    vision: "La majorité silencieuse travaille. Elle mérite d'être entendue, reconnue et protégée.",
    long: "Les travailleurs font tourner le pays sans entendre leur voix dans le débat public. Soignants, enseignants, agriculteurs, artisans, employés, cadres, indépendants. Ils font vivre la France, cotisent, élèvent leurs enfants, et voient leur travail perdre en reconnaissance et en pouvoir d'achat. L'automatisation et l'intelligence artificielle transforment leurs métiers plus vite que les institutions ne s'adaptent. Nous refusons que cette transition se fasse sur leur dos. Nous voulons reconstruire la dignité du travail, protéger les plus exposés, et faire en sorte que chaque effort trouve sa juste reconnaissance.",
    pts: [
      "Faire du travail le premier vecteur de pouvoir d'achat.",
      "Anticiper et accompagner les mutations technologiques.",
      "Protéger les travailleurs contre la précarisation accélérée.",
    ],
  },
  {
    num: 'III',
    title: 'Les soins',
    tag: "L'humain au cœur",
    icon: Heart,
    vision: "La santé physique et mentale ne doit souffrir d'aucune fracture territoriale ni sociale.",
    long: "Prendre soin est une valeur civilisationnelle qui dépasse la seule question de la santé. C'est la manière dont une société traite ses plus fragiles, ses malades, ses âgés, ses enfants. Nous défendons un système de soins solidaire où chacun trouve une réponse, partout sur le territoire. Il est temps de redonner du sens et des moyens à ceux qui nous soignent, et d'assurer une présence médicale dans chaque région. La santé mentale, longtemps négligée, doit devenir une priorité. Prendre soin, c'est aussi la condition première du vivre ensemble.",
    pts: [
      "Soutenir et valoriser nos soignants au quotidien.",
      "Rapprocher la médecine de chaque citoyen, partout.",
      "Placer la santé mentale au niveau des autres priorités sanitaires.",
    ],
  },
  {
    num: 'IV',
    title: 'La justice',
    tag: 'Confiance et paix',
    icon: Scale,
    vision: "La justice est le ciment de notre pacte social. Sans elle, pas de vivre ensemble possible.",
    long: "Nous œuvrons pour une justice qui dispose des moyens d'agir vite et bien. Restaurer l'autorité de l'institution judiciaire est indispensable pour assurer la tranquillité publique et protéger les plus vulnérables. La justice du quotidien, celle qui règle les petits litiges, les conflits de voisinage, les infractions ordinaires, doit redevenir accessible, lisible et rapide. Sans justice perçue comme juste, la paix sociale s'effrite. C'est cette confiance dans les institutions que nous voulons reconstruire.",
    pts: [
      "Renforcer les moyens pour une justice plus agile.",
      "Garantir l'égalité de chaque citoyen devant la loi.",
      "Rendre la justice du quotidien plus accessible et plus rapide.",
    ],
  },
  {
    num: 'V',
    title: 'La gouvernance',
    tag: 'Responsabilité et méthode',
    icon: Search,
    vision: "La confiance entre citoyens et élus doit redevenir la règle, non l'exception.",
    long: "Nous prônons une gestion publique rigoureuse et éthique. Chaque décision doit être guidée par l'efficacité et l'utilité réelle pour les Français. La transparence, la responsabilité et la méthode sont les piliers de notre engagement. La lutte contre le court-termisme politique, qui sacrifie l'avenir aux prochaines échéances, est une priorité. Moderniser l'action publique, évaluer rigoureusement les politiques menées, rendre des comptes. Voilà ce que la majorité silencieuse attend de ceux qui gouvernent.",
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
        description="Éducation, travailleurs, soins, justice, gouvernance. Cinq chantiers concrets et un horizon commun : le vivre ensemble."
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
          Cinq piliers.<br />Un horizon commun.
        </h1>
        <p className="rv" style={{
          fontSize: '1.05rem', color: C.cream,
          maxWidth: 580, lineHeight: 1.7,
        }}>
          Cinq chantiers où la France attend autre chose que des postures, traversés par une même finalité : le vivre ensemble.
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

      <section style={{
        padding: '96px 24px',
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
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
            Rejoignez le mouvement. Nous avons besoin de toutes les compétences et de toutes les voix.
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
