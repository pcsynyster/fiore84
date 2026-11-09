const WHATSAPP = "558496798416";
const IMG = "assets/img/";

const PRODUCTS = [
  { id: "camisa-oxford-azul", name: "Camisa Manga Longa Oxford", cat: "camisas", catLabel: "Camisas", price: 170, badge: "Mais vendida",
    imgs: ["p-camisa-azul.jpg"], sizes: ["P", "M", "G", "GG"],
    desc: "Camisa de manga longa em tecido oxford, gola com botões e bordado discreto no peito. Caimento ajustado que vai bem por dentro ou por fora da calça." },
  { id: "camisa-social-bordo", name: "Camisa Social Manga Curta Bordô", cat: "camisas", catLabel: "Camisas", price: 189.9, look: 2,
    imgs: ["v-camisa-vinho.jpg", "p-look-vinho.jpg"], sizes: ["P", "M", "G", "GG"],
    desc: "100% algodão, conforto na medida e um visual que funciona sem precisar de muito. Combina com sarja clara ou jeans." },
  { id: "camiseta-essential-preta", name: "Camiseta Essential Preta", cat: "camisas", catLabel: "Camisetas", price: 159.9, look: 1, badge: "Novo",
    imgs: ["v-camiseta.jpg", "v-camiseta-costas.jpg"], sizes: ["P", "M", "G", "GG"],
    desc: "Malha de algodão encorpada, bordado frontal e estampa nas costas. A base de qualquer look casual." },
  { id: "jeans-lavagem-clara", name: "Calça Jeans Lavagem Clara", cat: "calcas", catLabel: "Calças", price: 349.9, look: 1,
    imgs: ["p-jeans.jpg", "v-tenis.jpg"], sizes: ["38", "40", "42", "44", "46"],
    desc: "Estilo, conforto e caimento impecável para quem faz questão de se vestir bem em qualquer ocasião. Lavagem clara com elastano." },
  { id: "calca-tech", name: "Calça Tech Ajuste Lateral", cat: "calcas", catLabel: "Calças", price: 249.9, look: 3, badge: "4 cores",
    imgs: ["v-tech2.jpg", "v-tech1.jpg"], sizes: ["38", "40", "42", "44", "46", "48"],
    colors: [
      { name: "Areia", hex: "#c9bfae", img: "v-tech2.jpg" },
      { name: "Grafite", hex: "#7d7f80", img: "v-tech3.jpg" },
      { name: "Preto", hex: "#1b1b1d", img: "v-tech4.jpg" },
      { name: "Marinho", hex: "#28324a", img: "v-tech5.jpg" }
    ],
    desc: "Ajuste lateral regulável, tecido com elastano e toque frio. Dispensa cinto e mantém o caimento o dia inteiro." },
  { id: "calca-sarja-areia", name: "Calça Sarja Areia", cat: "calcas", catLabel: "Calças", price: 229.9, look: 2,
    imgs: ["v-calca-bege.jpg", "p-look-vinho.jpg"], sizes: ["38", "40", "42", "44", "46"],
    desc: "Sarja com elastano em tom areia, modelagem slim. Coringa para camisas sociais e polos." },
  { id: "tenis-couro-preto", name: "Tênis Couro Preto", cat: "calcados", catLabel: "Calçados", price: 399.9, look: 1,
    imgs: ["v-tenis.jpg"], sizes: ["38", "39", "40", "41", "42", "43", "44"],
    desc: "Couro preto com solado branco emborrachado. Minimalista, confortável e fácil de combinar." },
  { id: "mocassim-camurca", name: "Mocassim Camurça Café", cat: "calcados", catLabel: "Calçados", price: 369.9, look: 2, badge: "Novo",
    imgs: ["v-mocassim.jpg", "v-calca-bege.jpg"], sizes: ["38", "39", "40", "41", "42", "43", "44"],
    desc: "Camurça em tom café com sola branca. Leve, sem cadarço, para usar com ou sem meia." },
  { id: "relogio-cronografo", name: "Relógio Cronógrafo Preto", cat: "acessorios", catLabel: "Relógios", price: 489.9, look: 3,
    imgs: ["p-relogio.jpg"], sizes: ["Único"],
    desc: "Design robusto, mostrador preto e detalhes em aço. Um relógio que dispensa excessos." },
  { id: "relogio-pulseira-couro", name: "Relógio Pulseira de Couro", cat: "acessorios", catLabel: "Relógios", price: 459.9,
    imgs: ["v-relogio-detalhe.jpg"], sizes: ["Único"],
    desc: "Caixa em tom rosé, mostrador claro e pulseira de couro marrom. Fecha o look social com elegância." },
  { id: "cinto-dupla-face", name: "Cinto Dupla Face", cat: "acessorios", catLabel: "Acessórios", price: 120,
    imgs: ["p-cinto.jpg"], sizes: ["90", "95", "100", "105", "110"],
    desc: "Um clássico indispensável no guarda-roupa masculino. Couro dupla face, preto e marrom: duas possibilidades, o mesmo padrão de elegância." },
  { id: "bone-preto", name: "Boné Preto Aba Curva", cat: "acessorios", catLabel: "Acessórios", price: 179.9,
    imgs: ["v-bone.jpg"], sizes: ["Único"],
    desc: "Boné preto com bordado em alto-relevo e ajuste traseiro. Discreto e fácil de usar." },
  { id: "pulseira-925", name: "Pulseira Prata 925 com Berloques", cat: "prata", catLabel: "Fiore Pratas", price: 289.9, badge: "Prata 925",
    imgs: ["p-pulseira.jpg"], sizes: ["17 cm", "18 cm", "19 cm", "20 cm"],
    desc: "Pulseira em prata 925 com fecho de coração e berloques. Personalize com as peças da coleção Fiore Pratas." }
];

