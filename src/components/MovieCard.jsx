import React from 'react';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function MovieCard({ movie }) {
  const posterPath = movie.poster_path.startsWith('/') ? movie.poster_path : `/${movie.poster_path}`;
  return (
    <div className="movie-card">
      <img src={`${IMAGE_BASE_URL}${posterPath}`} alt={movie.title} className="w-[100px] h-[150px] md:w-[200px] md:h-[300px] rounded-lg hover:border-[3px] border-gray-400 " />
    </div>
  );
}

