import { useState, useEffect } from "react";
import CategoryContainer from "../../../components/CategoryContainer/CategoryContainer";
import NavBar from "../../../components/NavBar/NavBar";
import axios from "axios";

function Mobile() {
  const [mobileData, setMobileData] = useState({ data: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const itemDataHandler = await axios.get(
          "http://localhost:8000/api/products"
        );
        console.log(
          itemDataHandler.data.filter((item) => item.category === "mobile")
        );

        setMobileData({
          data: itemDataHandler.data.filter(
            (item) => item.category === "mobile"
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
      <CategoryContainer data={mobileData.data} />
    </>
  );
}

export default Mobile;
