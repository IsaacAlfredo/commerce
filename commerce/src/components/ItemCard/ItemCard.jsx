import { Link } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({ id, img_src, name, price }) {
  return (
    <div className="ItemCard">
      <img src={img_src} alt="Item" className="ItemCardPic" />
      <strong>{name}</strong>
      <strong>R$ {price}</strong>
      <Link to={`/catalog/buy/${id}`} className="CategoryNavLink">
        Comprar
      </Link>
    </div>
  );
}

export default ItemCard;
