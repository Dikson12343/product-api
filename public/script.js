// Frontend script to fetch data from the API and render it.
const loadAllBtn = document.getElementById('loadAll');
const inStockBtn = document.getElementById('loadInStock');
const categoriesBtn = document.getElementById('loadCategories');
const output = document.getElementById('output');

function renderProducts(products) {
  if (!products || products.length === 0) {
    output.innerHTML = '<p>No products to show.</p>';
    return;
  }
  const grid = document.createElement('div');
  grid.className = 'grid';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="name">${p.name}</div>
      <div class="meta">Category: ${p.category}</div>
      <div class="meta">Price: ₹${p.price.toLocaleString()}</div>
      <div class="meta">Stock: <span class="${p.inStock ? 'instock-true' : 'instock-false'}">${p.inStock ? 'In Stock' : 'Out of Stock'}</span></div>
    `;
    grid.appendChild(card);
  });
  output.innerHTML = '';
  output.appendChild(grid);
}

async function loadAll() {
  try {
    const res = await fetch('/products');
    const data = await res.json();
    renderProducts(data);
  } catch (err) {
    output.innerHTML = '<p>Error loading products.</p>';
    console.error(err);
  }
}

async function loadInStock() {
  try {
    const res = await fetch('/products/instock');
    const data = await res.json();
    renderProducts(data);
  } catch (err) {
    output.innerHTML = '<p>Error loading in-stock products.</p>';
    console.error(err);
  }
}

async function loadCategories() {
  try {
    const res = await fetch('/products/categories');
    const data = await res.json();
    output.innerHTML = '<h3>Categories</h3><ul>' + data.categories.map(c => `<li>${c}</li>`).join('') + '</ul>';
  } catch (err) {
    output.innerHTML = '<p>Error loading categories.</p>';
    console.error(err);
  }
}

loadAllBtn.addEventListener('click', loadAll);
inStockBtn.addEventListener('click', loadInStock);
categoriesBtn.addEventListener('click', loadCategories);

// Load all products on initial page load
window.addEventListener('DOMContentLoaded', loadAll);
