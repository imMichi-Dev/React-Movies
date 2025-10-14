import { BrowserRouter, Route, Routes } from "react-router";
import Recientes from "./views/Recientes";
import Populares from "./views/Populares";
import Buscar from "./views/Buscar";

import Pelicula from "./views/Pelicula";
import Inicio from "./views/Inicio";
import Favoritos from "./views/Favoritos";

// Componente funcional Router
// Define las rutas principales de la aplicación utilizando React Router
const Router = () => {
  return (
    // BrowserRouter envuelve toda la aplicación y habilita la navegación con historial HTML5
    <BrowserRouter>
      {/* Routes contiene todos los mapeos de URL a componentes */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<Inicio />} />

        {/* Ruta para mostrar los últimos lanzamientos */}
        <Route path="/recientes" element={<Recientes />} />

        {/* Ruta para mostrar las películas populares */}
        <Route path="/populares" element={<Populares />} />

        {/* Ruta para buscar películas */}
        <Route path="/buscar" element={<Buscar />} />

        {/* Ruta dinámica: muestra el detalle de una película según su id */}
        <Route path="/pelicula/:id" element={<Pelicula />} />

        {/* Ruta para mostrar las películas favoritas */}
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
};

// Exporta el componente Router para que pueda ser usado como base de la aplicación
export default Router;