const HOURS = [
  { d: "Domingo", s: [] },
  { d: "Segunda", s: [[10, 12], [14, 19]] },
  { d: "Terça", s: [[10, 12], [14, 19]] },
  { d: "Quarta", s: [[10, 12], [14, 19]] },
  { d: "Quinta", s: [[10, 12], [14, 19]] },
  { d: "Sexta", s: [[10, 12], [14, 19]] },
  { d: "Sábado", s: [[10, 17]] }
];

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const brl = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const inst = v => `ou 6x de ${brl(v / 6)} sem juros`;
const byId = id => PRODUCTS.find(p => p.id === id);
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const isDesktop = () => innerWidth > 900;

const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};

/* loader */
(function loader() {
  const count = $("#loaderCount");
  const bar = $("#loaderBar");
  let n = 0;
  const tick = setInterval(() => {
    n = Math.min(84, n + Math.ceil(Math.random() * 7));
    count.textContent = String(n).padStart(3, "0");
    bar.style.width = (n / 84 * 100) + "%";
    if (n >= 84) {
      clearInterval(tick);
      setTimeout(() => {
        $("#loader").classList.add("is-done");
        document.body.classList.remove("is-loading");
        document.body.classList.add("is-ready");
      }, 350);
    }
  }, 60);
})();

$("#year").textContent = new Date().getFullYear();

/* header */
const header = $("#header");
let lastY = 0;
addEventListener("scroll", () => {
  const y = scrollY;
  header.classList.toggle("is-scrolled", y > 40);
  header.classList.toggle("is-hidden", y > lastY && y > 400 && !$("#nav").classList.contains("is-open"));
  lastY = y;
}, { passive: true });

const burger = $("#burger");
const nav = $("#nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open);
  document.body.classList.toggle("is-locked", open);
});
$$("a", nav).forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("is-open");
  burger.setAttribute("aria-expanded", false);
  document.body.classList.remove("is-locked");
}));

