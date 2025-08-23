import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"
import "./Styles.css"

// Componente funcional Header
// Se encarga de renderizar la barra de navegación superior de la aplicación
const Header = () => {
    return (
        // Navbar de react-bootstrap con tema oscuro
        <Navbar bg="dark" data-bs-theme="dark">
            
            {/* Container mantiene el contenido centrado y con márgenes responsivos */}
            <Container>
                
                {/* Navbar.Brand: título o logo de la aplicación */}
                <Navbar.Brand href="#home">Movies</Navbar.Brand>
                
                {/* Sección de navegación (links) alineada a la izquierda */}
                <Nav className="me-auto">
                    {/* Enlaces de navegación dentro de la app */}
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/recientes">Ultimos lanzamientos</Nav.Link>
                    <Nav.Link href="/populares">Populares</Nav.Link>
                    <Nav.Link href="/buscar">Buscar</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

// Exporta el componente para poder usarlo en otras partes de la aplicación
export default Header
