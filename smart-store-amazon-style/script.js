const products = [
  { id: 1, title: 'iPhone 15 Pro Max', brand: 'Apple', category: 'Смартфонҳо', price: 12990, originalPrice: 13990, rating: 4.8, stock: 12, icon: '📱', color: 'linear-gradient(135deg,#7f1a1d,#d7a326)', description: 'Барои касоне, ки камераи қавӣ ва кори зуд мехоҳанд.' },
  { id: 2, title: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', category: 'Смартфонҳо', price: 13490, originalPrice: 14500, rating: 4.7, stock: 9, icon: '📲', color: 'linear-gradient(135deg,#1a4c34,#4d8f69)', description: 'Экран ва қалами қулай барои кор, эҷод ва истифодаи ҳаррӯза.' },
  { id: 3, title: 'Xiaomi Redmi Note 13 Pro', brand: 'Xiaomi', category: 'Смартфонҳо', price: 3890, originalPrice: 4290, rating: 4.6, stock: 22, icon: '📱', color: 'linear-gradient(135deg,#8f1d21,#e2a93a)', description: 'Интихоби маъқул барои нархи муносиб ва имконоти хуб.' },
  { id: 4, title: 'MacBook Air M3', brand: 'Apple', category: 'Ноутбукҳо', price: 15690, originalPrice: 16890, rating: 4.9, stock: 7, icon: '💻', color: 'linear-gradient(135deg,#1b355d,#5f9de0)', description: 'Сабук, ором ва муносиб барои донишгоҳ, идора ва сафар.' },
  { id: 5, title: 'Lenovo IdeaPad Slim', brand: 'Lenovo', category: 'Ноутбукҳо', price: 6490, originalPrice: 7190, rating: 4.4, stock: 14, icon: '💼', color: 'linear-gradient(135deg,#6f171a,#c28d2d)', description: 'Барои Word, Excel, дарс ва кори ҳаррӯзаи хонагӣ.' },
  { id: 6, title: 'ASUS VivoBook 15', brand: 'ASUS', category: 'Ноутбукҳо', price: 7290, originalPrice: 7890, rating: 4.5, stock: 10, icon: '🖥️', color: 'linear-gradient(135deg,#1a4c34,#7cb58a)', description: 'Экран ва иҷроиши хуб барои таҳсил ва корбарии ҳамарӯза.' },
  { id: 7, title: 'Sony WH-1000XM5', brand: 'Sony', category: 'Гӯшмонакҳо', price: 3490, originalPrice: 3890, rating: 4.8, stock: 18, icon: '🎧', color: 'linear-gradient(135deg,#47311b,#b48a43)', description: 'Овози тоза ва бекоркунии садои беруни қавӣ.' },
  { id: 8, title: 'AirPods Pro 2', brand: 'Apple', category: 'Гӯшмонакҳо', price: 2790, originalPrice: 3090, rating: 4.7, stock: 20, icon: '🎵', color: 'linear-gradient(135deg,#5d6675,#a8b7cf)', description: 'Барои корбарони iPhone пайвасти осон ва сифати хуб.' },
  { id: 9, title: 'JBL Tune 770NC', brand: 'JBL', category: 'Гӯшмонакҳо', price: 1490, originalPrice: 1790, rating: 4.5, stock: 24, icon: '🎶', color: 'linear-gradient(135deg,#8f1d21,#f0be47)', description: 'Гӯшмонаки машҳур барои мусиқӣ, роҳ ва таҳсил.' },
  { id: 10, title: 'Apple Watch Series 9', brand: 'Apple', category: 'Соатҳои ҳушманд', price: 4790, originalPrice: 5290, rating: 4.6, stock: 11, icon: '⌚', color: 'linear-gradient(135deg,#7f1a1d,#de7f80)', description: 'Назорати саломатӣ ва огоҳномаҳо дар даст.' },
  { id: 11, title: 'Samsung Galaxy Watch 6', brand: 'Samsung', category: 'Соатҳои ҳушманд', price: 3590, originalPrice: 3990, rating: 4.5, stock: 13, icon: '⏱️', color: 'linear-gradient(135deg,#1a4c34,#3b9870)', description: 'Барои машқ, хоб ва пайвастагии қулай бо телефон.' },
  { id: 12, title: 'Xiaomi Watch 2', brand: 'Xiaomi', category: 'Соатҳои ҳушманд', price: 2190, originalPrice: 2490, rating: 4.3, stock: 16, icon: '⌚', color: 'linear-gradient(135deg,#6f171a,#cd9a4a)', description: 'Соати дастрас барои истифодаи фаъол ва ҳаррӯза.' },
  { id: 13, title: 'iPad Air', brand: 'Apple', category: 'Планшетҳо', price: 7990, originalPrice: 8590, rating: 4.7, stock: 8, icon: '📟', color: 'linear-gradient(135deg,#2c5f93,#7cadde)', description: 'Барои донишҷӯён, нақшабардорӣ ва кор бо ҳуҷҷатҳо.' },
  { id: 14, title: 'Samsung Galaxy Tab S9 FE', brand: 'Samsung', category: 'Планшетҳо', price: 5890, originalPrice: 6390, rating: 4.6, stock: 10, icon: '🖊️', color: 'linear-gradient(135deg,#1a4c34,#73b798)', description: 'Экрани хуб барои хондан, видео ва кори сабук.' },
  { id: 15, title: 'Redmi Pad SE', brand: 'Xiaomi', category: 'Планшетҳо', price: 2790, originalPrice: 3190, rating: 4.4, stock: 18, icon: '📚', color: 'linear-gradient(135deg,#8f1d21,#e5b45f)', description: 'Планшети муносиб барои хона, кӯдакон ва видео.' },
  { id: 16, title: 'Anker 3-in-1 Charger', brand: 'Anker', category: 'Лавозимот', price: 1190, originalPrice: 1390, rating: 4.5, stock: 25, icon: '🔌', color: 'linear-gradient(135deg,#47311b,#c18e40)', description: 'Як ҷо барои пур кардани телефон, соат ва гӯшмонак.' },
  { id: 17, title: 'Logitech MX Master 3S', brand: 'Logitech', category: 'Лавозимот', price: 1290, originalPrice: 1490, rating: 4.8, stock: 17, icon: '🖱️', color: 'linear-gradient(135deg,#4d5564,#909fb7)', description: 'Муши бароҳат барои идора, дизайнер ва барномасоз.' },
  { id: 18, title: 'Baseus Power Bank 20000', brand: 'Baseus', category: 'Лавозимот', price: 690, originalPrice: 790, rating: 4.5, stock: 32, icon: '🔋', color: 'linear-gradient(135deg,#1a4c34,#86b89f)', description: 'Қувваи иловагӣ барои сафар, кор ва рӯзи дароз.' },
  { id: 19, title: 'HP LaserJet MFP 135w', brand: 'HP', category: 'Идора ва хона', price: 2690, originalPrice: 2990, rating: 4.4, stock: 6, icon: '🖨️', color: 'linear-gradient(135deg,#7f1a1d,#e2a93a)', description: 'Барои идора, мактаб ва ҳуҷҷатҳои хонагӣ.' },
  { id: 20, title: 'TP-Link Archer AX23', brand: 'TP-Link', category: 'Идора ва хона', price: 890, originalPrice: 990, rating: 4.6, stock: 19, icon: '📶', color: 'linear-gradient(135deg,#1a4c34,#5eb58a)', description: 'Интернети устувор барои хона, кор ва дарсҳои онлайн.' },
  { id: 21, title: 'Canon PIXMA G3410', brand: 'Canon', category: 'Идора ва хона', price: 2390, originalPrice: 2590, rating: 4.3, stock: 8, icon: '🧾', color: 'linear-gradient(135deg,#6f171a,#c9a465)', description: 'Принтери сарфакор барои чопи ранга ва сиёҳу сафед.' },
  { id: 22, title: 'Honor X8b', brand: 'Honor', category: 'Смартфонҳо', price: 3190, originalPrice: 3490, rating: 4.4, stock: 15, icon: '✨', color: 'linear-gradient(135deg,#8f1d21,#d8b36f)', description: 'Смартфони сабук ва зебо барои истифодаи ҳаррӯза.' },
  { id: 23, title: 'Acer Aspire 5', brand: 'Acer', category: 'Ноутбукҳо', price: 5890, originalPrice: 6390, rating: 4.2, stock: 5, icon: '💻', color: 'linear-gradient(135deg,#21455f,#7ea7be)', description: 'Интихоби амалӣ барои хона, таҳсил ва кори маъмулӣ.' },
  { id: 24, title: 'Mi Smart Band 8', brand: 'Xiaomi', category: 'Соатҳои ҳушманд', price: 590, originalPrice: 690, rating: 4.5, stock: 29, icon: '🏃', color: 'linear-gradient(135deg,#1a4c34,#d7a326)', description: 'Дастпона барои ҳаракат, хоб ва назорати рӯзмарра.' }
];

const state = {
  search: '',
  category: 'Ҳама',
  brand: 'Ҳама',
  priceLimit: 20000,
  inStockOnly: false,
  discountOnly: false,
  highRatedOnly: false,
  sort: 'featured',
  cart: []
};

const els = {
  categorySelect: document.getElementById('categorySelect'),
  searchInput: document.getElementById('searchInput'),
  searchForm: document.getElementById('searchForm'),
  subnavLinks: document.getElementById('subnavLinks'),
  categoryChips: document.getElementById('categoryChips'),
  brandChips: document.getElementById('brandChips'),
  priceRange: document.getElementById('priceRange'),
  priceRangeValue: document.getElementById('priceRangeValue'),
  inStockOnly: document.getElementById('inStockOnly'),
  discountOnly: document.getElementById('discountOnly'),
  highRatedOnly: document.getElementById('highRatedOnly'),
  sortSelect: document.getElementById('sortSelect'),
  productGrid: document.getElementById('productGrid'),
  resultsText: document.getElementById('resultsText'),
  resetFilters: document.getElementById('resetFilters'),
  featuredTitle: document.getElementById('featuredTitle'),
  featuredText: document.getElementById('featuredText'),
  featuredPrice: document.getElementById('featuredPrice'),
  featuredAdd: document.getElementById('featuredAdd'),
  cartButton: document.getElementById('cartButton'),
  cartDrawer: document.getElementById('cartDrawer'),
  cartBackdrop: document.getElementById('cartBackdrop'),
  closeCart: document.getElementById('closeCart'),
  cartItems: document.getElementById('cartItems'),
  cartTotal: document.getElementById('cartTotal'),
  cartCount: document.getElementById('cartCount'),
  template: document.getElementById('productCardTemplate')
};

const categories = ['Ҳама', ...new Set(products.map(p => p.category))];
const brands = ['Ҳама', ...new Set(products.map(p => p.brand))];

function formatPrice(value) {
  return `${value.toLocaleString('ru-RU')} с.`;
}

function discountPercent(item) {
  if (!item.originalPrice || item.originalPrice <= item.price) return 0;
  return Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
}

function createChip(label, active, onClick) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `chip${active ? ' active' : ''}`;
  button.textContent = label;
  button.addEventListener('click', onClick);
  return button;
}

function renderNavigation() {
  categories.filter(c => c !== 'Ҳама').forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    els.categorySelect.appendChild(option);

    const link = document.createElement('a');
    link.href = '#catalog';
    link.className = 'subnav-link';
    link.textContent = category;
    link.addEventListener('click', (event) => {
      event.preventDefault();
      state.category = category;
      els.categorySelect.value = category;
      renderCategoryChips();
      renderProducts();
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
    els.subnavLinks.appendChild(link);
  });
}

function renderCategoryChips() {
  els.categoryChips.innerHTML = '';
  categories.forEach(category => {
    els.categoryChips.appendChild(
      createChip(category, state.category === category, () => {
        state.category = category;
        els.categorySelect.value = category === 'Ҳама' ? 'all' : category;
        renderCategoryChips();
        renderProducts();
      })
    );
  });
}

function renderBrandChips() {
  els.brandChips.innerHTML = '';
  brands.forEach(brand => {
    els.brandChips.appendChild(
      createChip(brand, state.brand === brand, () => {
        state.brand = brand;
        renderBrandChips();
        renderProducts();
      })
    );
  });
}

function getFilteredProducts() {
  const query = state.search.trim().toLowerCase();

  const filtered = products.filter(item => {
    const matchesQuery = !query || [item.title, item.brand, item.category, item.description]
      .join(' ')
      .toLowerCase()
      .includes(query);

    const matchesCategory = state.category === 'Ҳама' || item.category === state.category;
    const matchesBrand = state.brand === 'Ҳама' || item.brand === state.brand;
    const matchesPrice = item.price <= state.priceLimit;
    const matchesStock = !state.inStockOnly || item.stock > 0;
    const matchesDiscount = !state.discountOnly || discountPercent(item) > 0;
    const matchesRating = !state.highRatedOnly || item.rating >= 4.5;

    return matchesQuery && matchesCategory && matchesBrand && matchesPrice && matchesStock && matchesDiscount && matchesRating;
  });

  switch (state.sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating-desc':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'discount-desc':
      filtered.sort((a, b) => discountPercent(b) - discountPercent(a));
      break;
    default:
      filtered.sort((a, b) => {
        const aScore = (a.rating * 20) + discountPercent(a) + Math.min(a.stock, 20);
        const bScore = (b.rating * 20) + discountPercent(b) + Math.min(b.stock, 20);
        return bScore - aScore;
      });
  }

  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  els.productGrid.innerHTML = '';

  if (!filtered.length) {
    const empty = document.createElement('div');
    empty.className = 'panel empty-state';
    empty.innerHTML = '<h3>Мол ёфт нашуд</h3><p>Филтр ё ҷустуҷӯро каме тағйир диҳед.</p>';
    els.productGrid.appendChild(empty);
  } else {
    filtered.forEach(item => {
      const node = els.template.content.firstElementChild.cloneNode(true);
      node.querySelector('.discount-badge').textContent = discountPercent(item) > 0 ? `-${discountPercent(item)}%` : 'Нав';
      const visual = node.querySelector('.product-visual');
      visual.style.background = item.color;
      visual.textContent = item.icon;
      node.querySelector('.product-brand').textContent = item.brand;
      node.querySelector('.product-rating').textContent = `★ ${item.rating}`;
      node.querySelector('.product-title').textContent = item.title;
      node.querySelector('.product-description').textContent = item.description;
      node.querySelector('.product-price').textContent = formatPrice(item.price);

      const oldPrice = node.querySelector('.product-old-price');
      oldPrice.textContent = item.originalPrice > item.price ? formatPrice(item.originalPrice) : '';

      const stock = node.querySelector('.product-stock');
      if (item.stock <= 0) {
        stock.textContent = 'Нест';
        stock.classList.add('out');
      } else if (item.stock <= 7) {
        stock.textContent = `Кам мондааст: ${item.stock}`;
        stock.classList.add('low');
      } else {
        stock.textContent = `Ҳаст: ${item.stock}`;
      }

      node.querySelector('.add-to-cart').addEventListener('click', () => {
        addToCart(item.id);
      });

      els.productGrid.appendChild(node);
    });
  }

  els.resultsText.textContent = `${filtered.length} мол ёфт шуд`;
}

function renderFeatured() {
  const featured = [...products].sort((a, b) => ((b.rating + discountPercent(b) / 10) - (a.rating + discountPercent(a) / 10)))[0];
  els.featuredTitle.textContent = featured.title;
  els.featuredText.textContent = featured.description;
  els.featuredPrice.textContent = formatPrice(featured.price);
  els.featuredAdd.onclick = () => addToCart(featured.id);
}

function addToCart(id) {
  const existing = state.cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ id, quantity: 1 });
  }
  renderCart();
  openCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(item => item.id !== id);
  renderCart();
}

