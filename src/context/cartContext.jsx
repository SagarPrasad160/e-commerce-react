import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// import { toast } from "react-toastify";
import { db } from "../firestore/config";
import {
  doc,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const ref = collection(db, "carts");
    onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setCart(results);
    });
  }, []);

  const addToCart = async (item) => {
    const ref = collection(db, "carts");
    await addDoc(ref, {
      title: item.title,
      price: item.price,
    });
  };

  const removeFromCart = async (id) => {
    const ref = doc(db, "carts", id);
    await deleteDoc(ref);
  };
  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
