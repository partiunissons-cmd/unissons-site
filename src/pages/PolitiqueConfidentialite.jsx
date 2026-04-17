import React from 'react';
import { Link } from 'react-router-dom';
import { C } from '../theme.js';
import { SEO, SectionLabel } from '../components/Shared.jsx';
import { useReveal } from '../styles.jsx';

const PolitiqueConfidentialite = () => {
  useReveal();
  return (
    <>
      <SEO
        title="Politique de confidentialité — UNISSONS"
        description="Comment nous collectons, utilisons et protégeons vos données personnelles."
        url="https://mouvement-unissons.fr/politique-confidentialite"
      />

      <section style={{ padding: '140px 24px 96px', background: C.navy, minHeight: '80vh' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <SectionLabel>Confidentialité</SectionLabel>
          <h1 className="serif" style={{
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            fontWeight: 600, color: C.text,
            marginBottom: 20, letterSpacing: '-0.02em',
          }}>Politique de confidentialité</h1>
          <p style={{ color: C.cream, fontSize: '1rem', lineHeight: 1.7, marginBottom: 48 }}>
            Nous prenons la protection de vos données au sérieux. Cette page explique clairement ce que nous collectons, pourquoi, et comment exercer vos droits.
          </p>

          <div style={{ color: C.cream, lineHeight: 1.8, fontSize: '.98rem' }}>
            <div style={{ marginBottom: 36 }}>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données collectées sur ce site est le mouvement <strong style={{ color: C.text }}>UNISSONS</strong>.<br />
                Contact : <a href="mailto:parti.unissons@gmail.com" style={{ color: C.gold, textDecoration: 'underline' }}>parti.unissons@gmail.com</a>
              </p>
            </div>

            <div style={{ marginBottom: 36 }}>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Données collectées</h2>
              <p>Nous collectons uniquement les données que vous nous transmettez volontairement via notre formulaire d'inscription :</p>
              <ul style={{ marginTop: 12, paddingLeft: 22 }}>
                <li style={{ marginBottom: 6 }}><strong style={{ color: C.text }}>Prénom</strong></li>
                <li style={{ marginBottom: 6 }}><strong style={{ color: C.text }}>Adresse email</strong></li>
                <li style={{ marginBottom: 6 }}><strong style={{ color: C.text }}>Code postal</strong></li>
              </ul>
              <p style={{ marginTop: 12 }}>Aucune autre donnée n'est collectée sans votre consentement explicite.</p>
            </div>

            <div style={{ marginBottom: 36 }}>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Finalités du traitement</h2>
              <p>Vos données sont utilisées exclusivement pour :</p>
              <ul style={{ marginTop: 12, paddingLeft: 22 }}>
                <li style={{ marginBottom: 6 }}>Vous tenir informé(e) de l'actualité du mouvement UNISSONS.</li>
                <li style={{ marginBottom: 6 }}>Comprendre la répartition géographique de notre communauté (via le code postal).</li>
                <li style={{ marginBottom: 6 }}>Vous contacter pour des événements ou initiatives du mouvement.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                Vos données ne sont <strong style={{ color: C.text }}>jamais vendues, louées, ni cédées</strong> à des tiers.
              </p>
            </div>

            <div style={{ marginBottom: 36 }}>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Base légale</h2>
              <p>
                Le traitement de vos données repose sur votre <strong style={{ color: C.text }}>consentement explicite</strong>, recueilli au moment de votre inscription via une case à cocher non pré-cochée.
              </p>
            </div>

            <div style={{ marginBottom: 36 }}>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Durée de conservation</h2>
              <p>
                Vos données sont conservées pendant <strong style={{ color: C.text }}>2 ans après votre dernière interaction avec le mouvement</strong>. Au-delà, elles sont supprimées automatiquement, sauf demande expresse de votre part de rester inscrit(e).
              </p>
            </div>

            <div style={{ marginBottom: 36 }}>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Hébergement des données</h2>
              <p>
                Les données d'inscription sont traitées via le service <strong style={{ color: C.text }}>Formspree</strong> (Formspree Inc., États-Unis), conforme aux exigences RGPD. Aucun transfert de données vers des pays tiers ne se fait sans garanties appropriées.
              </p>
            </div>

            <div style={{ marginBottom: 36 }}>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul style={{ marginTop: 12, paddingLeft: 22 }}>
                <li style={{ marginBottom: 6 }}><strong style={{ color: C.text }}>Droit d'accès</strong> — obtenir une copie des données que nous détenons sur vous.</li>
                <li style={{ marginBottom: 6 }}><strong style={{ color: C.text }}>Droit de rectification</strong> — corriger des informations inexactes.</li>
                <li style={{ marginBottom: 6 }}><strong style={{ color: C.text }}>Droit à l'effacement</strong> — demander la suppression de vos données.</li>
                <li style={{ marginBottom: 6 }}><strong style={{ color: C.text }}>Droit à la portabilité</strong> — recevoir vos données dans un format lisible.</li>
                <li style={{ marginBottom: 6 }}><strong style={{ color: C.text }}>Droit d'opposition</strong> — refuser à tout moment le traitement de vos données.</li>
                <li style={{ marginBottom: 6 }}><strong style={{ color: C.text }}>Droit de retirer votre consentement</strong> — à tout moment, sans justification.</li>
              </ul>
              <p style={{ marginTop: 16 }}>
                Pour exercer l'un de ces droits, écrivez-nous à <a href="mailto:parti.unissons@gmail.com" style={{ color: C.gold, textDecoration: 'underline' }}>parti.unissons@gmail.com</a>. Nous vous répondrons sous 30 jours.
              </p>
            </div>

            <div style={{ marginBottom: 36 }}>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Cookies</h2>
              <p>
                Notre site <strong style={{ color: C.text }}>n'utilise aucun cookie de suivi ou de marketing</strong>. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés. Aucun outil d'analyse invasif (type Google Analytics) n'est déployé.
              </p>
            </div>

            <div>
              <h2 className="serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: C.text, marginBottom: 12 }}>Réclamation</h2>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la <strong style={{ color: C.text }}>Commission nationale de l'informatique et des libertés (CNIL)</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: C.gold, textDecoration: 'underline' }}>www.cnil.fr</a>
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

export default PolitiqueConfidentialite;
