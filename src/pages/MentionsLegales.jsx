import React from 'react';
import { C } from '../theme.js';
import { SEO, SectionLabel } from '../components/Shared.jsx';
import { useReveal } from '../styles.jsx';

const MentionsLegales = () => {
  useReveal();
  return (
    <>
      <SEO
        title="Mentions légales — UNISSONS"
        description="Mentions légales du site mouvement-unissons.fr."
        url="https://mouvement-unissons.fr/mentions-legales"
      />

      <section style={{ padding: '140px 24px 96px', background: C.navy, minHeight: '80vh' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <SectionLabel>Informations légales</SectionLabel>
          <h1 className="serif" style={{
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            fontWeight: 600, color: C.text,
            marginBottom: 40, letterSpacing: '-0.02em',
          }}>Mentions légales</h1>

          <div style={{ color: C.cream, lineHeight: 1.8, fontSize: '.98rem' }}>
            <div style={{ marginBottom: 36 }}>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Éditeur du site</h2>
              <p>
                Le site <strong style={{ color: C.text }}>mouvement-unissons.fr</strong> est édité par le mouvement citoyen UNISSONS.
              </p>
              <p style={{ marginTop: 8 }}>
                Contact : <a href="mailto:parti.unissons@gmail.com" style={{ color: C.gold, textDecoration: 'underline' }}>parti.unissons@gmail.com</a>
              </p>
            </div>

            <div style={{ marginBottom: 36 }}>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Directeur de la publication</h2>
              <p>Le représentant légal du mouvement UNISSONS.</p>
            </div>

            <div style={{ marginBottom: 36 }}>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Hébergement</h2>
              <p>
                Le site est hébergé par <strong style={{ color: C.text }}>Vercel Inc.</strong><br />
                340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
                Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: C.gold, textDecoration: 'underline' }}>vercel.com</a>
              </p>
              <p style={{ marginTop: 12 }}>
                Le nom de domaine est enregistré auprès de <strong style={{ color: C.text }}>OVHcloud</strong>, 2 rue Kellermann, 59100 Roubaix, France.
              </p>
            </div>

            <div style={{ marginBottom: 36 }}>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu présent sur ce site (textes, logo, identité graphique, code) est la propriété exclusive du mouvement UNISSONS. Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation préalable est interdite.
              </p>
            </div>

            <div style={{ marginBottom: 36 }}>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Responsabilité</h2>
              <p>
                Le mouvement UNISSONS s'efforce d'assurer l'exactitude des informations publiées sur ce site, mais ne peut garantir l'absence d'erreurs. Les utilisateurs sont invités à nous signaler toute anomalie à l'adresse ci-dessus.
              </p>
            </div>

            <div>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>

            <p style={{ marginTop: 40, fontSize: '.85rem', color: C.textD, fontStyle: 'italic' }}>
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentionsLegales;
