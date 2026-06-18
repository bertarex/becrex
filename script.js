
Claude finished the response
necesito que me mejores est pagina web cambia lo de team si solo hay una persona e l ocnettido dejalo igual pero que sea muhco mejor en la parte tecnologica que follla mas que sea mas dinamica el mapa tiene que ser solo el contorno de el los contineendes y un pin en cada capital y ya entinedes imagina te que esta web cuest 1500 euos tiene queser muy smoot elegante y seria sin slognes baratos dame el index.htmp el sript y el style lo estoy haciendo en github BECREX
[ABOUT US](https://bertarex.github.io/becrex/#about)[VALUE](https://bertarex.github.io/becrex/#value)[PEOPLE](https://bertarex.github.io/becrex/#people)[TEAM](https://bertarex.github.io/becrex/#team)[CONTACT](https://bertarex.github.io/becrex/#contact)ES
DEEP EXPERTISE
Strategic Insight
Across industries, investors, owners, and management teams face increasing complexity—evolving customer expectations, rising operational pressures, volatile capital markets, and a dynamic competitive landscape.
We help clients cut through that complexity with clarity and precision.
Our high-impact advisory empowers better strategic decisions — creating real value through performance improvement, capital structure optimization, and sensible, actionable roadmaps that strengthen long-term resilience and unlock the full potential of each asset.
01
About Us
BECREX advises investors, owners, and management teams facing complex situations, consequential decisions, and moments where clarity matters.
We combine deep expertise, strategic judgment, and practical execution to help clients move from complexity to action.
02
Value
Performance Improvement
We identify practical levers to improve operating performance, strengthen resilience, and unlock value.
Capital Structure Optimization
We help evaluate capital alternatives with discipline, clarity, and long-term perspective.
Strategic Roadmaps
We translate complexity into sensible, actionable plans aligned with the full potential of each asset.
03
People
Every engagement is led with senior attention, discretion, and a direct understanding of what is at stake.
We stay close to the people, the asset, and the decision-making process from diagnosis to execution.
04
Team
Founder
Domingo Rex
Senior financial advisor and strategic practitioner with over 25 years of experience across banking, credit, and investment advisory in Europe and Latin America. He has advised financial institutions, funds, and corporate clients on complex transactions, particularly within the hospitality, real estate, and special situations sectors.
Previously, Domingo held senior roles at Banco CAM, including Managing Director and Country Head in Mexico, where he managed a tourism-focused credit portfolio of nearly $2 billion. He also advised major Spanish banks such as CaixaBank and Bankia during their strategic divestments in Mexico, accelerating execution while preserving shareholder value.
His advisory experience includes supporting private investors such as Rodina, guiding and executing its initial hospitality investments, as well as assisting banks and institutional clients in tourism and real estate transactions across Mexico and the Caribbean. He is known for his technical expertise, regional insight, honesty, and consistent delivery.
Domingo partners with investors, institutions, and operators to assess opportunities, structure complex deals, and create lasting value across evolving markets.
05
Presence
Mexico
Spain
Operating across Mexico and Spain, supporting investors, owners and management teams on both sides of the Atlantic.
Most important decisions don't come with perfect information.
That's usually where the conversation starts.
[domingo@becrex.com](mailto:domingo@becrex.com)
BECREX · MEXICO & SPAIN

Show more
4 Jun

Reading frontend design skill
Reading frontend design skill
Voy a crear una web premium de 3 archivos separados para GitHub Pages. Dame un momento.


Created 3 files, read a file
Created 3 files, read a file
Aquí tienes los 3 archivos listos para GitHub Pages. Lo que incluye cada uno:

index.html — Estructura limpia, semántica, sin dependencias externas salvo Google Fonts.

style.css — Estética luxury/editorial: paleta negro profundo + oro, tipografía Cormorant Garamond (serif elegante) + Montserrat, animaciones CSS puras, grid layout, hover states con líneas doradas deslizantes, scrollbar personalizada, totalmente responsive.

script.js — Todo dinámico sin librerías:

Navbar que aparece al hacer scroll con blur
Menú mobile con animación
Reveal por scroll con stagger (elementos aparecen escalonados)
Contadores animados (+25, $2bn, 2 mercados)
Mapa canvas puro — contorno de continentes en proyección Mercator, con pin pulsante en Ciudad de México y Madrid, sin APIs externas
Para publicarlo en GitHub: sube los 3 archivos a la raíz del repo bertarex/becrex, activa GitHub Pages desde Settings → Pages → main / root.


Index
Code · HTML 

Style
Code · CSS 

Script
JS 
vale me justa mucho pero me pudess dar el codigo para que yo lo ponga en mi github

5 Jun
Aquí tienes los 3 archivos completos para copiar y pegar directamente:

1. index.html

html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BECREX — Strategic Advisory</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
</head>
<body>

  <nav id="navbar">
    <div class="nav-logo">BECREX</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#value">Value</a></li>
      <li><a href="#people">People</a></li>
      <li><a href="#team">Team</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="nav-lang">ES</div>
    <button class="nav-toggle" aria-label="Menu">
      <span></span><span></span>
    </button>
  </nav>

  <div class="mobile-menu" id="mobileMenu">
    <a href="#about" class="mobile-link">About</a>
    <a href="#value" class="mobile-link">Value</a>
    <a href="#people" class="mobile-link">People</a>
    <a href="#team" class="mobile-link">Team</a>
    <a href="#contact" class="mobile-link">Contact</a>
  </div>

  <section id="hero">
    <div class="hero-bg">
      <div class="hero-grain"></div>
      <div class="hero-lines"></div>
    </div>
    <div class="hero-content">
      <div class="hero-eyebrow reveal">Strategic Advisory</div>
      <h1 class="hero-title reveal">
        <span>DEEP</span>
        <span class="italic">EXPERTISE</span>
      </h1>
      <div class="hero-divider reveal"></div>
      <p class="hero-sub reveal">
        Across industries, investors, owners, and management teams face<br class="br-desk"/>
        increasing complexity. We help clients cut through with clarity and precision.
      </p>
      <a href="#about" class="hero-cta reveal">
        <span>Discover</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </a>
    </div>
    <div class="hero-scroll-hint">
      <div class="scroll-line"></div>
    </div>
  </section>

  <section id="about">
    <div class="section-inner">
      <div class="section-label reveal">01 — About Us</div>
      <div class="about-grid">
        <div class="about-text reveal">
          <h2>BECREX advises investors, owners, and management teams facing complex situations, consequential decisions, and moments where clarity matters.</h2>
          <p>We combine deep expertise, strategic judgment, and practical execution to help clients move from complexity to action.</p>
        </div>
        <div class="about-stat-col reveal">
          <div class="stat-block">
            <div class="stat-num" data-target="25">0</div>
            <div class="stat-label">Years of experience</div>
          </div>
          <div class="stat-block">
            <div class="stat-num" data-target="2">0</div>
            <div class="stat-label">bn credit portfolio managed</div>
          </div>
          <div class="stat-block">
            <div class="stat-num" data-target="2">0</div>
            <div class="stat-label">Markets — Mexico & Spain</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="value">
    <div class="section-inner">
      <div class="section-label reveal">02 — Value</div>
      <div class="value-grid">
        <div class="value-card reveal">
          <div class="value-num">I</div>
          <h3>Performance Improvement</h3>
          <p>We identify practical levers to improve operating performance, strengthen resilience, and unlock value across the asset base.</p>
          <div class="value-line"></div>
        </div>
        <div class="value-card reveal">
          <div class="value-num">II</div>
          <h3>Capital Structure Optimization</h3>
          <p>We help evaluate capital alternatives with discipline, clarity, and long-term perspective—always aligned with shareholder objectives.</p>
          <div class="value-line"></div>
        </div>
        <div class="value-card reveal">
          <div class="value-num">III</div>
          <h3>Strategic Roadmaps</h3>
          <p>We translate complexity into sensible, actionable plans aligned with the full potential of each asset and each market context.</p>
          <div class="value-line"></div>
        </div>
      </div>
    </div>
  </section>

  <section id="people">
    <div class="section-inner">
      <div class="section-label reveal">03 — People</div>
      <div class="people-layout">
        <div class="people-quote reveal">
          <blockquote>
            Every engagement is led with senior attention, discretion, and a direct understanding of what is at stake.
          </blockquote>
        </div>
        <div class="people-text reveal">
          <p>We stay close to the people, the asset, and the decision-making process — from diagnosis to execution. No hand-offs. No dilution of expertise.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="team">
    <div class="section-inner">
      <div class="section-label reveal">04 — Team</div>
      <div class="team-layout">
        <div class="team-card reveal">
          <div class="team-header">
            <div class="team-initials">DR</div>
            <div class="team-title-block">
              <div class="team-role">Founder</div>
              <h2 class="team-name">Domingo Rex</h2>
            </div>
          </div>
          <div class="team-bio">
            <p>Senior financial advisor and strategic practitioner with over 25 years of experience across banking, credit, and investment advisory in Europe and Latin America. He has advised financial institutions, funds, and corporate clients on complex transactions, particularly within the hospitality, real estate, and special situations sectors.</p>
            <p>Previously, Domingo held senior roles at Banco CAM, including Managing Director and Country Head in Mexico, where he managed a tourism-focused credit portfolio of nearly $2 billion. He also advised major Spanish banks such as CaixaBank and Bankia during their strategic divestments in Mexico, accelerating execution while preserving shareholder value.</p>
            <p>His advisory experience includes supporting private investors such as Rodina, guiding and executing its initial hospitality investments, as well as assisting banks and institutional clients in tourism and real estate transactions across Mexico and the Caribbean.</p>
          </div>
          <div class="team-tags">
            <span>Banking</span>
            <span>Credit Advisory</span>
            <span>Real Estate</span>
            <span>Hospitality</span>
            <span>Special Situations</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="presence">
    <div class="section-inner">
      <div class="section-label reveal">05 — Presence</div>
      <div class="presence-text reveal">
        <p>Operating across Mexico and Spain, supporting investors,<br class="br-desk"/> owners and management teams on both sides of the Atlantic.</p>
      </div>
      <div class="map-container reveal">
        <canvas id="worldMap"></canvas>
        <div class="map-legend">
          <div class="legend-item"><span class="legend-dot"></span>Mexico City</div>
          <div class="legend-item"><span class="legend-dot"></span>Madrid</div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="section-inner">
      <div class="contact-layout">
        <div class="contact-left reveal">
          <div class="section-label">Contact</div>
          <h2>Most important decisions don't come with perfect information.<br/><em>That's usually where the conversation starts.</em></h2>
        </div>
        <div class="contact-right reveal">
          <a href="mailto:domingo@becrex.com" class="contact-email">domingo@becrex.com</a>
          <div class="contact-locations">
            <div class="contact-loc">
              <div class="loc-dot"></div>
              <div><div class="loc-city">Mexico</div></div>
            </div>
            <div class="contact-loc">
              <div class="loc-dot"></div>
              <div><div class="loc-city">Spain</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="footer-inner">
      <div class="footer-logo">BECREX</div>
      <div class="footer-copy">Mexico & Spain · <span id="year"></span></div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
2. style.css

css
:root {
  --bg:        #0a0a09;
  --bg2:       #111110;
  --surface:   #161614;
  --border:    rgba(255,255,255,0.07);
  --gold:      #c9a96e;
  --gold-dim:  rgba(201,169,110,0.15);
  --cream:     #f0ece3;
  --text:      #d4cfc4;
  --muted:     rgba(212,207,196,0.45);
  --white:     #ffffff;
  --font-head: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Montserrat', sans-serif;
  --ease:      cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out:  cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; font-size: 16px; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-weight: 300;
  line-height: 1.7;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--gold); }
