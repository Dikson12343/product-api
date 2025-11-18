// Simple Product Display API - server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// In-memory product data (at least 5 products, 3 categories, mixed inStock)
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 45000, inStock: true },
  { id: 2, name: "Smartphone", category: "Electronics", price: 25000, inStock: true },
  { id: 3, name: "Office Chair", category: "Furniture", price: 7000, inStock: false },
  { id: 4, name: "Headphones", category: "Accessories", price: 1500, inStock: true },
  { id: 5, name: "Coffee Table", category: "Furniture", price: 3500, inStock: false }
];

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// GET /products - return all products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET /products/categories - return unique category list
app.get('/products/categories', (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json({ categories });
});

// GET /products/instock - return only products with inStock true
app.get('/products/instock', (req, res) => {
  const instock = products.filter(p => p.inStock);
  res.json(instock);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
