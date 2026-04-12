import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const loginWithGoogle = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const res = await axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/auth/google`, {
                    access_token: tokenResponse.access_token,
                });
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                navigate('/home');
            } catch (err) {
                console.error("Google Auth Error:", err);
                setError("Google login failed. Please try again.");
            }
        },
        onError: (error) => {
            console.error('Sign in failed:', error);
            setError("Google authentication failed.");
        }
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            // Simulate API call - replace with your actual login logic
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // For demo purposes, accept any email/password
            if (formData.email && formData.password) {
                localStorage.setItem('token', 'demo-token');
                localStorage.setItem('user', JSON.stringify({ email: formData.email }));
                navigate('/home');
            } else {
                setError("Please fill in all fields");
            }
        } catch (err) {
            setError("Login failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="dashboard-container">
            {/* Header */}
            <header className="dashboard-header">
                <div className="header-content">
                    <div className="header-logo">
                        <h1>SmartQA</h1>
                    </div>
                    <div className="header-buttons">
                        <Link to="/" className="btn btn-outline-light me-2">
                            Home
                        </Link>
                        <Link to="/login" className="btn btn-outline-light me-2">
                            Login
                        </Link>
                        <Link to="/register" className="btn btn-light">
                            Register
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main style={{ 
                flex: 1, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '2rem',
                marginTop: '80px',
                minHeight: 'calc(100vh - 80px)'
            }}>
                <div className="auth-card">
                    {/* Welcome Header */}
                    <div className="auth-header">
                        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                            <div style={{ 
                                fontSize: '3rem', 
                                marginBottom: '0.5rem',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                👋
                            </div>
                        </div>
                        <h1>Welcome Back</h1>
                        <p>Sign in to your SmartQA account</p>
                    </div>

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="form-options">
                            <label className="checkbox-container">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Remember me
                            </label>
                            <Link to="/forgot-password" className="forgot-link">
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                    Signing In...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    <div className="auth-divider">
                        <span>or</span>
                    </div>

                    <div className="social-login">
                        <button type="button" onClick={() => loginWithGoogle()} className="btn google-btn btn-block">
                            <svg className="google-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                                <path fill="none" d="M0 0h48v48H0z"/>
                            </svg>
                            Continue with Google
                        </button>
                    </div>

                    <div className="auth-footer">
                        <p>
                            Don't have an account?{" "}
                            <Link to="/register" className="link-primary">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 SmartQA. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Login; 