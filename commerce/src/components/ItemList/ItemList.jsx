import ItemCard from "../ItemCard/ItemCard";
import "./ItemList.css";

function ItemList({ data }) {
  return (
    <div className="ItemList">
      {data.map((card) => (
        <ItemCard
          id={card.id}
          img_src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-3440-laptop/media-gallery/notebook-latitude-14-3440-nt-uma-gray-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3300&hei=1999&qlt=100,1&resMode=sharp2&size=3300,1999&chrss=full&imwidth=5000"
          name={card.name}
          price={card.price}
          key={card.id}
        />
      ))}
    </div>
  );
}

export default ItemList;
