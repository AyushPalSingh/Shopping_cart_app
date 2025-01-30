import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import { NavLink } from 'react-router-dom'
import Navbar from './component/NavBar'
function App() {
  const [cartItems, setCartItems] = useState([])

  
 return (
     <div className='min-h-screen w-full'>
     <Navbar cartItems={cartItems} />
    <div className=' py-7 flex h-full w-screen flex-col justify-center items-center'>
    <Routes>
      <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems}/>} />
      <Route path="/CartPage" element={<CartPage cartItems={cartItems} setCartItems={setCartItems}/>} />
    </Routes>
    </div>
    </div>
)}
export default App
