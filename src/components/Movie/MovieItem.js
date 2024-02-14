import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.poster} alt={movie.title} className="movie-image" />
      </Link>
      <h5>{movie.title}</h5>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
    </div>
  );
};

export default MovieItem;
