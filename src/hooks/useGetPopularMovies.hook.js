import { useEffect, useState } from "react";
import { apiMovies, headers, useGetAuth } from "./useGetAuth.hook";
import axios from "axios";

/**
 * 🍿 useGetPopularMovies
 * Hook para obtener las películas populares desde el endpoint /movie/popular
 *
 * @param {number} page - número de página (por defecto 1)
 * @returns {Object} { data, isLoading }
 */
export const useGetPopularMovies = (page = 1) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    useGetAuth();
  }, []);

  useEffect(() => {
    axios
      .get(`${apiMovies}/movie/popular`, {
        headers,
        params: { page },
      })
      .catch((error) => console.error(error))
      .then((response) => setData(response.data))
      .finally(() => setIsLoading(false));
  }, [page]);

  return { data, isLoading };
};