const sections = $$("main section[id]");
const navObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) $$("a", nav).forEach(a => a.classList.toggle("is-current", a.hash === "#" + e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => navObs.observe(s));

/* status de funcionamento (horário de Parnamirim) */
function nowInStore() {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Fortaleza", weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
  const get = t => parts.find(p => p.type === t).value;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return { day: days.indexOf(get("weekday")), h: (+get("hour") % 24) + (+get("minute")) / 60 };
}
const fmtH = h => `${Math.floor(h)}h${h % 1 ? String(Math.round(h % 1 * 60)).padStart(2, "0") : ""}`;

function updateStatus() {
  const { day, h } = nowInStore();
  const today = HOURS[day].s;
  const open = today.some(([a, b]) => h >= a && h < b);
  let label;
  if (open) {
    const end = today.find(([a, b]) => h >= a && h < b)[1];
    label = `Aberto agora · até ${fmtH(end)}`;
  } else {
    const later = today.find(([a]) => h < a);
    if (later) label = `Fechado · abre às ${fmtH(later[0])}`;
    else {
      let i = 1;
      while (!HOURS[(day + i) % 7].s.length) i++;
      const nd = HOURS[(day + i) % 7];
      label = `Fechado · abre ${i === 1 ? "amanhã" : nd.d.toLowerCase()} às ${fmtH(nd.s[0][0])}`;
    }
  }
  $$("[data-status]").forEach(el => {
    el.classList.toggle("is-open", open);
    $("b", el).textContent = label;
  });
  $("#hours").innerHTML = [1, 2, 3, 4, 5, 6, 0].map(i => {
    const s = HOURS[i].s.length ? HOURS[i].s.map(([a, b]) => `${fmtH(a)} – ${fmtH(b)}`).join(" / ") : "Fechado";
    return `<li class="${i === day ? "is-today" : ""}"><span>${HOURS[i].d}</span><span>${s}</span></li>`;
  }).join("");
}
updateStatus();
setInterval(updateStatus, 60000);

/* cursor e botões magnéticos */
if (finePointer) {
  const cursor = $("#cursor");
  const label = $("#cursorLabel");
  let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
  addEventListener("mousemove", e => { x = e.clientX; y = e.clientY; cursor.classList.add("is-active"); });
  (function loop() {
    cx += (x - cx) * .2; cy += (y - cy) * .2;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("mouseover", e => {
    const t = e.target.closest("[data-cursor]");
    const h = e.target.closest("a, button, select, label, .card");
    cursor.classList.toggle("is-label", !!t);
    label.textContent = t ? t.dataset.cursor : "";
    cursor.classList.toggle("is-hover", !t && !!h);
  });

  $$(".magnetic").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .35}px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}

/* manifesto palavra a palavra */
const manifesto = $("#manifesto");
manifesto.innerHTML = manifesto.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(" ");
const words = $$(".w", manifesto);
function litManifesto() {
  const r = manifesto.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (innerHeight * .85 - r.top) / (r.height + innerHeight * .35)));
  const n = Math.floor(p * words.length);
  words.forEach((w, i) => w.classList.toggle("is-lit", i < n));
}

/* contadores */
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const end = +el.dataset.count;
    const t0 = performance.now();
    (function step(t) {
      const k = Math.min(1, (t - t0) / 1400);
      el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + el.dataset.suffix;
      if (k < 1) requestAnimationFrame(step);
    })(t0);
    countObs.unobserve(el);
  });
}, { threshold: .6 });
$$("[data-count]").forEach(el => countObs.observe(el));

/* lookbook horizontal */
const lookbook = $("#lookbook");
const track = $("#lbTrack");
const lbProgress = $("#lbProgress");
function sizeLookbook() {
  if (!isDesktop()) { lookbook.style.height = ""; track.style.transform = ""; return; }
  const dist = track.scrollWidth - innerWidth;
  lookbook.style.height = (dist + innerHeight) + "px";
}
function scrollLookbook() {
  if (!isDesktop()) return;
  const r = lookbook.getBoundingClientRect();
  const dist = track.scrollWidth - innerWidth;
  const p = Math.min(1, Math.max(0, -r.top / (lookbook.offsetHeight - innerHeight)));
  track.style.transform = `translate3d(${-p * dist}px,0,0)`;
  lbProgress.style.width = (p * 100) + "%";
}

const vidObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) { if (v.preload === "none") v.preload = "auto"; v.play().catch(() => {}); }
    else v.pause();
  });
}, { threshold: .25 });
$$(".chapter video, .hero__video").forEach(v => vidObs.observe(v));

$$(".chapter__media").forEach(m => m.addEventListener("click", () => {
  const btn = $("[data-look]", m.parentElement);
  if (btn) btn.click();
}));

/* reveal */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); revealObs.unobserve(e.target); } });
}, { threshold: .12 });
$$(".section-title, .manifesto .eyebrow, .stats, .tech__content > *, .pratas > *, .perk, .visite > *").forEach(el => {
  el.classList.add("reveal");
  revealObs.observe(el);
});

