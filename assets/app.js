(function () {
  'use strict';

  var WA_NUMBER = '6285895169035';
  var EMAIL = 'lesargito@gmail.com';
  var STORE_KEY = 'circularva-quote-v1';

  var LARVAE_SPECS = [
    ['Species', 'Black soldier fly, <em>Hermetia illucens</em>'],
    ['Form', 'Whole larvae, dried'],
    ['Larval diet', 'Rejected snake fruit (salak) and other plant-based material. No manure, no catering waste.'],
    ['Origin', 'Sleman, D.I. Yogyakarta, Indonesia'],
    ['Typical composition', 'Published values for dried BSF larvae: about 40 to 50% protein and 15 to 35% fat. Our own batch analysis is not published yet.'],
    ['Storage', 'Keep sealed in a cool, dry place. Reseal after opening.']
  ];

  var PRODUCTS = [
    {
      slug: 'dried-bsf-larvae-pouch',
      name: 'Whole Dried BSF Larvae',
      cat: 'retail', badge: 'Retail pouch',
      img: 'img/pouch_250g.jpg', fallback: 'img/photo-hands-larvae.jpg',
      gallery: ['img/pouch_250g.jpg', 'img/larvae_closeup.jpg', 'img/photo-larvae-salak.jpg', 'img/photo-harvest.jpg'],
      short: 'Whole dried black soldier fly larvae in a resealable stand-up pouch. A natural insect treat for wild birds, ornamental fish, backyard poultry and reptiles.',
      sizes: ['100 g', '250 g', '500 g'], defaultSize: '250 g', unit: 'pouches', unitOne: 'pouch',
      facts: ['Salak-fed, plant-based larval diet', 'Resealable stand-up pouch with batch code', 'Private label available on bulk orders'],
      description: '<p>Our larvae are raised on rejected snake fruit from farmer groups in Sleman, Yogyakarta, then harvested, dried and packed whole. Birds, fish, chickens and reptiles take them as a treat or a protein top-up.</p><p>Retail pouches suit pet shops, garden centres and online sellers. Choose the pouch size; we quote per carton for your destination.</p>',
      specs: LARVAE_SPECS,
      packaging: '<p>Resealable stand-up pouch in 100 g, 250 g or 500 g, printed with a batch code. Pouches are packed in export cartons; the carton count is confirmed in your quote.</p><p>Samples ship by international courier. Volume orders ship by sea or air freight from Java.</p>'
    },
    {
      slug: 'dried-bsf-larvae-bulk',
      name: 'Dried BSF Larvae, Bulk',
      cat: 'bulk', badge: 'Bulk / B2B',
      img: 'img/bulk_10kg.jpg', fallback: 'img/photo-harvest.jpg',
      gallery: ['img/bulk_10kg.jpg', 'img/larvae_closeup.jpg', 'img/photo-harvest.jpg', 'img/photo-racks.jpg'],
      short: 'The same whole dried larvae in lined bulk bags for pet-food makers, feed distributors and repackers.',
      sizes: ['5 kg', '10 kg', '20 kg'], defaultSize: '10 kg', unit: 'bags', unitOne: 'bag',
      facts: ['Lined bulk bags with batch code', 'For repacking, pet food and feed blends', 'Private label on request'],
      description: '<p>Bulk bags of whole dried larvae for companies that repack, blend or process. Every bag carries a batch code linked to its harvest date.</p><p>Tell us your monthly volume and target pack size; we plan production against it.</p>',
      specs: LARVAE_SPECS,
      packaging: '<p>Lined bags of 5, 10 or 20 kg with a printed label and batch code. Palletising is arranged per shipment.</p><p>Volume orders ship by sea or air freight from Java, with commercial invoice, packing list, certificate of origin and a quarantine health certificate where required.</p>'
    },
    {
      slug: 'importer-sample-kit',
      name: 'Importer Sample Kit',
      cat: 'sample', badge: 'Sample', amber: true,
      img: 'img/pouch_100g.jpg', fallback: 'img/photo-sieve.jpg',
      gallery: ['img/pouch_100g.jpg', 'img/larvae_closeup.jpg', 'img/photo-hands-larvae.jpg', 'img/photo-larvae-salak.jpg'],
      short: 'Three 100 g pouches, so you can check size, colour, smell and dryness before ordering in volume.',
      sizes: ['3 × 100 g'], defaultSize: '3 × 100 g', unit: 'kits', unitOne: 'kit',
      facts: ['Three 100 g pouches', 'Sent by international courier', 'Courier cost quoted before sending'],
      description: '<p>The easiest way to judge the product is to hold it. The kit has three 100 g pouches of whole dried larvae.</p><p>Add the kit to your quote list with your country and we reply with the courier cost.</p>',
      specs: LARVAE_SPECS,
      packaging: '<p>Three sealed 100 g pouches in one courier box. Courier cost depends on the destination and is quoted before sending.</p>'
    },
    {
      slug: 'bsf-frass',
      name: 'BSF Frass Soil Amendment',
      cat: 'frass', badge: 'Soil',
      img: 'img/frass_5kg.jpg', fallback: 'img/photo-biopond.jpg',
      gallery: ['img/frass_5kg.jpg', 'img/photo-biopond.jpg', 'img/photo-fields.jpg', 'img/photo-sieve.jpg'],
      short: 'The residue left after rearing: larval frass and fruit fibre. Used as an organic soil amendment on horticulture farms.',
      sizes: ['5 kg', '25 kg'], defaultSize: '5 kg', unit: 'bags', unitOne: 'bag',
      facts: ['From the same salak-fed farm', 'Supplied within Indonesia', 'Export on request'],
      description: '<p>Frass is what remains in the rearing trays: larval droppings, shed skins and fruit fibre. Salak farmers around our site use it on their soil, which closes the loop the larvae start.</p>',
      specs: [
        ['Material', 'Black soldier fly frass with residual snake fruit fibre'],
        ['Use', 'Organic soil amendment for horticulture'],
        ['Origin', 'Sleman, D.I. Yogyakarta, Indonesia'],
        ['Export', 'On request. Some markets require heat treatment before import (the EU requires 70 °C for 60 minutes).']
      ],
      packaging: '<p>Woven or kraft bags of 5 or 25 kg. Supplied within Indonesia; export shipments are quoted on request.</p>'
    }
  ];

  function bySlug(slug) { for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].slug === slug) return PRODUCTS[i]; return null; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function imgTag(src, fallback, alt, extra) {
    return '<img src="' + src + '" alt="' + esc(alt) + '" ' + (extra || '') + ' onerror="this.onerror=null;this.src=\'' + fallback + '\'">';
  }
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------------- Quote list ---------------- */
  var quote = [];
  try { quote = JSON.parse(localStorage.getItem(STORE_KEY) || '[]') || []; } catch (e) { quote = []; }
  function saveQuote() { try { localStorage.setItem(STORE_KEY, JSON.stringify(quote)); } catch (e) { /* storage blocked */ } }

  function addToQuote(slug, size, qty) {
    var p = bySlug(slug); if (!p) return;
    size = size || p.defaultSize; qty = Math.max(1, parseInt(qty, 10) || 1);
    var hit = null;
    quote.forEach(function (q) { if (q.slug === slug && q.size === size) hit = q; });
    if (hit) hit.qty += qty; else quote.push({ slug: slug, size: size, qty: qty });
    saveQuote(); renderQuote();
    toast(p.name + ' (' + size + ') added to your quote list');
  }

  function quoteText() {
    if (!quote.length) return '';
    return quote.map(function (q) {
      var p = bySlug(q.slug);
      return '- ' + (p ? p.name : q.slug) + ', ' + q.size + ' x ' + q.qty + ' ' + (p ? (q.qty === 1 ? p.unitOne : p.unit) : '');
    }).join('\n');
  }

  function renderQuote() {
    var count = quote.reduce(function (n, q) { return n + q.qty; }, 0);
    $$('[data-quote-count]').forEach(function (el) { el.textContent = count; el.setAttribute('data-count', count); });
    var body = $('[data-quote-body]');
    if (!quote.length) {
      body.innerHTML = '<div class="empty-state"><svg><use href="#i-list"/></svg><h3>Your quote list is empty</h3><p>Add products from the shop and send them to us in one message.</p><a class="btn btn-primary btn-sm" href="#shop" data-close-quote>Go to shop</a></div>';
    } else {
      body.innerHTML = quote.map(function (q, i) {
        var p = bySlug(q.slug) || { name: q.slug, img: '', fallback: '', unit: '' };
        return '<div class="q-item">' + imgTag(p.img, p.fallback, p.name) +
          '<div><h3>' + esc(p.name) + '</h3><div class="q-meta">Size: ' + esc(q.size) + '</div>' +
          '<div class="q-row"><div class="qty qty-sm"><button type="button" data-q-dec="' + i + '" aria-label="Decrease">−</button>' +
          '<input type="number" min="1" value="' + q.qty + '" data-q-input="' + i + '" aria-label="Quantity">' +
          '<button type="button" data-q-inc="' + i + '" aria-label="Increase">+</button></div>' +
          '<button class="link-btn" type="button" data-q-remove="' + i + '">Remove</button></div></div></div>';
      }).join('');
    }
    var wa = $('[data-quote-wa]');
    var msg = 'Hello CircuLarva, I would like a quote for:\n' + (quoteText() || '- (please list products)') + '\n\nCountry: \nCompany: ';
    wa.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
    wa.target = '_blank'; wa.rel = 'noopener';
    var field = $('[data-items-field]');
    if (field && (!field.value || field.getAttribute('data-auto') === '1')) { field.value = quoteText(); field.setAttribute('data-auto', '1'); }
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('button, a');
    if (!t) return;
    if (t.hasAttribute('data-q-inc')) { quote[+t.getAttribute('data-q-inc')].qty++; saveQuote(); renderQuote(); }
    else if (t.hasAttribute('data-q-dec')) { var q = quote[+t.getAttribute('data-q-dec')]; q.qty = Math.max(1, q.qty - 1); saveQuote(); renderQuote(); }
    else if (t.hasAttribute('data-q-remove')) { quote.splice(+t.getAttribute('data-q-remove'), 1); saveQuote(); renderQuote(); }
  });
  document.addEventListener('change', function (e) {
    if (e.target.hasAttribute('data-q-input')) {
      var q = quote[+e.target.getAttribute('data-q-input')]; q.qty = Math.max(1, parseInt(e.target.value, 10) || 1); saveQuote(); renderQuote();
    }
  });

  function openQuote() { document.body.classList.add('drawer-open'); $('.drawer').setAttribute('aria-hidden', 'false'); }
  function closeQuote() { document.body.classList.remove('drawer-open'); $('.drawer').setAttribute('aria-hidden', 'true'); }
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-open-quote]')) { e.preventDefault(); hideToast(); openQuote(); }
    if (e.target.closest('[data-close-quote]')) { closeQuote(); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeQuote(); document.body.classList.remove('nav-open'); } });

  /* ---------------- Toast ---------------- */
  var toastTimer;
  function toast(text) {
    var el = $('.toast'); $('[data-toast-text]').textContent = text; el.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(hideToast, 3200);
  }
  function hideToast() { $('.toast').classList.remove('show'); }

  /* ---------------- Cards ---------------- */
  function card(p) {
    return '<article class="product-card">' +
      '<a class="card-media" href="#product/' + p.slug + '">' + imgTag(p.img, p.fallback, p.name, 'loading="lazy"') +
      '<span class="card-badge' + (p.amber ? ' is-amber' : '') + '">' + esc(p.badge) + '</span></a>' +
      '<div class="card-body"><h3><a href="#product/' + p.slug + '">' + esc(p.name) + '</a></h3>' +
      '<p>' + esc(p.short) + '</p>' +
      '<div class="size-chips">' + p.sizes.map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('') + '</div>' +
      '<div class="card-price">Price on request <small>· per ' + esc(p.unitOne) + '</small></div>' +
      '<div class="card-actions"><a class="btn btn-ghost btn-sm" href="#product/' + p.slug + '">Details</a>' +
      '<button class="btn btn-buy btn-sm" type="button" data-add="' + p.slug + '">Add to quote</button></div></div></article>';
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-add]');
    if (b) addToQuote(b.getAttribute('data-add'));
  });

  function renderFeatured() { $('[data-featured]').innerHTML = PRODUCTS.map(card).join(''); }

  var currentFilter = 'all';
  function renderShop(filter) {
    currentFilter = filter || 'all';
    var list = PRODUCTS.filter(function (p) { return currentFilter === 'all' || p.cat === currentFilter; });
    $('[data-shop-grid]').innerHTML = list.map(card).join('');
    $('[data-result-count]').textContent = list.length + (list.length === 1 ? ' product' : ' products');
    $$('[data-filter]').forEach(function (c) { c.setAttribute('aria-pressed', c.getAttribute('data-filter') === currentFilter ? 'true' : 'false'); });
  }
  document.addEventListener('click', function (e) {
    var c = e.target.closest('[data-filter]');
    if (c) {
      var f = c.getAttribute('data-filter');
      history.replaceState(null, '', f === 'all' ? '#shop' : '#shop/' + f);
      renderShop(f);
    }
  });

  /* ---------------- Product page ---------------- */
  function renderProduct(slug) {
    var p = bySlug(slug) || PRODUCTS[0];
    var host = $('[data-pdp]');
    var state = { size: p.defaultSize, qty: 1 };
    host.innerHTML =
      '<div class="crumbs"><a href="#home">Home</a> / <a href="#shop">Shop</a> / ' + esc(p.name) + '</div>' +
      '<div class="pdp">' +
        '<div><div class="gallery-main">' + imgTag(p.gallery[0], p.fallback, p.name, 'data-main-img') + '</div>' +
        '<div class="thumbs">' + p.gallery.map(function (g, i) {
          return '<button type="button" data-thumb="' + g + '" aria-current="' + (i === 0) + '" aria-label="Image ' + (i + 1) + '">' + imgTag(g, p.fallback, '', 'loading="lazy"') + '</button>';
        }).join('') + '</div></div>' +
        '<div class="pdp-info"><span class="card-badge">' + esc(p.badge) + '</span>' +
          '<h1>' + esc(p.name) + '</h1><p class="pdp-lead">' + esc(p.short) + '</p>' +
          '<div class="price-box"><strong>Price on request</strong><span class="muted">Quoted by volume and destination</span></div>' +
          '<span class="opt-label">Size</span><div class="opt-group" data-sizes>' + p.sizes.map(function (s) {
            return '<button type="button" data-size="' + esc(s) + '" aria-pressed="' + (s === p.defaultSize) + '">' + esc(s) + '</button>';
          }).join('') + '</div>' +
          '<span class="opt-label">Quantity (' + esc(p.unit) + ')</span>' +
          '<div class="buy-row"><div class="qty"><button type="button" data-pdp-dec aria-label="Decrease">−</button><input type="number" min="1" value="1" data-pdp-qty aria-label="Quantity"><button type="button" data-pdp-inc aria-label="Increase">+</button></div>' +
          '<button class="btn btn-buy" type="button" data-pdp-add><svg><use href="#i-list"/></svg>Add to quote list</button></div>' +
          '<a class="btn btn-outline btn-block" target="_blank" rel="noopener" data-pdp-wa href="#"><svg><use href="#i-wa"/></svg>Ask about this product on WhatsApp</a>' +
          '<ul class="key-facts">' + p.facts.map(function (f) { return '<li><svg><use href="#i-check"/></svg>' + esc(f) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="tabs"><div class="tab-list" role="tablist">' +
        '<button role="tab" type="button" aria-selected="true" data-tab="desc">Description</button>' +
        '<button role="tab" type="button" aria-selected="false" data-tab="specs">Specifications</button>' +
        '<button role="tab" type="button" aria-selected="false" data-tab="pack">Packaging &amp; shipping</button>' +
      '</div>' +
      '<div class="tab-panel" data-panel="desc">' + p.description + '</div>' +
      '<div class="tab-panel" data-panel="specs" hidden><table class="spec-table">' + p.specs.map(function (r) { return '<tr><th>' + r[0] + '</th><td>' + r[1] + '</td></tr>'; }).join('') + '</table></div>' +
      '<div class="tab-panel" data-panel="pack" hidden>' + p.packaging + '</div></div>';

    function updateWa() {
      var msg = 'Hello CircuLarva, I am interested in ' + p.name + ' (' + state.size + '), about ' + state.qty + ' ' + (state.qty === 1 ? p.unitOne : p.unit) + '. Country: ';
      $('[data-pdp-wa]', host).href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
    }
    updateWa();
    host.onclick = function (e) {
      var t = e.target.closest('button'); if (!t) return;
      if (t.hasAttribute('data-thumb')) {
        $('[data-main-img]', host).src = t.getAttribute('data-thumb');
        $$('[data-thumb]', host).forEach(function (b) { b.setAttribute('aria-current', b === t ? 'true' : 'false'); });
      } else if (t.hasAttribute('data-size')) {
        state.size = t.getAttribute('data-size');
        $$('[data-size]', host).forEach(function (b) { b.setAttribute('aria-pressed', b === t ? 'true' : 'false'); });
      } else if (t.hasAttribute('data-pdp-inc')) { state.qty++; }
      else if (t.hasAttribute('data-pdp-dec')) { state.qty = Math.max(1, state.qty - 1); }
      else if (t.hasAttribute('data-pdp-add')) { addToQuote(p.slug, state.size, state.qty); }
      else if (t.hasAttribute('data-tab')) {
        var id = t.getAttribute('data-tab');
        $$('[data-tab]', host).forEach(function (b) { b.setAttribute('aria-selected', b === t ? 'true' : 'false'); });
        $$('[data-panel]', host).forEach(function (pn) { pn.hidden = pn.getAttribute('data-panel') !== id; });
      }
      $('[data-pdp-qty]', host).value = state.qty;
      updateWa();
    };
    host.onchange = function (e) {
      if (e.target.hasAttribute('data-pdp-qty')) { state.qty = Math.max(1, parseInt(e.target.value, 10) || 1); e.target.value = state.qty; updateWa(); }
    };
    $('[data-related]').innerHTML = PRODUCTS.filter(function (x) { return x.slug !== p.slug; }).slice(0, 3).map(card).join('');
    document.title = p.name + ' | CircuLarva';
  }

  /* ---------------- Contact form ---------------- */
  var form = $('[data-quote-form]');
  var sendMode = 'wa';
  $$('[data-send]', form).forEach(function (b) { b.addEventListener('click', function () { sendMode = b.getAttribute('data-send'); }); });
  $('[data-items-field]').addEventListener('input', function (e) { e.target.setAttribute('data-auto', '0'); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    if (!String(d.get('name') || '').trim() || !String(d.get('country') || '').trim()) {
      $('[data-form-note]').textContent = 'Please fill in your name and country so we can quote the right shipping.';
      $('[data-form-note]').style.color = '#B42318';
      return;
    }
    var body = 'Hello CircuLarva,\n\nName: ' + d.get('name') + '\nCompany: ' + (d.get('company') || '-') + '\nCountry: ' + d.get('country') +
      '\nBuyer type: ' + d.get('type') + '\n\nProducts and quantities:\n' + (d.get('items') || '-') + '\n\nNotes:\n' + (d.get('message') || '-');
    if (sendMode === 'mail') {
      window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Quote request - ' + d.get('country')) + '&body=' + encodeURIComponent(body);
    } else {
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(body), '_blank', 'noopener');
    }
  });

  /* ---------------- Router ---------------- */
  var VIEWS = ['home', 'shop', 'product', 'export', 'farm', 'about', 'contact'];
  function movePill(link) {
    var pill = $('.nav-pill'); if (!pill) return;
    if (!link) { pill.style.width = '0'; return; }
    var list = $('.nav-list');
    var lr = list.getBoundingClientRect(), r = link.getBoundingClientRect();
    pill.style.width = r.width + 'px';
    pill.style.transform = 'translateX(' + (r.left - lr.left) + 'px)';
  }
  function route() {
    var hash = (location.hash || '#home').slice(1);
    var parts = hash.split('/');
    var view = VIEWS.indexOf(parts[0]) >= 0 ? parts[0] : 'home';
    $$('.view').forEach(function (v) { v.classList.toggle('is-active', v.getAttribute('data-view') === view); });
    var navKey = view === 'product' ? 'shop' : view;
    var active = null;
    $$('[data-nav]').forEach(function (a) {
      var on = a.getAttribute('data-nav') === navKey;
      if (on) { a.setAttribute('aria-current', 'page'); active = a; } else a.removeAttribute('aria-current');
    });
    movePill(active);
    if (view === 'shop') renderShop(parts[1] || 'all');
    if (view === 'product') renderProduct(parts[1]);
    if (view !== 'product') document.title = $('[data-view="' + view + '"]').getAttribute('data-title');
    document.body.classList.remove('nav-open');
    $('[data-menu]').setAttribute('aria-expanded', 'false');
    closeQuote();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  window.addEventListener('resize', function () { movePill($('[data-nav][aria-current="page"]')); });
  $('[data-menu]').addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    this.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  renderFeatured();
  renderQuote();
  route();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { movePill($('[data-nav][aria-current="page"]')); });
})();
