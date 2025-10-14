import { Card, Container, Image, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./Styles.css";

/**
 * Componente MovieBlock
 *
 * Renderiza un bloque de películas dentro de una tarjeta (Card) scrollable.
 * Cada película se muestra como un ítem con un mini-póster y su título,
 * y permite navegar al detalle al hacer clic.
 *
 * @param {Object} props
 * @param {Object} props.movies - Objeto de películas (con propiedad results[] de la API TMDB).
 * @param {string} props.titulo - Título que se mostrará en la cabecera del bloque.
 */
export const MovieBlock = ({ movies, titulo }) => {
  // Hook de react-router que permite navegar programáticamente a otra ruta
  const navigate = useNavigate();

  return (
    // Container de Bootstrap para dar márgenes y centrar el contenido
    <Container className="mt-4">
      {/* Card que envuelve la lista, con alto máximo y scroll si es necesario */}
      <Card
        style={{ maxHeight: "300px", overflowY: "auto" }}
        className="shadow"
      >
        {/* Encabezado de la tarjeta con el título del bloque */}
        <Card.Header className="fw-bold">🎬 {titulo}</Card.Header>

        {/* Lista que contiene cada película */}
        <ListGroup variant="flush">
          {/* Itera sobre las películas recibidas en movies.results */}
          {movies?.results?.map((movie, idx) => (
            <ListGroup.Item
              key={idx} // Clave única para React
              className="movie-item"
              // Al hacer clic en un ítem, navega a la ruta del detalle de la película
              onClick={() => navigate(`/pelicula/${movie?.id}`)}
            >
              {/* Mini poster de la película como avatar circular */}
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                height="25px"
                width="25px"
                roundedCircle
              />
              {/* Título de la película */}
              {movie?.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
};
