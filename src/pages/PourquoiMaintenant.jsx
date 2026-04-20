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
        description="Notre pays n'a pas besoin d'une révolution de plus. Il a besoin qu'on entende enfin sa majorité silencieuse. Le texte fondateur du mouvement UNISSONS."
        url="https://mouvement-unissons.fr/pourquoi-maintenant"
      />

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
          maxWidth: 540, lineHeight: 1.7,
          animation: 'up .7s ease both .15s',
        }}>
          Ce que nous avons vu. Ce que nous refusons. Ce que nous proposons.
        </p>
      </header>

      <section style={{ padding: '80px 24px 40px', background: C.navy }}>
        <article style={{
          maxWidth: 680, margin: '0 auto',
          fontSize: 'clamp(1.05rem, 1.5vw, 1.15rem)',
          color: C.cream, lineHeight: 1.85,
        }}>
          <p className="rv" style={{ marginBottom: 28 }}>
            Nous avons regardé notre pays. Pas à travers les chaînes d'information ni les fils d'actualité, mais à travers les gens qui le font vivre. Les soignants épuisés qui continuent de tenir. Les enseignants qui croient encore en l'école. Les artisans, les agriculteurs, les petits patrons, les salariés qui partent travailler chaque matin sans attendre qu'on les remercie. Les retraités qui voudraient simplement comprendre ce qu'on a fait de leur pays.
          </p>

          <p className="rv" style={{ marginBottom: 28 }}>
            Nous avons écouté. Et nous avons entendu la même chose, partout. Une fatigue calme, plutôt que de la colère. Le sentiment d'être devenus invisibles. De travailler, de cotiser, d'élever ses enfants et de n'avoir plus personne à qui faire confiance pour parler de tout cela. Pas de place dans les débats. Pas de place dans les meetings. Pas de place dans les slogans.
          </p>

          <p className="rv" style={{ marginBottom: 28 }}>
            Nous avons compris que notre pays n'était pas divisé en deux camps. Il est divisé en trois. Il y a les deux camps qui s'affrontent sur tous les plateaux, qui occupent tout l'espace, qui monopolisent la parole publique. Et il y a <strong style={{ color: C.text, fontWeight: 600 }}>la majorité silencieuse</strong>. Ceux qui ne se reconnaissent plus dans aucun des deux. Ceux qui forment pourtant la majorité du pays. Ceux qui n'ont plus de voix pour le dire.
          </p>

          <div className="rv" style={{
            borderLeft: `3px solid ${C.gold}`,
            padding: '22px 28px',
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
              Nous sommes là pour eux. »
            </p>
          </div>

          <p className="rv" style={{ marginBottom: 28 }}>
            Nous refusons le cynisme qui prétend qu'on ne peut rien changer. Nous refusons la radicalité qui pense qu'il faut tout brûler pour recommencer. Nous refusons la résignation qui croit que la France a fait son temps. Nous refusons surtout l'idée qu'il faudrait choisir son camp pour avoir le droit d'exister dans le débat public.
          </p>

          <p className="rv" style={{ marginBottom: 28 }}>
            UNISSONS n'est pas un parti de plus. C'est un mouvement de citoyens qui pensent qu'on peut faire de la politique autrement. En partant des problèmes, pas des idéologies. En écoutant ceux qui vivent les choses, pas ceux qui en parlent de loin. En proposant des solutions qui fonctionnent, même quand elles ne plaisent à aucun des camps habituels.
          </p>

          <p className="rv" style={{ marginBottom: 28 }}>
            Nous nous installons dans la durée. Pas pour une échéance, pas pour une campagne, pas pour un scrutin. Nous voulons faire entendre la voix de la majorité silencieuse, aujourd'hui et demain, dans tous les débats qui comptent pour notre pays. Unir les idées, rassembler les compétences, reconstruire ce qui doit l'être, patiemment, sérieusement, durablement.
          </p>

          <p className="rv" style={{ marginBottom: 40, color: C.text, fontWeight: 500 }}>
            Ce mouvement ne sera ce qu'il deviendra qu'avec celles et ceux qui le rejoignent. <strong>Vous, peut-être.</strong>
          </p>

          <div className="rv" style={{ display: 'flex', justifyContent: 'center', margin: '32px 0 48px' }}>
            <GoldBar w={48} h={2} />
          </div>
        </article>
      </section>

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
                "Bâtir avec des experts et des citoyens de terrain.",
                "Dire ce que nous pensons, même quand c'est inconfortable.",
                'Publier nos comptes, nos décisions, nos erreurs.',
                "Tenir nos engagements, ou expliquer pourquoi nous n'y arrivons pas.",
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
                "Attaquer des personnes plutôt que des idées.",
                "Céder à la démagogie ou à la surenchère.",
                "Promettre ce que nous savons irréalisable.",
                "Nous aligner sur un camp pour exister.",
                "Oublier ceux qui nous ont fait confiance.",
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

      <section style={{ padding: '96px 24px', background: C.navy, textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div className="rv" style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <Star size={24} />
          </div>
          <h2 className="rv serif" style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 600, color: C.text,
            marginBottom: 20, letterSpacing: '-0.02em',
          }}>
            Si vous vous reconnaissez ici —<br />
            rejoignez-nous.
          </h2>
          <p className="rv" style={{ color: C.textM, marginBottom: 32, fontSize: '1rem', lineHeight: 1.7 }}>
            Trois informations, un engagement. Rien de plus.
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
