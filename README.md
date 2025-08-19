# ShoppyGlobe – React E-commerce Application

A basic e-commerce app built with React + Vite, Redux Toolkit, and React Router.
It fetches products from `https://dummyjson.com/products`, supports search, cart management,
product detail pages, lazy-loaded routes, and responsive styling.

## ✅ Features
- Component structure: App, Header, ProductList, ProductItem, ProductDetail, Cart, CartItem, NotFound
- Props with PropTypes
- Data fetching with a custom hook (`useProducts`) and error handling
- Redux Toolkit cart slice (add/remove/increment/decrement/clear + selectors)
- Search filter on ProductList
- React Router v6 routes with React.lazy + Suspense
- Responsive CSS

## 🧰 Tech
- React 18, Vite 5
- React Router 6
- Redux Toolkit + React Redux
- PropTypes

## 🚀 Run locally
```bash
# 1) Install dependencies
npm install

# 2) Start dev server
npm run dev
# Open the Local URL shown (default: http://localhost:5173/)

# 3) Build for production
npm run build

# 4) Preview production build
npm run preview
```

## 📂 Project Structure
```
shoppyglobe/
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ utils/api.js
   ├─ styles/global.css
   ├─ hooks/useProducts.js
   ├─ store/
   │  ├─ index.js
   │  └─ cartSlice.js
   │  └─ selectors.js
   ├─ components/
   │  ├─ Header.jsx
   │  ├─ ProductList.jsx
   │  ├─ ProductItem.jsx
   │  ├─ ProductDetail.jsx
   │  ├─ Cart.jsx
   │  ├─ CartItem.jsx
   │  └─ NotFound.jsx
   └─ pages/
      ├─ Home.jsx
      └─ Checkout.jsx
```

## 📝 Notes
- API: https://dummyjson.com/products and /products/:id
- If the API is unreachable, the UI will show an error message.
- Code splitting is enabled via `React.lazy` in `App.jsx`.
- Ensure Node.js 18+ and npm 9+ for best compatibility.
