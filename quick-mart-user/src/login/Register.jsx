import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, firestore } from '../database/firebase';
import './logincss/Register.css'; // Import the CSS file

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Check if email is valid
            if (!email) {
                setError('Please enter your email.');
                return;
            }
            // Register the user using Firebase Authentication
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            // Store user information in Firestore
            await firestore.collection('users').doc(user.uid).set({ email });
            // Set success message and redirect to login page
            setSuccess(true);
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="register-container"> {/* Apply the className here */}
            <div className="register-header"> {/* Container for the Log In header */}
                <h1>Register Account</h1>
            </div>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">Registration successful. Redirecting to login page...</p>}
            <form onSubmit={handleRegister}>
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
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
};

export default RegisterPage;
