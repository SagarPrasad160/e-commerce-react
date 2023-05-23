import ProductList from "./components/ProductList";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import AuthForm from "./pages/AuthForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartProvider } from "./context/cartContext";

import { FaSpotify, FaYoutube, FaFacebook } from "react-icons/fa";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { products } from "./data";

import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Router>
            <NavBar />
            <Header />
            <Routes>
              <Route path="/" element={<ProductList products={products} />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/:product" element={<ProductPage />} />
              <Route path="/auth" element={<AuthForm />} />
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
      </AuthProvider>
    </>
  );
}

export default App;
