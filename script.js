/* NAV scroll */
(function () {
  const nav = document.getElementById("navbar");

  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true }
  );
})();

/* Mobile menu */
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("mobileMenu");
  const links = document.querySelectorAll(".mobile-link");

  if (!toggle || !menu) return;

  let open = false;

  function setOpen(state) {
    open = state;
    menu.classList.toggle("open", open);

    const spans = toggle.querySelectorAll("span");

    if (open) {
      spans[0].style.transform = "translateY(3.5px) rotate(45deg)";
      spans[1].style.transform = "translateY(-3.5px) rotate(-45deg)";
    } else {
      spans[0].style.transform = "";
      spans[1].style.transform = "";
    }
  }

  toggle.addEventListener("click", () => setOpen(!open));
  links.forEach((link) => link.addEventListener("click", () => setOpen(false)));
})();

/* Scroll reveal */
(function () {
  const items = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
})();

/* Footer year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Elegant World Map Canvas */
(function () {
  const canvas = document.getElementById("worldMap");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let W, H, dpr;

  function setup() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.offsetWidth || 1100;
    H = Math.round(W * 0.48);

    canvas.style.height = H + "px";
    canvas.width = W * dpr;
    canvas.height = H * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function lon2x(lon) {
    return ((lon + 180) / 360) * W;
  }

  function lat2y(lat) {
    const rad = (lat * Math.PI) / 180;
    const merc = Math.log(Math.tan(Math.PI / 4 + rad / 2));
    return H / 2 - (merc * H) / (2 * Math.PI) * 1.35 + H * 0.05;
  }

  const continents = [
    [[-168,71],[-141,61],[-130,55],[-125,49],[-120,34],[-117,28],[-105,20],[-87,16],[-83,10],[-78,8],[-75,10],[-65,18],[-62,16],[-59,13],[-63,10],[-75,12],[-82,9],[-87,16],[-90,15],[-92,18],[-85,23],[-80,25],[-81,30],[-75,35],[-70,43],[-65,44],[-55,47],[-53,54],[-60,58],[-65,62],[-68,68],[-80,73],[-95,76],[-110,75],[-130,71],[-148,71],[-168,71]],
    [[-45,61],[-42,65],[-18,76],[-18,83],[-40,84],[-58,83],[-73,77],[-73,70],[-55,60],[-45,61]],
    [[-80,8],[-77,3],[-70,-2],[-50,-2],[-35,-5],[-35,-10],[-40,-20],[-45,-23],[-48,-28],[-52,-33],[-58,-38],[-62,-41],[-65,-46],[-66,-52],[-68,-56],[-63,-55],[-58,-52],[-55,-46],[-50,-29],[-48,-20],[-40,-10],[-36,-3],[-40,3],[-52,5],[-60,5],[-67,8],[-77,8],[-80,8]],
    [[-10,36],[0,36],[5,36],[5,43],[0,43],[-5,44],[-2,48],[3,50],[8,53],[10,57],[16,58],[22,60],[25,65],[28,70],[20,70],[16,70],[14,58],[10,57],[5,53],[0,50],[5,47],[8,44],[3,44],[0,43],[-5,44],[-7,38],[-10,37],[-10,36]],
    [[-9,37],[-7,37],[-5,36],[0,36],[3,42],[-2,44],[-7,44],[-9,39],[-9,37]],
    [[-6,34],[0,30],[10,30],[25,30],[32,30],[37,22],[44,12],[50,12],[44,5],[38,-2],[35,-5],[35,-12],[32,-18],[28,-22],[32,-26],[28,-30],[18,-34],[14,-34],[14,-28],[10,-22],[8,-10],[2,-2],[0,4],[2,6],[10,6],[14,12],[10,16],[2,24],[-6,30],[-8,28],[-12,20],[-12,14],[-8,12],[-15,12],[-18,15],[-18,24],[-14,28],[-6,34]],
    [[26,70],[30,73],[50,75],[80,76],[100,73],[120,72],[140,72],[160,68],[163,60],[155,55],[145,44],[135,35],[125,25],[120,20],[110,18],[105,10],[100,4],[95,5],[90,20],[80,24],[70,22],[62,22],[58,24],[55,30],[45,30],[40,35],[35,36],[30,36],[26,42],[28,46],[30,50],[36,54],[40,60],[50,66],[60,70],[70,72],[80,74],[100,73]],
    [[114,-22],[116,-20],[122,-18],[128,-14],[130,-12],[135,-12],[136,-14],[138,-18],[140,-18],[142,-12],[148,-20],[152,-24],[154,-28],[152,-32],[148,-38],[144,-38],[138,-36],[132,-34],[126,-34],[118,-30],[114,-26],[114,-22]]
  ];

  const pins = [
    { lon: -99.1332, lat: 19.4326, label: "Mexico City" },
    { lon: -3.7038, lat: 40.4168, label: "Madrid" }
  ];

  function draw() {
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);

    continents.forEach((shape) => {
      ctx.beginPath();

      shape.forEach(([lon, lat], index) => {
        const x = lon2x(lon);
        const y = lat2y(lat);

        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });

      ctx.closePath();
      ctx.fillStyle = "rgba(17,17,17,0.035)";
      ctx.fill();
      ctx.strokeStyle = "rgba(17,17,17,0.18)";
      ctx.lineWidth = 0.9;
      ctx.stroke();
    });

    const madrid = pins[1];
    const mexico = pins[0];

    ctx.beginPath();
    ctx.moveTo(lon2x(mexico.lon), lat2y(mexico.lat));
    ctx.quadraticCurveTo(W * 0.38, H * 0.22, lon2x(madrid.lon), lat2y(madrid.lat));
    ctx.strokeStyle = "rgba(17,17,17,0.16)";
    ctx.lineWidth = 1;
    ctx.stroke();

    pins.forEach((pin) => {
      const x = lon2x(pin.lon);
      const y = lat2y(pin.lat);

      const pulse = (Date.now() % 2400) / 2400;
      const radius = 8 + pulse * 18;
      const alpha = (1 - pulse) * 0.28;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(17,17,17,${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#111111";
      ctx.fill();

      ctx.font = "400 11px Inter, sans-serif";
      ctx.fillStyle = "rgba(17,17,17,0.72)";
      ctx.fillText(pin.label.toUpperCase(), x + 12, y + 4);
    });

    requestAnimationFrame(draw);
  }

  setup();

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        draw();
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(canvas);

  window.addEventListener(
    "resize",
    () => {
      setup();
    },
    { passive: true }
  );
})();
