// src/components/navbar/MainNavbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainNavbar.css';

function MainNavbar() {
    const [isAtPageTop, setIsAtPageTop] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            const shouldBeTransparent = window.scrollY < 5;
            if (shouldBeTransparent !== isAtPageTop) {
                setIsAtPageTop(shouldBeTransparent);
            }
        };
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [isAtPageTop]);

    return (
        <nav className={`navbar navbar-expand-lg navbar-light sticky-top main-navbar ${isAtPageTop ? '' : 'not-at-top'}`}>
            <Link className="navbar-brand" to="/">Your Portfolio</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/about">About Me</Link>
                    <Link className="nav-item nav-link" to="/services">My Services</Link>
                    <Link className="nav-item nav-link" to="/education">Education</Link>
                    <Link className="nav-item nav-link" to="/contact">Contact</Link>
                    <Link className="nav-item nav-link" to="/auth">Sign In</Link>
                </div>
            </div>
        </nav>
    );
}

export default MainNavbar;
