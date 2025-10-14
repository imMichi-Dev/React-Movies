import Footer from "./Footer";
import Header from "./Header";
import { Button } from "react-bootstrap";

// Componente funcional Template
// Sirve como plantilla principal para las páginas de la aplicación.
// Se encarga de envolver el contenido con un Header y un Footer.
const Template = ({ children }) => {
  return (
    <>
      {/* Header fijo en la parte superior */}
      <Header />

      {/* Contenido dinámico recibido como children */}
      {children}

      {/* Footer fijo en la parte inferior */}
      <Footer />
    </>
  );
};

// Exporta el componente Template para poder reutilizarlo en otras páginas
export default Template;
