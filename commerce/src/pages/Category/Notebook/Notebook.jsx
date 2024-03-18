import CategoryContainer from "../../../components/CategoryContainer/CategoryContainer";
import NavBar from "../../../components/NavBar/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";

function Notebook() {
  const [notebookData, setNotebookData] = useState({ data: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const itemDataHandler = await axios.get(
          "http://localhost:8000/api/products"
        );
        console.log(
          itemDataHandler.data.filter((item) => item.category === "mobile")
        );

        setNotebookData({
          data: itemDataHandler.data.filter(
            (item) => item.category === "notebook"
          ),
        });
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      <CategoryContainer data={notebookData.data} />
    </>
  );
}

export default Notebook;