function renderCart() {
  els.cartItems.innerHTML = '';
  const detailed = state.cart.map(entry => {
    const product = products.find(item => item.id === entry.id);
    return { ...product, quantity: entry.quantity };
  });

  if (!detailed.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = '<p>Ҳоло дар сабад мол нест.</p>';
    els.cartItems.appendChild(empty);
  } else {
    detailed.forEach(item => {
      const row = document.createElement('article');
      row.className = 'cart-item';

      const thumb = document.createElement('div');
      thumb.className = 'cart-thumb';
      thumb.style.background = item.color;
      thumb.textContent = item.icon;

      const info = document.createElement('div');
      info.innerHTML = `<h4>${item.title}</h4><p>${item.quantity} × ${formatPrice(item.price)}</p>`;

      const remove = document.createElement('button');
      remove.className = 'cart-remove';
      remove.type = 'button';
      remove.textContent = 'Пок';
      remove.addEventListener('click', () => removeFromCart(item.id));

      row.append(thumb, info, remove);
      els.cartItems.appendChild(row);
    });
  }

  const totalQuantity = detailed.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = detailed.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  els.cartCount.textContent = totalQuantity;
  els.cartTotal.textContent = formatPrice(totalPrice);
}

function openCart() {
  els.cartDrawer.classList.add('open');
  els.cartDrawer.setAttribute('aria-hidden', 'false');
}

