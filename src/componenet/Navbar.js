import React from 'react';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>The React Blog</h1>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >Write Blog</Link>
            </div>
        </nav>
    );
}

export default Header;