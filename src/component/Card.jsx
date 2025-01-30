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
    <div className="border-[2px] w-[350px] h-[400px] rounded-md gap-2 p-4 transition-scale duration-300 ease-in-out hover:scale-110 p-2">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} alt="image" />
      </div>
      <div className="flex justify-between p-4">
        <p className="flex items-center font-bold">$ {price}</p>
        {cartItems.some((item) => item.title === title) ? (
          <button
            onClick={removeHandler}
            className=" bg-green-500 p-2 rounded-md shadow-md border"
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={handleAddCart}
            className=" bg-green-500 p-2 rounded-md shadow-md border"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
export default Card;
