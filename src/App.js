import React from 'react';
import './App.css';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm'; 
import NavigationBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import MovieList from './components/Movie/MovieList';

function App() {
  return (
      <div className="App">
        <NavigationBar />
        <Outlet/>
        <Routes>
          <Route path='/movies' element={<MovieList />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
  );
}

export default App;