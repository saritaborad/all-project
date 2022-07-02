import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Product </Link>
          <Link to="/add">Product </Link>
          <Link to="/update">Product </Link>
          <Link to="/logout">Product </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
