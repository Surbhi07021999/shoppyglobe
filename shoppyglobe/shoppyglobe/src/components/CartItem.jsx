import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removeItem, incrementQty, decrementQty } from '../store/cartSlice.js'

export default function CartItem({ item }) {
  const dispatch = useDispatch()

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-thumb" />
      <div className="cart-info">
        <h4>{item.title}</h4>
        <p>${item.price} x {item.quantity} = <strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
        <div className="cart-actions">
          <button className="btn btn-small" onClick={() => dispatch(decrementQty(item.id))} aria-label="Decrease quantity">-</button>
          <span className="qty">{item.quantity}</span>
          <button className="btn btn-small" onClick={() => dispatch(incrementQty(item.id))} aria-label="Increase quantity">+</button>
          <button className="btn btn-outline btn-small" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    thumbnail: PropTypes.string
  }).isRequired
}
