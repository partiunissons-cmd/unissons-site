import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Briefcase, Globe } from 'lucide-react';
import { C } from '../theme.js';
import { SEO, SectionLabel, GoldBar, Star } from '../components/Shared.jsx';
import { useReveal } from '../styles.jsx';

const IntelligenceArtificielle = () => {
  useReveal();

  return (
    <>
      <SEO
        title="Intelligence artificielle — UNISSONS"
        description="Notre position sur l'intelligence artificielle. Une réflexion à trois horizons : protéger la démocratie, protéger les travailleurs, protéger notre souveraineté."
        url="https://mouvement-unissons.fr/intelligence-artificielle"
      />

      {/* Hero */}
      <header style={{
        minHeight: '55vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '160px 24px 70px', textAlign: 'center',
        background: C.navy,
      }}>
        <SectionLabel className="rv" align="center">Un enjeu transversal</SectionLabel>
        <h1 className="serif" style={{
          fontSize: 'clamp(2.3rem, 6vw, 3.8rem)',
          fontWeight: 500, lineHeight: 1.15,
          color: C.text, marginBottom: 24,
          letterSpacing: '-0.025em', maxWidth: 820,
          animation: 'up .7s ease both',
        }}>
          Notre regard sur<br />l'intelligence artificielle.
        </h1>
        <p className="rv" style={{
          fontSize: '1.05rem', color: C.cream,
          maxWidth: 640, lineHeight: 1.7,
        }}>
          Ni fascination aveugle, ni panique morale. Une réflexion politique sérieuse, à trois horizons.
        </p>
      </header>

      {/* Introduction */}
      <section style={{ padding: '64px 24px', background: C.navy }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="rv" style={{
            fontSize: 'clamp(1.05rem, 1.5vw, 1.15rem)',
            color: C.cream, lineHeight: 1.85,
          }}>
            <p style={{ marginBottom: 22 }}>
              L'intelligence artificielle n'est pas un sujet parmi d'autres. C'est une révolution comparable à celle de l'imprimerie ou de l'électricité, qui traverse déjà l'école, le travail, la santé, la justice et la gouvernance.
            </p>
            <p style={{ marginBottom: 22 }}>
              Nous refusons les deux tentations habituelles. Celle de la fascination aveugle, qui voit dans chaque nouvelle machine la solution miracle à des problèmes humains. Et celle de la panique morale, qui voudrait qu'on arrête le temps et qu'on protège le monde d'hier contre le monde qui vient.
            </p>
            <p style={{ color: C.text, fontWeight: 500 }}>
              Nous croyons qu'il est urgent de répondre politiquement à cette révolution, avec sérieux, à trois horizons distincts.
            </p>
          </div>

          <div className="rv" style={{ margin: '48px auto', display: 'flex', justifyContent: 'center' }}>
            <GoldBar w={48} h={2} />
          </div>
        </div>
      </section>

      {/* Horizon 1 — Court terme */}
      <section style={{
        padding: '80px 24px',
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div className="rv" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
            <div style={{
              width: 54, height: 54, borderRadius: 14,
              background: C.blueFrD,
              border: `1px solid ${C.blueFrM}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Shield size={22} color="#4a6dd1" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                color: C.gold, fontSize: '.78rem',
                fontWeight: 700, letterSpacing: '.2em',
                textTransform: 'uppercase', marginBottom: 8,
              }}>Court terme</p>
              <h2 className="serif" style={{
                fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)',
                fontWeight: 600, color: C.text,
                letterSpacing: '-0.015em', marginBottom: 20,
              }}>Protéger la démocratie.</h2>
            </div>
          </div>

          <div className="rv" style={{ color: C.cream, fontSize: '1rem', lineHeight: 1.85 }}>
            <p style={{ marginBottom: 18 }}>
              L'intelligence artificielle permet aujourd'hui de générer, en quelques secondes, des textes, des images, des voix et des vidéos impossibles à distinguer de la réalité. Cette capacité change radicalement le rapport au vrai et au faux dans le débat public.
            </p>
            <p style={{ marginBottom: 18 }}>
              Nous assistons déjà aux premières campagnes de désinformation à grande échelle, à la fabrication de faux contenus attribués à des personnalités, à la manipulation ciblée de l'opinion via des contenus générés sur mesure. Dans les années qui viennent, c'est l'intégrité même de nos élections qui sera en jeu.
            </p>
            <p style={{ color: C.text, fontWeight: 500 }}>
              Nous défendons une régulation rapide et claire. Obligation de signaler les contenus générés par intelligence artificielle, sanctions réelles contre la désinformation politique automatisée, protection des processus électoraux contre les manipulations numériques. La démocratie ne peut pas attendre que la technologie se stabilise pour se défendre.
            </p>
          </div>
        </div>
      </section>

      {/* Horizon 2 — Moyen terme */}
      <section style={{
        padding: '80px 24px',
        background: C.navy,
        borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div className="rv" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
            <div style={{
              width: 54, height: 54, borderRadius: 14,
              background: C.redD,
              border: `1px solid ${C.redM}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Briefcase size={22} color={C.red} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                color: C.gold, fontSize: '.78rem',
                fontWeight: 700, letterSpacing: '.2em',
                textTransform: 'uppercase', marginBottom: 8,
              }}>Moyen terme</p>
              <h2 className="serif" style={{
                fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)',
                fontWeight: 600, color: C.text,
                letterSpacing: '-0.015em', marginBottom: 20,
              }}>Protéger les travailleurs.</h2>
            </div>
          </div>

          <div className="rv" style={{ color: C.cream, fontSize: '1rem', lineHeight: 1.85 }}>
            <p style={{ marginBottom: 18 }}>
              L'automatisation ne remplacera pas tous les métiers, mais elle les transformera tous. Les emplois les plus exposés ne sont plus ceux qu'on imaginait il y a dix ans. Les métiers intellectuels intermédiaires, longtemps considérés comme protégés, sont aujourd'hui en première ligne. Juristes, comptables, rédacteurs, traducteurs, développeurs, analystes — la liste s'allonge chaque trimestre.
            </p>
            <p style={{ marginBottom: 18 }}>
              Cette mutation va plus vite que toutes les précédentes. Là où la mécanisation agricole a pris un siècle, là où l'informatisation a pris quarante ans, la transformation liée à l'intelligence artificielle se mesure en années. Nos institutions de formation, de reconversion, de protection sociale n'ont pas été pensées pour ce rythme.
            </p>
            <p style={{ color: C.text, fontWeight: 500 }}>
              Nous refusons que la majorité silencieuse paie seule le prix de cette transition. Formation continue massivement financée, anticipation des mutations par branche, protection renforcée en cas de reconversion forcée, légifération rapide pour éviter que l'automatisation devienne le prétexte d'une précarisation générale. Le travail reste le cœur battant du pays. Il doit le rester.
            </p>
          </div>
        </div>
      </section>

      {/* Horizon 3 — Long terme */}
      <section style={{
        padding: '80px 24px',
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div className="rv" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
            <div style={{
              width: 54, height: 54, borderRadius: 14,
              background: 'rgba(234,192,73,.1)',
              border: `1px solid ${C.goldM}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Globe size={22} color={C.gold} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                color: C.gold, fontSize: '.78rem',
                fontWeight: 700, letterSpacing: '.2em',
                textTransform: 'uppercase', marginBottom: 8,
              }}>Long terme</p>
              <h2 className="serif" style={{
                fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)',
                fontWeight: 600, color: C.text,
                letterSpacing: '-0.015em', marginBottom: 20,
              }}>Protéger notre souveraineté.</h2>
            </div>
          </div>

          <div className="rv" style={{ color: C.cream, fontSize: '1rem', lineHeight: 1.85 }}>
            <p style={{ marginBottom: 18 }}>
              Les systèmes d'intelligence artificielle qui s'imposent aujourd'hui dans nos vies sont très majoritairement conçus hors d'Europe. Leurs valeurs, leurs biais, leurs limites ne sont pas les nôtres. Déléguer à ces systèmes une part croissante de nos décisions administratives, médicales, judiciaires ou éducatives revient à déléguer une part de notre souveraineté à des acteurs privés étrangers.
            </p>
            <p style={{ marginBottom: 18 }}>
              Au-delà de la question économique, se pose une question plus fondamentale. Jusqu'où acceptons-nous que la machine décide à notre place ? Dans quels domaines l'humain doit-il rester irréductible ? Ces questions ne sont ni techniques ni accessoires. Elles touchent à ce qui fait notre humanité commune, à la façon dont nous voulons vivre, éduquer nos enfants, soigner nos proches, rendre la justice.
            </p>
            <p style={{ color: C.text, fontWeight: 500 }}>
              Nous défendons un investissement massif dans la recherche française et européenne, la création d'infrastructures souveraines, une législation claire sur les usages critiques où la décision humaine doit rester obligatoire, et un débat public sérieux sur les lignes rouges éthiques que nous voulons tracer. La France ne peut pas être spectatrice de cette révolution. Elle doit en être l'un des acteurs qui décident.
            </p>
          </div>
        </div>
      </section>

      {/* Synthèse */}
      <section style={{
        padding: '96px 24px',
        background: C.navy,
        borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <div className="rv" style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <Star size={24} />
          </div>
          <h2 className="rv serif" style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            fontWeight: 500, color: C.text,
            marginBottom: 24, letterSpacing: '-0.02em',
            fontStyle: 'italic', lineHeight: 1.3,
          }}>
            Nous ne subirons pas cette révolution.<br />
            Nous la ferons avec ceux qui la vivent.
          </h2>
          <p className="rv" style={{
            color: C.cream, fontSize: '1rem',
            lineHeight: 1.75, marginBottom: 40, maxWidth: 540, margin: '0 auto 40px',
          }}>
            Légiférer, protéger, former, investir. Quatre verbes qui résument notre position. Une position exigeante, qui refuse les discours faciles et qui assume la complexité de l'époque.
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

export default IntelligenceArtificielle;
