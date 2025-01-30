import { toast } from "sonner"
function CartCard({item, cartItems, setCartItems}) {
const handleRemove = () => {
    const newCartItems = cartItems.filter((cItem) => item.title !== cItem.title)
    setCartItems(newCartItems)
    toast.success("Removed Successfully")
  }
  return (
        <div className="border-[2px] w-[350px] h-[350px] rounded-md" key={item.id}>
          <div className="flex flex-col justify-center items-center gap-2">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <img src={item.image} alt="image" />
            <button className="cursor-pointer" onClick={handleRemove}>Remove</button>
          </div>
       </div>
)}
export default CartCard
