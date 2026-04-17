import React from 'react';

export const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600;700&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', -apple-system, sans-serif;
      background: #0b1436;
      color: #ffffff;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: 1.6;
    }
    a { text-decoration: none; color: inherit; }
    button { font-family: inherit; }
    ::selection { background: #ED2939; color: #ffffff; }
    .serif { font-family: 'Fraunces', 'Georgia', serif; }

    @keyframes up { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes dn { from { opacity: 0; transform: translateY(-14px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes pop { from { opacity: 0; transform: scale(.96); } to { opacity: 1; transform: scale(1); } }
    @keyframes glow { 0%, 100% { box-shadow: 0 0 0 0 rgba(234,192,73,.5); } 50% { box-shadow: 0 0 0 10px rgba(234,192,73,0); } }
    @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
    @keyframes count { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

    .rv { opacity: 0; transform: translateY(28px); transition: all .7s cubic-bezier(.16,1,.3,1); }
    .rv.vis { opacity: 1; transform: translateY(0); }

    .btn-primary {
      background: #ffffff; color: #0b1436;
      transition: all .25s;
      font-weight: 600;
    }
    .btn-primary:hover { background: #f4f1e9; transform: translateY(-1px); box-shadow: 0 10px 30px rgba(255,255,255,.12); }

    .btn-secondary {
      background: transparent; color: #ffffff;
      border: 1.5px solid rgba(255,255,255,.3);
      transition: all .25s;
      font-weight: 500;
    }
    .btn-secondary:hover { border-color: #ffffff; background: rgba(255,255,255,.04); }

    .btn-accent {
      background: #ED2939; color: #ffffff;
      transition: all .25s;
      font-weight: 700;
    }
    .btn-accent:hover { background: #ff4454; transform: translateY(-1px); box-shadow: 0 10px 30px rgba(237,41,57,.35); }

    .scrollbar::-webkit-scrollbar { width: 6px; }
    .scrollbar::-webkit-scrollbar-track { background: transparent; }
    .scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,.16); border-radius: 3px; }

    input, select, textarea {
      font-family: 'Inter', sans-serif;
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
    }

    @media (max-width: 768px) {
      .dnav { display: none !important; }
      .mbtn { display: flex !important; }
      .hcta { flex-direction: column; width: 100%; }
      .hcta button { width: 100% !important; justify-content: center; }
      .jform { flex-direction: column !important; }
      .fgrid { grid-template-columns: 1fr 1fr !important; }
      .pgrid { grid-template-columns: 1fr 1fr !important; }
      .engrid { grid-template-columns: 1fr !important; }
    }
    @media (max-width: 480px) {
      .fgrid { grid-template-columns: 1fr !important; }
      .pgrid { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

export const useReveal = () => {
  React.useEffect(() => {
    const run = () => {
      const o = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); o.unobserve(e.target); } });
      }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
      document.querySelectorAll('.rv:not(.vis)').forEach(el => o.observe(el));
      return () => o.disconnect();
    };
    run();
    const t = setTimeout(run, 300);
    return () => clearTimeout(t);
  });
};
