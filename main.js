@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&family=Fraunces:ital,wght@0,300;0,400;0,500;1,300&display=swap');

:root {
  --teal: #0891b2; --teal-dark: #0e7490; --teal-deeper: #155e75;
  --navy: #0c447c; --navy-light: #185fa5;
  --sky: #e6f1fb; --sky-mid: #b5d4f4; --sky-soft: #f0f8fe;
  --text-primary: #0d1f2d; --text-secondary: #3a5a7a; --text-muted: #7a9ab8;
  --border: rgba(8,145,178,.14); --border-med: rgba(8,145,178,.25);
  --white: #ffffff; --surface: #f8fbfe;
  --font-sans: 'DM Sans', system-ui, sans-serif;
  --font-display: 'Fraunces', Georgia, serif;
  --font-mono: 'DM Mono', monospace;
  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 14px; --radius-xl: 20px;
  --shadow-sm: 0 1px 4px rgba(8,145,178,.08);
  --shadow-md: 0 4px 16px rgba(8,145,178,.12);
  --shadow-lg: 0 8px 32px rgba(8,145,178,.14);
  --nav-h: 60px;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: var(--font-sans); background: var(--white); color: var(--text-primary); font-size: 15px; line-height: 1.65; -webkit-font-smoothing: antialiased; }
