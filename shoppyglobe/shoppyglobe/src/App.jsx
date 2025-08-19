import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import NotFound from './components/NotFound.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'))
const Cart = lazy(() => import('./components/Cart.jsx'))
const Checkout = lazy(() => import('./pages/Checkout.jsx'))

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}
