import { Routes, Route } from "react-router-dom";
import App from "./pages/App/App";

export function MyRoutes() {
  return (
    <Routes>
      <Route element={<App />} path="/" exact></Route>
      <Route element={<App />} path="/about"></Route>
      <Route element={<App />} path="/contact"></Route>
    </Routes>
  );
}
