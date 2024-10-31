// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>&copy; 2024 Naumi Aparanji | <a href="mailto:naumisa9@gmail.com">naumisa9@gmail.com</a></p>
            </div>
            <div className="footer-right">
                <p>Connect with me: </p>
                <a href="https://www.linkedin.com/in/naumi-aparanji-364a12214/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/linkedin.png" alt="LinkedIn" className="footer-icon" />
                </a>
                <a href="https://www.instagram.com/_naumi__/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/instagram.png" alt="Instagram" className="footer-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

