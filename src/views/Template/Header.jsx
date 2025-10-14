import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "./Styles.css";
import { useNavigate } from "react-router";

// Componente funcional Header
// Se encarga de renderizar la barra de navegación superior de la aplicación
const Header = () => {
  const navigate = useNavigate();
  return (
    // Navbar de react-bootstrap con tema oscuro
    <Navbar bg="dark" data-bs-theme="dark">
      {/* Container mantiene el contenido centrado y con márgenes responsivos */}
      <Container>
        {/* Navbar.Brand: título o logo de la aplicación */}
        <Navbar.Brand onClick={() => navigate("/")}>Movies</Navbar.Brand>

        {/* Sección de navegación (links) alineada a la izquierda */}
        <Nav className="me-auto">
          {/* Enlaces de navegación dentro de la app */}
          <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
          <Nav.Link onClick={() => navigate("/recientes")}>
            Ultimos lanzamientos
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/populares")}>Populares</Nav.Link>
          <Nav.Link onClick={() => navigate("/favoritos")}>Favoritos</Nav.Link>
          <Nav.Link onClick={() => navigate("/buscar")}>Buscar</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

// Exporta el componente para poder usarlo en otras partes de la aplicación
export default Header;
