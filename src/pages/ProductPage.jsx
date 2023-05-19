import { useParams } from "react-router-dom";
import { products } from "../data";

import { useState } from "react";

import { GoChevronRight, GoChevronLeft } from "react-icons/go";

function ProductPage() {
  const { product } = useParams();

  const productToShow = products.find((item) => item.title === product);

  const [imgIndex, setImgIndex] = useState(0);

  const collectionLength = productToShow.collection.length;

  const changeImage = (delta) => {
    if (delta === "next") {
      setImgIndex((imgIndex + 1) % collectionLength);
    } else {
      setImgIndex(Math.abs((imgIndex - 1) % collectionLength));
    }
  };

  return (
    <div className="my-4 min-h-96 max-h-fit">
      <div className="font-bold text-3xl text-center text-gray-400">
        {productToShow.title}
      </div>
      <div className="flex">
        <div className="flex">
          <div
            onClick={() => changeImage("prev")}
            className="cursor-pointer flex items-center"
          >
            <GoChevronLeft className="text-3xl text-gray-500" />
          </div>
          <div className="w-96">
            <img
              src={productToShow.collection[imgIndex]}
              alt="color"
              className="rounded h-64 w-full"
            />
          </div>
          <div
            onClick={() => changeImage("next")}
            className="cursor-pointer flex items-center"
          >
            <GoChevronRight className="text-3xl text-gray-500" />
          </div>
        </div>
        <div className="mt-5 font-bold text-2xl font-serif">
          {productToShow.description}
        </div>
      </div>
      <div className="flex justify-evenly my-5">
        {productToShow.reviews.map((review) => (
          <div className="m-2 border w-64 p-2" key={review.id}>
            {review.comment} ~{" "}
            <span className="font-semibold">{review.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
