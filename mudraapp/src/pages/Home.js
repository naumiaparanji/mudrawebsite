// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <br></br>
            <div className="header">
                <h1>Welcome to the Bharatanatyam Mudras Website</h1>
            </div>
            <br></br>
            <section className="intro">
            <h2>About This Experience</h2>
            <p>
                I've had the honor of taking several courses toward my Computer Science degree and Honors coursework at the University of Houston. One of the most interesting and thought-provoking courses has been HON 3310: Creativity at Work. When I first added this course to my enrollment shopping cart, I thought it would simply meet my Writing in Disciplines requirement. But it's safe to say that it has gone above and beyond doing that.
            </p>
            <p>
                As has been the theme in most of my weekly reflections, I have truly enjoyed the interdisciplinary connections made in this course. Growing up, my education was very structured; subjects were taught in isolation, with little encouragement to explore interdisciplinary collaboration. But with this course and my time in college, I realize how impactful collaboration can be. Collaboration, actually leads to richer and more innovative results, and I want to tailor my Creative Response Project to this realization.
            </p>
            <p>
                Here is how I envision a conversation with my younger self:
            </p>
            <div className="dialogue">
                <p>"What is dance to you?"</p>
                <p><strong>Younger Me:</strong> "Oo I love dance! Dance is beauty, grace, expressions, and so much more! I particularly enjoy Bharatanatyam, an Indian classical dance form that I've been learning for quite some time now!"</p>

                <p>"How wonderful! And what are computers and technology to you?"</p>
                <p><strong>Younger Me:</strong> "Oh, I’m not so sure."</p>

                <p>"Well, what first comes to mind?"</p>
                <p><strong>Younger Me:</strong> "Hmm, All that comes to mind are a group of grown men sitting at desks with computers and working on something really important."</p>

            </div>
            <p>
                    Younger me would not only grow up to break this stereotype and become a woman in STEM but, through the Creativity course, would also discover that there is so much potential in the collaboration between art and science.
            </p>
            <p>
                This website bridges the art of Bharatanatyam with the world of web development, offering a unique journey into traditional Indian dance through modern technology. My aim is to showcase how cultural heritage and coding can coexist, creating an interactive learning experience that pays homage to the beauty and precision of Bharatanatyam.
            </p>
            <p>
                By blending the structured and creative nature of coding with the expressive art of Bharatanatyam, I hope to inspire a deeper appreciation of both fields. Each mudra (hand gesture) reflects elements of storytelling, symbolism, and cultural expression – just as each line of code here supports this digital narrative. 
            </p>
        </section>
            
            <section className="guide">
                <h2>How to Use This Website</h2>
                <p>
                Check out the <strong>About</strong> page to learn more about Bharatanatyam and my personal connection to it. You can also watch a newly choreographed 1.5-minute dance video created specifically for this website!
                </p>
                <p>
                    Navigate to the <strong>Mudras</strong> page to explore various Bharatanatyam mudras. This is the centerpiece of my Project. Each mudra is displayed as a card. Click on any card to flip it and reveal the name, translation, and usage of the mudra. 
                </p>
                <p>
                    Explore the <strong>Contact</strong> page to get in touch with me for more such collaborations and/or to connect with me on social media!
                </p>
            </section>
        </div>
    );
};

export default Home;
