import Template from '../Template'
import { getMovies, getPopularMovies, getRatedMovies } from '../../hooks/movies.hook'
import { Carousel, Container } from 'react-bootstrap'
import { MovieBlock } from '../../components/MovieBlock'

/**
 * 📌 Componente Inicio
 * 
 * Página principal de la aplicación.
 * - Muestra un carrusel de películas obtenidas desde la API (getMovies).
 * - Muestra bloques con películas populares y mejor puntuadas.
 */
const Inicio = () => {
  // 🔹 Obtiene la lista de películas para el carrusel (discover movies)
  // slides = data, loadingSlides = estado de carga
  const { data: slides, isLoading: loadingSlides } = getMovies(1)

  // 🔹 Obtiene películas populares
  const { data: popular, isLoading: loadingPopular } = getPopularMovies(1)

  // 🔹 Obtiene películas mejor puntuadas
  const { data: rated, isLoading: loadingRated } = getRatedMovies()

  return (
    <Template>
      {/* Carrusel de películas (se muestra solo si ya cargaron los datos) */}
      {!loadingSlides && (
        <Carousel fade interval={4000}>
          {slides?.results?.map((carouselSlide, idx) => (
            <Carousel.Item key={idx}>
              {/* Imagen del póster de cada película */}
              <img
                className="d-block w-100 bg-black h-100"
                src={`https://image.tmdb.org/t/p/original/${carouselSlide?.poster_path}`}
                alt={carouselSlide?.title}
                style={{
                  maxHeight: "500px",
                  objectFit: "cover",
                  minHeight: "500px"
                }}
              />
              {/* Texto superpuesto (título y descripción) con fondo semitransparente */}
              <Carousel.Caption style={{
                backgroundColor: "rgba(0,0,0,0.6)"
              }}>
                <h5>{carouselSlide?.title}</h5>
                <p>{carouselSlide?.overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      <br />

      {/* Contenedor con dos bloques de películas: populares y mejor puntuadas */}
      <Container style={{
        display: "flex",
        gap: "60px",
        padding: "10px"
      }}>
        {/* Bloque de películas populares */}
        {!loadingPopular && (
          <MovieBlock movies={popular} titulo="Películas más populares" />
        )}

        {/* Bloque de películas mejor puntuadas */}
        {!loadingRated && (
          <MovieBlock movies={rated} titulo="Películas mejor puntuadas" />
        )}
      </Container>
    </Template>
  )
}

export default Inicio
