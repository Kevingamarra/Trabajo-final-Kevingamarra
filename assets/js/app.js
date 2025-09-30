/* ---- DATA ---- */
/* PERFUMERÍA (con subcarpetas) */

// ---- FRESCOR ----
const productosFrescor = [
  { id:'pf1',  name:'Pitangá Frescor',   price:13999, img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-1.jpg',  category:'perfumeria', subcat:'Frescor', aromas:['Cítrico','Verde','Fresco'] },
  { id:'pf21', name:'Frescor Ishpink',   price:0,     img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-21.jpg', category:'perfumeria', subcat:'Frescor', aromas:['Floral','Especiado suave','Herbal'] },
  { id:'pf22', name:'Frescor Açaí',      price:0,     img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-22.jpg', category:'perfumeria', subcat:'Frescor', aromas:['Frutal','Dulce','Exótico'] },
  { id:'pf23', name:'Frescor Castaña',   price:0,     img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-23.jpg', category:'perfumeria', subcat:'Frescor', aromas:['Dulce','Cremoso','Avainillado','Frutal seco'] },
  { id:'pf24', name:'Frescor Cacau',     price:0,     img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-24.jpg', category:'perfumeria', subcat:'Frescor', aromas:['Cacao','Dulce','Gourmand','Amaderado suave'] },
  { id:'pf25', name:'Frescor Maracuyá',  price:0,     img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-25.jpg', category:'perfumeria', subcat:'Frescor', aromas:['Frutal','Cítrico','Tropical'] },
  { id:'pf26', name:'Frescor Estoraque', price:0,     img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-26.jpg', category:'perfumeria', subcat:'Frescor', aromas:['Ambarado','Especiado','Resinoso','Balsámico'] },
];

// ---- KRISKA ----
const productosKriska = [
  { id:'pf4', name:'Kriska Shock',    price:12999, img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-4.jpg',  category:'perfumeria', subcat:'Kriska', aromas:['Frutal'] },
  { id:'kr1', name:'Kriska Drama',    price:11999, img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-12.jpg', category:'perfumeria', subcat:'Kriska', aromas:['Frutal','Intenso'] },
  { id:'kr2', name:'Kriska Clásico',  price:11499, img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-13.jpg', category:'perfumeria', subcat:'Kriska', aromas:['Floral'] },
  { id:'kr3', name:'Kriska Jeans',    price:10999, img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-14.jpg', category:'perfumeria', subcat:'Kriska', aromas:['Cítrico','Casual'] },
];

// ---- HUMOR ----
const productosHumorFem = [
  { id:'pf5', name:'Humor Própria',      price:11999, img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-5.jpg',  category:'perfumeria', subcat:'Humor', aromas:['Frutal'] },
  { id:'hu1', name:'Humor Beijo',        price:11999, img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-9.jpg',  category:'perfumeria', subcat:'Humor', aromas:['Frutal','Dulce'] },
  { id:'hu2', name:'Humor Transforma',   price:12499, img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-10.jpg', category:'perfumeria', subcat:'Humor', aromas:['Floral','Amaderado'] },
  { id:'hu3', name:'Humor Meu Primeiro', price:12999, img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-11.jpg', category:'perfumeria', subcat:'Humor', aromas:['Oriental'] },
];

// ---- LUNA ----
const productosLuna = [
  { id:'pf8',  name:'Luna Rubí',      price:14499, img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-8.jpg',  category:'perfumeria', subcat:'Luna', aromas:['Chipre','Especiado','Amaderado','Floral'] },
  { id:'lu1',  name:'Luna Radiante',  price:13999, img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-15.jpg', category:'perfumeria', subcat:'Luna', aromas:['Floral','Frutal'] },
  { id:'lu2',  name:'Luna Actitud',   price:14499, img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-16.jpg', category:'perfumeria', subcat:'Luna', aromas:['Amaderado','Floral'] },
  { id:'lu3',  name:'Luna Intenso',   price:14999, img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-17.jpg', category:'perfumeria', subcat:'Luna', aromas:['Oriental','Intenso'] },
  { id:'pf18', name:'Luna Ilumina',   price:0,     img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-18.jpg', category:'perfumeria', subcat:'Luna', aromas:['Chipre','Floral','Frutal','Especiado suave','Almizclado'] },
  { id:'pf19', name:'Luna Coragem',   price:0,     img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-19.jpg', category:'perfumeria', subcat:'Luna', aromas:['Chipre','Floral','Especiado','Amaderado','Ámbar'] },
  { id:'pf20', name:'Luna Absoluta',  price:0,     img:'assets/img/productos/perfumeria/femenina/perfumeria-femenina-20.jpg', category:'perfumeria', subcat:'Luna', aromas:['Chipre Floral','Frutal rojo','Floral','Amaderado','Almizclado','Dulce'] },
];

/* ---- MASCULINO ---- */

// ---- KAIAK ----
const productosKaiak = [
  { id:'pm6',  name:'Kaiak Urbe',     price:15999, img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-6.jpg',  category:'perfumeria', subcat:'Kaiak', aromas:['Aromático','Amaderado'] },
  { id:'pm7',  name:'Kaiak Aventura', price:15999, img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-7.jpg',  category:'perfumeria', subcat:'Kaiak', aromas:['Aromático','Fresco'] },
  { id:'pm8',  name:'Kaiak Oceano',   price:16999, img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-8.jpg',  category:'perfumeria', subcat:'Kaiak', aromas:['Acuático','Aromático'] },
  { id:'pm13', name:'Kaiak Noite',    price:0,     img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-13.jpg', category:'perfumeria', subcat:'Kaiak', aromas:['Aromático','Especiado','Amaderado'] },
  { id:'pm14', name:'Kaiak Pulso',    price:0,     img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-14.jpg', category:'perfumeria', subcat:'Kaiak', aromas:['Cítrico','Aromático','Amaderado'] },
  { id:'pm15', name:'Kaiak Sonar',    price:0,     img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-15.jpg', category:'perfumeria', subcat:'Kaiak', aromas:['Acuático','Aromático','Amaderado'] },
  { id:'pm16', name:'Kaiak Clásico',  price:0,     img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-16.jpg', category:'perfumeria', subcat:'Kaiak', aromas:['Aromático','Acuático','Fougère'] },
];

// ---- ESSENCIAL ----
const productosEssencial = [
  { id:'pm2',  name:'Essencial Oud',                price:21999, img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-2.jpg',  category:'perfumeria', subcat:'Essencial', aromas:['Amaderado','Especiado','Oud'] }, 
  { id:'pe2',  name:'Essencial Supreme Masculino',  price:23999, img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-9.jpg',  category:'perfumeria', subcat:'Essencial', aromas:['Amaderado','Ámbar','Especiado'] }, 
  { id:'pe4',  name:'Essencial Oud Masculino',      price:24999, img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-10.jpg', category:'perfumeria', subcat:'Essencial', aromas:['Amaderado','Especiado','Oud'] }, 
  { id:'pe5',  name:'Essencial Exclusivo Masculino',price:22999, img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-11.jpg', category:'perfumeria', subcat:'Essencial', aromas:['Cítrico','Amaderado'] },
  { id:'pe17', name:'Essencial Único',              price:0,     img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-17.jpg', category:'perfumeria', subcat:'Essencial', aromas:['Amaderado','Especiado','Ámbar'] }, 
  { id:'pe18', name:'Essencial Oud Pimienta',       price:0,     img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-18.jpg', category:'perfumeria', subcat:'Essencial', aromas:['Amaderado','Especiado','Oud','Frutal'] }, 
  { id:'pe19', name:'Essencial Elixir',             price:0,     img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-19.jpg', category:'perfumeria', subcat:'Essencial', aromas:['Amaderado','Cuero','Vainilla','Ámbar'] }, 
];

// ---- HOMEM ----
const productosHomem = [
  { id:'pm3',  name:'Homem Potence',  price:18999, img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-3.jpg',  category:'perfumeria', subcat:'Homem', aromas:['Amaderado','Especiado'] },
  { id:'hm1',  name:'Homem Neo',      price:25999, img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-12.jpg', category:'perfumeria', subcat:'Homem', aromas:['Oriental','Amaderado'] },
  { id:'hm2',  name:'Homem Coragio',  price:23999, img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-4.jpg',  category:'perfumeria', subcat:'Homem', aromas:['Cítrico','Amaderado'] },
  { id:'hm3',  name:'Homem Essence',  price:24999, img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-5.jpg',  category:'perfumeria', subcat:'Homem', aromas:['Ámbar','Especiado'] },
  { id:'hm20', name:'Homem Elo',      price:0,     img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-20.jpg', category:'perfumeria', subcat:'Homem', aromas:['Amaderado','Aromático','Especiado'] }, 
  { id:'hm21', name:'Homem Tato',     price:0,     img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-21.jpg', category:'perfumeria', subcat:'Homem', aromas:['Amaderado','Especiado','Cuero','Ámbar'] }, 
  { id:'hm22', name:'Homem Clásico',  price:0,     img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-22.jpg', category:'perfumeria', subcat:'Homem', aromas:['Aromático','Fougère','Amaderado'] }, 
  { id:'hm23', name:'Homem Nos',      price:0,     img:'assets/img/productos/perfumeria/masculina/perfumeria-masculina-23.jpg', category:'perfumeria', subcat:'Homem', aromas:['Amaderado','Ámbar','Especiado'] }, 
];

// ---- UNIÓN MASCULINA (Kaiak + Essencial + Homem) ----
const productosMasculina = [
  ...productosKaiak,
  ...productosEssencial,
  ...productosHomem,
];

// ---- UNIÓN PERFUMERÍA (femenina + masculina) ----
const products = [
  ...productosFrescor,
  ...productosKriska,
  ...productosHumorFem,
  ...productosLuna,
  ...productosMasculina,
];

const SUBCAT_ORDER = ['Kaiak','Essencial','Kriska','Luna','Humor','Homem','Frescor'];
const currentFilters = { subcat:'*', aroma:'*' };

/* CUIDADOS */
const productosCuidados = [
  { id:'cd1', name:'Tododia Cereza Negra – Crema 400 ml',     price:8999,  img:'assets/img/productos/cuidados/cuidados-1.jpg', subcat:'Tododia' },
  { id:'cd2', name:'Tododia Body Splash Cereza Negra 200 ml', price:7999,  img:'assets/img/productos/cuidados/cuidados-2.jpg', subcat:'Tododia' },
  { id:'cd3', name:'Jabón en barra Tododia (x5)',             price:6499,  img:'assets/img/productos/cuidados/cuidados-3.jpg', subcat:'Tododia' },
  { id:'cd4', name:'Ekos Mini Jabones Surtidos',              price:6999,  img:'assets/img/productos/cuidados/cuidados-4.jpg', subcat:'Ekos' },
  { id:'cd5', name:'Ekos Castanha Pulpa corporal 400 ml',     price:9999,  img:'assets/img/productos/cuidados/cuidados-5.jpg', subcat:'Ekos' },
  { id:'cd6', name:'Tododia Refil 400 ml',                    price:5999,  img:'assets/img/productos/cuidados/cuidados-6.jpg', subcat:'Tododia' },
];

/* MAQUILLAJE */
const productosMaquillaje = [
  { id:'mq1', name:'UNA Cushion Base',      price:10999, img:'assets/img/productos/maquillaje/maquillaje-1.jpg', subcat:'UNA' },
  { id:'mq2', name:'UNA Gloss FPS15',       price:6999,  img:'assets/img/productos/maquillaje/maquillaje-2.jpg', subcat:'UNA' },
  { id:'mq3', name:'FACES Máscara Negra',   price:5499,  img:'assets/img/productos/maquillaje/maquillaje-3.jpg', subcat:'FACES' },
  { id:'mq4', name:'UNA Máscara Magnífico', price:8499,  img:'assets/img/productos/maquillaje/maquillaje-4.jpg', subcat:'UNA' },
  { id:'mq5', name:'FACES Labial',          price:5999,  img:'assets/img/productos/maquillaje/maquillaje-5.jpg', subcat:'FACES' },
  { id:'mq6', name:'UNA Primer Blur',       price:7999,  img:'assets/img/productos/maquillaje/maquillaje-6.jpg', subcat:'UNA' },
  { id:'mq7', name:'UNA Serum Pestañas',    price:9999,  img:'assets/img/productos/maquillaje/maquillaje-7.jpg', subcat:'UNA' },
  { id:'mq8', name:'UNA Delineador',        price:6499,  img:'assets/img/productos/maquillaje/maquillaje-8.jpg', subcat:'UNA' },
];

/* REGALOS */
const productosRegalos = [
  { id:'rg1', name:'Set Tododia jabones (edición)', price:7999,  img:'assets/img/productos/regalos/regalos-1.jpg', subcat:'Sets' },
  { id:'rg2', name:'Kaiak Vital Dúo',               price:21999, img:'assets/img/productos/regalos/regalos-2.jpg', subcat:'Perfumería' },
  { id:'rg3', name:'Kit UNA Mirada',                price:16999, img:'assets/img/productos/regalos/regalos-3.jpg', subcat:'Maquillaje' },
  { id:'rg4', name:'Spray de ambientes Todanoite',  price:10999, img:'assets/img/productos/regalos/regalos-4.jpg', subcat:'Hogar' },
  { id:'rg5', name:'Bolsa de regalo Natura',        price:1999,  img:'assets/img/productos/regalos/regalos-5.jpg', subcat:'Accesorios' },
  { id:'rg6', name:'Set regalo mini',               price:9999,  img:'assets/img/productos/regalos/regalos-6.jpg', subcat:'Sets' },
];

/* ---- Utilidades ----*/
const slug = s => (s || 'otros').toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9\-]/g,'');

/* ---- Render Perfumería (actualizado) ---- */
function renderPerfumeria({ subcat='*', aroma='*' } = {}){
  const container = document.getElementById('perfumeria-groups');
  if (!container) return;

  if (!Array.isArray(products)) {
    console.error('products no está definido o no es un array', products);
    container.innerHTML = '<p class="text-danger">No se pudo cargar perfumería.</p>';
    return;
  }

  let list = products.filter(p => p.category === 'perfumeria');
  if (subcat !== '*') list = list.filter(p => p.subcat === subcat);
  if (aroma !== '*')  list = list.filter(p => (p.aromas || []).indexOf(aroma) !== -1);

  // agrupar por subcat (compat total)
  const groups = {};
  for (const p of list) {
    const key = p.subcat || 'Otros';
    if (!groups[key]) groups[key] = [];
    groups[key].push(p);
  }

  // orden definido
  const ordered = (subcat === '*'
    ? SUBCAT_ORDER.filter(k => (groups[k] || []).length > 0)
    : [subcat]).filter(Boolean);

  container.innerHTML = ordered.map(key => {
    const items = (groups[key] || []).sort((a,b)=> a.name.localeCompare(b.name));
    const rowId = `row-${slug(key)}`;
    return `
      <h3 class="subcat-heading mb-3 animate-fadeUp">${key}</h3>
      <div class="carousel-row mb-4">
        <button class="carousel-btn prev" aria-label="Anterior" data-target="${rowId}">
          <i class="bi bi-chevron-left"></i>
        </button>
        <div class="products-row" id="${rowId}">
          ${items.map((p,i) => cardProductHTML(p,i)).join('')}
        </div>
        <button class="carousel-btn next" aria-label="Siguiente" data-target="${rowId}">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    `;
  }).join('') || '<p class="text-muted">No hay productos para el filtro seleccionado.</p>';

  initRowNavButtons();
  watchReveals(container);
}

/* ---- Card producto ----- */
function cardProductHTML(p, i=0){
  const aromaBadges = (p.aromas||[]).map(a => `<span class="badge badge-aroma me-1 mb-1">${a}</span>`).join('');
  const delay = (0.04 * i).toFixed(2);
  return `
    <div class="card product shadow-sm reveal" style="animation-delay:${delay}s">
      <div class="img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="d-flex flex-wrap gap-1 mb-1">
          <span class="badge-subcat">${p.subcat || 'Otros'}</span>
          ${aromaBadges}
        </div>
        <h3 class="title mb-1">${p.name}</h3>
        <div class="price fw-bold">$ ${p.price.toLocaleString('es-AR')}</div>
      </div>
      <div class="card-footer bg-transparent border-0 pt-0">
        <button class="btn btn-brand w-100" data-add="${p.id}">Agregar</button>
      </div>
    </div>
  `;
}

/* ---- Flechas carrusel ---- */
function initRowNavButtons(){
  document.querySelectorAll('.carousel-btn').forEach(btn=>{
    const targetId = btn.getAttribute('data-target');
    const row = document.getElementById(targetId);
    if(!row) return;

    const step = () => {
      const card = row.querySelector('.card.product');
      const val = card ? card.getBoundingClientRect().width + 16 : row.clientWidth * 0.8;
      return Math.max(200, Math.min(val, 420));
    };

    const updateDisabled = () => {
      btn.closest('.carousel-row').querySelectorAll('.carousel-btn').forEach(b=>{
        const r = document.getElementById(b.getAttribute('data-target'));
        b.disabled = (b.classList.contains('prev') && r.scrollLeft <= 1)
                  || (b.classList.contains('next') && r.scrollLeft + r.clientWidth >= r.scrollWidth - 1);
      });
    };
    updateDisabled();
    row.addEventListener('scroll', updateDisabled, { passive:true });

    btn.addEventListener('click', ()=>{
      row.scrollBy({ left: btn.classList.contains('prev') ? -step() : step(), behavior:'smooth' });
    });
  });
}

/* ---- Carruseles simples ---- */
function renderCarouselSimple(rowId, items){
  const row = document.getElementById(rowId);
  if(!row) return;
  row.innerHTML = items.map((p,i) => cardProductHTML({
    ...p, category:'otros', aromas:[], subcat:p.subcat || '—', price:p.price || 0
  }, i)).join('');
  watchReveals(row);
}

/* helper attachRowNav */
function attachRowNav(rowId){
  document.querySelectorAll(`.carousel-btn[data-target="${rowId}"]`).forEach(btn=>{
    const row = document.getElementById(rowId);
    if(!row) return;

    const step = () => {
      const card = row.querySelector('.card.product');
      const val  = card ? card.getBoundingClientRect().width + 16 : row.clientWidth * 0.8;
      return Math.max(200, Math.min(val, 420));
    };
    const updateDisabled = () => {
      btn.closest('.carousel-row').querySelectorAll('.carousel-btn').forEach(b=>{
        const r = document.getElementById(b.getAttribute('data-target'));
        b.disabled = (b.classList.contains('prev') && r.scrollLeft <= 1)
                  || (b.classList.contains('next') && r.scrollLeft + r.clientWidth >= r.scrollWidth - 1);
      });
    };
    updateDisabled();
    row.addEventListener('scroll', updateDisabled, { passive:true });

    btn.addEventListener('click', ()=>{
      row.scrollBy({ left: btn.classList.contains('prev') ? -step() : step(), behavior:'smooth' });
    });
  });
}

/* ---- Reveal on Scroll (solo cards) ---- */
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('animate-fadeUp');
      entry.target.classList.remove('reveal');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

function watchReveals(scope=document){
  scope.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
}

/* ---- Buscador ---- */
const searchForm = document.querySelector('form[role="search"]');
if (searchForm) {
  searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const input = document.getElementById('searchProducts');
    const q = (input && input.value ? input.value : '').toLowerCase().trim();
    if(!q){ renderPerfumeria(currentFilters); return; }
    currentFilters.subcat='*';
    const filtered = products.filter(p =>
      p.category==='perfumeria' &&
      (p.name.toLowerCase().includes(q) || ((p.subcat||'').toLowerCase().includes(q)))
    );
    const container = document.getElementById('perfumeria-groups');
    const rowId = 'row-search';
    container.innerHTML = `
      <h3 class="subcat-heading animate-fadeUp">Resultados</h3>
      <div class="carousel-row">
        <button class="carousel-btn prev" data-target="${rowId}"><i class="bi bi-chevron-left"></i></button>
        <div class="products-row" id="${rowId}">
          ${filtered.map((p,i) => cardProductHTML(p,i)).join('')}
        </div>
        <button class="carousel-btn next" data-target="${rowId}"><i class="bi bi-chevron-right"></i></button>
      </div>`;
    initRowNavButtons();
    watchReveals(container);
  });
}

/* ---- Carrito ---- */
let cart = [];
function addToCart(prod){ cart.push(prod); updateCart(); }
function updateCart(){
  const list  = document.getElementById('cartItems');
  const badge = document.getElementById('cartBadge');
  const total = document.getElementById('cartTotal');
  if(!list) return;
  list.innerHTML = cart.map(p => `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      ${p.name} <span>$ ${p.price.toLocaleString('es-AR')}</span>
    </li>
  `).join('');
  if (badge) badge.textContent = cart.length;
  if (total) total.textContent = "$ " + cart.reduce((s,p)=>s+p.price,0).toLocaleString('es-AR');
}
document.addEventListener('click', (e)=>{
  const addBtn = e.target && e.target.closest ? e.target.closest('[data-add]') : null;
  if(addBtn){
    const id = addBtn.getAttribute('data-add');
    const all = [...products, ...productosCuidados, ...productosMaquillaje, ...productosRegalos];
    const prod = all.find(p=>p.id===id);
    if(prod) addToCart(prod);
  }
});
document.getElementById('btnClearCart')?.addEventListener('click', ()=>{ cart=[]; updateCart(); });

/* ---- CHECKOUT POR WHATSAPP ----*/
const WHATSAPP_PHONE = '5491151039074'; // <--- tu número

const formatAR = n => "$ " + Number(n).toLocaleString('es-AR');
const cartTotal = () => cart.reduce((s,p) => s + Number(p.price||0), 0);

// mostrar/ocultar bloque de dirección según método
(function initEnvioToggle(){
  const metodoEnvio = document.getElementById('metodoEnvio');
  const bloqueDireccion = document.getElementById('bloqueDireccion');
  if(!metodoEnvio || !bloqueDireccion) return;

  const toggle = () => {
    if (metodoEnvio.value === 'andreani') {
      bloqueDireccion.classList.remove('d-none');
    } else {
      bloqueDireccion.classList.add('d-none');
    }
  };
  metodoEnvio.addEventListener('change', toggle);
  toggle();
})();

function buildWhatsAppMessageOrError() {
  const nombreEl = document.getElementById('clienteNombre');
  const metodoEl = document.getElementById('metodoEnvio');

  const nombre = nombreEl?.value?.trim() || '';
  const metodo = metodoEl?.value || 'retiro';

  if (!nombre) {
    return { error: 'Por favor, ingresá tu nombre.' };
  }

  let envioTxt = 'Método de envío: Retiro en domicilio del vendedor';
  let dir = { calle:'', ciudad:'', prov:'', cp:'', notas:'' };

  if (metodo === 'andreani') {
    envioTxt = 'Método de envío: Envío a domicilio (Andreani)';
    dir.calle = document.getElementById('dirCalle')?.value?.trim() || '';
    dir.ciudad = document.getElementById('dirCiudad')?.value?.trim() || '';
    dir.prov  = document.getElementById('dirProvincia')?.value?.trim() || '';
    dir.cp    = document.getElementById('dirCP')?.value?.trim() || '';
    dir.notas = document.getElementById('dirNotas')?.value?.trim() || '';

    if (!dir.calle || !dir.ciudad || !dir.prov || !dir.cp) {
      return { error: 'Completá calle y número, ciudad, provincia y código postal para el envío por Andreani.' };
    }
  }

  const total = formatAR(cartTotal());
  const lines = cart.map(p => `• ${p.name} — ${formatAR(p.price)}`).join('\n');

  const direccionBloque = (metodo === 'andreani')
    ? `\nDirección:\n${dir.calle}\n${dir.ciudad}, ${dir.prov} (CP ${dir.cp})${dir.notas ? `\nRef.: ${dir.notas}` : ''}\n`
    : '';

  const msg =
`Hola! Quiero finalizar mi compra:

${lines}

Total: ${total}

Nombre: ${nombre}
${envioTxt}
${direccionBloque}
¿Podemos coordinar el pago?`;

  return { text: encodeURIComponent(msg) };
}

function checkoutViaWhatsApp(){
  if(cart.length === 0){
    alert('Tu carrito está vacío.');
    return;
  }
  const result = buildWhatsAppMessageOrError();
  if (result.error) {
    alert(result.error);
    return;
  }
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${result.text}`;
  window.open(url, '_blank');
}

document.getElementById('btnCheckout')?.addEventListener('click', checkoutViaWhatsApp);

/* ---- Inicio ---- */
document.addEventListener('DOMContentLoaded', ()=>{
  // Filtros perfumería
  document.querySelectorAll('#perfumeria [data-subcat]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('#perfumeria [data-subcat]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      currentFilters.subcat = btn.dataset.subcat;
      renderPerfumeria(currentFilters);
    });
  });
  document.querySelectorAll('#aromaMenu [data-aroma]').forEach(item=>{
    item.addEventListener('click', ()=>{
      currentFilters.aroma = item.dataset.aroma;
      renderPerfumeria(currentFilters);
    });
  });

  // Pintar contenido
  renderPerfumeria();
  renderCarouselSimple('row-cuidados',   productosCuidados);
  renderCarouselSimple('row-maquillaje', productosMaquillaje);
  renderCarouselSimple('row-regalos',    productosRegalos);
  attachRowNav('row-cuidados');
  attachRowNav('row-maquillaje');
  attachRowNav('row-regalos');
});
