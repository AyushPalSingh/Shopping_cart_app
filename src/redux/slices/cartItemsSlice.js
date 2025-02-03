import { createSlice } from '@reduxjs/toolkit'

export const  cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: [],
  reducers: {
    setCartItems: (state, action) => {
      return action.payload
    }
  }
})

export const { setCartItems } = cartItemsSlice.actions
export default cartItemsSlice.reducer