import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [] // {id, title, price, thumbnail, quantity}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload
      const existing = state.items.find(i => i.id === item.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...item, quantity: 1 })
      }
    },
    removeItem(state, action) {
      const id = action.payload
      state.items = state.items.filter(i => i.id !== id)
    },
    incrementQty(state, action) {
      const id = action.payload
      const found = state.items.find(i => i.id === id)
      if (found) found.quantity += 1
    },
    decrementQty(state, action) {
      const id = action.payload
      const found = state.items.find(i => i.id === id)
      if (found) {
        found.quantity -= 1
        if (found.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== id)
        }
      }
    },
    clearCart(state) {
      state.items = []
    }
  }
})

export const { addItem, removeItem, incrementQty, decrementQty, clearCart } = cartSlice.actions
export default cartSlice.reducer
