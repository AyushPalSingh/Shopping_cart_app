import { createSlice } from '@reduxjs/toolkit'

export const  displayProductsSlice = createSlice({
  name: 'displayProducts',
  initialState: [],
  reducers: {
    setDisplayProducts: (state, action) => {
      return action.payload
    }
  }
})

export const { setDisplayProducts } = displayProductsSlice.actions
export default displayProductsSlice.reducer