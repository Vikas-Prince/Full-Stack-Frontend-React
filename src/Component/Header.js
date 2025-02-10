import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div id="brand">
        Food.Co &nbsp;
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
      </div>
      <div id="auth">
        <Link to="/login" className="btn btn-primary auth-btn">
          Login
        </Link>
        <Link to="/logout" className="btn btn-primary auth-btn">
          Logout
        </Link>
      </div>
    </header>
  );
};

export default Header;