h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; line-height: 1.2; }
h1 { font-size: clamp(28px, 4vw, 44px); color: var(--navy); }
h2 { font-size: clamp(22px, 3vw, 34px); color: var(--navy); }
h3 { font-size: 20px; color: var(--navy); }
h4 { font-size: 16px; font-family: var(--font-sans); font-weight: 500; color: var(--text-primary); }
p { color: var(--text-secondary); line-height: 1.75; }
a { text-decoration: none; color: inherit; }
strong { font-weight: 500; color: var(--text-primary); }
.container { max-width: 1100px; margin: 0 auto; padding: 0 32px; }
.section { padding: 72px 0; }
.section-alt { background: var(--surface); }
.section-label { font-family: var(--font-mono); font-size: 11px; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; color: var(--teal); margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
.section-label::before { content: ''; width: 20px; height: 1px; background: var(--teal); }
.section-header { margin-bottom: 40px; }
.section-header p { max-width: 520px; margin-top: 10px; font-size: 16px; }
.nav { position: sticky; top: 0; z-index: 100; height: var(--nav-h); background: rgba(255,255,255,.95); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); display: flex; align-items: center; }
.nav-inner { display: flex; align-items: center; width: 100%; max-width: 1100px; margin: 0 auto; padding: 0 32px; }
.nav-logo { display: flex; align-items: center; gap: 10px; font-family: var(--font-display); font-size: 18px; color: var(--navy); margin-right: auto; }
.nav-logo-mark { width: 32px; height: 32px; border-radius: 8px; background: var(--teal); display: flex; align-items: center; justify-content: center; }
.nav-logo-mark svg { width: 18px; height: 18px; stroke: white; fill: none; }
.nav-links { display: flex; align-items: center; gap: 2px; }
.nav-link { font-size: 13px; color: var(--text-secondary); padding: 6px 14px; border-radius: var(--radius-sm); transition: background .15s, color .15s; }
.nav-link:hover, .nav-link.active { background: var(--sky); color: var(--navy); }
.nav-cta { margin-left: 12px; background: var(--teal); color: white; border: none; border-radius: var(--radius-sm); padding: 8px 18px; font-size: 13px; font-weight: 500; font-family: var(--font-sans); cursor: pointer; transition: background .15s; }
.nav-cta:hover { background: var(--teal-dark); }
.nav-mobile-toggle { display: none; background: none; border: none; cursor: pointer; padding: 4px; color: var(--text-secondary); }
@media (max-width: 768px) {
  .nav-links { display: none; } .nav-cta { display: none; } .nav-mobile-toggle { display: flex; }
  .nav-links.open { display: flex; flex-direction: column; position: fixed; top: var(--nav-h); left: 0; right: 0; background: white; padding: 16px 24px 24px; border-bottom: 1px solid var(--border); box-shadow: var(--shadow-md); gap: 2px; }
  .nav-links.open .nav-link { padding: 10px 12px; }
}
.btn { display: inline-flex; align-items: center; gap: 8px; border-radius: var(--radius-md); font-family: var(--font-sans); font-size: 14px; font-weight: 500; cursor: pointer; transition: background .15s, box-shadow .15s, transform .1s; border: none; text-decoration: none; }
.btn:active { transform: scale(.98); }
.btn-primary { background: var(--teal); color: white; padding: 11px 24px; box-shadow: 0 2px 8px rgba(8,145,178,.25); }
.btn-primary:hover { background: var(--teal-dark); box-shadow: 0 4px 14px rgba(8,145,178,.35); }
.btn-outline { background: white; color: var(--teal); border: 1px solid var(--sky-mid); padding: 10px 22px; }
.btn-outline:hover { background: var(--sky); border-color: var(--teal); }
.btn-white { background: white; color: var(--teal); padding: 11px 24px; box-shadow: 0 2px 8px rgba(0,0,0,.1); }
.btn-white:hover { background: var(--sky); }
.btn svg { width: 16px; height: 16px; stroke: currentColor; fill: none; flex-shrink: 0; }
.badge { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 500; font-family: var(--font-mono); padding: 3px 10px; border-radius: 999px; letter-spacing: .04em; }
.badge-teal { background: #e1f5ee; color: #0f6e56; border: 1px solid #9fe1cb; }
.badge-blue { background: var(--sky); color: var(--navy-light); border: 1px solid var(--sky-mid); }
.badge-amber { background: #faeeda; color: #854f0b; border: 1px solid #fac775; }
.badge-red { background: #fcebeb; color: #791f1f; border: 1px solid #f7c1c1; }
.badge-purple { background: #eeedfe; color: #3c3489; border: 1px solid #afa9ec; }
.badge-green { background: #eaf3de; color: #27500a; border: 1px solid #c0dd97; }
.badge-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
.card { background: white; border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 24px; transition: border-color .2s, box-shadow .2s; }
.card:hover { border-color: var(--border-med); box-shadow: var(--shadow-md); }
.card-icon { width: 44px; height: 44px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; flex-shrink: 0; }
.card-icon svg { width: 20px; height: 20px; stroke: currentColor; fill: none; stroke-width: 1.6; }
.icon-blue { background: var(--sky); color: var(--navy-light); }
.icon-teal { background: #e1f5ee; color: #0f6e56; }
.icon-amber { background: #faeeda; color: #854f0b; }
.icon-purple { background: #eeedfe; color: #3c3489; }
.icon-green { background: #eaf3de; color: #27500a; }
.icon-coral { background: #faece7; color: #993c1d; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 900px) { .grid-3 { grid-template-columns: 1fr 1fr; } .grid-4 { grid-template-columns: 1fr 1fr; } }
@media (max-width: 640px) { .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; } }
.page-hero { padding: 64px 0 56px; background: var(--surface); border-bottom: 1px solid var(--border); }
.page-hero-badge { margin-bottom: 18px; }
.page-hero h1 { margin-bottom: 16px; }
.page-hero p { font-size: 17px; max-width: 560px; }
.page-hero-actions { display: flex; align-items: center; gap: 12px; margin-top: 28px; flex-wrap: wrap; }
.stats-strip { display: grid; grid-template-columns: repeat(4, 1fr); border-bottom: 1px solid var(--border); background: white; }
.stat-cell { padding: 24px 28px; border-right: 1px solid var(--border); text-align: center; }
.stat-cell:last-child { border-right: none; }
.stat-num { font-size: 30px; font-weight: 300; font-family: var(--font-display); color: var(--teal); line-height: 1; margin-bottom: 5px; }
.stat-label { font-size: 12px; color: var(--text-muted); }
@media (max-width: 640px) { .stats-strip { grid-template-columns: 1fr 1fr; } .stat-cell:nth-child(2) { border-right: none; } .stat-cell:nth-child(n+3) { border-top: 1px solid var(--border); } }
.footer { background: var(--text-primary); color: rgba(255,255,255,.55); padding: 52px 0 32px; }
.footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr; gap: 32px; margin-bottom: 40px; }
.footer-brand p { font-size: 13px; line-height: 1.7; margin-top: 12px; max-width: 240px; }
.footer-logo { display: flex; align-items: center; gap: 8px; color: white; font-family: var(--font-display); font-size: 17px; }
.footer-logo-mark { width: 26px; height: 26px; background: var(--teal); border-radius: 6px; display: flex; align-items: center; justify-content: center; }
.footer-logo-mark svg { width: 14px; height: 14px; stroke: white; fill: none; }
.footer-col h5 { font-size: 12px; font-weight: 500; font-family: var(--font-mono); letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.8); margin-bottom: 14px; }
.footer-col a { display: block; font-size: 13px; color: rgba(255,255,255,.45); margin-bottom: 8px; transition: color .15s; }
.footer-col a:hover { color: rgba(255,255,255,.9); }
.footer-bottom { border-top: 1px solid rgba(255,255,255,.08); padding-top: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
.footer-bottom p { font-size: 12px; }
.footer-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.footer-tag { font-size: 11px; padding: 2px 9px; border-radius: 999px; background: rgba(255,255,255,.08); color: rgba(255,255,255,.5); }
@media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr; } }
.feature-list-item { display: flex; gap: 16px; padding: 20px 0; border-bottom: 1px solid var(--border); }
.feature-list-item:last-child { border-bottom: none; }
.fli-icon { width: 40px; height: 40px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
.fli-icon svg { width: 18px; height: 18px; stroke: currentColor; fill: none; stroke-width: 1.6; }
.fli-title { font-size: 14px; font-weight: 500; color: var(--text-primary); margin-bottom: 4px; }
.fli-desc { font-size: 13px; color: var(--text-secondary); line-height: 1.6; }
.data-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.data-table th { padding: 10px 14px; text-align: left; font-size: 11px; font-weight: 500; font-family: var(--font-mono); letter-spacing: .06em; text-transform: uppercase; color: var(--text-muted); border-bottom: 1px solid var(--border); background: var(--surface); }
.data-table td { padding: 12px 14px; border-bottom: 1px solid var(--border); color: var(--text-secondary); vertical-align: middle; }
.data-table tr:last-child td { border-bottom: none; }
.data-table tr:hover td { background: var(--sky-soft); }
.table-wrap { border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
.timeline { display: flex; flex-direction: column; gap: 0; }
.tl-item { display: flex; gap: 16px; padding: 20px 0; border-left: 2px solid var(--border); margin-left: 14px; padding-left: 24px; position: relative; }
.tl-item::before { content: ''; position: absolute; left: -7px; top: 26px; width: 12px; height: 12px; border-radius: 50%; background: var(--teal); border: 2px solid white; box-shadow: 0 0 0 1px var(--teal); }
.tl-content h4 { font-size: 14px; font-weight: 500; margin-bottom: 4px; }
.tl-content p { font-size: 13px; color: var(--text-secondary); line-height: 1.6; }
.home-hero { padding: 80px 0 72px; background: var(--surface); border-bottom: 1px solid var(--border); position: relative; overflow: hidden; }
.home-hero::after { content: ''; position: absolute; top: -100px; right: -100px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(8,145,178,.06) 0%, transparent 70%); pointer-events: none; }
.home-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
.home-hero-visual { background: white; border: 1px solid var(--border); border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg); }
.hv-bar { background: var(--sky); border-bottom: 1px solid var(--border); padding: 10px 16px; display: flex; align-items: center; gap: 6px; }
.hv-dot { width: 8px; height: 8px; border-radius: 50%; }
.hv-kpis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
.hv-kpi { padding: 14px 12px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.hv-kpi:nth-child(3n) { border-right: none; }
.hv-kpi-val { font-size: 20px; font-weight: 300; font-family: var(--font-display); }
.hv-kpi-label { font-size: 10px; color: var(--text-muted); font-family: var(--font-mono); letter-spacing: .04em; margin-top: 2px; }
.hv-node-row { display: flex; align-items: center; gap: 8px; padding: 9px 12px; border-bottom: 1px solid var(--border); font-size: 11px; }
.hv-node-row:last-child { border-bottom: none; }
.hv-bar-track { flex: 1; height: 4px; background: var(--sky); border-radius: 2px; }
.hv-bar-fill { height: 4px; border-radius: 2px; }
@media (max-width: 768px) { .home-hero-grid { grid-template-columns: 1fr; } .home-hero-visual { display: none; } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
.animate-up { animation: fadeUp .5s ease both; }
.delay-1 { animation-delay: .08s; } .delay-2 { animation-delay: .16s; } .delay-3 { animation-delay: .24s; } .delay-4 { animation-delay: .32s; }
.text-center { text-align: center; }
.text-center .section-label { justify-content: center; }
.text-center .section-label::before { display: none; }
.mt-8{margin-top:8px}.mt-12{margin-top:12px}.mt-16{margin-top:16px}.mt-24{margin-top:24px}.mt-32{margin-top:32px}.mt-40{margin-top:40px}
.mb-8{margin-bottom:8px}.mb-24{margin-bottom:24px}.mb-32{margin-bottom:32px}
.mono { font-family: var(--font-mono); font-size: 12px; color: var(--text-muted); }
@media (prefers-color-scheme: dark) {
  :root { --white: #0d1e2e; --surface: #0a1825; --text-primary: #d8e8f4; --text-secondary: #7a9ab8; --text-muted: #4a6a88; --border: rgba(8,145,178,.16); --border-med: rgba(8,145,178,.3); --sky: rgba(8,145,178,.12); --sky-mid: rgba(8,145,178,.25); --sky-soft: rgba(8,145,178,.06); --navy: #7ab8e8; --navy-light: #5aa0d8; }
  .nav { background: rgba(13,30,46,.97); }
  .card { background: #0d1e2e; }
  .home-hero-visual { background: #0d1e2e; }
  .hv-bar { background: #0a1825; }
  .footer { background: #060f18; }
  .data-table th { background: #0a1825; }
}
