import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice.js'

export default function ProductItem({ product }) {
  const dispatch = useDispatch()

  const onAdd = () => {
    dispatch(addItem({ 
      id: product.id, 
      title: product.title, 
      price: product.price, 
      thumbnail: product.thumbnail 
    }))
  }

  return (
    <div className="card product-card">
      <Link to={`/product/${product.id}`} className="thumb-wrap">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </Link>
      <div className="product-info">
        <h3 className="product-title">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>
        <p className="product-price">${product.price}</p>
        <button className="btn" onClick={onAdd}>Add to Cart</button>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string
  }).isRequired
}
