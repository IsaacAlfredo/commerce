import { Link } from "react-router-dom";
import "./CategoryNav.css";

function CategoryNav() {
  return (
    <div className="Category">
      <h3>Categorias</h3>
      <nav className="CategoryNav">
        <Link to="/catalog/mobile" className="CategoryNavLink">
          Mobile
        </Link>
        <Link to="/catalog/desktop" className="CategoryNavLink">
          Desktop
        </Link>
        <Link to="/catalog/notebook" className="CategoryNavLink">
          Notebook
        </Link>
      </nav>
    </div>
  );
}

export default CategoryNav;
