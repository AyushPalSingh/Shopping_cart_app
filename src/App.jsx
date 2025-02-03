import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import { NavLink } from 'react-router-dom'
import Navbar from './component/NavBar'
import PacmanLoader from "react-spinners/PacmanLoader";
import Filter from './component/Filter'
import Test from './pages/Test'
import { useSelector, useDispatch } from 'react-redux'
import { setIsLoading } from './redux/slices/isLoadingSlice'
import { setProducts } from './redux/slices/productsSlice'
import { setError } from './redux/slices/errorSlice'


function App() {
  console.log("App.jsx")
const isLoading = useSelector((state)=>state.isLoading)
const error = useSelector((state)=>state.error)

const dispatch = useDispatch()
const fetchData = async () => {
  try{
      dispatch(setIsLoading(true))
      const response = await fetch("https://fakestoreapi.com/products",{method:"GET",accept:"application/json" } )
      console.log(response)
      const data = await response.json()
      console.log(data)
      dispatch(setProducts(data))
  }
  catch(error){
    console.log(error.message)
    dispatch(setError(error.message))
  }
  finally{
    dispatch(setIsLoading(false))
    
  }
}
// to prevent the infinite loop (re-rendering)
useEffect(() => {
  fetchData()
}, [])

 return (
     <div>
     <Navbar />
    <div className= {` py-7 flex ${isLoading?"h-140":"h-full"} w-screen flex-col justify-center items-center`}>
    {isLoading ? (<PacmanLoader />):error? <p className="font-bold text-red-500 flex justify-center items-center h-130 ">  { error }</p>:(<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CartPage" element={<CartPage />} />
      <Route path="/Test" element={<Test />} />
    </Routes>)}
    
    </div>
    </div>
)}
export default App
