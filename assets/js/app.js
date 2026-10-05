/* Skrip bersama prototipe Tremvia: tema, menu, ikon, piktogram, animasi. */

(function () {
  /* ── Tema ────────────────────────────────────────────────────────────── */
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem('tremvia-theme');
    if (saved) root.dataset.theme = saved;
  } catch (e) {}

  const isDark = () =>
    root.dataset.theme
      ? root.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;

  /* ── Ikon (garis, gaya Lucide) ───────────────────────────────────────── */
  const ICONS = {
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5V21h16"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
    play: '<polygon points="7 4 20 12 7 20 7 4"/>',
    arrow: '<path d="M7 17 17 7M8 7h9v9"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
    cpu: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>',
    video: '<path d="m23 7-7 5 7 5z"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    users: '<circle cx="9" cy="8" r="4"/><path d="M1 21a8 8 0 0 1 16 0M17 4a4 4 0 0 1 0 8M23 21a8 8 0 0 0-5-7.4"/>',
    out: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
    timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
    msg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    trend: '<path d="m23 6-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  };
  const svg = name =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
  document.querySelectorAll('[data-icon]').forEach(el => {
    el.insertAdjacentHTML('afterbegin', svg(el.dataset.icon));
  });

  /* ── Piktogram pose tiap tes ─────────────────────────────────────────── */
  const STAND = {
    head: [60, 18], neck: [60, 32], lSh: [46, 36], rSh: [74, 36], lEl: [42, 58], rEl: [78, 58],
    lWr: [40, 78], rWr: [80, 78], hip: [60, 74], lHip: [52, 76], rHip: [68, 76],
    lKn: [50, 102], rKn: [70, 102], lAn: [49, 128], rAn: [71, 128],
  };
  const BONES = [['neck','lSh'],['neck','rSh'],['lSh','lEl'],['lEl','lWr'],['rSh','rEl'],['rEl','rWr'],['neck','hip'],['hip','lHip'],['hip','rHip'],['lHip','lKn'],['lKn','lAn'],['rHip','rKn'],['rKn','rAn']];
  const skeleton = over => {
    const p = Object.assign({}, STAND, over);
    let s = BONES.map(([a, b]) => `<line x1="${p[a][0]}" y1="${p[a][1]}" x2="${p[b][0]}" y2="${p[b][1]}" class="bone"/>`).join('');
    s += `<circle cx="${p.head[0]}" cy="${p.head[1]}" r="9" class="head"/>`;
    s += Object.entries(p).filter(([k]) => k !== 'head' && k !== 'hip').map(([, [x, y]]) => `<circle cx="${x}" cy="${y}" r="2.6" class="joint"/>`).join('');
    return s;
  };
  const POSES = {
    tremor: skeleton({ lEl: [30, 40], lWr: [14, 42], rEl: [90, 40], rWr: [106, 42] }) +
      '<path d="M6 34 l4 4 -4 4 4 4 -4 4" class="motion"/><path d="M114 34 l-4 4 4 4 -4 4 4 4" class="motion"/><circle cx="14" cy="42" r="5" class="focus"/><circle cx="106" cy="42" r="5" class="focus"/>',
    fingerTapping:
      '<path d="M40 130 L44 84 L36 60 M44 84 L58 56 M44 84 L70 60 M44 84 L78 68" class="bone"/><path d="M44 84 L60 92 L80 80" class="bone"/>' +
      [[36,60],[58,56],[70,60],[78,68],[60,92],[80,80],[44,84]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" class="joint"/>`).join('') +
      '<circle cx="80" cy="80" r="6" class="focus"/><circle cx="78" cy="68" r="6" class="focus"/><path d="M92 64 q10 10 0 20" class="motion"/><path d="M98 58 q16 16 0 32" class="motion"/>',
    gait: skeleton({ lEl: [50, 58], lWr: [56, 76], rEl: [70, 58], rWr: [64, 78], lKn: [44, 100], lAn: [36, 126], rKn: [74, 100], rAn: [82, 126] }) +
      '<path d="M20 136 h80" class="ground"/><path d="M26 130 q10 -8 20 0 q10 8 20 0 q10 -8 20 0" class="motion"/>',
    armSwing: skeleton({ lEl: [36, 54], lWr: [28, 70], rEl: [84, 56], rWr: [94, 72] }) +
      '<path d="M22 60 a30 30 0 0 0 10 22" class="motion"/><path d="M100 62 a30 30 0 0 1 -10 22" class="motion"/><circle cx="28" cy="70" r="5" class="focus"/><circle cx="94" cy="72" r="5" class="focus"/>',
    posture: '<path d="M60 4 V136" class="ground"/>' + skeleton({ head: [64, 18], neck: [62, 32] }) +
      '<path d="M64 18 L60 128" class="motion"/><circle cx="64" cy="18" r="12" class="focus"/>',
    // Duduk menyamping, lutut ditekuk dan diluruskan.
    rom:
      '<path d="M30 136 V96 H70 M30 96 V70" class="ground"/>' +
      '<line x1="44" y1="26" x2="46" y2="88" class="bone"/><line x1="46" y1="88" x2="80" y2="88" class="bone"/><line x1="80" y1="88" x2="82" y2="128" class="bone"/><line x1="44" y1="40" x2="56" y2="62" class="bone"/><line x1="56" y1="62" x2="66" y2="80" class="bone"/>' +
      '<circle cx="43" cy="14" r="9" class="head"/>' +
      [[44,26],[46,88],[80,88],[82,128],[56,62],[66,80]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" class="joint"/>`).join('') +
      '<line x1="80" y1="88" x2="114" y2="84" class="bone" opacity=".3"/><path d="M84 122 A36 36 0 0 0 112 92" class="motion"/><circle cx="80" cy="88" r="7" class="focus"/>',
  };
  const pose = k => `<svg viewBox="0 0 120 140" class="pose" aria-hidden="true">${POSES[k] || ''}</svg>`;
  window.__pose = pose;
  document.querySelectorAll('[data-pose]').forEach(el => { el.innerHTML = pose(el.dataset.pose); });

  /* ── Gelombang tremor contoh (bukan rekaman) ─────────────────────────── */
  document.querySelectorAll('[data-wave]').forEach(el => {
    const amp = parseFloat(el.dataset.wave) || 1;
    const W = 600, H = 80, n = 240;
    let d = '';
    for (let i = 0; i <= n; i++) {
      const x = (i / n) * W;
      const env = 0.55 + 0.45 * Math.sin(i / 38);
      const y = H / 2 - Math.sin(i * 0.62) * (H / 2 - 6) * env * amp * (0.85 + 0.15 * Math.sin(i * 2.3));
      d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
    }
    el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" class="wave" aria-hidden="true"><path d="${d}"/></svg>`;
  });

  /* ── Tombol tema ─────────────────────────────────────────────────────── */
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    const paint = () => {
      btn.innerHTML = svg(isDark() ? 'sun' : 'moon');
      btn.setAttribute('aria-label', isDark() ? 'Mode terang' : 'Mode gelap');
    };
    paint();
    btn.addEventListener('click', () => {
      root.dataset.theme = isDark() ? 'light' : 'dark';
      try { localStorage.setItem('tremvia-theme', root.dataset.theme); } catch (e) {}
      paint();
    });
  });

  /* ── Menu avatar ─────────────────────────────────────────────────────── */
  document.querySelectorAll('[data-menu]').forEach(btn => {
    const menu = btn.querySelector('.menu');
    btn.addEventListener('click', e => {
      if (e.target.closest('.menu')) return;
      menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', menu.classList.contains('open'));
    });
    document.addEventListener('click', e => { if (!btn.contains(e.target)) menu.classList.remove('open'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') menu.classList.remove('open'); });
  });

  /* ── Kop mendapat garis setelah digulir ──────────────────────────────── */
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => header.classList.toggle('stuck', scrollY > 8);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Muncul saat digulir ─────────────────────────────────────────────── */
  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 })
    : null;
  document.querySelectorAll('.reveal').forEach(el => (io ? io.observe(el) : el.classList.add('in')));

  /* ── Angka naik ──────────────────────────────────────────────────────── */
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const dec = (el.dataset.count.split('.')[1] || '').length;
    const run = () => {
      const t0 = performance.now();
      const step = now => {
        const k = Math.min(1, (now - t0) / 1100);
        el.textContent = (target * (1 - Math.pow(1 - k, 3))).toLocaleString('id', { minimumFractionDigits: dec, maximumFractionDigits: dec });
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!io) return run();
    const o = new IntersectionObserver(es => { if (es[0].isIntersecting) { run(); o.disconnect(); } });
    o.observe(el);
  });

  /* ── Tab sederhana ───────────────────────────────────────────────────── */
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const btns = group.querySelectorAll('[data-tab]');
    btns.forEach(b => b.addEventListener('click', () => {
      btns.forEach(x => x.classList.toggle('on', x === b));
      document.querySelectorAll('[data-panel]').forEach(p => (p.hidden = p.dataset.panel !== b.dataset.tab));
    }));
  });

  window.Tremvia = { svg };
})();