let ticking = false;
addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { litManifesto(); scrollLookbook(); ticking = false; });
}, { passive: true });
addEventListener("resize", () => { sizeLookbook(); scrollLookbook(); });
addEventListener("load", () => { sizeLookbook(); scrollLookbook(); litManifesto(); });
sizeLookbook();

/* vitrine */
const grid = $("#grid");
let filter = "todos";
let lookFilter = null;
let sortMode = "destaque";

function renderGrid() {
  let list = PRODUCTS.filter(p => lookFilter ? p.look === lookFilter : (filter === "todos" || p.cat === filter));
  if (sortMode === "menor") list = [...list].sort((a, b) => a.price - b.price);
  if (sortMode === "maior") list = [...list].sort((a, b) => b.price - a.price);

  $("#vitrineCount").innerHTML = lookFilter
    ? `Look Cap. ${["I", "II", "III"][lookFilter - 1]} · ${list.length} peças <button class="link-btn" id="clearLook" style="margin-left:14px">Ver tudo ×</button>`
    : `${list.length} ${list.length === 1 ? "peça" : "peças"}`;
  const clear = $("#clearLook");
  if (clear) clear.addEventListener("click", () => { lookFilter = null; renderGrid(); });

  grid.innerHTML = list.map(p => `
    <article class="card" data-id="${p.id}" tabindex="0" aria-label="${p.name}, ${brl(p.price)}">
      <div class="card__media">
        ${p.badge ? `<span class="card__badge">${p.badge}</span>` : ""}
        <img src="${IMG + p.imgs[0]}" alt="${p.name}" loading="lazy">
        ${p.imgs[1] ? `<img src="${IMG + p.imgs[1]}" alt="" loading="lazy">` : ""}
        <button class="card__quick" data-quick="${p.id}">Compra rápida</button>
      </div>
      <div class="card__info">
        <div><h3 class="card__name">${p.name}</h3><span class="card__cat">${p.catLabel}</span></div>
        <div class="card__price">${brl(p.price)}<small>6x ${brl(p.price / 6)}</small></div>
      </div>
    </article>`).join("");

  $$(".card", grid).forEach((c, i) => {
    setTimeout(() => cardObs.observe(c), 0);
    c.style.transitionDelay = (i % 4) * 80 + "ms";
    c.addEventListener("click", () => openModal(c.dataset.id));
    c.addEventListener("keydown", e => { if (e.key === "Enter") openModal(c.dataset.id); });
  });
  requestAnimationFrame(sizeLookbook);
}
const cardObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); cardObs.unobserve(e.target); } });
}, { threshold: .1 });

$("#filters").addEventListener("click", e => {
  const b = e.target.closest(".filter");
  if (!b) return;
  filter = b.dataset.filter;
  lookFilter = null;
  $$(".filter").forEach(f => { f.classList.toggle("is-active", f === b); f.setAttribute("aria-selected", f === b); });
  renderGrid();
});
$("#sort").addEventListener("change", e => { sortMode = e.target.value; renderGrid(); });

$$("[data-look]").forEach(b => b.addEventListener("click", () => {
  lookFilter = +b.dataset.look;
  $$(".filter").forEach(f => f.classList.remove("is-active"));
  renderGrid();
  $("#vitrine").scrollIntoView({ behavior: "smooth" });
}));
renderGrid();

/* calça tech */
const tech = byId("calca-tech");
$("#techPrice").innerHTML = `${brl(tech.price)}<small>6x sem juros</small>`;
let techColor = 0;
$("#swatches").addEventListener("click", e => {
  const s = e.target.closest(".swatch");
  if (!s || s.classList.contains("is-active")) return;
  $$(".swatch").forEach((x, i) => {
    const on = x === s;
    x.classList.toggle("is-active", on);
    x.setAttribute("aria-checked", on);
    if (on) techColor = i;
  });
  const img = $("#techImg");
  img.classList.add("is-swapping");
  setTimeout(() => {
    img.src = s.dataset.img;
    img.alt = `Calça Tech na cor ${s.dataset.name.toLowerCase()}`;
    $("#techTag").textContent = s.dataset.name;
    img.onload = () => img.classList.remove("is-swapping");
  }, 300);
});
$("#techBuy").addEventListener("click", () => openModal("calca-tech", techColor));
$$("[data-open]").forEach(el => el.addEventListener("click", () => openModal(el.dataset.open)));

