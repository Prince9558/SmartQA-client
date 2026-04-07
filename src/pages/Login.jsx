import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

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
                        <button className="btn btn-outline-secondary btn-block">
                            <svg className="google-icon" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
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