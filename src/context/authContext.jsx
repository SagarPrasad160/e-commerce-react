import { createContext, useState } from "react";
import PropTypes from "prop-types";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  // store token in state to identify the user currently logged in
  const [token, setToken] = useState(null);

  const isLoggedIn = !!token;

  const handleLogIn = (token) => {
    setToken(token);
  };
  const handleLogOut = () => {
    setToken(null);
  };

  return (
    <authContext.Provider
      value={{ token, handleLogIn, handleLogOut, isLoggedIn }}
    >
      {children}
    </authContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default authContext;
