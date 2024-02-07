import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../auth.css';

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      formValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      formValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      formValid = false;
    }

    if (!formValid) {
      setErrors(newErrors);
      return;
    }

    // Simulate registration request
    axios.post('/register', formData)
      .then(response => {
        console.log('Registration successful:', response.data);
        alert('Registration successful');
        setFormData({ username: '', email: '', password: '' });
        navigate('/login');
      })
      .catch(error => {
        console.error('Registration failed:', error);
      });
  };

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div className='register-form'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {errors.username && <div className='error'>{errors.username}</div>}
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <div className='error'>{errors.email}</div>}
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <div className='error'>{errors.password}</div>}
        </div>
        <button type='submit' className='btn'>Register</button>
      </form>
      <div>
        <p>Already have an account? <span onClick={redirectToLogin} style={{cursor: 'pointer'}}>Login</span></p>
      </div>
    </div>
  );
};

export default RegisterForm;