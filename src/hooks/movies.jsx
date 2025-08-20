import axios from "axios"
import { useState } from "react"
const api = "https://api.themoviedb.org/3"
const api_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTEyMzEzNmY5OTNmYjM2Y2U3ZTZjOWY4NjFkZWYyNCIsIm5iZiI6MTc1NTcxMzg0Ni45NDksInN1YiI6IjY4YTYxMTM2YmMyZWE1YjA2ZmQ1NTAxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TZwoMlpVDbr-tJX4KtbIrhJvHW9PfluJH3dCKhj8oCs"
const api_key = "ca123136f993fb36ce7e6c9f861def24"
const headers = {
    Authorization: `Bearer ${api_token}`
}

const getAuth = async () => {
    await axios.get(`${api}/authentication`, {
        headers
    }).catch((error) => console.error(error))
}

export const getMovies = async (
    page = 1
) => {
    const [data, setData] = useState()
    await getAuth()
    axios.get(`${api}/discover/movie`, {
        headers
    }).catch((error) => console.error(error)).then((response) => console.log(response))
    return { data }
}