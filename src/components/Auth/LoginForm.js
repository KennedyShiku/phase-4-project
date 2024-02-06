import React, {useState} from 'react';
import '../../auth.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData );
        setFormData({email:'', password:''})
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
                </div>
                <button type='submit' className='btn'>Login</button>
            </form>
            <div>
                <p>Don't have an account? <a href='/'>Sign Up</a></p>
            </div>
        </div>
    );
};

export default LoginForm;
