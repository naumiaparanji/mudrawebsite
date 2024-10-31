// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="header">
                <h1>Welcome to the Bharatanatyam Mudras Website</h1>
            </div>
            
            <section className="intro">
                <h2>About This Experience</h2>
                <p>
                    I've had the honor of taking several courses toward my Computer Science degree and Honors coursework at the University of Houston. The most interesting and thought-provoking courses however, is HON 3310: Creativity at Work. When I first added this course to my shopping cart, I wanted it to just meet my Writing in Disciplines requirement. But I think it's safe to say that it has gone above and beyond that. 
                </p>
                <p>
                    As has been the theme in most of my weekly reflections that were a part of the grade for the class, I've truly  enjoyed the interdisciplinary connections made in this course. Growing up, my education structure was very rigid and I was always taught different subjects separately - there was no push in the direction of exploring the results of interdisciplinary collaboration. But, with this course and also my time in college, I only feel silly for not having thought about this before. Collaboration, in fact, leads to better results. And I want to tailor my Creative Response Project to this. 
                </p>
                <p>
                    Here is how I envision a conversation with younger me:
                    <p>"What is dance to you?"</p>
                    <p>Younger me: "Oo I love dance! Dance is beauty, grace, expressions, and so much more! I particularaly enjoy Bharatnatyam, an Indian classical dance form that I've been learing for quite some time now!"</p>

                    <p>"How wonderful! And what are computers and technology to you?"</p>
                    <p>Youger me: "Oh I'm not so sure."</p>

                    <p>"Well. what firt comes to your mind?"</p>
                    <p>Younger me: "Hmm, I would say some grown men sitting at desks and wokring on something really important."</p>

                    Younger me would not only grow up to break the stereotype and be a woman in STEM, but to her surprise, would also discover that there is so much to collaborate on in the field of art and science. 
                </p>
                <p>    
                    This website bridges the art of Bharatanatyam with the world of web development, offering a unique
                    journey into traditional Indian dance through modern technology. My aim is to showcase how cultural
                    heritage and coding can coexist, creating an interactive learning experience that pays homage to the
                    beauty and precision of Bharatanatyam.
                </p>
                <p>
                    By blending the structured and creative nature of coding with the expressive art of Bharatanatyam, I
                    hope to inspire a deeper appreciation of both fields. Each mudra (hand gesture) reflects elements of
                    storytelling, symbolism, and cultural expression – just as each line of code here supports this digital
                    narrative.
                </p>
            </section>
            
            <section className="guide">
                <h2>How to Use This Website</h2>
                <p>
                    Navigate to the <strong>Mudras</strong> page to explore various Bharatanatyam mudras. Each mudra is displayed as
                    a card. Click on any card to flip it and reveal the name, translation, and usage of the mudra.
                </p>
                <p>
                    Use the <strong>About</strong> page to learn more about Bharatanatyam and its significance, and the
                    <strong> Contact</strong> page for any inquiries or feedback.
                </p>
            </section>
        </div>
    );
};

export default Home;
