export async function fetchJSON(url, options = {}) {
  const res = await fetch(url, options)
  if (!res.ok) {
    let message = `HTTP ${res.status}`
    try {
      const data = await res.json()
      if (data?.message) message += ` - ${data.message}`
    } catch {}
    throw new Error(message)
  }
  return res.json()
}
