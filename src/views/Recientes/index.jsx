import { useState } from 'react'
import "./Styles.css"
import Template from '../Template'
import { getMovies } from '../../hooks/movies.hook'
import { MovieCard } from '../../components/MovieCard'
import { Container, Row } from 'react-bootstrap'
import { Paginacion } from '../../components/Paginacion'

// Componente principal que renderiza los lanzamientos más recientes
const Recientes = () => {
  // Estado local que almacena la página actual (se usa para paginación)
  const [page, setPage] = useState(1)

  // Hook personalizado que obtiene las películas desde la API o fuente de datos
  // Devuelve un objeto con la lista de películas (movies) y un indicador de carga (isLoading)
  const { data: movies, isLoading } = getMovies(page)

  return (
    // Template es un componente que probablemente maneja la estructura principal (layout)
    <Template>
      {/* Título de la página */}
      <h1 class="display-4">
        <font dir="auto">
          <font dir="auto" style={{
            verticalAlign: "inherit",
            display: "block",
            textAlign: "center",
            width: "100%"
          }}>
            Ultimos lanzamientos
          </font>
        </font>
      </h1>

      <br />

      {/* Contenedor de Bootstrap con margen superior */}
      <Container className="mt-4">
        <Row>
          {/* Mapea la lista de películas y genera un MovieCard por cada una */}
          {movies?.results?.map((movie) =>
            <MovieCard
              key={movie.id}               // Siempre se recomienda usar "key" en listas
              id={movie.id}                // ID de la película
              title={movie.title}          // Título de la película
              image={movie.poster_path}    // Poster de la película
            />
          )}
        </Row>

        {/*Componente de paginación, Permitiría cambiar de página y mostrar más resultados.*/}
        <Row>
          <Paginacion actual={page} total={movies?.total_pages} onChange={(newPage) => setPage(newPage)} />
        </Row>

      </Container>
    </Template>
  )
}

// Exporta el componente para que pueda ser usado en otras partes del proyecto
export default Recientes
