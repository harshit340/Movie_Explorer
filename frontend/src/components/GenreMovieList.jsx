import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'



export default function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map((item,index)=>index<=4&&(
      <div key={index} className='  '>
        <h2 className='text-white text-[20px] p-8'>{item.name}</h2>
        <MovieList genreId={item.id} index_={index} />   
      </div>
      ))}
    </div>
  )
}
