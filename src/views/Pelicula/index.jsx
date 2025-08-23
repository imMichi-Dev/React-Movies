import { useParams } from "react-router"
import Template from "../Template"
import { getMovieDetails } from "../../hooks/movies.hook"
import { Card, Col, Container, Row, ToggleButton } from "react-bootstrap"
import { favMovies } from "../../hooks/favs.hook"
import { useState } from "react"

/**
 * 📌 Componente Pelicula
 * 
 * Página de detalle de una película.
 * - Obtiene los datos de la película desde la API (usando getMovieDetails).
 * - Muestra la información en un Card con layout horizontal (imagen + detalles).
 * - Permite marcar/desmarcar la película como favorita con favMovies().
 */
const Pelicula = () => {
    // Obtiene el parámetro "id" desde la URL (ej: /pelicula/123)
    const { id } = useParams()

    // Hook que obtiene los detalles de la película por ID
    const { data: movie, isLoading } = getMovieDetails(id)

    // Funciones para manejar películas favoritas (localStorage)
    const { add, getList, remove } = favMovies()

    // Lista de favoritos actual guardada en localStorage
    const favs = getList()

    // Estado para marcar si la película actual está en favoritos
    const [checked, setChecked] = useState(favs.includes(id))

    console.log(movie) // Debug: imprime la película obtenida

    return (
        <Template>
            {/* Fondo de la página con la imagen backdrop de la película */}
            <div
                style={{
                    backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
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
                                    <Card.Title className="fs-3 fw-bold mt-3">{movie?.title}</Card.Title>

                                    {/* Botón toggle para marcar como favorito */}
                                    <ToggleButton
                                        className="mb-2"
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-danger"
                                        checked={checked}
                                        onChange={(e) => {
                                            // Si no estaba marcada, se agrega a favoritos
                                            if (!checked) add(id)
                                            // Si estaba marcada, se elimina de favoritos
                                            if (checked) remove(id)
                                            // Actualiza el estado local
                                            setChecked(e.currentTarget.checked)
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
                                    <Card.Subtitle className="fs-5 fw-bold mt-5">General</Card.Subtitle>
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
                                    <ul>
                                        {movie?.genres?.map((gen) =>
                                            <li key={gen?.id}>{gen?.name}</li>
                                        )}
                                    </ul>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </div>
        </Template>
    )
}

export default Pelicula
