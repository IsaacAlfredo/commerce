import CategoryNav from "../CategoryNav/CategoryNav";
import ItemList from "../ItemList/ItemList";
import "./CategoryContainer.css";

function CategoryContainer() {
  return (
    <div className="CategoryContainer">
      <CategoryNav />
      <ItemList />
    </div>
  );
}

export default CategoryContainer;
