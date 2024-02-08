// MovieList.js
import React from 'react';
import { useNavigate  } from 'react-router-dom';
import MovieItem from './MovieItem'; 

const MovieList = () => {

    const navigate = useNavigate();

    const movies = [
        { id: 1, title: 'Movie 1', genre: 'Action', year: 2020, poster: 'https://iili.io/J139fWb.png', releaseDate: '2020-01-01', rating: 7.5 },
        { id: 2, title: 'Movie 2', genre: 'Drama', year: 2019, poster: 'https://iili.io/J139fWb.png', releaseDate: '2019-01-01', rating: 8.0 },
        { id: 3, title: 'Movie 3', genre: 'Comedy', year: 2021, poster: 'https://iili.io/J139fWb.png', releaseDate: '2021-01-01', rating: 7.0 },
        { id: 4, title: 'Movie 4', genre: 'Adventure', year: 2018, poster: 'https://iili.io/J139fWb.png', releaseDate: '2018-01-01', rating: 7.8 },
        { id: 5, title: 'Movie 1', genre: 'Action', year: 2020, poster: 'https://iili.io/J139fWb.png', releaseDate: '2020-01-01', rating: 7.5 },
        { id: 6, title: 'Movie 2', genre: 'Drama', year: 2019, poster: 'https://iili.io/J139fWb.png', releaseDate: '2019-01-01', rating: 8.0 },
        { id: 7, title: 'Movie 3', genre: 'Comedy', year: 2021, poster: 'https://iili.io/J139fWb.png', releaseDate: '2021-01-01', rating: 7.0 },
        { id: 8, title: 'Movie 4', genre: 'Adventure', year: 2018, poster: 'https://iili.io/J139fWb.png', releaseDate: '2018-01-01', rating: 7.8 },
    ];

    return (
        <div className="movie-cards"> 
            {movies.map(movie => (
                <MovieItem key={movie.id} movie={movie} /> 
            ))}
        </div>
    );
};

export default MovieList;
