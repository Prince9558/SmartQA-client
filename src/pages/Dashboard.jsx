import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Dashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user is logged in (you can implement your own logic)
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

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

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Welcome to <span className="highlight">SmartQA</span>
                    </h1>
                    <p className="hero-subtitle">
                        The ultimate real-time Q&A platform for interactive learning and collaboration
                    </p>
                    <div className="hero-buttons">
                        {!isLoggedIn ? (
                            <>
                                <Link to="/login" className="btn btn-light btn-lg me-3">
                                    Get Started
                                </Link>
                                <Link to="/register" className="btn btn-outline-light btn-lg">
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <Link to="/home" className="btn btn-light btn-lg">
                                Go to Dashboard
                            </Link>
                        )}
                    </div>
                </div>
                <div className="hero-image">
                    <div className="floating-card">
                        <div className="card-icon">💬</div>
                        <h3>Real-time Q&A</h3>
                        <p>Instant interaction</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <h2 className="section-title">Why Choose SmartQA?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🚀</div>
                            <h3>Real-time Interaction</h3>
                            <p>Experience seamless real-time Q&A sessions with instant updates and live collaboration.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔐</div>
                            <h3>Secure Rooms</h3>
                            <p>Create private rooms with unique codes for controlled access and secure discussions.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Responsive Design</h3>
                            <p>Access SmartQA from any device with our fully responsive and mobile-friendly interface.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>Lightning Fast</h3>
                            <p>Built with modern technologies for optimal performance and minimal latency.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">👥</div>
                            <h3>Easy Collaboration</h3>
                            <p>Host sessions or join as a participant with simple room code sharing.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎯</div>
                            <h3>User-Friendly</h3>
                            <p>Intuitive interface designed for both beginners and advanced users.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works-section">
                <div className="container">
                    <h2 className="section-title">How It Works</h2>
                    <div className="steps-container">
                        <div className="step">
                            <div className="step-number">1</div>
                            <h3>Create or Join a Room</h3>
                            <p>Host a new Q&A session or join an existing one using a room code.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <h3>Start the Session</h3>
                            <p>Begin your interactive Q&A session with real-time updates.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <h3>Collaborate & Learn</h3>
                            <p>Engage in meaningful discussions and share knowledge effectively.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Get Started?</h2>
                    <p>Join thousands of users who are already using SmartQA for their Q&A sessions.</p>
                    <div className="cta-buttons">
                        {!isLoggedIn ? (
                            <>
                                <Link to="/login" className="btn btn-light btn-lg me-3">
                                    Login
                                </Link>
                                <Link to="/register" className="btn btn-outline-light btn-lg">
                                    Register
                                </Link>
                            </>
                        ) : (
                            <Link to="/home" className="btn btn-light btn-lg">
                                Go to Dashboard
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 SmartQA. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Dashboard; 