function closeCart() {
  els.cartDrawer.classList.remove('open');
  els.cartDrawer.setAttribute('aria-hidden', 'true');
}

function bindEvents() {
  els.searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    state.search = els.searchInput.value;
    renderProducts();
  });

  els.searchInput.addEventListener('input', () => {
    state.search = els.searchInput.value;
    renderProducts();
  });

  els.categorySelect.addEventListener('change', () => {
    state.category = els.categorySelect.value === 'all' ? 'Ҳама' : els.categorySelect.value;
    renderCategoryChips();
    renderProducts();
  });

  els.priceRange.addEventListener('input', () => {
    state.priceLimit = Number(els.priceRange.value);
    els.priceRangeValue.textContent = els.priceRange.value;
    renderProducts();
  });

  els.inStockOnly.addEventListener('change', () => {
    state.inStockOnly = els.inStockOnly.checked;
    renderProducts();
  });

  els.discountOnly.addEventListener('change', () => {
    state.discountOnly = els.discountOnly.checked;
    renderProducts();
  });

  els.highRatedOnly.addEventListener('change', () => {
    state.highRatedOnly = els.highRatedOnly.checked;
    renderProducts();
  });

  els.sortSelect.addEventListener('change', () => {
    state.sort = els.sortSelect.value;
    renderProducts();
  });

  els.resetFilters.addEventListener('click', () => {
    state.search = '';
    state.category = 'Ҳама';
    state.brand = 'Ҳама';
    state.priceLimit = 20000;
    state.inStockOnly = false;
    state.discountOnly = false;
    state.highRatedOnly = false;
    state.sort = 'featured';

    els.searchInput.value = '';
    els.categorySelect.value = 'all';
    els.priceRange.value = 20000;
    els.priceRangeValue.textContent = '20000';
    els.inStockOnly.checked = false;
    els.discountOnly.checked = false;
    els.highRatedOnly.checked = false;
    els.sortSelect.value = 'featured';

    renderCategoryChips();
    renderBrandChips();
    renderProducts();
  });

  els.cartButton.addEventListener('click', openCart);
  els.cartBackdrop.addEventListener('click', closeCart);
  els.closeCart.addEventListener('click', closeCart);
}

function init() {
  renderNavigation();
  renderCategoryChips();
  renderBrandChips();
  renderFeatured();
  renderProducts();
  renderCart();
  bindEvents();
}

init();
