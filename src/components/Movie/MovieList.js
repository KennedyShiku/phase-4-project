import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5555/dashboard');
                setMovies(response.data.movies);
            } catch (error) {
                console.error('Error fetching movies:', error);
                // Handle error fetching movies
            }
        };

        fetchMovies();
    }, []); // Empty dependency array ensures this effect runs only once when component mounts

    return (
        <div className="movie-cards">
            {movies.map(movie => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
