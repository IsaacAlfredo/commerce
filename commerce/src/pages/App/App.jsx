import { useState } from "react";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import ItemCard from "../../components/ItemCard/ItemCard";
function App() {
  return (
    <>
      <NavBar />
      <CategoryNav />
      <ItemCard />
    </>
  );
}

export default App;
