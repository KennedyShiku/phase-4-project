import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.poster} alt={movie.title} className="movie-image" />
      </Link>
      <p>{movie.description}</p>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieItem;
