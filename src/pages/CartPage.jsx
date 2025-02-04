
import CartCard from "../component/CartCard"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useSelector, useDispatch } from "react-redux"
import { setCartItems } from "../redux/slices/cartItemsSlice"

function CartPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cartItems)
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
              />
            ))}
          </div>

          <div className="w-80 h-fit sticky top-10 bg-white p-6 rounded-md shadow-md border gap-5">
            <h1 className="text-2xl font-bold mb-4">Cart Summary</h1>
            <div className="border-t pt-4 gap-3">
              <div className="text-left text-lg">
                {" "}
                Total item : {cartItems.reduce((acc, cItem) => 1 + acc, 0)}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">Total Price : </span>
                <span className="text-xl font-bold gap-2">
                  ${cartItems.reduce((acc, cItem) => cItem.price + acc, 0)}
                </span>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  dispatch(setCartItems([]));
                  navigate("/");
                  toast.success(`Purchased Successfully with price = $ ${cartItems.reduce((acc, cItem) => cItem.price + acc, 0)}`)
                }}
                className="bg-green-500 text-white px-4 py-2 rounded-md text-2xl text-ellipsis cursor-pointer"
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