import { Routes, Route } from "react-router-dom";
import App from "./pages/App/App";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
export function MyRoutes() {
  return (
    <Routes>
      <Route element={<App />} path="/" exact></Route>
      <Route element={<About />} path="/about"></Route>
      <Route element={<Contact />} path="/contact"></Route>
    </Routes>
  );
}
