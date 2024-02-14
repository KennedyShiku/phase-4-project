import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from './components/NavBar';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import MovieList from './components/Movie/MovieList';
import MovieDetail from './components/Movie/MovieDetail';
import RentalHistory from './components/Rental/RentalHistory';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';

function App() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5555/dashboard'); 
      setMovies(response.data.movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const [rentalHistory, setRentalHistory] = useState([]);

  const addRentedMovie = (movie) => {
    const rentedMovie = { ...movie, rentalDate: new Date() };
    setRentalHistory([...rentalHistory, rentedMovie]);
  };

  const removeRentedMovie = (movie) => {
    const updatedRentalHistory = rentalHistory.filter((item) => item.id !== movie.id);
    setRentalHistory(updatedRentalHistory);
  };

  return (
    <div className="App">
      <NavigationBar />
      <Outlet />
      <Routes>
        <Route
          path="/dashboard"
          element={<MovieList movies={movies} />}
        />
        <Route
          path="movies/:id"
          element={<MovieDetail movies={movies} onRent={addRentedMovie} />}
        />
        <Route
          path="/rental-history"
          element={<RentalHistory rentalHistory={rentalHistory} onRemove={removeRentedMovie} />}
        />
        <Route
          path="/register"
          element={<RegisterForm />}
        />
        <Route
          path="/"
          element={<LoginForm />}
        />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
