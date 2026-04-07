import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            padding: '1rem 2rem'
        }}>
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    SmartQA
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        Welcome, {user.firstName || user.email}!
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        onClick={handleLogout}
                                        className="btn btn-outline-light btn-sm"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 