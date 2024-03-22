import { Routes, Route } from "react-router-dom";
import App from "./pages/App/App";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Mobile from "./pages/Category/Mobile/Mobile";
import Desktop from "./pages/Category/Desktop/Desktop";
import Notebook from "./pages/Category/Notebook/Notebook";
import BuyPage from "./pages/BuyPage/BuyPage";

export function MyRoutes() {
  return (
    <Routes>
      <Route element={<App />} path="/" exact></Route>
      <Route element={<About />} path="/about"></Route>
      <Route element={<Contact />} path="/contact"></Route>
      <Route element={<Mobile />} path="/catalog/mobile"></Route>
      <Route element={<Desktop />} path="/catalog/desktop"></Route>
      <Route element={<Notebook />} path="/catalog/notebook"></Route>
      <Route element={<BuyPage />} path="/catalog/buy/:id"></Route>
    </Routes>
  );
}
