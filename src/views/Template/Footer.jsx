import { Container } from "react-bootstrap";

// Componente funcional Footer
// Se encarga de mostrar la sección inferior fija (pie de página) de la aplicación
const Footer = () => {
  return (
    <>
      {/* Contenedor principal del footer con estilos aplicados */}
      <Container
        className="bg-dark"
        style={{
          margin: "0",
          width: "100%",
          height: "50px", // Altura fija del footer
          display: "flex", // Uso de flexbox para alinear el contenido
          alignItems: "center", // Centra verticalmente el contenido
          justifyContent: "center", // Centra horizontalmente el contenido
          maxWidth: "100%"
        }}
      >
        {/* Etiqueta semántica <footer> que representa el pie de página */}
        <footer>
          {/* Texto dentro del footer sin márgenes ni padding */}
          <p className="p-0 m-0">Movie App</p>
        </footer>
      </Container>
    </>
  );
};

// Exporta el componente Footer para poder usarlo en otras partes del proyecto
export default Footer;
