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
