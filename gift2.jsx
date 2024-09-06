
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'; 

const AuthPage = () => {
    const [view, setView] = useState('login'); 
    
    const handleViewChange = (newView) => {
        setView(newView);
    };

    return (
        <div className="auth-container">
            <h1>Welcome To The Gift Portal</h1>
            {view === 'login' && <LoginForm onSwitchView={handleViewChange} />}
            {view === 'signup' && <SignupForm onSwitchView={handleViewChange} />}
            {view === 'forgot' && <ForgotPasswordForm onSwitchView={handleViewChange} />}
        </div>
    );
};

const LoginForm = ({ onSwitchView }) => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/home2');
    };

    return (
        <div className="form-container">
            <h1>Login</h1>
            <form className="auth-form" onSubmit={handleLogin}>
                <label htmlFor="login-email">Email</label>
                <input type="email" id="login-email" required />
                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" required />
                <button type="submit">Log In</button>
                <p className="switch-link" onClick={() => onSwitchView('forgot')}>Forgot Password?</p>
                <p className="switch-link" onClick={() => onSwitchView('signup')}>Create an Account</p>
            </form>
        </div>
    );
};

const SignupForm = ({ onSwitchView }) => {
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        navigate('/home2'); 
    };

    return (
        <div className="form-container">
            <h1>Sign Up</h1>
            <form className="auth-form" onSubmit={handleSignup}>
                <label htmlFor="signup-name">Name</label>
                <input type="text" id="signup-name" required />
                <label htmlFor="signup-email">Email</label>
                <input type="email" id="signup-email" required />
                <label htmlFor="signup-password">Password</label>
                <input type="password" id="signup-password" required />
                <label htmlFor="signup-confirm-password">Confirm Password</label>
                <input type="password" id="signup-confirm-password" required />
                <button type="submit">Sign Up</button>
                <p className="switch-link" onClick={() => onSwitchView('login')}>Already have an account? Log In</p>
            </form>
        </div>
    );
};

const ForgotPasswordForm = ({ onSwitchView }) => {
    const navigate = useNavigate();

    const handleForgotPassword = (event) => {
        event.preventDefault();
        alert('Password reset link has been sent to your email.');
        navigate('/auth');
    };

    return (
        <div className="form-container">
            <h1>Forgot Password</h1>
            <form className="auth-form" onSubmit={handleForgotPassword}>
                <label htmlFor="forgot-email">Email</label>
                <input type="email" id="forgot-email" required />
                <button type="submit">Reset Password</button>
                <p className="switch-link" onClick={() => onSwitchView('login')}>Back to Login</p>
            </form>
        </div>
    );
};

export default AuthPage;
