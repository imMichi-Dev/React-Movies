import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./Styles.css";

/**
 * Componente MovieCard
 *
 * Representa una tarjeta individual de película dentro de un grid.
 * Muestra la imagen (poster) y el título de la película.
 *
 * Al hacer clic en la tarjeta, navega a la página de detalle de esa película.
 *
 * @param {Object} props
 * @param {number|string} props.id - Identificador único de la película.
 * @param {string} props.title - Título de la película.
 * @param {string} props.image - Path de la imagen de la película (poster).
 */
export const MovieCard = ({ id, title, image }) => {
  // Hook de react-router que permite navegar programáticamente a otra ruta
  const navigate = useNavigate();

  return (
    // Col de Bootstrap: define el tamaño de la tarjeta en diferentes pantallas
    // xs=12 → ocupa todo el ancho en móviles
    // sm=6 → ocupa la mitad en pantallas pequeñas
    // md=4 → ocupa 1/3 en pantallas medianas
    // lg=2 → ocupa 1/6 en pantallas grandes (6 tarjetas por fila)
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={2}
      className="mb-4 movie-card"
      // Al hacer clic en la tarjeta, redirige al detalle de la película usando su id
      onClick={() => navigate(`/pelicula/${id}`)}
    >
      {/* Card de react-bootstrap que representa el contenedor de la película */}
      <Card className="h-100 shadow-sm">
        {/* Imagen de la película obtenida desde la API de TMDB */}
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt={title}
        />

        {/* Contenido del cuerpo de la tarjeta */}
        <Card.Body>
          {/* Título de la película */}
          <Card.Title className="fs-6">{title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
