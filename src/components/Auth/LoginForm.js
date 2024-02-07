import React, {useState} from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Link } from 'react-router-dom'
import '../../auth.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const mock = new MockAdapter(axios)

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        setErrors({...errors, [name]: ''})
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

        if (!formValid){
            setErrors(newErrors);
            return;
        }

        mock.onPost('/login').reply(200, {
            user: { email: formData.email }, 
            token: 'mock-auth-token' 
        });
    
        axios.post('/login', formData)
            .then(response => {
                console.log('Login successful:', response.data);
                alert('Login successful'); 
                setFormData({ email: '', password: '' });
            })
            .catch(error => {
                console.error('Login failed:', error);
            }); 
    };

    return(
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
