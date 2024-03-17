import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/" className="NavLink">
        Catálogo
      </Link>
      <Link to="/about" className="NavLink">
        Sobre Nós
      </Link>
      <Link to="/contact" className="NavLink">
        Contato
      </Link>
    </nav>
  );
}

export default NavBar;
