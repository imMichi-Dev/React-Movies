import { useState } from 'react'
import Template from '../Template'
import { getMovies } from '../../hooks/movies'


const Inicio = () => {
  getMovies()
  return (
    <Template>
      Inicio
    </Template>
  )
}

export default Inicio
