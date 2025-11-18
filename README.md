# Product Catalog API

## Project Description
A simple Node.js + Express API that serves product data and a tiny frontend. It implements three GET endpoints to retrieve all products, unique categories, and in-stock products. The frontend (`public/index.html`) fetches data and displays it.

**Technologies used:** Node.js, Express, HTML, vanilla JavaScript.

## Project Structure
```
product-catalog-api/
├─ server.js
├─ package.json
├─ .gitignore
└─ public/
   ├─ index.html
   └─ script.js
```

## API Documentation

### GET /products
- **URL:** `/products`
- **Method:** GET
- **Description:** Returns a JSON array of all product objects.
- **Sample Response:**
```json
[
  { "id": 1, "name": "Laptop", "category": "Electronics", "price": 45000, "inStock": true }
]
```

### GET /products/categories
- **URL:** `/products/categories`
- **Method:** GET
- **Description:** Returns a JSON object with unique categories.
- **Sample Response:**
```json
{ "categories": ["Electronics", "Accessories", "Furniture"] }
```

### GET /products/instock
- **URL:** `/products/instock`
- **Method:** GET
- **Description:** Returns a JSON array of products where `inStock` is `true`.
- **Sample Response:**
```json
[
  { "id": 1, "name": "Laptop", "category": "Electronics", "price": 45000, "inStock": true }
]
```

## Installation & Setup Instructions

1. **Clone the repository** (replace with your GitHub link):
```bash
git clone https://github.com/<your-username>/product-catalog-api.git
cd product-catalog-api
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the server:**
```bash
npm start
```
The server will start on `http://localhost:3000`

4. **Access the frontend:** Open `http://localhost:3000` in your browser.

## GitHub Repository Link
Replace with your repository URL: `https://github.com/<your-username>/product-catalog-api`

## Author Information
**Name:** Dikson

## Notes before submission
- Ensure `node_modules/` is not included in the zip.
- Make at least two meaningful commits (e.g., initial setup, add frontend).
