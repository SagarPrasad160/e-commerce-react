import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const authContext = createContext();

import { auth } from "../firestore/config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthProvider = ({ children }) => {
  const [userLog, setUserLog] = useState({
    user: null,
    isAuthReady: false,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUserLog({ user, isAuthReady: true });
      unsub();
    });
  }, []);

  const handleLogIn = (payload) => {
    setUserLog({ ...userLog, user: payload });
  };
  const handleLogOut = () => {
    setUserLog({ ...userLog, user: null });
  };

  console.log("AuthContext state:", userLog);

  return (
    <authContext.Provider value={{ userLog, handleLogIn, handleLogOut }}>
      {children}
    </authContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default authContext;
