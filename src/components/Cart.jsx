import PropTypes from "prop-types";

function Cart({ products }) {
  return (
    <div className="border p-4">
      <div className="font-bold text-xl text-center">Cart</div>
      {products.map((product) => (
        <div
          key={product.title}
          className="flex justify-between border-b-2 m-1"
        >
          <div>{product.title}</div>
          <div className="mr-2">${product.price}</div>
          <div>
            <button className="bg-red-600 m-1  p-1 text-white">X</button>
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
