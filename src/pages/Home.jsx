import { MdShoppingCartCheckout } from "react-icons/md"
import { NavLink } from "react-router-dom"
import Card from "../component/Card"
import Container from "../component/Container"
import Filter from '../component/Filter'
import { useState } from "react"
import { useSelector } from "react-redux"



function Home({cartItems,setCartItems,products}) {

const [displayProducts,setDisplayProducts]=useState(products)
const counter=useSelector((state)=>state.counter.value)
  return (
    <Container>
     <div>
     <div>{counter}</div>
     <Filter products={products} setDisplayProducts={setDisplayProducts}/>
     <div className="grid grid-cols-3 w-full gap-7 p-8">
        {displayProducts.map((item)=>(
          <Card key={item.id} title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          addToCart={()=>{}}
          cartItems={cartItems}
          setCartItems={setCartItems}
          />
        ))}
    </div>
    </div>
    </Container>
  )
}
export default Home