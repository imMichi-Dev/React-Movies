import { useParams } from "react-router";
import Template from "../Template";
import {
  Card,
  Col,
  Container,
  Row,
  ToggleButton,
  ListGroup,
} from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { useMovieDetails } from "../../hooks/useMovieDetails.hook";

/**
 * 📌 Componente Pelicula
 *
 * Página de detalle de una película.
 * - Obtiene los datos de la película desde la API (usando useMovieDetails).
 * - Muestra la información en un Card con layout horizontal (imagen + detalles).
 */
const Pelicula = () => {
  // Obtiene el parámetro "id" desde la URL (ej: /pelicula/123)
  const { id } = useParams();

  // Hook que obtiene los detalles de la película por ID
  const { data: movie, isLoading } = useMovieDetails(id);

  // Funciones para manejar películas favoritas
  const { addFavorite, removeFavorite, isFavorite, favorites } =
    useContext(FavoritesContext);

  // Estado para marcar si la película actual está en favoritos
  const [checked, setChecked] = useState();

  useEffect(() => {
    const isFav = isFavorite(movie?.id)
    setChecked(isFav);
  }, [movie]);

  if (!movie || isLoading) return;

  return (
    <Template>
      {/* Fondo de la página con la imagen backdrop de la película */}
      <Container
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container className="position-relative" style={{ zIndex: 2 }}>
          {/* Card principal con los detalles */}
          <Card className="shadow-lg" style={{ maxWidth: "1000px" }}>
            <Row className="g-0">
              {/* Columna izquierda: poster */}
              <Col md={5}>
                <Card.Img
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt={movie?.title}
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </Col>

              {/* Columna derecha: detalles de la película */}
              <Col md={7}>
                <Card.Body>
                  {/* Título */}
                  <Card.Title className="fs-3 fw-bold mt-3">
                    {movie?.title}
                  </Card.Title>

                  {/* Botón toggle para marcar como favorito */}
                  <ToggleButton
                    className="mb-2"
                    id="toggle-check"
                    type="checkbox"
                    variant="outline-danger"
                    checked={checked}
                    onChange={(e) => {
                      // Si no estaba marcada, se agrega a favoritos
                      if (!checked) addFavorite(movie);
                      // Si estaba marcada, se elimina de favoritos
                      if (checked) removeFavorite(id);
                      // Actualiza el estado local
                      setChecked(e.currentTarget.checked);
                    }}
                  >
                    {/* Ícono de corazón de Bootstrap Icons */}
                    <i className="bi bi-bookmark-heart-fill"></i>
                  </ToggleButton>

                  {/* Duración */}
                  <Card.Subtitle className="mb-2 text-muted">
                    {movie?.runtime} Min
                  </Card.Subtitle>

                  {/* Sección descripción */}
                  <Card.Subtitle className="fs-5 fw-bold mt-5">
                    General
                  </Card.Subtitle>
                  <Card.Text className="mt-3">{movie?.overview}</Card.Text>
                  <hr />

                  {/* Fecha de estreno */}
                  <p>
                    <strong>Fecha de estreno:</strong> {movie?.release_date}
                  </p>

                  {/* Sección géneros */}
                  <Card.Subtitle className="fs-5 fw-bold mt-5">
                    Géneros
                  </Card.Subtitle>
                  <ListGroup>
                    {movie?.genres?.map((gen) => (
                      <ListGroup.Item key={gen?.id}>{gen?.name}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </Container>
    </Template>
  );
};

export default Pelicula;
