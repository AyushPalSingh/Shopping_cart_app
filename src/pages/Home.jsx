import { MdShoppingCartCheckout } from "react-icons/md"
import { NavLink } from "react-router-dom"
import Card from "../component/Card"
import Container from "../component/Container"

function Home({cartItems,setCartItems}) {
  const items=[
    {
      id:1,
      title:"Card-1",
      description:"Card-1 description",
      price:100,
      image:"./download.png"
    },
    {
      id:2,
      title:"Card-2",
      description:"Card-2 description",
      price:200,
      image:"./download.png"
    },
    {
      id:3,
      title:"Card-3",
      description:"Card-3 description",
      price:300,
      image:"./download.png"
    },
    {
      id:4,
      title:"Card-4",
      description:"Card-4 description",
      price:400,
      image:"./download.png"
    },
    {
      id:5,
      title:"Card-5",
      description:"Card-5 description",
      price:500,
      image:"./download.png"
    },
    {
      id:6,
      title:"Card-6",
      description:"Card-6 description",
      price:600,
      image:"./download.png"
    },
    {
      id:7,
      title:"Card-7",
      description:"Card-7 description",
      price:700,
      image:"./download.png"
    },
    {
      id:8,
      title:"Card-8",
      description:"Card-8 description",
      price:800,
      image:"./download.png"
    },
    {
      id:9,
      title:"Card-9",
      description:"Card-9 description",
      price:900,
      image:"./download.png"
    },]
  
  return (
    <Container>
     <div className="grid grid-cols-3 w-full gap-7 p-8">
        {items.map((item)=>(
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
    </Container>
  )
}
export default Home