import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import '../../App.css'

const MovieDetail = ({ movies, onRent }) => {
    const { id } = useParams();

    const movie = movies.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return <div>Movie not found!</div>;
    }

    const handleRentedMovie = () => {
        toast('Movie rented successfully😎');
        onRent(movie)
    }


    return (
        <div className="movie-detail">
            <div className="movie-info">
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