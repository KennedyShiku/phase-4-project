import React from "react";
import '../../auth.css';

const MovieItem = ({ movie }) => {

    const handleClick = () => {
        console.log(`Movie ${movie.id} has been clicked`);
    }

    return (
        <div className="movie-card" onClick={handleClick}>
        <h2>{movie.title}</h2>
        <img src={movie.poster} alt={movie.title} className="movie-image" />
        <p>{movie.description}</p>
        <p>Release Date: {movie.releaseDate}</p>        
        <p>Rating: {movie.rating}</p>
        </div>
    );
};

export default MovieItem;
