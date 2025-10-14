import { useState } from "react";
import "./Styles.css";
import Template from "../Template";
import { Form, Container, Row } from "react-bootstrap";
import { MovieCard } from "../../components/MovieCard";
import { useSearchMovies } from "../../hooks/useSearchMovies.hook";

/**
 * 📌 Componente Buscar
 *
 * Permite al usuario escribir un texto y buscar películas en la API de TMDB.
 * Muestra los resultados en forma de tarjetas (MovieCard).
 */
const Buscar = () => {
  // Estado local para almacenar el texto de búsqueda
  const [query, setQuery] = useState("");

  // Hook personalizado que consulta la API de películas según el texto de búsqueda
  const { data, isLoading } = useSearchMovies(query);

  /**
   * 📌 handleChange
   * Se ejecuta cada vez que el usuario escribe en el input de búsqueda.
   * Actualiza el estado "query" con el nuevo valor.
   */
  const handleChange = (e) => {
    const inputText = e.target.value;
    setQuery(inputText);
  };

  console.log(data); // Muestra en consola los datos obtenidos de la API (para debug)

  return (
    <Template>
      {/* Encabezado con título */}
      <Container>
        <h1 className="display-4 text-center">Buscar</h1>

        {/* Input de búsqueda */}
        <Form.Group
          className="mb-3 fw-bold text-center"
          controlId="formGroupEmail"
        >
          <Form.Control
            onChange={handleChange}
            placeholder="mínimo 3 caracteres..."
          />
        </Form.Group>
      </Container>

      <br />

      {/* Resultados de búsqueda */}
      <Container className="mt-4">
        <Row>
          {/* Itera sobre los resultados y renderiza una tarjeta por cada película */}
          {data?.results?.map((movie) => (
            <MovieCard
              key={movie.id} // clave única para cada elemento
              id={movie.id} // ID de la película
              title={movie.title} // título de la película
              image={movie.poster_path} // poster de la película
            />
          ))}
        </Row>
      </Container>
    </Template>
  );
};

export default Buscar;
