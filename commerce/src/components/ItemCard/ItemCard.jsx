import "./ItemCard.css";

function ItemCard({ img_src, name, price }) {
  return (
    <>
      <img src={img_src} alt="Item" className="ItemCardPic" />
      <strong>{name}</strong>
      <strong>{price}</strong>
      <button>Comprar</button>
    </>
  );
}

export default ItemCard;
