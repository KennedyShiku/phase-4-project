import React from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css'

const MovieDetail = ({ movies, onRent }) => {
    const { id } = useParams();

    const movie = movies.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return <div>Movie not found!</div>;
    }

    const handleRentedMovie = () => {
        alert('Movie rented successfully');
        onRent(movie)
    }


    return (
        <div className="movie-detail">
            <div className="movie-info">
                <img src={movie.poster} alt={movie.title} className="movie-image" />
                <div className="details">
                    <h2>{movie.title}</h2>
                    <p>Genre: {movie.genre}</p>
                    <p>Release Date: {movie.releaseDate}</p>
                    <p>Rating: {movie.rating}</p>
                    <p>Description: {movie.description}</p>
                </div>
            </div>
            <button className="buttonDownload" onClick={handleRentedMovie}>Rent this movie</button>
        </div>
    );
};

export default MovieDetail;
