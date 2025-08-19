import React, { useMemo, useState } from 'react'
import ProductItem from './ProductItem.jsx'
import useProducts from '../hooks/useProducts.js'

export default function ProductList() {
  const { data, loading, error } = useProducts()
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!data?.products) return []
    return data.products.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase())
    )
  }, [data, query])

  if (loading) return <div className="loader">Loading products...</div>
  if (error) return <div className="error">Failed to load products. {error}</div>

  return (
    <div>
      <div className="searchbar">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          aria-label="Search products"
        />
      </div>
      <div className="grid">
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
