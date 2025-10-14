import Template from "../Template";
import { Container, Row } from "react-bootstrap";
import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { MovieCard } from "../../components/MovieCard";

const Favoritos = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Template>
      {/* Título de la página */}
      <h1 className="display-4 text-center">Favoritos</h1>
      <br />

      {/* Contenedor de las películas */}
      <Container className="mt-4">
        <Row>
          {/* Itera sobre los resultados y renderiza una tarjeta para cada película */}
          {favorites?.map((movie) => (
            <MovieCard
              key={movie.id} // clave única para React
              id={movie.id} // ID de la película
              title={movie.title} // Título
              image={movie.poster_path} // Póster
            />
          ))}
        </Row>
      </Container>
    </Template>
  );
};

export default Favoritos;
