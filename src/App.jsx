import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Router from "./Router.jsx";
import { FavoritesProvider } from "./contexts/FavoritesContext.jsx";

createRoot(document.getElementById("root")).render(
  <FavoritesProvider>
    <Router />
  </FavoritesProvider>
);
