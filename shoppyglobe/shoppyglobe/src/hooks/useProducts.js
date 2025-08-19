import { useEffect, useState } from 'react'
import { fetchJSON } from '../utils/api.js'

export default function useProducts() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    setError(null)
    fetchJSON('https://dummyjson.com/products')
      .then(d => { if (active) setData(d) })
      .catch(err => { if (active) setError(err.message || 'Unknown error') })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [])

  return { data, loading, error }
}
