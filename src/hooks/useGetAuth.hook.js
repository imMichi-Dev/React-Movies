import axios from "axios";

export const apiMovies = "https://api.themoviedb.org/3"
// Token de autenticación de TMDB (Bearer)
export const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTEyMzEzNmY5OTNmYjM2Y2U3ZTZjOWY4NjFkZWYyNCIsIm5iZiI6MTc1NTcxMzg0Ni45NDksInN1YiI6IjY4YTYxMTM2YmMyZWE1YjA2ZmQ1NTAxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TZwoMlpVDbr-tJX4KtbIrhJvHW9PfluJH3dCKhj8oCs";

// Headers de autenticación que se envían en cada request
export const headers = {
  Authorization: `Bearer ${api_token}`,
};

/**
 * 🔐 getAuth
 * Hace una llamada a la API de autenticación de TMDB
 * para verificar que el token es válido.
 */
export const useGetAuth = async () => {
  await axios
    .get(`${apiMovies}/authentication`, {
      headers,
    })
    .catch((error) => console.error(error));
};
