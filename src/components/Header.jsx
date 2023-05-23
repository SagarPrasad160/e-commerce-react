import { useContext, useEffect, useState } from "react";
import cartContext from "../context/cartContext";
import authContext from "../context/authContext";
import Cart from "./Cart";

import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";

import { auth } from "../firestore/config";
import { signOut } from "firebase/auth";

function Header() {
  const { cart } = useContext(cartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [cartLength, setCartLength] = useState(cart.length);

  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  const { userLog, handleLogOut } = useContext(authContext);

  const user = userLog.user;

  const handleClick = async () => {
    try {
      await signOut(auth);
      handleLogOut();
      alert("Signed Out!");
    } catch (error) {
      alert(error);
    }
  };

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
          <div className="flex p-1" hidden={!user}>
            <p className="ml-1">Cart {cartLength} </p>
            <FaShoppingCart className="m-1" />
          </div>
        </button>
      </header>
      <div className="fixed right-0 w-64 h-64">
        {isOpen && <Cart setIsOpen={setIsOpen} />}
      </div>
      <Link to="/auth">
        <div className="absolute right-36 bg-blue-400 top-2 px-2 rounded cursor-pointer hover:bg-blue-300 border">
          <div className="font-bold text-xl text-white">Log In</div>
        </div>
        <div
          className="absolute right-64 bg-blue-400 top-2 px-2 rounded cursor-pointer hover:bg-blue-300 border"
          onClick={handleClick}
        >
          <div className="font-bold text-xl text-white">Log Out</div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
