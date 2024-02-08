import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="movie-card">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} className="movie-image" />
      <p>{movie.description}</p>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
    </Link>
  );
};

export default MovieItem;
