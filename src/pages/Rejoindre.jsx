import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight, ArrowLeft } from 'lucide-react';
import { C } from '../theme.js';
import { SEO, Star, TriSmooth } from '../components/Shared.jsx';
import { useReveal } from '../styles.jsx';

const Rejoindre = () => {
  useReveal();
  const [state, setState] = useState('idle');
  const [rgpd, setRgpd] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!rgpd) return;
    setState('sub');

    const formData = new FormData(e.target);
    // Honeypot check
    if (formData.get('website')) { setState('ok'); return; } // trap bots

    try {
      const r = await fetch('https://formspree.io/f/xeeljzay', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (r.ok) { setState('ok'); e.target.reset(); setRgpd(false); }
      else { setState('idle'); alert('Une erreur est survenue. Merci de réessayer.'); }
    } catch {
      setState('idle');
      alert('Problème de connexion. Vérifiez votre réseau.');
    }
  };

  return (
    <>
      <SEO
        title="Rejoindre le mouvement — UNISSONS"
        description="Entrez dans le mouvement UNISSONS en moins d'une minute. Un prénom, un email, un code postal — c'est tout."
        url="https://mouvement-unissons.fr/rejoindre"
      />

      <section style={{
        minHeight: '100vh',
        padding: '140px 24px 80px',
        background: C.navy,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 520, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {state === 'ok' ? (
            // ─────────── CONFIRMATION ───────────
            <div className="rv vis" style={{ textAlign: 'center' }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'rgba(63,173,90,.15)',
                border: `1px solid rgba(63,173,90,.3)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 28px',
              }}>
                <CheckCircle size={34} color={C.green} />
              </div>

              <h1 className="serif" style={{
                fontSize: 'clamp(2rem, 5vw, 2.6rem)',
                fontWeight: 600, color: C.text,
                marginBottom: 20, letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}>
                Bienvenue dans le mouvement.
              </h1>

              <p style={{ color: C.cream, fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 36 }}>
                Votre voix compte désormais.<br />
                Nous vous recontacterons très prochainement.
              </p>

              <TriSmooth w={60} h={2} style={{ margin: '0 auto 36px' }} />

              <p style={{ color: C.textM, fontSize: '.95rem', marginBottom: 20 }}>
                Aidez-nous à faire connaître le mouvement :
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
                <a href="https://x.com/UnissonsFr" target="_blank" rel="noopener noreferrer"
                  className="btn-secondary" style={{
                    borderRadius: 8, padding: '12px 22px',
                    fontSize: '.88rem', cursor: 'pointer',
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                  }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  Suivre sur X
                </a>
                <a href={`https://twitter.com/intent/tweet?text=Je%20rejoins%20UNISSONS%2C%20la%20voix%20de%20la%20majorité%20silencieuse.%20%F0%9F%87%AB%F0%9F%87%B7&url=${encodeURIComponent('https://mouvement-unissons.fr')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-secondary" style={{
                    borderRadius: 8, padding: '12px 22px',
                    fontSize: '.88rem', cursor: 'pointer',
                  }}>Partager sur X</a>
              </div>

              <Link to="/" className="btn-primary" style={{
                display: 'inline-block', border: 'none', borderRadius: 8,
                padding: '12px 24px', fontSize: '.9rem', cursor: 'pointer',
              }}>Retour à l'accueil</Link>
            </div>
          ) : (
            // ─────────── FORMULAIRE ───────────
            <>
              <Link to="/" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: C.textM, fontSize: '.88rem', marginBottom: 40,
                transition: 'color .2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = C.text}
                onMouseLeave={e => e.currentTarget.style.color = C.textM}>
                <ArrowLeft size={14} /> Retour
              </Link>

              <div className="rv" style={{ textAlign: 'center', marginBottom: 40 }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                  <Star size={24} style={{ animation: 'glow 2.8s ease infinite' }} />
                </div>
                <h1 className="serif" style={{
                  fontSize: 'clamp(2rem, 5.5vw, 2.8rem)',
                  fontWeight: 600, color: C.text,
                  marginBottom: 16, letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}>
                  Entrez dans le mouvement.
                </h1>
                <p style={{ color: C.cream, fontSize: '1.05rem', lineHeight: 1.7 }}>
                  Trois informations, c'est tout.
                </p>
              </div>

              <form onSubmit={submit} className="rv" style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 16,
                padding: 'clamp(28px, 5vw, 40px)',
              }}>
                {/* Honeypot anti-bot */}
                <input type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="prenom" style={{
                    display: 'block', fontSize: '.82rem', fontWeight: 600,
                    color: C.textM, marginBottom: 8, letterSpacing: '.02em',
                  }}>Prénom</label>
                  <input
                    id="prenom" name="prenom" type="text" required maxLength={60}
                    placeholder="Votre prénom"
                    style={{
                      width: '100%', padding: '14px 16px',
                      borderRadius: 10,
                      border: `1px solid ${C.border}`,
                      background: C.navy, color: C.text,
                      fontSize: '.95rem', transition: 'border-color .2s',
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = C.gold}
                    onBlur={e => e.currentTarget.style.borderColor = C.border}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="email" style={{
                    display: 'block', fontSize: '.82rem', fontWeight: 600,
                    color: C.textM, marginBottom: 8, letterSpacing: '.02em',
                  }}>Email</label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="votre@adresse.fr"
                    style={{
                      width: '100%', padding: '14px 16px',
                      borderRadius: 10,
                      border: `1px solid ${C.border}`,
                      background: C.navy, color: C.text,
                      fontSize: '.95rem', transition: 'border-color .2s',
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = C.gold}
                    onBlur={e => e.currentTarget.style.borderColor = C.border}
                  />
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label htmlFor="codepostal" style={{
                    display: 'block', fontSize: '.82rem', fontWeight: 600,
                    color: C.textM, marginBottom: 8, letterSpacing: '.02em',
                  }}>Code postal</label>
                  <input
                    id="codepostal" name="codepostal" type="text" required
                    pattern="[0-9]{5}" maxLength={5} inputMode="numeric"
                    placeholder="75001"
                    style={{
                      width: '100%', padding: '14px 16px',
                      borderRadius: 10,
                      border: `1px solid ${C.border}`,
                      background: C.navy, color: C.text,
                      fontSize: '.95rem', transition: 'border-color .2s',
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = C.gold}
                    onBlur={e => e.currentTarget.style.borderColor = C.border}
                  />
                  <p style={{ fontSize: '.78rem', color: C.textD, marginTop: 6 }}>
                    Pour nous aider à comprendre où le mouvement grandit.
                  </p>
                </div>

                {/* Case RGPD obligatoire */}
                <label style={{
                  display: 'flex', gap: 12, alignItems: 'flex-start',
                  marginBottom: 28, cursor: 'pointer',
                  padding: '14px 16px',
                  background: C.navy,
                  borderRadius: 10,
                  border: `1px solid ${C.border}`,
                }}>
                  <input
                    type="checkbox" name="rgpd" required
                    checked={rgpd}
                    onChange={e => setRgpd(e.target.checked)}
                    style={{
                      width: 18, height: 18, marginTop: 2,
                      accentColor: C.red, cursor: 'pointer', flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '.88rem', color: C.cream, lineHeight: 1.6 }}>
                    J'accepte de recevoir les communications du mouvement UNISSONS et de voir mes données utilisées conformément à la <Link to="/politique-confidentialite" style={{ color: C.gold, textDecoration: 'underline' }}>politique de confidentialité</Link>.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={state === 'sub' || !rgpd}
                  className="btn-accent"
                  style={{
                    width: '100%', border: 'none', borderRadius: 10,
                    padding: '16px', fontSize: '1rem',
                    cursor: state === 'sub' || !rgpd ? 'not-allowed' : 'pointer',
                    opacity: state === 'sub' || !rgpd ? .5 : 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  }}>
                  {state === 'sub' ? 'Envoi en cours…' : <>Je rejoins le mouvement <ArrowRight size={16} /></>}
                </button>

                <p style={{
                  marginTop: 20, fontSize: '.76rem',
                  color: C.textD, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', gap: 6,
                }}>
                  <Shield size={11} /> Vos données sont confidentielles. Jamais de spam.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Rejoindre;
