function OrderCard({ name, address, product }) {
  return (
    <div className="OrderCard">
      <strong>Cliente: {name}</strong>
      <strong>CEP: {address}</strong>
      <strong>Produto: {product}</strong>
    </div>
  );
}

export default OrderCard;
