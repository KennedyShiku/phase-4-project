import React from 'react';

const MovieList = () => {

    const movies = [
        { id: 1, title: 'Movie 1', genre: 'Action', year: 2020,},
        { id: 2, title: 'Movie 2', genre: 'Drama', year: 2019 },
        { id: 3, title: 'Movie 3', genre: 'Comedy', year: 2021 },
        { id: 4, title: 'Movie 4', genre: 'Adventure', year: 2018 },
    ]

    return (
        <div className="movie-list">
            <h2>Movie List</h2>
            <div className='movies'>
                {movies.map(movie => (
                    <div key={movie.id} className="movie">
                        <h3>{movie.title}</h3>
                        <p>Genre: {movie.genre}</p>
                        <p>Year: {movie.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;