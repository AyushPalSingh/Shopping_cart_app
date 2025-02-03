import { MdShoppingCartCheckout } from "react-icons/md"
import { NavLink } from "react-router-dom"
import Card from "../component/Card"
import Container from "../component/Container"
import Filter from '../component/Filter'
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setDisplayProducts } from "../redux/slices/displayProductsSlice"
import { setProducts } from "../redux/slices/productsSlice"


function Home() {
const products = useSelector((state) => state.products)
console.log("Home.jsx")
const dispatch = useDispatch()
const displayProducts = useSelector((state) => state.displayProducts)
console.log(displayProducts)
useEffect(()=>{
  dispatch(setDisplayProducts(products))
  },[products])
  return (
    <Container>
     <div>
     <Filter products={products} />
     <div className="grid grid-cols-3 w-full gap-7 p-8">
        {displayProducts.map((item)=>(
          <Card key={item.id} title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          addToCart={()=>{}}
          />
        ))}
    </div>
    </div>
    </Container>
  )
}
export default Home