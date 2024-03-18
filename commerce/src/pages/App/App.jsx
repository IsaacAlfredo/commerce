import { useState } from "react";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import CategoryContainer from "../../components/CategoryContainer/CategoryContainer";

function App() {
  return (
    <>
      <NavBar />
      <CategoryContainer />
    </>
  );
}

export default App;
