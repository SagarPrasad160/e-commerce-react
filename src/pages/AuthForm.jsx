import { useState, useContext } from "react";

import authContext from "../context/authContext";

import { auth } from "../firestore/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { handleLogIn } = useContext(authContext);

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!isLogin) {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        handleLogIn(response.user);
        console.log(response.user);
      } catch (error) {
        setError(error);
      }
    } else {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        handleLogIn(response.user);
        console.log(response.user);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full h-96">
      <form
        action=""
        className="mx-auto border h-2/3 w-1/2 mt-4 flex flex-col justify-evenly rounded-lg shadow"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-2xl font-bold">
          {isLogin ? "Log In" : "Sign Up"}
        </h1>
        <input
          type="text"
          id="email"
          className="border w-1/2 h-12 mx-auto rounded"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          className="border w-1/2 h-12 rounded mx-auto"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-1/2 mx-auto bg-blue-400 h-12 rounded text-white font-bold text-xl active:scale-95"
        >
          {isLogin ? "Log In" : "Create"}
        </button>
        <button onClick={handleClick}>
          {isLogin
            ? "Don't have an account? Sign up instead."
            : "Have an account,login instead."}
        </button>
        {error && <p className="text-center text-red-400">{error.message}</p>}
      </form>
    </div>
  );
}

export default AuthForm;
