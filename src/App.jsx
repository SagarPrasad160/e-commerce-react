import Product from "./components/Product";
import Cart from "./components/Cart";
import { FaSpotify, FaYoutube, FaFacebook } from "react-icons/fa";

import { useState } from "react";

const products = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="p-4 bg-gray-500">
        <h1 className="text-5xl text-white text-center">The Generics</h1>
        <button
          className="bg-red-500 border rounded px-2 text-white absolute right-1 top-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          Cart
        </button>
      </header>

      <div className="fixed right-0 w-64 h-64">
        {isOpen && <Cart products={products} />}
      </div>

      <main className="w-2/3 mx-auto mt-5 mb-5">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4">
          {products.map((product) => (
            <Product product={product} key={product.title} />
          ))}
        </div>
      </main>
      <footer className="font-bold text-4xl text-white bg-blue-400 p-4 text-center">
        <div className="flex justify-evenly">
          <div>The Generics</div>
          <div className="flex">
            <FaSpotify className="m-2 cursor-pointer hover:bg-green-500" />
            <FaYoutube className="m-2 cursor-pointer hover:bg-red-500" />
            <FaFacebook className="m-2 cursor-pointer hover:bg-blue-500" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
