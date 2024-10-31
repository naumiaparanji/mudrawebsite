// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin.png" alt="LinkedIn" className="footer-icon" />
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.png" alt="Instagram" className="footer-icon" />
            </a>
        </footer>
    );
};

export default Footer;
