import { useState } from "react";
import { toast } from "sonner";

function Card({ title, description, price, image, cartItems, setCartItems }) {
  const handleAddCart = () => {
    setCartItems([
      ...cartItems,
      { title, description, price, image, cartItems, setCartItems },
    ]);
    toast.success("Added to cart");
  };

  const removeHandler = () => {
    const newCartItems = cartItems.filter((item) => item.title !== title);
    setCartItems(newCartItems);
    toast.success("Removed Successfully")
  };
  return (
    <div className="border border-gray-200 w-[350px] h-[380px] rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-xl">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-center">{`${title.slice(0,20)}...`}</h1>
        {/* // slice is used to limit the description */}
        {/* // template literals are used to add the ... */}
        <div className="flex justify-center items-center w-75">
         <p className="text-center">{`${description.slice(0,50)}...` }</p> 
        </div>
        <img src={image} alt="image" className="w-[150px] h-[150px]"/>
      </div>
      <div className="flex justify-between p-4">
        <p className="flex items-center font-bold">$ {price}</p>
        {cartItems.some((item) => item.title === title) ? (
          <button
            onClick={removeHandler}
            className="transition-all duration-300 ease-in-out bg-red-500 p-2 rounded-md shadow-md border"
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={handleAddCart}
            className="transition-all duration-300 ease-in-out bg-green-500 p-2 rounded-md shadow-md border"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
export default Card;
