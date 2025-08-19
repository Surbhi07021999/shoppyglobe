import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice.js'
import { fetchJSON } from '../utils/api.js'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    let active = true
    setLoading(true)
    setError(null)
    fetchJSON(`https://dummyjson.com/products/${id}`)
      .then(data => { if (active) setProduct(data) })
      .catch(err => { if (active) setError(err.message || 'Unknown error') })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [id])

  if (loading) return <div className="loader">Loading product...</div>
  if (error) return <div className="error">Failed to load product. {error}</div>
  if (!product) return null

  const onAdd = () => {
    dispatch(addItem({ 
      id: product.id, 
      title: product.title, 
      price: product.price, 
      thumbnail: product.thumbnail 
    }))
  }

  return (
    <div className="detail">
      <div className="detail-grid">
        <div className="detail-media">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="detail-price">${product.price}</p>
          <p className="detail-desc">{product.description}</p>
          <button className="btn" onClick={onAdd}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
