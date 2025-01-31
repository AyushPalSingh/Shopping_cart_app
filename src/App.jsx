import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import { NavLink } from 'react-router-dom'
import Navbar from './component/NavBar'
import PacmanLoader from "react-spinners/PacmanLoader";
import Filter from './component/Filter'

function App() {
const [cartItems, setCartItems] = useState([])
const [error, setError] = useState(null)
const [products, setProducts] = useState([])
const [isLoading, setIsLoading] = useState(false)
const fetchData = async () => {
  try{
      setIsLoading(true)
      const response = await fetch("https://fakestoreapi.com/products",{method:"GET",accept:"application/json" } )
      console.log(response)
      const data = await response.json()
      console.log(data)
      setProducts(data)
  }
  catch(error){
    console.log(error.message)
    setError(error.message)
  }
  finally{
    setIsLoading(false)
  }
}
// to prevent the infinite loop (re-rendering)
useEffect(() => {
  fetchData()
}, [])

 return (
     <div className='min-h-screen w-full'>
     <Navbar cartItems={cartItems} />
    <div className= {` py-7 flex ${isLoading?"h-140":"h-full"} w-screen flex-col justify-center items-center`}>
    {isLoading ? (<PacmanLoader />):(<Routes>
      <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} products={products}/>} />
      <Route path="/CartPage" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
    </Routes>)}
    
    </div>
    </div>
)}
export default App