/* modal de produto */
const modal = $("#modal");
let current = null;
let sel = { size: null, color: 0, qty: 1 };
let lastFocus = null;

function openModal(id, color = 0) {
  const p = byId(id);
  if (!p) return;
  current = p;
  lastFocus = document.activeElement;
  sel = { size: p.sizes.length === 1 ? p.sizes[0] : null, color, qty: 1 };

  $("#mCat").textContent = p.catLabel;
  $("#mTitle").textContent = p.name;
  $("#mPrice").textContent = brl(p.price);
  $("#mInst").textContent = inst(p.price);
  $("#mDesc").textContent = p.desc;
  $("#mQty").textContent = 1;
  $("#mSizeHint").textContent = "";

  const colorWrap = $("#mColorWrap");
  colorWrap.hidden = !p.colors;
  if (p.colors) {
    $("#mColors").innerHTML = p.colors.map((c, i) => `<button class="color-dot ${i === color ? "is-active" : ""}" style="--c:${c.hex}" data-i="${i}" aria-label="${c.name}"></button>`).join("");
    $("#mColorName").textContent = p.colors[color].name;
  }

  $("#mSizes").innerHTML = p.sizes.map(s => `<button class="size ${sel.size === s ? "is-active" : ""}" data-s="${s}">${s}</button>`).join("");
  $("#mSizes").parentElement.classList.remove("is-error");
  setGallery(p.colors ? [p.colors[color].img, ...p.imgs.filter(i => i !== p.colors[color].img)] : p.imgs);

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  setTimeout(() => $(".modal__close").focus(), 50);
}

function setGallery(imgs) {
  const main = $("#mImg");
  main.src = IMG + imgs[0];
  main.alt = current.name;
  $("#mThumbs").innerHTML = imgs.length > 1
    ? imgs.map((src, i) => `<button class="${i === 0 ? "is-active" : ""}" data-src="${src}" aria-label="Foto ${i + 1}"><img src="${IMG + src}" alt=""></button>`).join("")
    : "";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (!drawer.classList.contains("is-open")) document.body.classList.remove("is-locked");
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

$("#mThumbs").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  $("#mImg").src = IMG + b.dataset.src;
  $$("#mThumbs button").forEach(x => x.classList.toggle("is-active", x === b));
});
$("#mColors").addEventListener("click", e => {
  const b = e.target.closest(".color-dot");
  if (!b) return;
  sel.color = +b.dataset.i;
  $$(".color-dot").forEach(x => x.classList.toggle("is-active", x === b));
  $("#mColorName").textContent = current.colors[sel.color].name;
  setGallery([current.colors[sel.color].img, ...current.imgs.filter(i => i !== current.colors[sel.color].img)]);
});
$("#mSizes").addEventListener("click", e => {
  const b = e.target.closest(".size");
  if (!b) return;
  sel.size = b.dataset.s;
  $$(".size").forEach(x => x.classList.toggle("is-active", x === b));
  $("#mSizes").parentElement.classList.remove("is-error");
  $("#mSizeHint").textContent = "";
});
$("#mMinus").addEventListener("click", () => { sel.qty = Math.max(1, sel.qty - 1); $("#mQty").textContent = sel.qty; });
$("#mPlus").addEventListener("click", () => { sel.qty = Math.min(10, sel.qty + 1); $("#mQty").textContent = sel.qty; });
$("#mAdd").addEventListener("click", () => {
  if (!sel.size) {
    const opt = $("#mSizes").parentElement;
    opt.classList.remove("is-error");
    void opt.offsetWidth;
    opt.classList.add("is-error");
    $("#mSizeHint").textContent = "— escolha um tamanho";
    return;
  }
  addToBag(current, sel);
  closeModal();
  toast(`${current.name} adicionado à sacola`);
});
$$("[data-close]", modal).forEach(el => el.addEventListener("click", closeModal));

/* sacola */
const drawer = $("#drawer");
let bag = store.get("fiore_bag", []).filter(i => byId(i.id));

