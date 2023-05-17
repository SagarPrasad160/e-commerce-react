import { useContext, useEffect, useState } from "react";
import cartContext from "../context/cartContext";

import Cart from "./Cart";

import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const { cart } = useContext(cartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [cartLength, setCartLength] = useState(cart.length);

  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  return (
    <div>
      {" "}
      <header className="p-5 bg-neutral-500">
        <h1 className="text-5xl font-serif text-white text-center">
          The Generics
        </h1>
        <button
          className="bg-red-500 border rounded px-2 text-white absolute right-1 top-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex p-1">
            <p className="ml-1">Cart {cartLength} </p>
            <FaShoppingCart className="m-1" />
          </div>
        </button>
      </header>
      <div className="fixed right-0 w-64 h-64">
        {isOpen && <Cart setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}

export default Header;
