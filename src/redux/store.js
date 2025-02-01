import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/couterSlice'
import isLoadingReducer from './slices/isLoadingSlice'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    isLoading: isLoadingReducer
  }
})

export default store