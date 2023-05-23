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

import { FaSpotify, FaYoutube, FaFacebook } from "react-icons/fa";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { products } from "./data";

import { useContext } from "react";

import authContext from "./context/authContext";

function App() {
  const { userLog } = useContext(authContext);
  const { user, isAuthReady } = userLog;
  return (
    <>
      {isAuthReady && (
        <>
          <Router>
            <NavBar />
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  user ? (
                    <ProductList products={products} />
                  ) : (
                    <Navigate to="/auth" />
                  )
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/:product" element={<ProductPage />} />
              <Route
                path="/auth"
                element={!user ? <AuthForm /> : <Navigate to="/" />}
              />
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
        </>
      )}
    </>
  );
}

export default App;
