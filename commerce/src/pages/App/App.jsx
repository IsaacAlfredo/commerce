import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import CategoryContainer from "../../components/CategoryContainer/CategoryContainer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [itemData, setItemData] = useState({ data: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const itemDataHandler = await axios.get(
          "http://localhost:8000/api/products"
        );
        setItemData({ data: itemDataHandler.data });
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <CategoryContainer data={itemData.data} />
    </>
  );
}

export default App;