::selection { background: var(--gold); color: var(--bg); }

/* NAV */
#navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  height: 72px;
  transition: background 0.5s, border-color 0.5s;
  border-bottom: 1px solid transparent;
}
#navbar.scrolled {
  background: rgba(10,10,9,0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-color: var(--border);
}
.nav-logo {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: 0.25em;
  color: var(--white);
}
.nav-links { display: flex; gap: 2.5rem; list-style: none; }
.nav-links a {
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0;
  width: 0; height: 1px;
  background: var(--gold);
  transition: width 0.35s var(--ease);
}
.nav-links a:hover { color: var(--cream); }
.nav-links a:hover::after { width: 100%; }
.nav-lang {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--muted);
  cursor: pointer;
  transition: color 0.3s;
}
.nav-lang:hover { color: var(--gold); }
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav-toggle span {
  display: block;
  width: 22px; height: 1px;
  background: var(--cream);
  transition: transform 0.3s, opacity 0.3s;
}

/* MOBILE MENU */
.mobile-menu {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 99;
  background: rgba(10,10,9,0.97);
  backdrop-filter: blur(20px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s;
}
.mobile-menu.open { opacity: 1; pointer-events: all; }
.mobile-link {
  font-family: var(--font-head);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--cream);
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.3s;
}
.mobile-link:hover { color: var(--gold); }

/* HERO */
#hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 80% at 60% 40%, rgba(201,169,110,0.04) 0%, transparent 70%),
              radial-gradient(ellipse 40% 60% at 20% 70%, rgba(201,169,110,0.03) 0%, transparent 60%),
              var(--bg);
}
.hero-grain {
  position: absolute; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  background-size: 256px;
  opacity: 0.4;
  pointer-events: none;
}
.hero-lines {
  position: absolute; inset: 0;
  background-image: linear-gradient(90deg, var(--border) 1px, transparent 1px),
                    linear-gradient(var(--border) 1px, transparent 1px);
  background-size: 120px 120px;
  opacity: 0.3;
}
.hero-content {
  position: relative;
  text-align: center;
  z-index: 2;
  padding: 0 2rem;
}
.hero-eyebrow {
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 2rem;
}
.hero-title {
  font-family: var(--font-head);
  font-size: clamp(5rem, 12vw, 12rem);
  font-weight: 300;
  line-height: 0.9;
  color: var(--cream);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
}
.hero-title .italic { font-style: italic; color: var(--gold); }
.hero-divider {
  width: 1px; height: 60px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  margin: 0 auto 2.5rem;
}
.hero-sub {
  font-size: 0.82rem;
  font-weight: 300;
  color: var(--muted);
  letter-spacing: 0.04em;
  line-height: 2;
  max-width: 560px;
  margin: 0 auto 3rem;
}
.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--cream);
  text-decoration: none;
  transition: color 0.3s, gap 0.3s;
}
.hero-cta svg { width: 16px; height: 16px; transition: transform 0.4s var(--ease); }
.hero-cta:hover { color: var(--gold); gap: 1rem; }
.hero-cta:hover svg { transform: translateY(4px); }
.hero-scroll-hint { position: absolute; bottom: 3rem; left: 50%; transform: translateX(-50%); }
.scroll-line {
  width: 1px; height: 60px;
  background: linear-gradient(to bottom, transparent, var(--gold), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
  50% { opacity: 1; transform: scaleY(1); }
}

/* REVEAL */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out);
}
.reveal.visible { opacity: 1; transform: translateY(0); }

/* SECTIONS */
section { padding: 9rem 0; }
.section-inner { max-width: 1160px; margin: 0 auto; padding: 0 4rem; }
.section-label {
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 4rem;
}

/* ABOUT */
#about { background: var(--bg); border-top: 1px solid var(--border); }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start; }
.about-text h2 {
  font-family: var(--font-head);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 300;
  color: var(--cream);
  line-height: 1.35;
  margin-bottom: 1.8rem;
}
.about-text p { font-size: 0.85rem; color: var(--muted); line-height: 1.9; }
.about-stat-col { display: flex; flex-direction: column; gap: 3rem; padding-top: 0.5rem; }
.stat-block { border-left: 1px solid var(--gold); padding-left: 1.5rem; }
.stat-num {
  font-family: var(--font-head);
  font-size: 3.2rem;
  font-weight: 300;
  color: var(--cream);
  line-height: 1;
  margin-bottom: 0.4rem;
}
.stat-label { font-size: 0.7rem; letter-spacing: 0.1em; color: var(--muted); text-transform: uppercase; }

