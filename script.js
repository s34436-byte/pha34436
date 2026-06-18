/* =============================================================
   ความภาคภูมิใจของ Phatchara 
   ============================================================= */

:root{
  --bg: #0B0F14;
  --surface: #121922;
  --surface-alt: #1A2330;
  --border: #232E3A;
  --text: #E8EDF2;
  --text-dim: #8FA0AF;
  --accent-up: #3ED598;
  --accent-down: #FF5C5C;
  --accent-gold: #FFD166;

  --font-display: "Kanit", "Sarabun", sans-serif;
  --font-body: "Sarabun", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --radius: 14px;
  --max-width: 1100px;
}

*{ box-sizing: border-box; }

html{ scroll-behavior: smooth; }

@media (prefers-reduced-motion: reduce){
  html{ scroll-behavior: auto; }
}

body{
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

a{ color: inherit; }

img{ max-width: 100%; display: block; }

h1, h2, h3{
  font-family: var(--font-display);
  font-weight: 600;
  margin: 0 0 .4em;
}

.eyebrow{
  font-family: var(--font-mono);
  font-size: .8rem;
  color: var(--accent-gold);
  letter-spacing: .05em;
  margin: 0 0 .6em;
}

.accent{ color: var(--accent-up); }

/* ---------- layout helpers ---------- */
.nav, .hero, main section, footer{
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: 1.5rem;
}

/* ---------- header / nav ---------- */
.site-header{
  border-bottom: 1px solid var(--border);
}

.nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: .75rem;
  padding-block: 1.25rem;
}

.logo{
  font-family: var(--font-mono);
  font-weight: 500;
  letter-spacing: .08em;
  text-decoration: none;
  font-size: .95rem;
}

.nav-links{
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

.nav-links a{
  text-decoration: none;
  color: var(--text-dim);
  font-size: .95rem;
  transition: color .2s ease;
}

.nav-links a:hover,
.nav-links a:focus-visible{
  color: var(--accent-up);
}

/* ---------- hero ---------- */
.hero{
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  align-items: center;
  gap: 2.5rem;
  padding-block: 3.5rem 2.5rem;
}

.hero-text h1{
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
}

.hero-text .lead{
  color: var(--text-dim);
  font-size: 1.1rem;
  max-width: 32ch;
}

.cta{
  display: inline-block;
  margin-top: 1rem;
  padding: .75rem 1.5rem;
  border-radius: 999px;
  background: var(--accent-up);
  color: #06231A;
  font-weight: 600;
  text-decoration: none;
  transition: transform .15s ease, box-shadow .15s ease;
}

.cta:hover,
.cta:focus-visible{
  transform: translateY(-2px);
  box-shadow: 0 8px 24px -8px var(--accent-up);
}

.hero-photo{
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 320px;
  margin-inline: auto;
  border-radius: var(--radius);
}

/* ---------- photo frame / placeholder state ---------- */
.photo-frame{
  position: relative;
  overflow: hidden;
  background: var(--surface-alt);
  border: 1px dashed var(--border);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-frame img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-frame.is-empty img{
  display: none;
}

.photo-frame.is-empty::before{
  content: "📷";
  font-size: 2rem;
  opacity: .45;
}

.photo-frame.is-empty::after{
  content: attr(data-placeholder);
  position: absolute;
  bottom: .75rem;
  left: .75rem;
  right: .75rem;
  text-align: center;
  font-family: var(--font-mono);
  font-size: .7rem;
  color: var(--text-dim);
}

/* ---------- ticker (signature element) ---------- */
.ticker{
  border-top: 1px solid var(--border);
  background: var(--surface);
  overflow: hidden;
  white-space: nowrap;
}

.ticker-track{
  display: inline-flex;
  gap: 2.5rem;
  padding-block: .65rem;
  font-family: var(--font-mono);
  font-size: .8rem;
  animation: ticker-scroll 28s linear infinite;
  will-change: transform;
}

.ticker-track span{
  flex-shrink: 0;
}

.ticker .up{ color: var(--accent-up); }
.ticker .down{ color: var(--accent-down); }

@keyframes ticker-scroll{
  from{ transform: translateX(0); }
  to{ transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce){
  .ticker-track{ animation: none; }
  .ticker{ white-space: normal; }
}

.ticker:hover .ticker-track{
  animation-play-state: paused;
}

/* ---------- sections ---------- */
main section{
  padding-block: 3.5rem;
  border-bottom: 1px solid var(--border);
}

main h2{
  font-size: clamp(1.5rem, 3vw, 2rem);
}

.about-grid{
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 2rem;
  align-items: center;
}

.about-photo{
  aspect-ratio: 4 / 5;
}

.about-text{
  color: var(--text-dim);
  font-size: 1.05rem;
  max-width: 56ch;
}

/* ---------- projects ---------- */
.project-grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;
}

.project{
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem;
}

.project-photo{
  aspect-ratio: 16 / 10;
  margin-bottom: 1rem;
}

.project h3{
  font-size: 1.1rem;
}

.project p{
  color: var(--text-dim);
  margin: 0;
}

/* ---------- skills ---------- */
.skills-list{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.skills-list li{
  display: flex;
  align-items: center;
  gap: .6rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: .65rem 1.25rem;
  font-size: .95rem;
}

.skill-icon{
  font-size: 1.1rem;
}

/* ---------- footer ---------- */
footer{
  padding-block: 3rem 4rem;
  text-align: center;
}

footer p{
  color: var(--text-dim);
  margin: 0 0 .3rem;
}

.phone{
  font-family: var(--font-mono);
  font-size: 1.3rem;
  color: var(--accent-up);
  text-decoration: none;
}

.phone:hover,
.phone:focus-visible{
  text-decoration: underline;
}

/* ---------- reveal-on-scroll ---------- */
.reveal{
  opacity: 0;
  transform: translateY(16px);
  transition: opacity .6s ease, transform .6s ease;
}

.reveal.is-visible{
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce){
  .reveal{
    opacity: 1;
    transform: none;
    transition: none;
  }
}

/* ---------- focus visibility ---------- */
a:focus-visible,
button:focus-visible{
  outline: 2px solid var(--accent-up);
  outline-offset: 3px;
}

/* ---------- responsive ---------- */
@media (max-width: 800px){
  .hero{
    grid-template-columns: 1fr;
    text-align: center;
    padding-block: 2.5rem 2rem;
  }
  .hero-text .lead{
    margin-inline: auto;
  }
  .about-grid{
    grid-template-columns: 1fr;
  }
  .project-grid{
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px){
  .nav{
    justify-content: center;
    text-align: center;
  }
}