function addToBag(p, s) {
  const color = p.colors ? p.colors[s.color].name : null;
  const key = [p.id, s.size, color].join("|");
  const found = bag.find(i => i.key === key);
  if (found) found.qty = Math.min(10, found.qty + s.qty);
  else bag.push({ key, id: p.id, size: s.size, color, img: p.colors ? p.colors[s.color].img : p.imgs[0], qty: s.qty });
  saveBag();
  const btn = $("#bagOpen");
  btn.classList.remove("bump");
  void btn.offsetWidth;
  btn.classList.add("bump");
}

function saveBag() {
  store.set("fiore_bag", bag);
  renderBag();
}

function bagTotal() { return bag.reduce((t, i) => t + byId(i.id).price * i.qty, 0); }

function renderBag() {
  const count = bag.reduce((t, i) => t + i.qty, 0);
  const c = $("#bagCount");
  c.textContent = count;
  c.classList.toggle("is-on", count > 0);
  $("#drawerCount").textContent = count;

  const list = $("#bagList");
  $("#bagFoot").classList.toggle("is-hidden", !bag.length);
  if (!bag.length) {
    list.innerHTML = `<div class="bag-empty"><strong>Sua sacola está vazia</strong>Escolha suas peças na vitrine.<br><a href="#vitrine" class="link-btn" data-close>Ver vitrine <span>→</span></a></div>`;
    $("[data-close]", list).addEventListener("click", closeBag);
    return;
  }
  list.innerHTML = bag.map(i => {
    const p = byId(i.id);
    return `<div class="bag-item" data-key="${i.key}">
      <img src="${IMG + i.img}" alt="">
      <div>
        <h4>${p.name}</h4>
        <p class="bag-item__meta">Tam. ${i.size}${i.color ? " · " + i.color : ""}</p>
        <div class="qty"><button data-act="minus" aria-label="Diminuir">−</button><span>${i.qty}</span><button data-act="plus" aria-label="Aumentar">+</button></div>
      </div>
      <div class="bag-item__right">
        <span class="bag-item__price">${brl(p.price * i.qty)}</span>
        <button class="bag-item__rm" data-act="rm">Remover</button>
      </div>
    </div>`;
  }).join("");
  const total = bagTotal();
  $("#bagTotal").textContent = brl(total);
  $("#bagInst").textContent = inst(total);
}

$("#bagList").addEventListener("click", e => {
  const b = e.target.closest("[data-act]");
  if (!b) return;
  const item = bag.find(i => i.key === b.closest(".bag-item").dataset.key);
  if (b.dataset.act === "plus") item.qty = Math.min(10, item.qty + 1);
  if (b.dataset.act === "minus") item.qty -= 1;
  if (b.dataset.act === "rm" || item.qty < 1) bag = bag.filter(i => i !== item);
  saveBag();
});
$("#bagClear").addEventListener("click", () => { bag = []; saveBag(); });

function openBag() {
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  setTimeout(() => $(".drawer__head .icon-btn").focus(), 50);
}
function closeBag() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
}
$("#bagOpen").addEventListener("click", openBag);
$$("[data-close]", drawer).forEach(el => el.addEventListener("click", closeBag));

$("#checkout").addEventListener("click", () => {
  if (!bag.length) return;
  const entrega = $("input[name=entrega]:checked").value;
  const lines = bag.map(i => {
    const p = byId(i.id);
    return `• ${i.qty}x ${p.name} — Tam. ${i.size}${i.color ? ", " + i.color : ""} — ${brl(p.price * i.qty)}`;
  });
  const msg = [
    "Olá, Fiore 084! Gostaria de fazer este pedido pelo site:",
    "",
    ...lines,
    "",
    `Subtotal: ${brl(bagTotal())}`,
    `Recebimento: ${entrega}`,
    "",
    "Pode confirmar a disponibilidade?"
  ].join("\n");
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});

addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (modal.classList.contains("is-open")) closeModal();
  else if (drawer.classList.contains("is-open")) closeBag();
  else if (nav.classList.contains("is-open")) burger.click();
});

let toastTimer;
function toast(text) {
  const t = $("#toast");
  t.textContent = text;
  t.classList.add("is-on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-on"), 2600);
}

renderBag();
