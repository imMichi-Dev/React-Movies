import { BrowserRouter, Route, Routes } from "react-router"
import Recientes from "./views/Recientes"
import Populares from "./views/Populares"
import Buscar from "./views/Buscar"
import Inicio from "./views/Inicio"


const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/recientes" element={<Recientes />} />
      <Route path="/populares" element={<Populares />} />
      <Route path="/buscar" element={<Buscar />} />
    </Routes>
  </BrowserRouter>
}

export default Router