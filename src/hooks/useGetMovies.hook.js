import { useEffect, useState } from "react";
import { apiMovies, headers, useGetAuth } from "./useGetAuth.hook";
import axios from "axios";

/**
 * 🎬 useGetMovies
 * Hook personalizado para obtener películas desde el endpoint /discover/movie
 *
 * @param {number} page - número de página (por defecto 1)
 * @param {string} sort_by - criterio de ordenamiento (por defecto por fecha de estreno descendente)
 * @returns {Object} { data, isLoading }
 */
export const useGetMovies = (
  page = 1,
  sort_by = "primary_release_date.desc"
) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Efecto para validar autenticación al inicio
  useEffect(() => {
    useGetAuth();
  }, []);

  // Efecto para hacer la petición de películas
  useEffect(() => {
    axios
      .get(`${apiMovies}/discover/movie`, {
        headers,
        params: { page, sort_by },
      })
      .catch((error) => console.error(error))
      .then((response) => setData(response.data))
      .finally(() => setIsLoading(false));
  }, [page]);

  return { data, isLoading };
};
