import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [updatePage, setUpdatePage] = useState("Home");

  return (
    <div>
      <div className="navbar">
          <Link to="/">
            <li onClick={() => setUpdatePage("Home")} className="nav-link">
              Home
            </li>
          </Link>
          <Link to="/Categories">
            <li
              // onClick={() => setUpdatePage("Categories")}
              className="nav-link"
            >
              Categories
            </li>
          </Link>
          <Link to="/Jokes">
            <li onClick={() => setUpdatePage("Jokes")} className="nav-link">
              Jokes
            </li>
          </Link>
          <Link to="/Search">
            <li onClick={() => setUpdatePage("Search")} className="nav-link">
              Search
            </li>
          </Link>  
      </div>
    </div>
  );
}

export default Navbar;
