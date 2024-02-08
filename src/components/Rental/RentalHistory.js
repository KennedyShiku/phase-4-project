import React from "react";
import '../../App.css'

const RentalHistory = ({ rentalHistory, onRemove }) =>{

    const handleRemove = (movie) => {
        onRemove(movie);
    }

    return (
        <div className="rental-history">
            <h2>Rental History</h2>
            <ul>
                {rentalHistory.map((movie, index) => (
                    <li key={index} className="rental-list">
                        <img src={movie.poster} alt={movie.title}/>
                        <p><strong>{movie.title}- Rented on:</strong>{new Date(movie.rentalDate).toLocaleDateString()}</p>
                        <button onClick={() => handleRemove(movie)} className="remove-button">Return movie</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RentalHistory;