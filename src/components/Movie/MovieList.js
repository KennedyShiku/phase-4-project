// MovieList.js
import React from 'react';
import MovieItem from './MovieItem'; 

const MovieList = ({movies}) => {    

    return (
        <div className="movie-cards"> 
            {movies.map(movie => (
                <MovieItem key={movie.id} movie={movie} /> 
            ))}
        </div>
    );
};

export default MovieList;
