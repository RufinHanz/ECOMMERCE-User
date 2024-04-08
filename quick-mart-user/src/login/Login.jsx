// LoginPage.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../database/firebase';
import './logincss/Login.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Log in the user using Firebase Authentication
            await auth.signInWithEmailAndPassword(email, password);
            // Redirect to Shop page upon successful login
            navigate('/shop');
        } catch (error) {
            setError('Invalid Username or Password, Please Try Again.');
        }
    };

    return (
        <div className="login-container"> {/* Apply the className here */}
            <div className="login-header"> {/* Container for the Log In header */}
                <h1>Welcome Back!</h1>
            </div>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
};


export default LoginPage;
