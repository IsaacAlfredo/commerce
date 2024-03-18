import "./ItemCard.css";

function ItemCard({ img_src, name, price }) {
  return (
    <div className="ItemCard">
      <img src={img_src} alt="Item" className="ItemCardPic" />
      <strong>{name}</strong>
      <strong>{price}</strong>
      <button>Comprar</button>
    </div>
  );
}

export default ItemCard;
