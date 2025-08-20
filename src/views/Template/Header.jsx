import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"
import "./Styles.css"

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">          
            <Nav className="me-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/recientes">Ultimos lanzamientos</Nav.Link>
                <Nav.Link href="/populares">Populares</Nav.Link>
                <Nav.Link href="/buscar">Buscar</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header