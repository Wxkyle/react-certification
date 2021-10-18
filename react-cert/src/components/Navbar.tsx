import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(props: any) {
  const { notLoggedIn } = props;

  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/Categories">
          <li className="nav-link">Categories</li>
        </Link>
        <Link to="/Jokes">
          <li className="nav-link">Jokes</li>
        </Link>
        <Link to="/Search">
          <li className="nav-link">Search</li>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
