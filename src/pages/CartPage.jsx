
import CartCard from "../component/CartCard"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"


function CartPage({cartItems, setCartItems}) {
  const navigate = useNavigate()
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center min-h-140 flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Your cart is empty !</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-green-500 text-white px-6 py-2 rounded-md text-3xl text-ellipsis"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div className="flex justify-between gap-18 p-8 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col items-center gap-4">
            {cartItems.map((item) => (
              <CartCard
                key={item.id}
                item={item}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ))}
          </div>

          <div className="border border-gray-200 w-[330px] h-[250px] rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-xl">
            <h1 className="text-2xl font-bold mb-4">Cart Summary</h1>
            <div className="border-t pt-4 gap-3">
              <div className="text-left text-lg">
                {" "}
                Total item     : {cartItems.reduce((acc, cItem) => 1 + acc, 0)}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">Total Price : </span>
                <span className="text-xl font-bold gap-2">
                  ${cartItems.reduce((acc, cItem) => cItem.price + acc, 0)}
                </span>
              </div>
            </div>
            <div className="mt-6 border-t pt-4">
              <button
                onClick={() => {
                  setCartItems([]);
                  navigate("/");
                  toast.success(`Purchased Successfully with price = $ ${cartItems.reduce((acc, cItem) => cItem.price + acc, 0)}`)
                }}
                className="w-full bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold 
                hover:bg-green-600 active:bg-green-700 transition-all duration-200 ease-in-out
                shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );}

export default CartPage