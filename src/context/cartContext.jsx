import { createContext, useState } from "react";
import PropTypes from "prop-types";

import { toast } from "react-toastify";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const isPresent = cart.find((carItem) => carItem.title === item.title);
    if (isPresent) {
      toast.error("Item already exists!", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }
    setCart([...cart, item]);
    toast.success("Item added to cart", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter(
      (cartItem) => cartItem.title !== item.title
    );
    setCart(updatedCart);
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
