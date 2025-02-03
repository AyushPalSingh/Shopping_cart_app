import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/couterSlice'
import isLoadingReducer from './slices/isLoadingSlice'
import displayProductsReducer from './slices/displayProductsSlice'
import cartItemsReducer from './slices/cartItemsSlice'
import productsReducer from './slices/productsSlice'
import errorReducer  from './slices/errorSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    isLoading: isLoadingReducer,
    displayProducts: displayProductsReducer,
    cartItems:cartItemsReducer,
    products:productsReducer,
    error:errorReducer,
  }
})

export default store