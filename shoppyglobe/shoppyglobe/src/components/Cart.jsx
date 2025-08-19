import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem.jsx'
import { selectCartItems, selectCartTotal } from '../store/selectors.js'
import { Link } from 'react-router-dom'

export default function Cart() {
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  if (items.length === 0) {
    return (
      <div className="empty">
        <h3>Your cart is empty</h3>
        <Link to="/" className="btn">Go shopping</Link>
      </div>
    )
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-list">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${total.toFixed(2)}</h3>
        <Link to="/checkout" className="btn">Proceed to Checkout</Link>
      </div>
    </div>
  )
}
