import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="p-2 bg-gray-900 text-white border-b">
        <ul className="flex justify-center">
          <li className="mx-4 cursor-pointer text-lg">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mx-4 cursor-pointer text-lg">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="mx-4 cursor-pointer text-lg">
            <NavLink to="/store">Store</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
