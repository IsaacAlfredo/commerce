import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import BuyForm from "../../components/BuyForm/BuyForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BuyPage.css";

function BuyPage() {
  const { id } = useParams();
  const [itemData, setItemData] = useState({});
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      try {
        const itemDataHandler = await axios.get(
          `http://localhost:8000/api/products/${id}`
        );
        setItemData(itemDataHandler.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <img
        src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-3440-laptop/media-gallery/notebook-latitude-14-3440-nt-uma-gray-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3300&hei=1999&qlt=100,1&resMode=sharp2&size=3300,1999&chrss=full&imwidth=5000"
        alt="Imagem do produto"
        className="ProductImage"
      />
      <strong>{itemData.name}</strong>
      <strong>Preço: R${itemData.price}</strong>
      <strong>Em estoque: {itemData.stock}</strong>
      <BuyForm itemData={itemData} />
    </>
  );
}

export default BuyPage;
