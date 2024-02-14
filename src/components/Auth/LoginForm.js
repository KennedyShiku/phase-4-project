import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../../auth.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate(); // Get the navigate function

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let formValid = true;
        const newErrors = {};

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

        axios.post('http://127.0.0.1:5555/login', formData)
            .then(response => {
                console.log('Login successful:', response.data);
                alert('Login successful'); // Consider using a more user-friendly notification system
                setFormData({ email: '', password: '' });
                navigate('/dashboard'); // Redirect to dashboard endpoint
            })
            .catch(error => {
                console.error('Login failed:', error.response.data.message);
                // Display error message on UI
                if (error.response && error.response.data && error.response.data.message) {
                    alert('Login failed: ' + error.response.data.message);
                } else {
                    alert('Login failed. Please try again later.');
                }
            });
    };

    return (
        <div className='login-form'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button type='submit' className='btn'>Login</button>
            </form>
            <div>
                <p>Don't have an account? <Link to='/register'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;
