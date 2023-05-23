import PropTypes from "prop-types";

import { useContext } from "react";

import cartContext from "../context/cartContext";

function Cart({ setIsOpen }) {
  const { cart, removeFromCart } = useContext(cartContext);

  if (cart.length === 0) {
    return (
      <div className="border p-4">
        <div className="text-xl font-bold text-center">
          Items you add will show up here
        </div>
        <button
          className="absolute top-1 right-1 font-semibold"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
      </div>
    );
  }

  return (
    <div className="border p-4">
      <div className="font-bold text-xl text-center">Cart</div>
      {cart.map((product) => (
        <div key={product.id} className="flex justify-between border-b-2 m-1">
          <div>{product.title}</div>
          <div className="mr-2">${product.price}</div>
          <div>
            <button
              className="bg-red-600 rounded m-1  p-1 px-2 text-white"
              onClick={() => removeFromCart(product.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

Cart.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Cart;
