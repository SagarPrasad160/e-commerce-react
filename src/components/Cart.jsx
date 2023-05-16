import PropTypes from "prop-types";

import { useContext } from "react";

import cartContext from "../context/cartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(cartContext);

  if (cart.length === 0) {
    return (
      <div className="border p-4 text-xl font-bold">
        Item you add will show here
      </div>
    );
  }

  return (
    <div className="border p-4">
      <div className="font-bold text-xl text-center">Cart</div>
      {cart.map((product) => (
        <div
          key={product.title}
          className="flex justify-between border-b-2 m-1"
        >
          <div>{product.title}</div>
          <div className="mr-2">${product.price}</div>
          <div>
            <button
              className="bg-red-600 rounded m-1  p-1 px-2 text-white"
              onClick={() => removeFromCart(product)}
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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cart;
