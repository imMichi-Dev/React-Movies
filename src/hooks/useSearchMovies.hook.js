import { useEffect, useState } from "react";
import { apiMovies, headers, useGetAuth } from "./useGetAuth.hook";
import axios from "axios";

/**
 * 🔍 useSearchMovies
 * Hook para buscar películas por nombre (/search/movie)
 *
 * @param {string} query - texto de búsqueda
 * @returns {Object} { data, isLoading }
 */
export const useSearchMovies = (query) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    useGetAuth();
  }, []);

  useEffect(() => {
    // Si el query es muy corto, no hace la petición
    if (query?.length < 3) return;

    axios
      .get(`${apiMovies}/search/movie`, {
        headers,
        params: { query },
      })
      .catch((error) => console.error(error))
      .then((response) => setData(response.data))
      .finally(() => setIsLoading(false));
  }, [query]);

  return { data, isLoading };
};
