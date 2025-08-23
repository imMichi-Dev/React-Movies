import axios from "axios"
import { useEffect, useState } from "react"

// URL base de la API de TMDB
const api = "https://api.themoviedb.org/3"

// Token de autenticación de TMDB (Bearer)
const api_token = "eyJhbGciOiJIUzI1NiJ9...." 
// Clave de API (no se está usando en este caso, ya que se usa el token Bearer)
const api_key = "ca123136f993fb36ce7e6c9f861def24"

// Headers de autenticación que se envían en cada request
const headers = {
    Authorization: `Bearer ${api_token}`
}

/**
 * 🔐 getAuth
 * Hace una llamada a la API de autenticación de TMDB
 * para verificar que el token es válido.
 */
const getAuth = async () => {
    await axios.get(`${api}/authentication`, {
        headers
    }).catch((error) => console.error(error))
}

/**
 * 🎬 getMovies
 * Hook personalizado para obtener películas desde el endpoint /discover/movie
 * 
 * @param {number} page - número de página (por defecto 1)
 * @param {string} sort_by - criterio de ordenamiento (por defecto por fecha de estreno descendente)
 * @returns {Object} { data, isLoading }
 */
export const getMovies = (
    page = 1,
    sort_by = "primary_release_date.desc"
) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    // Efecto para validar autenticación al inicio
    useEffect(() => {
        getAuth()
    }, [])

    // Efecto para hacer la petición de películas
    useEffect(() => {
        axios.get(`${api}/discover/movie`, {
            headers,
            params: { page, sort_by }
        })
            .catch((error) => console.error(error))
            .then((response) => setData(response.data))
            .finally(() => setIsLoading(false))
    }, [])

    return { data, isLoading }
}

/**
 * 🍿 getPopularMovies
 * Hook para obtener las películas populares desde el endpoint /movie/popular
 * 
 * @param {number} page - número de página (por defecto 1)
 * @returns {Object} { data, isLoading }
 */
export const getPopularMovies = (page = 1) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { getAuth() }, [])

    useEffect(() => {
        axios.get(`${api}/movie/popular`, {
            headers,
            params: { page }
        })
            .catch((error) => console.error(error))
            .then((response) => setData(response.data))
            .finally(() => setIsLoading(false))
    }, [])

    return { data, isLoading }
}

/**
 * 🎥 getMovieDetails
 * Hook para obtener los detalles de una película específica por ID
 * 
 * @param {number|string} id - ID de la película
 * @returns {Object} { data, isLoading }
 */
export const getMovieDetails = (id) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { getAuth() }, [])

    useEffect(() => {
        axios.get(`${api}/movie/${id}`, { headers })
            .catch((error) => console.error(error))
            .then((response) => setData(response.data))
            .finally(() => setIsLoading(false))
    }, [])

    return { data, isLoading }
}

/**
 * ⭐ getRatedMovies
 * Hook para obtener las películas mejor calificadas (/movie/top_rated)
 * 
 * @returns {Object} { data, isLoading }
 */
export const getRatedMovies = () => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { getAuth() }, [])

    useEffect(() => {
        axios.get(`${api}/movie/top_rated`, { headers })
            .catch((error) => console.error(error))
            .then((response) => setData(response.data))
            .finally(() => setIsLoading(false))
    }, [])

    return { data, isLoading }
}

/**
 * 🔍 searchMovies
 * Hook para buscar películas por nombre (/search/movie)
 * 
 * @param {string} query - texto de búsqueda
 * @returns {Object} { data, isLoading }
 */
export const searchMovies = (query) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { getAuth() }, [])

    useEffect(() => {
        // Si el query es muy corto, no hace la petición
        if (query?.length < 3) return

        axios.get(`${api}/search/movie`, {
            headers,
            params: { query }
        })
            .catch((error) => console.error(error))
            .then((response) => setData(response.data))
            .finally(() => setIsLoading(false))
    }, [query])

    return { data, isLoading }
}
