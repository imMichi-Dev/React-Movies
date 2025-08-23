import { useState } from 'react'
import "./Styles.css"
import Template from '../Template'
import { getPopularMovies } from '../../hooks/movies.hook'
import { MovieCard } from '../../components/MovieCard'
import { Container, Row } from 'react-bootstrap'
import { Paginacion } from '../../components/Paginacion'

/**
 * 📌 Componente Populares
 * 
 * Página que muestra la lista de películas populares desde la API de TMDB.
 * - Permite manejar la paginación con un estado interno (page).
 * - Renderiza cada película como una tarjeta (MovieCard).
 */
const Populares = () => {
  // Estado que almacena la página actual de resultados
  const [page, setPage] = useState(1)

  // Hook que obtiene las películas populares de la página actual
  const { data: movies, isLoading } = getPopularMovies(page)

  // Debug: muestra los datos en consola
  console.log(movies);
  
  return (
    <Template>
      {/* Título de la página */}
      <h1 className="display-4 text-center">Populares</h1>
      <br />

      {/* Contenedor de las películas */}
      <Container className="mt-4">
        <Row>
          {/* Itera sobre los resultados y renderiza una tarjeta para cada película */}
          {movies?.results?.map((movie) =>
            <MovieCard 
              key={movie.id}           // clave única para React
              id={movie.id}            // ID de la película
              title={movie.title}      // Título
              image={movie.poster_path} // Póster
            />
          )}
        </Row>

        {/* 
        🔹 Componente de paginación (comentado por ahora).
        Permitiría cambiar de página y mostrar más resultados.
        <Row> 
          <Paginacion actual={page} total={movies?.total_pages} />
        </Row> 
        */}
      </Container>
    </Template>
  )
}

export default Populares
