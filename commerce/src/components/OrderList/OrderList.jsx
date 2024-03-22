import { useState, useEffect } from "react";

function OrderList() {
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const orderDataHandler = await axios.get(
          `http://localhost:8000/api/orders`
        );
        setOrderData(orderDataHandler.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  return <></>;
}

export default OrderList;
