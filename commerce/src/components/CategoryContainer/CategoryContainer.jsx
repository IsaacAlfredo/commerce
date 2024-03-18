import CategoryNav from "../CategoryNav/CategoryNav";
import ItemList from "../ItemList/ItemList";
import "./CategoryContainer.css";

function CategoryContainer({ data }) {
  return (
    <div className="CategoryContainer">
      <CategoryNav />
      <ItemList data={data} />
    </div>
  );
}

export default CategoryContainer;
