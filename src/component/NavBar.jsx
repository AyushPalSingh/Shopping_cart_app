import { NavLink } from "react-router-dom"
import { MdShoppingCartCheckout } from "react-icons/md"
function Navbar({cartItems}) {
  return (
    <nav className="bg-gray-900 p-10">
        <div className="flex justify-between">
         <NavLink to="/" >
         <img src="https://shopping-cart-app-three-blue.vercel.app/assets/logo-CQ73aCIE.png" alt="logo" className="w-50 h-14 mr-2"/>
        </NavLink>
         <div className="flex items-center gap-x-3"> 
          <NavLink to="/" className="text-white text-lg mr-4 font-bold"> Home </NavLink>
          
          <NavLink to="/CartPage" className="text-white text-lg mr-4 relative">
            <MdShoppingCartCheckout className="text-4xl" />
            <div className="w-7 rounded-full border-1 border-black-900 bg-green-600 flex justify-center items- absolute -top-2 -right-2 animate-bounce">{cartItems.length}</div>
          </NavLink>
        </div>
    
        
        </div>
        </nav>
  )}
  export default Navbar