import Card from "./Card"
import { useState } from "react"

function Filter({products,setDisplayProducts}) {
const categories = ["All", ...new Set(products.map(item => item.category))]
const [selectedCategory, setSelectedCategory] = useState("All")

  const handleAddToCart = (category) => {
    setSelectedCategory(category)
    if(category === "All"){
      setDisplayProducts(products)
    }
    else{
        setDisplayProducts(products.filter(item=>(item.category===category)))
    }
    
  }
  
  return (
        <div  className="flex items-center justify-center">
          <div className="flex justify-center items-center gap-3">
            {categories.map((category) => (
              <button
                key={category} 
                onClick={(e)=>handleAddToCart(category)} 
                className={`border-[2px] rounded-md px-4 py-2 cursor-pointer capitalize ${selectedCategory === category ? "bg-green-500 transition-all duration-300 ease-in-out" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
    </div>
)}
export default Filter