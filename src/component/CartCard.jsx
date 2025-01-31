import { toast } from "sonner"
import { RiDeleteBin5Fill } from "react-icons/ri";

function CartCard({item, cartItems, setCartItems}) {
const handleRemove = () => {
    const newCartItems = cartItems.filter((cItem) => item.title !== cItem.title)
    setCartItems(newCartItems)
    toast.success("Removed Successfully")
  }
  return (
    <div className="border border-gray-200 w-[350px] h-[380px] rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-xl">
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-center">{`${item.title.slice(0,20)}...`}</h1>
      {/* // slice is used to limit the description */}
      {/* // template literals are used to add the ... */}
      <div className="flex justify-center items-center w-75">
       <p className="text-center">{`${item.description.slice(0,50)}...` }</p> 
      </div>
      <img src={item.image} alt="image" className="w-[150px] h-[150px]"/>
      <button 
        onClick={handleRemove} 
        className="cursor-pointer p-2 rounded-full hover:bg-red-300 active:bg-red-100 transition-all duration-200 ease-in-out text-red-600 hover:text-white p-3"
      >
        <RiDeleteBin5Fill className="text-2xl" />
      </button>
    </div>
  </div>
)}
export default CartCard
