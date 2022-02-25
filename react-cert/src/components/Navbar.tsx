import { Link } from "react-router-dom";
import "../App.css";

function Navbar(props: { loggedIn: boolean }) {

  //# props
  //# destructuring
  const { loggedIn } = props;

  return (
    <div>
      <div className="navbar">
        {loggedIn ? (
          <div>
            <Link to="/">
              <li className="nav-link">Home</li>
            </Link>
            <Link to="/Categories">
              <li className="nav-link">Categories</li>
            </Link>
            <Link to="/Jokes">
              <li className="nav-link">Jokes</li>
            </Link>
            <Link data-testid="navLink" to="/Search">
              <li className="nav-link">Search</li>
            </Link>
          </div>
        ) : (
          <div>
            <li className="nav-link">Home</li>
            <li className="nav-link">Categories</li>
            <li className="nav-link">Jokes</li>
            <li className="nav-link">Search</li>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
