import React from "react";

const RentalHistory = ({ rentalHistory }) =>{
    return (
        <div className="rental-history">
            <h2>Rental History</h2>
            <ul>
                {rentalHistory.map((movie, index) => (
                    <li key={index}>{movie.title} - Rented on {movie.rentalDate.toLocaleDateString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default RentalHistory;