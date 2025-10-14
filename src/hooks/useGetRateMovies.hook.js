import { useEffect, useState } from "react";
import { apiMovies, headers, useGetAuth } from "./useGetAuth.hook";
import axios from "axios";

/**
 * ⭐ useGetRatedMovies
 * Hook para obtener las películas mejor calificadas (/movie/top_rated)
 *
 * @returns {Object} { data, isLoading }
 */
export const useGetRatedMovies = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    useGetAuth();
  }, []);

  useEffect(() => {
    axios
      .get(`${apiMovies}/movie/top_rated`, { headers })
      .catch((error) => console.error(error))
      .then((response) => setData(response.data))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading };
};
