// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="abheader">
                <h1>About me & Bharatanatyam</h1>
            </div>
            <div className="about-cards">
                
                <div className="about-card">
                <p>
                        The rhythm, the grace, and the discipline of Bharatanatyam have taught me so much about patience and
                        focus. Each movement and expression feels like a journey of self-discovery, blending beauty and purpose. I imagine this activity, if they resided in India, would have also been something that the <strong>Schlegel sisters</strong> (reference to course material) would have indulged in.
                    </p>
                    <iframe
                        width="73%" 
                        height="314" 
                        src="/images/CreativeResponseDance.mp4" 
                        title="Bharatanatyam Video" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                    <p>
                    In this dance, I introduce an invocation to Shiva, revered as the Creator in Hindu mythology. The slower, opening segment of the dance pays homage to Shiva, acknowledging our humble place as mortals before the divine. The second, faster-paced segment portrays Lord Shiva's daily routine—draping himself in lion skin, binding the sacred River Ganga in his hair, and honoring his acts of kindness toward humanity.
                    </p>
                </div>

                <div className="about-card">
                    <div className="image-row">
                    <img src="/images/bk1.png" alt="Me dancing Bharatanatyam" className="about-image" />
                    <img src="/images/bk2.png" alt="Young me doing Bharatnatyam" className="about-image" />
                    </div>
                    <p>
                        Bharatanatyam connects me to my roots, allowing me to express emotions and stories that have been
                        passed down through generations. It’s more than a dance form; it’s a way to embody culture, tradition, and art.
                    </p>
                </div>
            </div>
            <section className="abtoutro">
            <p>Check out the <strong>Mudras</strong> tab to explore different hand gestures in the dance form and try identifying how many I used in the above video! :)</p>

            </section>
        </div>
    );
};

export default About;
