import PropTypes from "prop-types";

function Product({ product }) {
  return (
    <div className="mx-auto flex flex-col p-4 shadow">
      <div className="font-bold text-xl mb-4 text-center">{product.title}</div>
      <div className="h-64 w-64">
        <img src={product.imageUrl} alt="product" />
      </div>
      <div className="flex justify-between mt-2 cursor-pointer">
        <span className="font-semibold">${product.price}</span>
        <span className="bg-blue-300 p-2 text-white text-xl rounded hover:bg-blue-400">
          Add To Cart
        </span>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
