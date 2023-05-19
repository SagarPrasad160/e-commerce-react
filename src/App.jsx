import Product from "./components/Product";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartProvider } from "./context/cartContext";

import { FaSpotify, FaYoutube, FaFacebook } from "react-icons/fa";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { products } from "./data";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <main className="w-2/3 mx-auto mt-5 mb-5">
                  <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4">
                    {products.map((product) => (
                      <Product product={product} key={product.title} />
                    ))}
                  </div>
                </main>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:product" element={<ProductPage />} />
          </Routes>
        </Router>
        <footer className="font-bold text-4xl text-white bg-blue-400 p-4 text-center ">
          <div className="flex justify-evenly">
            <div>The Generics</div>
            <div className="flex">
              <FaSpotify className="m-2 cursor-pointer hover:bg-green-500" />
              <FaYoutube className="m-2 cursor-pointer hover:bg-red-500" />
              <FaFacebook className="m-2 cursor-pointer hover:bg-blue-500" />
            </div>
          </div>
        </footer>
        <ToastContainer />
      </CartProvider>
    </>
  );
}

export default App;
