import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="logo">MindFlow</a>
            <div className="navbar-links">
                <ul>
                    <li><a href="/dashboard">Home</a></li>
                    <li><a href="/journal">Journal</a></li>
                    <li><a href="/login">Login/Signup</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;