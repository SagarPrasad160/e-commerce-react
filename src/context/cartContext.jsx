import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import authContext from "./authContext";

// import { toast } from "react-toastify";
import { db } from "../firestore/config";
import {
  doc,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const { userLog } = useContext(authContext);

  useEffect(() => {
    let ref;
    ref = collection(db, "carts");
    if (userLog.user) {
      ref = query(ref, where("uid", "==", userLog.user.uid));
      console.log("user");
    }
    onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setCart(results);
    });
  }, [userLog]);

  const addToCart = async (item) => {
    const ref = collection(db, "carts");
    await addDoc(ref, {
      title: item.title,
      price: item.price,
      uid: userLog.user.uid,
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
