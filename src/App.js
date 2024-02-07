import React from 'react';
import './App.css';
import LoginForm from './components/Auth/LoginForm';
import NavigationBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LoginForm />
    </div>
  );
}

export default App;
