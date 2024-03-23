import { useState, useEffect } from "react";
import OrderCard from "../OrderCard/OrderCard";
import axios from "axios";
import "./OrderList.css";

function OrderList() {
  const [orderData, setOrderData] = useState({ data: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const orderDataHandler = await axios.get(
          "http://localhost:8000/api/orders"
        );
        const orderProductDataHandler = await axios.get(
          "http://localhost:8000/api/productOrders"
        );
        for (const order in orderDataHandler.data) {
          orderDataHandler.data[order] = {
            ...orderDataHandler.data[order],
            products: [],
          };
          for (const orderProduct in orderProductDataHandler.data) {
            if (
              orderDataHandler.data[order].id ===
              orderProductDataHandler.data[orderProduct].order_id
            ) {
              orderDataHandler.data[order].products.push(
                orderProductDataHandler.data[orderProduct].product_id
              );
            }
          }
        }
        console.log(orderDataHandler.data);
        setOrderData({ data: orderDataHandler.data });
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <h1>Pedidos</h1>
      <div className="OrderList">
        {orderData.data.map((card) => (
          <OrderCard
            name={card.user_name}
            address={card.address}
            products={card.products}
            key={card.id}
          />
        ))}
      </div>
    </>
  );
}

export default OrderList;
