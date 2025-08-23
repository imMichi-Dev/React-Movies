import axios from "axios"
import { useEffect, useState } from "react"

/**
 * Hook personalizado para manejar películas favoritas usando localStorage.
 * 
 * Provee tres funciones principales:
 * - getList → obtiene la lista de películas favoritas almacenadas.
 * - add → agrega un ID de película a favoritos.
 * - remove → elimina un ID de película de favoritos.
 */
export const favMovies = () => {
    // Clave con la que se guardarán los favoritos en localStorage
    const favId = "Favorite_Movies"

    /**
     * 📌 getList
     * Obtiene la lista de películas favoritas desde localStorage.
     * 
     * @returns {Array<string>} Lista de IDs de películas favoritas
     */
    const getList = () => {
        const favoriteMovies = localStorage.getItem(favId)
        // Si existen favoritos, los convierte en array, sino retorna []
        return favoriteMovies ? favoriteMovies.split(",") : []
    }

    /**
     * ➕ add
     * Agrega una nueva película a la lista de favoritos.
     * 
     * @param {string} id - ID de la película a agregar
     */
    const add = (id) => {
        const favoriteMovies = localStorage.getItem(favId)
        const ids = favoriteMovies ? favoriteMovies.split(",") : []
        ids.push(id) // agrega el nuevo id
        localStorage.setItem(favId, ids.join(",")) // guarda de nuevo en localStorage
    }

    /**
     * ➖ remove
     * Elimina una película de la lista de favoritos.
     * 
     * @param {string} id - ID de la película a eliminar
     */
    const remove = (id) => {
        const favoriteMovies = localStorage.getItem(favId)
        const ids = favoriteMovies ? favoriteMovies.split(",") : []
        // Filtra todos los ids excepto el que queremos eliminar
        localStorage.setItem(favId, ids.filter((idMovie) => idMovie !== id).join(","))
    }

    // Retorna las funciones para ser usadas en el resto de la app
    return {
        getList,
        add,
        remove
    }
}
