import { useState, useContext } from "react";
import authContext from "../context/authContext";
function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [sendingReq, setSendingReq] = useState(false);
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
    setSendingReq(true);
    if (isLogin) {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXmI1MuvSeNwcSdahEZY4e6l97BdaiBhk",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        handleLogIn(data.idToken);
        console.log(data);
      } else {
        const data = await response.json();
        alert(data.error.message);
      }
    } else {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXmI1MuvSeNwcSdahEZY4e6l97BdaiBhk",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    }
    setSendingReq(false);
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
          className="w-1/2 mx-auto bg-blue-400 h-12 rounded text-white font-bold text-xl"
        >
          Log In
        </button>
        {sendingReq && <p className="text-center">Sending Request</p>}
        <button onClick={handleClick}>
          {isLogin
            ? "Don't have an account? Sign up instead."
            : "Have an account,login instead."}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