/* VALUE */
#value { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.value-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; background: var(--border); }
.value-card {
  background: var(--bg2);
  padding: 3.5rem 2.8rem;
  position: relative;
  overflow: hidden;
}
.value-card::before {
  content: '';
  position: absolute; inset: 0;
  background: var(--gold-dim);
  opacity: 0;
  transition: opacity 0.4s;
}
.value-card:hover::before { opacity: 1; }
.value-num {
  font-family: var(--font-head);
  font-size: 3rem;
  font-weight: 300;
  color: var(--border);
  line-height: 1;
  margin-bottom: 2rem;
  transition: color 0.4s;
}
.value-card:hover .value-num { color: var(--gold); }
.value-card h3 {
  font-family: var(--font-head);
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--cream);
  line-height: 1.3;
  margin-bottom: 1.2rem;
}
.value-card p { font-size: 0.78rem; color: var(--muted); line-height: 1.9; }
.value-line {
  position: absolute;
  bottom: 0; left: 0;
  height: 2px; width: 0;
  background: var(--gold);
  transition: width 0.6s var(--ease);
}
.value-card:hover .value-line { width: 100%; }

/* PEOPLE */
#people { background: var(--bg); }
.people-layout { display: grid; grid-template-columns: 3fr 2fr; gap: 6rem; align-items: center; }
.people-quote blockquote {
  font-family: var(--font-head);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 300;
  font-style: italic;
  color: var(--cream);
  line-height: 1.4;
  position: relative;
}
.people-quote blockquote::before {
  content: '\201C';
  font-size: 8rem;
  color: var(--gold);
  opacity: 0.2;
  position: absolute;
  top: -2.5rem; left: -1rem;
  line-height: 1;
  font-style: normal;
}
.people-text p {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 2;
  border-left: 1px solid var(--gold);
  padding-left: 1.5rem;
}

/* TEAM */
#team { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.team-layout { max-width: 780px; }
.team-card {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 4rem;
  position: relative;
}
.team-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px; height: 100%;
  background: linear-gradient(to bottom, var(--gold), transparent);
}
.team-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border);
}
.team-initials {
  width: 72px; height: 72px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-head);
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--gold);
  flex-shrink: 0;
  background: var(--gold-dim);
}
.team-role { font-size: 0.62rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.4rem; }
.team-name { font-family: var(--font-head); font-size: 2rem; font-weight: 400; color: var(--cream); line-height: 1; }
.team-bio p { font-size: 0.8rem; color: var(--muted); line-height: 2; margin-bottom: 1.2rem; }
.team-bio p:last-child { margin-bottom: 0; }
.team-tags { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border); }
.team-tags span {
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  border: 1px solid var(--border);
  padding: 0.35rem 0.8rem;
  transition: border-color 0.3s, color 0.3s;
}
.team-tags span:hover { border-color: var(--gold); color: var(--gold); }

/* PRESENCE */
#presence { background: var(--bg); }
.presence-text { margin-bottom: 4rem; }
.presence-text p {
  font-family: var(--font-head);
  font-size: clamp(1.3rem, 2.5vw, 1.9rem);
  font-weight: 300;
  color: var(--cream);
  line-height: 1.6;
}
.map-container {
  position: relative;
  width: 100%;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 2rem;
}
#worldMap { width: 100%; display: block; }
.map-legend { display: flex; gap: 2.5rem; margin-top: 1.5rem; justify-content: flex-end; }
.legend-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}
.legend-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--gold); }

/* CONTACT */
#contact { background: var(--bg2); border-top: 1px solid var(--border); }
.contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
.contact-left h2 {
  font-family: var(--font-head);
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  font-weight: 300;
  color: var(--cream);
  line-height: 1.4;
  margin-top: 2rem;
}
.contact-left em { color: var(--gold); font-style: italic; }
.contact-email {
  display: block;
  font-family: var(--font-head);
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  font-weight: 300;
  color: var(--cream);
  text-decoration: none;
  margin-bottom: 3rem;
  position: relative;
  width: fit-content;
  transition: color 0.3s;
}
.contact-email::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 1px;
  background: var(--gold);
  transition: width 0.4s var(--ease);
}
.contact-email:hover { color: var(--gold); }
.contact-email:hover::after { width: 100%; }
.contact-locations { display: flex; flex-direction: column; gap: 1.2rem; }
.contact-loc { display: flex; align-items: center; gap: 1rem; }
.loc-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--gold);
  flex-shrink: 0;
  animation: locPulse 2.5s ease-in-out infinite;
}
.contact-loc:nth-child(2) .loc-dot { animation-delay: 0.8s; }
@keyframes locPulse {
  0%, 100% { box-shadow: 0 0 6px rgba(201,169,110,0.3); }
  50% { box-shadow: 0 0 18px rgba(201,169,110,0.7); }
}
.loc-city { font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }

/* FOOTER */
footer { background: var(--bg); border-top: 1px solid var(--border); padding: 2.5rem 0; }
.footer-inner { max-width: 1160px; margin: 0 auto; padding: 0 4rem; display: flex; align-items: center; justify-content: space-between; }
.footer-logo { font-weight: 600; font-size: 0.85rem; letter-spacing: 0.25em; color: var(--muted); }
.footer-copy { font-size: 0.65rem; letter-spacing: 0.1em; color: rgba(212,207,196,0.25); }

.br-desk { display: inline; }

/* RESPONSIVE */
@media (max-width: 1024px) {
  .section-inner { padding: 0 2.5rem; }
  .about-grid { grid-template-columns: 1fr; gap: 4rem; }
  .about-stat-col { flex-direction: row; flex-wrap: wrap; gap: 2rem; }
  .value-grid { grid-template-columns: 1fr; gap: 0; }
  .people-layout { grid-template-columns: 1fr; gap: 3.5rem; }
  .contact-layout { grid-template-columns: 1fr; gap: 4rem; }
}
@media (max-width: 768px) {
  #navbar { padding: 0 1.5rem; }
  .nav-links, .nav-lang { display: none; }
  .nav-toggle { display: flex; }
  .mobile-menu { display: flex; }
  section { padding: 6rem 0; }
  .section-inner { padding: 0 1.5rem; }
  .section-label { margin-bottom: 2.5rem; }
  .hero-title { font-size: clamp(4rem, 16vw, 7rem); }
  .team-card { padding: 2.5rem; }
  .team-header { gap: 1.2rem; }
  .footer-inner { padding: 0 1.5rem; }
  .br-desk { display: none; }
}
3. script.js

javascript
/* NAV scroll */
(function () {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

/* Mobile menu */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.getElementById('mobileMenu');
  const links  = document.querySelectorAll('.mobile-link');
  let open = false;

  function setOpen(state) {
    open = state;
    menu.classList.toggle('open', open);
    const spans = toggle.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(6px) rotate(45deg)';
      spans[1].style.transform = 'translateY(-6px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.transform = '';
    }
  }

  toggle.addEventListener('click', () => setOpen(!open));
  links.forEach(l => l.addEventListener('click', () => setOpen(false)));
})();

/* Scroll reveal */
(function () {
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const siblings = Array.from(e.target.parentElement.querySelectorAll('.reveal:not(.visible)'));
        const idx = siblings.indexOf(e.target);
        setTimeout(() => e.target.classList.add('visible'), idx * 90);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
})();

/* Animated counters */
(function () {
  function animateCounter(el, target, suffix) {
    const start = performance.now();
    const duration = 1600;
    const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(ease(p) * target) + (suffix || '');
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target + (suffix || '');
    }
    requestAnimationFrame(tick);
  }

  const statNums = document.querySelectorAll('.stat-num');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = '1';
        const target = parseInt(e.target.dataset.target, 10);
        const suffix = target === 25 ? '+' : '';
        animateCounter(e.target, target, suffix);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => io.observe(el));
})();

/* Footer year */
document.getElementById('year').textContent = new Date().getFullYear();

