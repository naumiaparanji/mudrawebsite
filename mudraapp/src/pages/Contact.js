// src/pages/Contact.js
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_v9q6khq', 'template_homtdxd', form.current, 'hHVJN8RsmV0Bx90p2')
            .then((result) => {
                alert("Message sent successfully!");
            }, (error) => {
                alert("Failed to send message, please try again.");
            });
        e.target.reset();
    };

    return (
        <div className="contact">
            <div className="conheader">
                <h1>Contact Info</h1>
            </div>
            <div className="contact-info">
            <div className="contact-image-container">
                    <img src="/images/me.jpg" alt="Me" className="contact-image" />
                </div>
                <div className="contact-text">
                    <p>
                        Hello! I'm passionate about the intersection of technology and art. With a background in computer science
                        and a love for Bharatanatyam, I enjoy exploring innovative ways to bridge cultural heritage with modern technology.
                        Feel free to reach out with any questions or collaborations!
                    </p>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label>Name</label>
                <input type="text" name="user_name" required />
                
                <label>Email</label>
                <input type="email" name="user_email" required />
                
                <label>Message</label>
                <textarea name="message" rows="5" required placeholder="Please also include your name and email here so I can respond!"></textarea>
                
                <button className="submitbut" type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
