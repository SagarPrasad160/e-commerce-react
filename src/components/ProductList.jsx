import PropTypes from "prop-types";

import Product from "./Product";

function ProductList({ products }) {
  return (
    <div>
      <main className="w-2/3 mx-auto mt-5 mb-5">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </main>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Add other prop validations here as needed
    })
  ).isRequired,
};

export default ProductList;
