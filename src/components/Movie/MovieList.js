import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://movie-rental-35mk.onrender.com/dashboard');
                setMovies(response.data.movies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []); 
    return (
        <div className="movie-cards">
            {movies.map(movie => (
                <Link key={movie.id} to={`/movies/${movie.id}`} className="movie-link"> 
                    <MovieItem movie={movie} />
                </Link>
            ))}
        </div>
    );
};

export default MovieList;
