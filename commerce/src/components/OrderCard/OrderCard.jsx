import "./OrderCard.css";

function OrderCard({ name, address, products }) {
  return (
    <div className="OrderCard">
      <strong>Cliente: {name}</strong>
      <strong>CEP: {address}</strong>
      <strong>Produtos: </strong>
      <div className="ProductList">
        {" "}
        {products.map((prod) => (
          <strong>{prod}</strong>
        ))}
      </div>
    </div>
  );
}

export default OrderCard;
