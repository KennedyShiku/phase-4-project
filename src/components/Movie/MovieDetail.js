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
        alert('This button has been clicked');
        onRent(movie)
    }


    return (
        <div className="movie-detail">
            <div className="movie-info">
                <img src={movie.poster} alt={movie.title} className="movie-image" />
                <div className="details">
                    <h2>{movie.title}</h2>
                    <p>Genre: {movie.genre}</p>
                    <p>Release Year: {movie.releaseYear}</p>
                </div>
            </div>
            <button className="buttonDownload"  onClick={handleRentedMovie}>Rent This Movie</button>
        </div>
    );
};

export default MovieDetail;