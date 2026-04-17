import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X as XIcon } from 'lucide-react';
import { C } from '../theme.js';
import { SEO, SectionLabel, GoldBar, Star } from '../components/Shared.jsx';
import { useReveal } from '../styles.jsx';

const PourquoiMaintenant = () => {
  useReveal();

  return (
    <>
      <SEO
        title="Pourquoi maintenant ? — UNISSONS"
        description="Notre pays n'est pas en crise. Il est en attente. Le texte fondateur du mouvement UNISSONS."
        url="https://mouvement-unissons.fr/pourquoi-maintenant"
      />

      {/* Hero sobre */}
      <header style={{
        minHeight: '60vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '160px 24px 80px', textAlign: 'center',
        background: C.navy,
      }}>
        <SectionLabel className="rv" align="center">Texte fondateur</SectionLabel>
        <h1 className="serif" style={{
          fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
          fontWeight: 500, lineHeight: 1.1,
          color: C.text, marginBottom: 24,
          letterSpacing: '-0.025em',
          animation: 'up .7s ease both',
        }}>
          Pourquoi maintenant ?
        </h1>
        <p style={{
          fontSize: '1rem', color: C.textM,
          maxWidth: 520, lineHeight: 1.7,
          animation: 'up .7s ease both .15s',
        }}>
          Ce que nous avons vu. Ce que nous refusons. Ce que nous proposons.
        </p>
      </header>

      {/* Corps de texte */}
      <section style={{ padding: '80px 24px 40px', background: C.navy }}>
        <article style={{
          maxWidth: 680, margin: '0 auto',
          fontSize: 'clamp(1.05rem, 1.5vw, 1.15rem)',
          color: C.cream, lineHeight: 1.85,
        }}>
          <p className="rv" style={{ marginBottom: 28 }}>
            Nous avons regardé le pays. Pas à travers les chaînes d'info ni les fils d'actualité — <strong style={{ color: C.text, fontWeight: 600 }}>à travers les gens</strong>. Les soignants épuisés qui tiennent encore. Les enseignants qui continuent de croire en l'école. Les artisans, les agriculteurs, les petits patrons, les salariés qui partent travailler chaque matin sans attendre qu'on les remercie. Les retraités qui veulent comprendre ce qu'on a fait de leur pays.
          </p>

          <p className="rv" style={{ marginBottom: 28 }}>
            Nous avons écouté. Et nous avons entendu la même chose, partout : <strong style={{ color: C.text, fontWeight: 600 }}>une fatigue calme, pas de la colère</strong>. Le sentiment d'être devenus invisibles. De travailler, de cotiser, d'élever ses enfants — et de n'avoir plus personne à qui faire confiance pour parler de tout ça. Pas de place dans les débats. Pas de place dans les meetings. Pas de place dans les slogans.
          </p>

          <p className="rv" style={{ marginBottom: 28 }}>
            Nous avons compris que la France n'était pas divisée en deux camps. Elle est divisée en trois. Il y a les deux camps qui s'affrontent sur tous les plateaux. Et il y a <strong style={{ color: C.text, fontWeight: 600 }}>la majorité silencieuse</strong> — ceux qui ne se reconnaissent plus dans aucun des deux, et qui n'ont plus de voix pour le dire.
          </p>

          {/* Citation en exergue */}
          <div className="rv" style={{
            borderLeft: `3px solid ${C.gold}`,
            padding: '20px 28px',
            margin: '40px 0',
            background: C.surface,
            borderRadius: '0 10px 10px 0',
          }}>
            <p className="serif" style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              fontStyle: 'italic', color: C.text,
              lineHeight: 1.5, fontWeight: 500,
            }}>
              « La politique française a oublié ceux qui ne crient pas.<br />
              Nous sommes là pour ceux-là. »
            </p>
          </div>

          <p className="rv" style={{ marginBottom: 28 }}>
            Nous refusons le cynisme qui prétend qu'on ne peut rien changer. Nous refusons la radicalité qui pense qu'il faut tout brûler. Nous refusons la résignation qui croit que la France a fait son temps. <strong style={{ color: C.text, fontWeight: 600 }}>Nous refusons surtout l'idée qu'il faudrait choisir son camp pour avoir le droit d'exister.</strong>
          </p>

          <p className="rv" style={{ marginBottom: 28 }}>
            UNISSONS n'est pas un parti. C'est un <strong style={{ color: C.text, fontWeight: 600 }}>mouvement de citoyens</strong> qui pensent qu'on peut faire de la politique autrement : en partant des problèmes, pas des idéologies. En écoutant ceux qui vivent les choses, pas ceux qui en parlent. En proposant des solutions qui fonctionnent — même quand elles ne plaisent à aucun camp.
          </p>

          <p className="rv" style={{ marginBottom: 28 }}>
            Nous visons les <strong style={{ color: C.text, fontWeight: 600 }}>législatives de juin 2027</strong>. Pas pour prendre le pouvoir — pour ramener dans l'Assemblée des voix qui n'y sont plus. Des médecins, des enseignants, des entrepreneurs, des artisans, des associatifs, des gens qui savent de quoi ils parlent parce qu'ils le vivent.
          </p>

          <p className="rv" style={{ marginBottom: 40, color: C.text, fontWeight: 500 }}>
            Ce mouvement ne sera ce qu'il deviendra qu'avec ceux qui le rejoignent. <strong>Vous, peut-être.</strong>
          </p>

          <div className="rv" style={{ display: 'flex', justifyContent: 'center', margin: '32px 0 48px' }}>
            <GoldBar w={48} h={2} />
          </div>
        </article>
      </section>

      {/* Engagements */}
      <section style={{
        padding: '80px 24px',
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div className="rv" style={{ textAlign: 'center', marginBottom: 56 }}>
            <SectionLabel align="center">Nos engagements</SectionLabel>
            <h2 className="serif" style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
              fontWeight: 600, color: C.text,
              letterSpacing: '-0.015em',
            }}>
              Ce que nous ferons.<br />
              Ce que nous ne ferons jamais.
            </h2>
          </div>

          <div className="pgrid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
          }}>
            <div className="rv">
              <p style={{
                fontSize: '.72rem', fontWeight: 700,
                letterSpacing: '.18em', textTransform: 'uppercase',
                color: C.green, marginBottom: 20,
              }}>Nous ferons</p>
              {[
                'Écouter avant de proposer.',
                'Bâtir avec des experts et des citoyens de terrain.',
                'Dire ce que nous pensons, même quand c\'est inconfortable.',
                'Publier nos comptes, nos décisions, nos erreurs.',
                'Tenir nos engagements — ou expliquer pourquoi nous n\'y arrivons pas.',
              ].map((t, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 12, alignItems: 'flex-start',
                  padding: '14px 0',
                  borderBottom: i < 4 ? `1px solid ${C.border}` : 'none',
                }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: '50%',
                    background: 'rgba(63,173,90,.15)',
                    flexShrink: 0, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    marginTop: 3,
                  }}>
                    <Check size={11} color={C.green} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '.94rem', color: C.text, lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
            </div>

            <div className="rv" style={{ transitionDelay: '.1s' }}>
              <p style={{
                fontSize: '.72rem', fontWeight: 700,
                letterSpacing: '.18em', textTransform: 'uppercase',
                color: C.red, marginBottom: 20,
              }}>Nous ne ferons jamais</p>
              {[
                'Attaquer des personnes plutôt que des idées.',
                'Céder à la démagogie ou à la surenchère.',
                'Promettre ce que nous savons irréalisable.',
                'Nous aligner sur un camp pour exister.',
                'Oublier ceux qui nous ont fait confiance.',
              ].map((t, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 12, alignItems: 'flex-start',
                  padding: '14px 0',
                  borderBottom: i < 4 ? `1px solid ${C.border}` : 'none',
                }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: '50%',
                    background: C.redD,
                    flexShrink: 0, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    marginTop: 3,
                  }}>
                    <XIcon size={11} color={C.red} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '.94rem', color: C.text, lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ padding: '96px 24px', background: C.navy, textAlign: 'center' }}>
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <div className="rv" style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <Star size={24} />
          </div>
          <h2 className="rv serif" style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 600, color: C.text,
            marginBottom: 20, letterSpacing: '-0.02em',
          }}>
            Si vous reconnaissez votre France ici —<br />
            rejoignez-nous.
          </h2>
          <p className="rv" style={{ color: C.textM, marginBottom: 32, fontSize: '1rem', lineHeight: 1.7 }}>
            Trois informations, un engagement. Rien de plus, pour l'instant.
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

export default PourquoiMaintenant;
