import React from 'react';
import './App.css';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm'; 
import NavigationBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import MovieList from './components/Movie/MovieList';
import MovieDetail from './components/Movie/MovieDetail';

function App() 
{
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
      <div className="App">
        <NavigationBar />
        <Outlet/>
        <Routes>
          <Route path='/movies' element={<MovieList movies={movies}/>} />
          <Route path='movies/:id' element={<MovieDetail movies={movies}/>}/>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
  );
}

export default App;