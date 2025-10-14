import { useEffect, useState } from "react";
import { useGetAuth, headers, apiMovies } from "./useGetAuth.hook";
import axios from "axios";

/**
 * 🎥 useMovieDetails
 * Hook para obtener los detalles de una película específica por ID
 *
 * @param {number|string} id - ID de la película
 * @returns {Object} { data, isLoading }
 */
export const useMovieDetails = (id) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    useGetAuth();
  }, []);

  useEffect(() => {
    axios
      .get(`${apiMovies}/movie/${id}`, { headers })
      .catch((error) => console.error(error))
      .then((response) => setData(response.data))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { data, isLoading };
};