/* World Map Canvas */
(function () {
  const canvas = document.getElementById('worldMap');
  if (!canvas) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const W_CSS = canvas.offsetWidth || 1100;
  const H_CSS = Math.round(W_CSS * 0.48);
  canvas.style.height = H_CSS + 'px';
  canvas.width  = W_CSS * dpr;
  canvas.height = H_CSS * dpr;

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  const W = W_CSS, H = H_CSS;

  function lon2x(lon) { return (lon + 180) / 360 * W; }
  function lat2y(lat) {
    const rad = lat * Math.PI / 180;
    const merc = Math.log(Math.tan(Math.PI / 4 + rad / 2));
    return H / 2 - merc * H / (2 * Math.PI) * 1.4 + H * 0.06;
  }

  const continents = [
    // NORTH AMERICA
    [[-168,71],[-141,61],[-130,55],[-125,49],[-120,34],[-117,28],[-105,20],[-87,16],
     [-83,10],[-78,8],[-75,10],[-65,18],[-62,16],[-59,13],[-63,10],[-75,12],
     [-82,9],[-87,16],[-90,15],[-92,18],[-85,23],[-80,25],[-81,30],[-75,35],
     [-70,43],[-65,44],[-55,47],[-53,54],[-60,58],[-65,62],[-68,68],[-80,73],
     [-95,76],[-110,75],[-130,71],[-148,71],[-168,71]],
    // GREENLAND
    [[-45,61],[-42,65],[-18,76],[-18,83],[-40,84],[-58,83],[-73,77],[-73,70],[-55,60],[-45,61]],
    // SOUTH AMERICA
    [[-80,8],[-77,3],[-70,-2],[-50,-2],[-35,-5],[-35,-10],[-40,-20],[-45,-23],[-48,-28],
     [-52,-33],[-58,-38],[-62,-41],[-65,-46],[-66,-52],[-68,-56],[-63,-55],[-58,-52],
     [-55,-46],[-50,-29],[-48,-20],[-40,-10],[-36,-3],[-40,3],[-52,5],[-60,5],[-67,8],
     [-77,8],[-80,8]],
    // EUROPE
    [[-10,36],[0,36],[5,36],[5,43],[0,43],[-5,44],[-2,48],[3,50],[8,53],[10,57],
     [16,58],[22,60],[25,65],[28,70],[20,70],[16,70],[14,58],[10,57],[5,53],[0,50],
     [5,47],[8,44],[3,44],[0,43],[-5,44],[-7,38],[-10,37],[-10,36]],
    // IBERIAN
    [[-9,37],[-7,37],[-5,36],[0,36],[3,42],[-2,44],[-7,44],[-9,39],[-9,37]],
    // BRITISH ISLES
    [[-5,50],[-2,50],[2,51],[-1,53],[-3,56],[-5,58],[-7,55],[-5,52],[-5,50]],
    // SCANDINAVIA
    [[4,57],[6,57],[8,58],[8,62],[14,64],[18,68],[26,70],[28,72],[20,74],[15,70],[14,65],[8,62],[5,57],[4,57]],
    // AFRICA
    [[-6,34],[0,30],[10,30],[25,30],[32,30],[37,22],[44,12],[50,12],[44,5],[38,-2],
     [35,-5],[35,-12],[32,-18],[28,-22],[32,-26],[28,-30],[18,-34],[14,-34],[14,-28],
     [10,-22],[8,-10],[2,-2],[0,4],[2,6],[10,6],[14,12],[10,16],[2,24],[-6,30],
     [-8,28],[-12,20],[-12,14],[-8,12],[-15,12],[-18,15],[-18,24],[-14,28],[-6,34]],
    // ASIA
    [[26,70],[30,73],[50,75],[80,76],[100,73],[120,72],[140,72],[160,68],
     [163,60],[155,55],[145,44],[135,35],[125,25],[120,20],[110,18],[105,10],
     [100,4],[95,5],[90,20],[80,24],[70,22],[62,22],[58,24],[55,30],[45,30],
     [40,35],[35,36],[30,36],[26,42],[28,46],[30,50],[36,54],[40,60],[50,66],
     [60,70],[70,72],[80,74],[100,73]],
    // INDIA
    [[68,22],[72,20],[76,8],[80,8],[84,14],[80,20],[74,24],[68,24],[68,22]],
    // JAPAN
    [[130,31],[132,33],[132,35],[136,36],[137,35],[136,33],[132,31],[130,31]],
    // AUSTRALIA
    [[114,-22],[116,-20],[122,-18],[128,-14],[130,-12],[135,-12],[136,-14],
     [138,-18],[140,-18],[142,-12],[148,-20],[152,-24],[154,-28],[152,-32],
     [148,-38],[144,-38],[138,-36],[132,-34],[126,-34],[118,-30],[114,-26],[114,-22]],
    // NEW ZEALAND
    [[170,-36],[172,-36],[174,-38],[172,-40],[170,-38],[170,-36]],
  ];

  function draw(progress) {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#161614';
    ctx.fillRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 0.5;
    for (let lat = -80; lat <= 80; lat += 30) {
      ctx.beginPath(); ctx.moveTo(0, lat2y(lat)); ctx.lineTo(W, lat2y(lat)); ctx.stroke();
    }
    for (let lon = -180; lon <= 180; lon += 60) {
      ctx.beginPath(); ctx.moveTo(lon2x(lon), 0); ctx.lineTo(lon2x(lon), H); ctx.stroke();
    }

    // Continents
    continents.forEach(shape => {
      ctx.beginPath();
      shape.forEach(([lon, lat], i) => {
        const x = lon2x(lon), y = lat2y(lat);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fillStyle = 'rgba(201,169,110,0.06)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(201,169,110,0.35)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
    });

    // Pins
    const pins = [
      { lon: -99.1, lat: 19.4, label: 'Mexico City' },
      { lon: -3.7,  lat: 40.4, label: 'Madrid' },
    ];

    pins.forEach(({ lon, lat, label }) => {
      const x = lon2x(lon), y = lat2y(lat);
      const pulse = (Date.now() % 2400) / 2400;
      const r = 6 + pulse * 18;
      const a = (1 - pulse) * 0.4 * progress;

      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(201,169,110,${a})`; ctx.lineWidth = 1; ctx.stroke();

      ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(201,169,110,${0.5 * progress})`; ctx.lineWidth = 1; ctx.stroke();

      ctx.beginPath(); ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,169,110,${progress})`; ctx.fill();

      ctx.font = '400 9px Montserrat, sans-serif';
      ctx.fillStyle = `rgba(201,169,110,${0.7 * progress})`;
      ctx.fillText(label.toUpperCase(), x + 11, y + 4);
    });
  }

  let startTime = null;
  const ENTRANCE = 1200;

  function loop(ts) {
    if (!startTime) startTime = ts;
    const p = Math.min((ts - startTime) / ENTRANCE, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    draw(ease);
    requestAnimationFrame(loop);
  }

  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { requestAnimationFrame(loop); io.disconnect(); }
  }, { threshold: 0.2 });
  io.observe(canvas);

  window.addEventListener('resize', () => {
    const nW = canvas.offsetWidth;
    const nH = Math.round(nW * 0.48);
    canvas.style.height = nH + 'px';
    canvas.width  = nW * dpr;
    canvas.height = nH * dpr;
    ctx.scale(dpr, dpr);
  }, { passive: true });
})();
Sube los 3 archivos a la raíz de tu repo bertarex/becrex y listo. Si ya tienes archivos con esos nombres, simplemente reemplázalos.

it says that their is a failure when trying to update the index.gthml

5 Jun
¿Puedes darme más detalle del error? Pero lo más probable es una de estas cosas:

Si el error es en GitHub al hacer push/upload:

El archivo se llama index.html (con .html), no index.gthml — asegúrate de que el nombre esté bien escrito al subirlo.

Si estás subiendo desde la web de GitHub (drag & drop o "Add file"):

Ve a tu repo bertarex/becrex
Haz clic en "Add file" → "Upload files"
Arrastra los 3 archivos (index.html, style.css, script.js)
Abajo escribe un mensaje de commit y dale a "Commit changes"
Si ya tenías un index.html y estás intentando editarlo en el editor de GitHub:

Abre el archivo en el repo
Haz clic en el lápiz ✏️ (Edit)
Selecciona todo el contenido (Ctrl+A) y bórralo
Pega el nuevo código
Haz clic en "Commit changes" arriba a la derecha
¿Cuál de estos casos es el tuyo, o qué mensaje de error exacto te aparece?

Some checks were not successful
3 cancelled checks

pages build and deployment / build (dynamic) Cancelled after 18s[Details](https://github.com/bertarex/becrex/actions/runs/26955330969/job/79530924226)
pages build and deployment / deploy (dynamic)[Details](https://github.com/bertarex/becrex/actions/runs/26955330969/job/79530990095)
pages build and deployment / report-build-status (dynamic)[Details](https://github.com/bertarex/becrex/actions/runs/26955330969/job/79530990938)
Show more
5 Jun
Ese error no es del código — es un problema de configuración de GitHub Pages. Sigue estos pasos:

1. Ve a Settings de tu repo
github.com/bertarex/becrex → pestaña Settings

2. En el menú izquierdo busca "Pages"

3. En "Source" cambia a "Deploy from a branch"

Branch: main (o master si se llama así)
Folder: / (root)
Guarda
4. Espera 2-3 minutos y visita:
https://bertarex.github.io/becrex

El error "dynamic" que ves significa que GitHub está intentando usar Actions para desplegar en lugar del método clásico por rama, que es lo que necesitas para un site estático simple con index.html.

¿Ves la opción "Deploy from a branch" en Settings → Pages?

hay un probelam ey es que no se ve como lo habias hecho tu no se ve el mapa el menu esta roto no se ve profesional tambien me gustaria quitar teams ya que es solo una persona porfavro lo tiene squ ehcaer ver my porofesional y elegante no asi BECREX
[About Us](https://bertarex.github.io/becrex/#about) [Value](https://bertarex.github.io/becrex/#value) [People](https://bertarex.github.io/becrex/#people) [Team](https://bertarex.github.io/becrex/#team) [Contact](https://bertarex.github.io/becrex/#contact) ES
DEEP EXPERTISE
Strategic Insight
Across industries, investors, owners, and management teams face increasing complexity—evolving customer expectations, rising operational pressures, volatile capital markets, and a dynamic competitive landscape.
We help clients cut through that complexity with clarity and precision.
Our high-impact advisory empowers better strategic decisions — creating real value through performance improvement, capital structure optimization, and sensible, actionable roadmaps that strengthen long-term resilience and unlock the full potential of each asset.
01
About Us
BECREX advises investors, owners, and management teams facing complex situations, consequential decisions, and moments where clarity matters.
We combine deep expertise, strategic judgment, and practical execution to help clients move from complexity to action.
02
Value
Performance Improvement
We identify practical levers to improve operating performance, strengthen resilience, and unlock value.
Capital Structure Optimization
We help evaluate capital alternatives with discipline, clarity, and long-term perspective.
Strategic Roadmaps
We translate complexity into sensible, actionable plans aligned with the full potential of each asset.
03
People
Every engagement is led with senior attention, discretion, and a direct understanding of what is at stake.
We stay close to the people, the asset, and the decision-making process from diagnosis to execution.
04
Team
FOUNDER
Domingo Rex
Senior financial advisor and strategic practitioner with over 25 years of experience across banking, credit, and investment advisory in Europe and Latin America. He has advised financial institutions, funds, and corporate clients on complex transactions, particularly within the hospitality, real estate, and special situations sectors.
Previously, Domingo held senior roles at Banco CAM, including Managing Director and Country Head in Mexico, where he managed a tourism-focused credit portfolio of nearly $2 billion. He also advised major Spanish banks such as CaixaBank and Bankia during their strategic divestments in Mexico, accelerating execution while preserving shareholder value.
His advisory experience includes supporting private investors such as Rodina, guiding and executing its initial hospitality investments, as well as assisting banks and institutional clients in tourism and real estate transactions across Mexico and the Caribbean. He is known for his technical expertise, regional insight, honesty, and consistent delivery.
Domingo partners with investors, institutions, and operators to assess opportunities, structure complex deals, and create lasting value across evolving markets.
05
Presence
Mexico
Spain
Operating across Mexico and Spain, supporting investors, owners and management teams on both sides of the Atlantic.
Most important decisions don't come with perfect information.
That's usually where the conversation starts.
[domingo@becrex.com](mailto:domingo@becrex.com)
BECREX · Mexico & Spain

Show more
5 Jun
Veo el problema — el CSS y JS no se están cargando bien. Voy a darte los 3 archivos completamente rehechos, todo en uno si hace falta para que no falle nada.

El problema principal es que probablemente el style.css y script.js no se encuentran. Vamos a solucionarlo poniendo todo en un solo index.html (CSS y JS embebidos), así no hay dependencias externas que fallen.

También quito la sección Team y la integro elegantemente en People, y rehago el mapa.


Ran a command, created a file, read a file
Ran a command, created a file, read a file
Esta vez es un solo archivo index.html — todo el CSS y JavaScript va embebido dentro, así no hay ninguna dependencia externa que pueda fallar en GitHub Pages.

Qué cambia:

Team eliminado — Domingo Rex aparece integrado elegantemente dentro de la sección People, con su card a la derecha de la cita
El mapa ahora se inicializa correctamente calculando el tamaño del contenedor real
Navegación: About / Value / People / Presence / Contact (sin Team)
Numeración actualizada: 01 About · 02 Value · 03 People · 04 Presence
Para subir a GitHub:

Abre tu repo bertarex/becrex
Haz clic en index.html → lápiz ✏️ para editar
Selecciona todo (Ctrl+A) → pega el contenido del archivo
Commit changes
Ya no necesitas style.css ni script.js — puedes borrarlos del repo si los tienes.


Index
Code · HTML 
[about us](https://www.becrex.com/)

[Value](https://www.becrex.com/servicios)

[People ](https://www.becrex.com/press-york)

[Team](https://www.becrex.com/new-page-1)

[Contact](https://www.becrex.com/contact-york)
[BECREX](https://www.becrex.com/)
contact
We understand the weight of strategic decisions because we’ve made them.
That experience shapes how we think, how we advise, and how we stay close to what matters.
Every engagement is led by us — discreetly, directly, and with purpose.
[ domingo@becrex.com](mailto:domingo@becrex.com)[about us](https://www.becrex.com/)

[Value](https://www.becrex.com/servicios)

[People ](https://www.becrex.com/press-york)

[Team](https://www.becrex.com/new-page-1)

[Contact](https://www.becrex.com/contact-york)
[BECREX](https://www.becrex.com/)
Deep Expertise
Strategic Insight
Across industries, investors, owners, and management teams face increasing complexity—evolving customer expectations, rising operational pressures, volatile capital markets, and a dynamic competitive landscape.
We help clients cut through that complexity with clarity and precision.
Our high-impact advisory empowers better strategic decisions —creating real value through performance improvement, capital structure optimization, and sensible, actionable roadmaps that strengthen long-term resilience and unlock the full potential of each asset.[about us](https://www.becrex.com/)

[Value](https://www.becrex.com/servicios)

[People ](https://www.becrex.com/press-york)

[Team](https://www.becrex.com/new-page-1)

[Contact](https://www.becrex.com/contact-york)
[BECREX](https://www.becrex.com/)
Where We Create Value
Investment Strategy— 
Helping guide capital deployment, divestment, and repositioning decisions—grounded in asset-level insight, market intelligence, and strategic support throughout critical negotiations.

Capital Structure —
Structuring financial architecture that enhances resilience, preserves flexibility, and maximizes value across the capital stack.

Strategic Alignment —
Providing senior-level guidance to align stakeholders and support value creation when strategic repositioning or renewed focus is required.

Asset Performance — 
Enhancing portfolio asset performance across the investment lifecycle—aligning profitability with long-term strategic goals and value-creation plans.[about us](https://www.becrex.com/)

[Value](https://www.becrex.com/servicios)

[People ](https://www.becrex.com/press-york)

[Team](https://www.becrex.com/new-page-1)

[Contact](https://www.becrex.com/contact-york)
[BECREX](https://www.becrex.com/)
Who We Work With
We advise institutional investors, family offices, and credit providers on strategic exposure across target sectors—from underwriting and target selection to capital structuring, management alignment, and portfolio management. Whether equity or debt, our work focuses on protecting downside, identifying upside, and ensuring strategic clarity across every decision and transaction.
We support asset owners and boards in enhancing long-term value, navigating complex decisions, and aligning stakeholders—from performance oversight to capital planning, repositioning strategy, and pre- and post-deal execution.[about us](https://www.becrex.com/)

[Value](https://www.becrex.com/servicios)

[People ](https://www.becrex.com/press-york)

[Team](https://www.becrex.com/new-page-1)

[Contact](https://www.becrex.com/contact-york)
[BECREX](https://www.becrex.com/)
domingo rex
Senior financial advisor and strategic practitioner with over 25 years of experience across banking, credit, and investment advisory in Europe and Latin America. He has advised financial institutions, funds, and corporate clients on complex transactions, particularly within the hospitality, real estate, and special situations sectors.
Previously, Domingo held senior roles at Banco CAM, including Managing Director and Country Head in Mexico, where he managed a tourism-focused credit portfolio of nearly $2 billion. He also advised major Spanish banks such as CaixaBank and Bankia during their strategic divestments in Mexico, accelerating execution while preserving shareholder value.
His advisory experience includes supporting private investors such as Rodina, guiding and executing its initial hospitality investments, as well as assisting banks and institutional clients in tourism and real estate transactions across Mexico and the Caribbean. He is known for his technical expertise, regional insight, honesty, and consistent delivery.
Domingo partners with investors, institutions, and operators to assess opportunities, structure complex deals, and create lasting value across evolving markets. vale es impornate que quites los slogans barataos que inclueyas lo que crees releavente de la pagina web amterior que es la que te acabo de poner y tmabien qque me divas como puedo cambair el domian de la anetrio a esta

Show more
5 Jun
Perfecto, veo la web actual de becrex.com. Voy a integrar el contenido actualizado, quitar todos los slogans baratos, y dejarlo limpio y serio.


Ran a command, created a file, read a file
Ran a command, created a file, read a file
Aquí tienes el archivo. Lo que cambié respecto a antes:

Contenido actualizado de becrex.com:

Hero limpio — solo el nombre y una línea, sin slogans
About integra el texto de la página de contacto actual ("We understand the weight of strategic decisions...")
Value ahora son los 4 pilares reales: Investment Strategy, Capital Structure, Strategic Alignment, Asset Performance
Nueva sección "Who We Work With" con los dos perfiles: Investors & Credit Providers / Asset Owners & Boards
People mantiene la cita + la card de Domingo Rex
Para cambiar el dominio de becrex.com a bertarex.github.io/becrex:

Tienes dos opciones. La más sencilla es al revés — apuntar becrex.com a GitHub Pages:

En tu proveedor de dominio (donde compraste becrex.com — GoDaddy, Namecheap, etc.), ve a la configuración DNS y añade estos registros:
Tipo A → 185.199.108.153
Tipo A → 185.199.109.153
Tipo A → 185.199.110.153
Tipo A → 185.199.111.153
Tipo CNAME → www → bertarex.github.io
En tu repo de GitHub → Settings → Pages → Custom domain → escribe becrex.com → guarda
En 24-48h becrex.com apuntará directamente a tu página de GitHub. GitHub también activa HTTPS automáticamente.
¿Dónde compraste el dominio, en Wix, GoDaddy, u otro sitio?


Index
Code · HTML 
vale en contant solamenet pon el conatanto quita lo de that where the conevrsation start tmb te falta hacerlo para que se pueda traducir ya que ahora mismo no fonciona tambien dime como cuardo esta pagina webb

5 Jun
Voy a actualizar el contacto y añadir traducción ES/EN funcional.


Ran a command, created a file
Ran a command, created a file

Remove old file

Script

BECREX with working ES/EN translation and clean contact section
index.html
Done
tengo un dominio en squared sapaque colo lo cambiao a esta pagina

10:16
Para apuntar tu dominio de Squarespace a GitHub Pages:

1. En GitHub — añade el dominio

Ve a tu repo bertarex/becrex → Settings → Pages → Custom domain → escribe becrex.com → guarda. GitHub creará un archivo CNAME automáticamente.

2. En Squarespace — cambia los DNS

Entra en tu cuenta de Squarespace
Ve a Domains → becrex.com → DNS Settings
Borra los registros A y CNAME que existan
Añade estos registros nuevos:
Tipo	Host	Valor
A	@	185.199.108.153
A	@	185.199.109.153
A	@	185.199.110.153
A	@	185.199.111.153
CNAME	www	bertarex.github.io
3. Espera

Los DNS tardan entre 30 minutos y 48 horas en propagarse. Cuando funcione, becrex.com cargará tu página de GitHub y HTTPS se activa solo.

Un problema habitual con Squarespace: a veces no dejan editar los DNS directamente si el dominio está conectado a un sitio Squarespace activo. En ese caso primero tienes que ir a Pages → Not Linked o desconectar el dominio del sitio Squarespace antes de poder cambiar los DNS.

¿Tienes el dominio conectado a un sitio Squarespace activo ahora mismo?

a ver  el primer porblam es que  la pagiuna web desde github no se ve como la veo ahora misma a mi derecha

10:18
Puedo ver la preview a tu derecha. ¿Puedes decirme exactamente qué se ve mal en GitHub? Por ejemplo:

¿Se ve sin estilos (texto plano, sin colores)?
¿El mapa no aparece?
¿Las fuentes no cargan?
¿Alguna sección específica rota?
Lo más probable es una de estas dos causas:

Causa 1 — El archivo no se subió bien
Ve a github.com/bertarex/becrex y confirma que el index.html que está ahí es el último que te di. Haz clic en el archivo y mira si ves el código con Cormorant Garamond, --gold:#c9a96e, etc. al principio.

Causa 2 — GitHub Pages no está apuntando al archivo correcto
Ve a Settings → Pages y confirma que dice:

Source: Deploy from a branch
Branch: main (o master)
Folder: / (root)
Dime qué ves exactamente y lo resolvemos.

a ver ayudame primero con todos lod files de becrex

10:18
Necesito ver exactamente qué archivos tienes en el repo ahora mismo. ¿Puedes ir a github.com/bertarex/becrex y decirme qué archivos aparecen en la lista? Por ejemplo:

index.html
style.css
script.js
CNAME
otros...
O mejor aún, pega aquí el contenido actual de tu index.html (abre el archivo en GitHub, haz clic en "Raw" y copia todo) para que vea exactamente qué versión tienes subida y por qué no coincide con la preview.

damelos perfectos doble check cada uno

10:19
Dame un segundo, voy a revisar todo al detalle antes de darte los archivos.


Created 3 files, ran a command
Created 3 files, ran a command
Ahora verifico que todo está correcto antes de dártelos:


Verify all references and keys match
Verify all references and keys match
Todo cuadra perfectamente — cada clave data-i18n del HTML existe en el JS, tanto en EN como en ES. Cero errores.


Presented 3 files
Presented 3 files
Los 3 archivos verificados y listos. Sube exactamente estos 3 al repo — ni más ni menos:

Cómo subirlos a GitHub correctamente:

Ve a github.com/bertarex/becrex
Si ya tienes archivos antiguos, bórralos primero (entra en cada archivo → los tres puntos ··· → Delete)
Haz clic en Add file → Upload files
Arrastra los 3 archivos a la vez: index.html, style.css, script.js
Escribe "Update site" como mensaje y haz Commit changes
Los 3 tienen que estar en la raíz del repo (no dentro de ninguna carpeta). En 1-2 minutos verás la web actualizada en bertarex.github.io/becrex.


Index
Code · HTML 

Style
Code · CSS 

Script
JS 

You've used 90% of your session limit
Claude Fable 5 is currently unavailable.
Learn more(opens in new tab)




Claude is AI and can make mistakes. Please double-check responses.
Script · JS
/* ============================================================
   BECREX — script.js
   ============================================================ */
 
/* ── TRANSLATIONS ── */
const i18n = {
  en: {
    "nav.about":      "About",
    "nav.value":      "Value",
    "nav.who":        "Who We Work With",
    "nav.people":     "People",
    "nav.contact":    "Contact",
    "hero.eyebrow":   "Strategic Advisory · Mexico & Spain",
    "hero.sub":       "We advise investors, owners, and management teams on complex decisions — combining deep expertise with practical execution.",
    "hero.cta":       "Learn more",
    "about.label":    "01 — About",
    "about.h2":       "We advise investors, owners, and management teams facing complex situations, consequential decisions, and moments where clarity matters.",
    "about.p1":       "We combine deep expertise, strategic judgment, and practical execution to help clients move from complexity to action.",
    "about.p2":       "We understand the weight of strategic decisions because we have made them. That experience shapes how we think, how we advise, and how we stay close to what matters. Every engagement is led by us — discreetly, directly, and with purpose.",
    "about.stat1":    "Years of experience",
    "about.stat2":    "Credit portfolio managed",
    "about.stat3":    "Markets — Mexico & Spain",
    "value.label":    "02 — Where We Create Value",
    "value.t1":       "Investment Strategy",
    "value.p1":       "Helping guide capital deployment, divestment, and repositioning decisions — grounded in asset-level insight, market intelligence, and strategic support throughout critical negotiations.",
    "value.t2":       "Capital Structure",
    "value.p2":       "Structuring financial architecture that enhances resilience, preserves flexibility, and maximizes value across the capital stack.",
    "value.t3":       "Strategic Alignment",
    "value.p3":       "Providing senior-level guidance to align stakeholders and support value creation when strategic repositioning or renewed focus is required.",
    "value.t4":       "Asset Performance",
    "value.p4":       "Enhancing portfolio asset performance across the investment lifecycle — aligning profitability with long-term strategic goals and value-creation plans.",
    "who.label":      "03 — Who We Work With",
    "who.t1":         "Investors & Credit Providers",
    "who.p1":         "We advise institutional investors, family offices, and credit providers on strategic exposure across target sectors — from underwriting and target selection to capital structuring, management alignment, and portfolio management. Whether equity or debt, our work focuses on protecting downside, identifying upside, and ensuring strategic clarity across every decision and transaction.",
    "who.t2":         "Asset Owners & Boards",
    "who.p2":         "We support asset owners and boards in enhancing long-term value, navigating complex decisions, and aligning stakeholders — from performance oversight to capital planning, repositioning strategy, and pre- and post-deal execution.",
    "people.label":   "04 — People",
    "people.quote":   "Every engagement is led with senior attention, discretion, and a direct understanding of what is at stake.",
    "people.sub":     "We stay close to the people, the asset, and the decision-making process — from diagnosis to execution. No hand-offs. No dilution of expertise.",
    "people.role":    "Founder",
    "people.bio1":    "Senior financial advisor and strategic practitioner with over 25 years of experience across banking, credit, and investment advisory in Europe and Latin America, with a focus on complex transactions in hospitality, real estate, and special situations.",
    "people.bio2":    "Previously held senior roles at Banco CAM, including Managing Director and Country Head in Mexico, managing a tourism-focused credit portfolio of nearly $2 billion. Advised CaixaBank and Bankia during their strategic divestments in Mexico, accelerating execution while preserving shareholder value.",
    "people.bio3":    "Known for technical expertise, regional insight, and consistent delivery across investors, institutions, and operators on both sides of the Atlantic.",
    "presence.label": "05 — Presence",
    "presence.text":  "Operating across Mexico and Spain, supporting investors, owners and management teams on both sides of the Atlantic.",
    "contact.h2":     "Get in touch",
    "contact.loc1":   "Mexico",
    "contact.loc2":   "Spain"
  },
  es: {
    "nav.about":      "Nosotros",
    "nav.value":      "Valor",
    "nav.who":        "Con Quién Trabajamos",
    "nav.people":     "Equipo",
    "nav.contact":    "Contacto",
    "hero.eyebrow":   "Asesoría Estratégica · México y España",
    "hero.sub":       "Asesoramos a inversores, propietarios y equipos directivos en decisiones complejas, combinando experiencia profunda con ejecución práctica.",
    "hero.cta":       "Más información",
    "about.label":    "01 — Nosotros",
    "about.h2":       "Asesoramos a inversores, propietarios y equipos directivos que enfrentan situaciones complejas, decisiones trascendentes y momentos en los que la claridad es fundamental.",
    "about.p1":       "Combinamos experiencia profunda, criterio estratégico y ejecución práctica para ayudar a nuestros clientes a pasar de la complejidad a la acción.",
    "about.p2":       "Entendemos el peso de las decisiones estratégicas porque las hemos tomado. Esa experiencia define cómo pensamos, cómo asesoramos y cómo permanecemos cerca de lo que importa. Cada mandato es liderado por nosotros — con discreción, rigor y propósito.",
    "about.stat1":    "Años de experiencia",
    "about.stat2":    "Cartera de crédito gestionada",
    "about.stat3":    "Mercados — México y España",
    "value.label":    "02 — Dónde Creamos Valor",
    "value.t1":       "Estrategia de Inversión",
    "value.p1":       "Orientamos decisiones de despliegue de capital, desinversión y reposicionamiento — con base en el conocimiento del activo, inteligencia de mercado y apoyo estratégico en negociaciones críticas.",
    "value.t2":       "Estructura de Capital",
    "value.p2":       "Diseñamos arquitecturas financieras que refuerzan la resiliencia, preservan la flexibilidad y maximizan el valor en toda la estructura de capital.",
    "value.t3":       "Alineación Estratégica",
    "value.p3":       "Aportamos orientación de alto nivel para alinear a los grupos de interés y apoyar la creación de valor cuando se requiere reposicionamiento o un nuevo enfoque estratégico.",
    "value.t4":       "Rendimiento del Activo",
    "value.p4":       "Mejoramos el rendimiento de los activos en cartera a lo largo del ciclo de inversión, alineando rentabilidad con objetivos estratégicos y planes de creación de valor.",
    "who.label":      "03 — Con Quién Trabajamos",
    "who.t1":         "Inversores y Proveedores de Capital",
    "who.p1":         "Asesoramos a inversores institucionales, family offices y proveedores de crédito sobre exposición estratégica en sectores objetivo — desde el análisis y la selección de activos hasta la estructuración del capital, la alineación directiva y la gestión de cartera. Tanto en equity como en deuda, nuestro trabajo se centra en proteger el riesgo bajista, identificar el potencial alcista y garantizar claridad estratégica en cada decisión.",
    "who.t2":         "Propietarios de Activos y Consejos",
    "who.p2":         "Apoyamos a propietarios de activos y órganos de gobierno en la creación de valor a largo plazo, la gestión de decisiones complejas y la alineación de grupos de interés — desde la supervisión operativa hasta la planificación de capital, el reposicionamiento y la ejecución pre y post transacción.",
    "people.label":   "04 — Equipo",
    "people.quote":   "Cada mandato es liderado con atención directiva, discreción y comprensión directa de lo que está en juego.",
    "people.sub":     "Permanecemos cerca de las personas, el activo y el proceso de toma de decisiones — desde el diagnóstico hasta la ejecución. Sin delegaciones. Sin dilución de experiencia.",
    "people.role":    "Fundador",
    "people.bio1":    "Asesor financiero senior y profesional estratégico con más de 25 años de experiencia en banca, crédito y asesoría de inversión en Europa y Latinoamérica, con foco en transacciones complejas en los sectores de hotelería, inmobiliario y situaciones especiales.",
    "people.bio2":    "Ocupó cargos directivos en Banco CAM, incluyendo Director General y Country Head en México, gestionando una cartera de crédito turístico de casi 2.000 millones de dólares. Asesoró a CaixaBank y Bankia en sus desinversiones estratégicas en México, acelerando la ejecución y preservando el valor para el accionista.",
    "people.bio3":    "Reconocido por su expertise técnico, conocimiento regional y capacidad de ejecución consistente entre inversores, instituciones y operadores a ambos lados del Atlántico.",
    "presence.label": "05 — Presencia",
    "presence.text":  "Operamos en México y España, apoyando a inversores, propietarios y equipos directivos en ambos lados del Atlántico.",
    "contact.h2":     "Contacto",
    "contact.loc1":   "México",
    "contact.loc2":   "España"
  }
};
 
let currentLang = 'en';
 
function applyLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) {
      el.textContent = i18n[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn, .mlang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.documentElement.lang = lang;
}
 
document.querySelectorAll('.lang-btn, .mlang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
});
 
/* ── NAV scroll ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('s', window.scrollY > 40);
}, { passive: true });
 
/* ── Mobile menu ── */
const nbtn = document.querySelector('.nbtn');
const mm   = document.getElementById('mmenu');
let menuOpen = false;
 
function toggleMenu(state) {
  menuOpen = state;
  mm.classList.toggle('open', state);
  const spans = nbtn.querySelectorAll('span');
  spans[0].style.transform = state ? 'translateY(6px) rotate(45deg)'  : '';
  spans[1].style.transform = state ? 'translateY(-6px) rotate(-45deg)' : '';
}
 
nbtn.addEventListener('click', () => toggleMenu(!menuOpen));
document.querySelectorAll('.mlink').forEach(l => {
  l.addEventListener('click', () => toggleMenu(false));
});
 
/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const siblings = Array.from(
        e.target.parentElement.querySelectorAll('.r:not(.v)')
      );
      const idx = siblings.indexOf(e.target);
      setTimeout(() => e.target.classList.add('v'), idx * 85);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
 
document.querySelectorAll('.r').forEach(el => revealObserver.observe(el));
 
/* ── Animated counters ── */
function animateCounter(el, target, suffix) {
  const startTime = performance.now();
  const duration  = 1500;
  const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
 
  function tick(now) {
    const p = Math.min((now - startTime) / duration, 1);
    el.textContent = Math.round(ease(p) * target) + (suffix || '');
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target + (suffix || '');
  }
  requestAnimationFrame(tick);
}
 
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.done) {
      e.target.dataset.done = '1';
      const target = parseInt(e.target.dataset.target, 10);
      const suffix = (e.target.dataset.suffix || '') + (target === 25 ? '+' : '');
      animateCounter(e.target, target, suffix);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
 
document.querySelectorAll('.anum').forEach(el => counterObserver.observe(el));
 
/* ── Footer year ── */
document.getElementById('yr').textContent = new Date().getFullYear();
 
/* ── World Map (Canvas) ── */
(function () {
  const cv = document.getElementById('wmap');
  if (!cv) return;
 
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
 
  function initCanvas() {
    const W = cv.parentElement.clientWidth - 64;
    const H = Math.round(W * 0.44);
    cv.style.width  = W + 'px';
    cv.style.height = H + 'px';
    cv.width  = W * dpr;
    cv.height = H * dpr;
    return { W, H };
  }
 
  let dims = initCanvas();
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
 
  function lon2x(lon, W) { return (lon + 180) / 360 * W; }
  function lat2y(lat, W, H) {
    const rad  = lat * Math.PI / 180;
    const merc = Math.log(Math.tan(Math.PI / 4 + rad / 2));
    return H / 2 - merc * H / (2 * Math.PI) * 1.36 + H * 0.05;
  }
 
  const shapes = [
    // North America
    [[-168,71],[-141,61],[-130,55],[-125,49],[-120,34],[-117,28],[-105,20],[-87,16],
     [-83,10],[-78,8],[-75,10],[-65,18],[-62,16],[-59,13],[-63,10],[-75,12],[-82,9],
     [-87,16],[-90,15],[-92,18],[-85,23],[-80,25],[-81,30],[-75,35],[-70,43],[-65,44],
     [-55,47],[-53,54],[-60,58],[-65,62],[-68,68],[-80,73],[-95,76],[-110,75],
     [-130,71],[-148,71],[-168,71]],
    // Greenland
    [[-45,61],[-42,65],[-20,76],[-18,83],[-40,84],[-58,83],[-73,77],[-73,70],[-55,60],[-45,61]],
    // South America
    [[-80,8],[-77,3],[-70,-2],[-50,-2],[-35,-5],[-35,-10],[-40,-20],[-45,-23],[-48,-28],
     [-52,-33],[-58,-38],[-62,-41],[-65,-46],[-66,-52],[-68,-56],[-63,-55],[-58,-52],
     [-55,-46],[-50,-29],[-48,-20],[-40,-10],[-36,-3],[-40,3],[-52,5],[-60,5],[-67,8],
     [-77,8],[-80,8]],
    // Europe
    [[-10,36],[0,36],[5,36],[5,43],[0,43],[-5,44],[-2,48],[3,50],[8,53],[10,57],
     [16,58],[22,60],[25,65],[28,70],[20,70],[16,70],[14,58],[10,57],[5,53],[0,50],
     [5,47],[8,44],[3,44],[0,43],[-5,44],[-7,38],[-10,37],[-10,36]],
    // Iberia
    [[-9,37],[-7,37],[-5,36],[0,36],[3,42],[-2,44],[-7,44],[-9,39],[-9,37]],
    // Scandinavia
    [[4,57],[6,57],[8,58],[8,62],[14,64],[18,68],[26,70],[28,72],[20,74],[15,70],
     [14,65],[8,62],[5,57],[4,57]],
    // Africa
    [[-6,34],[0,30],[10,30],[25,30],[32,30],[37,22],[44,12],[50,12],[44,5],[38,-2],
     [35,-5],[35,-12],[32,-18],[28,-22],[32,-26],[28,-30],[18,-34],[14,-34],[14,-28],
     [10,-22],[8,-10],[2,-2],[0,4],[2,6],[10,6],[14,12],[10,16],[2,24],[-6,30],
     [-8,28],[-12,20],[-12,14],[-8,12],[-15,12],[-18,15],[-18,24],[-14,28],[-6,34]],
    // Asia
    [[26,70],[30,73],[50,75],[80,76],[100,73],[120,72],[140,72],[160,68],[163,60],
     [155,55],[145,44],[135,35],[125,25],[120,20],[110,18],[105,10],[100,4],[95,5],
     [90,20],[80,24],[70,22],[62,22],[58,24],[55,30],[45,30],[40,35],[35,36],[30,36],
     [26,42],[28,46],[30,50],[36,54],[40,60],[50,66],[60,70],[70,72],[80,74],[100,73]],
    // India
    [[68,22],[72,20],[76,8],[80,8],[84,14],[80,20],[74,24],[68,24],[68,22]],
    // Australia
    [[114,-22],[116,-20],[122,-18],[128,-14],[130,-12],[135,-12],[136,-14],[138,-18],
     [140,-18],[142,-12],[148,-20],[152,-24],[154,-28],[152,-32],[148,-38],[144,-38],
     [138,-36],[132,-34],[126,-34],[118,-30],[114,-26],[114,-22]]
  ];
 
  const pins = [
    { lon: -99.1, lat: 19.4, label: 'Mexico City' },
    { lon: -3.7,  lat: 40.4, label: 'Madrid' }
  ];
 
  function draw(progress) {
    const { W, H } = dims;
    ctx.clearRect(0, 0, W, H);
 
    // Background
    ctx.fillStyle = '#131311';
    ctx.fillRect(0, 0, W, H);
 
    // Grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.025)';
    ctx.lineWidth = 0.5;
    for (let lat = -60; lat <= 60; lat += 30) {
      ctx.beginPath();
      ctx.moveTo(0, lat2y(lat, W, H));
      ctx.lineTo(W, lat2y(lat, W, H));
      ctx.stroke();
    }
    for (let lon = -120; lon <= 120; lon += 60) {
      ctx.beginPath();
      ctx.moveTo(lon2x(lon, W), 0);
      ctx.lineTo(lon2x(lon, W), H);
      ctx.stroke();
    }
 
    // Continents
    shapes.forEach(shape => {
      ctx.beginPath();
      shape.forEach(([lo, la], i) => {
        const x = lon2x(lo, W);
        const y = lat2y(la, W, H);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fillStyle   = 'rgba(201,169,110,0.05)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(201,169,110,0.30)';
      ctx.lineWidth   = 0.7;
      ctx.stroke();
    });
 
    // Pins
    pins.forEach(({ lon, lat, label }) => {
      const x = lon2x(lon, W);
      const y = lat2y(lat, W, H);
      const pulse = (Date.now() % 2600) / 2600;
      const ringR = 4 + pulse * 16;
      const ringA = (1 - pulse) * 0.35 * progress;
 
      // Pulse ring
      ctx.beginPath();
      ctx.arc(x, y, ringR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(201,169,110,${ringA})`;
      ctx.lineWidth   = 1;
      ctx.stroke();
 
      // Static ring
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(201,169,110,${0.42 * progress})`;
      ctx.lineWidth   = 1;
      ctx.stroke();
 
      // Dot
      ctx.beginPath();
      ctx.arc(x, y, 2.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,169,110,${progress})`;
      ctx.fill();
 
      // Label
      const fontSize = Math.max(7, W * 0.0068);
      ctx.font      = `300 ${fontSize}px Montserrat, sans-serif`;
      ctx.fillStyle = `rgba(201,169,110,${0.62 * progress})`;
      ctx.fillText(label.toUpperCase(), x + 9, y + 3.5);
    });
  }
 
  let started = false;
  let t0 = null;
 
  function loop(ts) {
    if (!t0) t0 = ts;
    const p    = Math.min((ts - t0) / 1400, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    draw(ease);
    requestAnimationFrame(loop);
  }
 
  const mapObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      requestAnimationFrame(loop);
      mapObserver.disconnect();
    }
  }, { threshold: 0.1 });
 
  mapObserver.observe(cv);
 
  window.addEventListener('resize', () => {
    dims = initCanvas();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }, { passive: true });
 
})();
 

         
