// src/pages/Tutorial.js
import React from 'react';
import MudraCard from '../components/MudraCard';
import './Tutorial.css';

const mudras = [
    { name: 'Pataka', image: '/images/pataka.jpg', translation: 'Flag', usage: 'beginning a dance, forest, river, sprinkling water, cloud, night, forbidding things, horse' },
    { name: 'Tripataka', image: '/images/tripataka.jpg', translation: 'Three Parts of a Flag', usage: 'tree, arrow, vajra weapon, Indra, crown, light rising, union' },
    { name: 'Ardhapataka', image: '/images/ardhapataka.jpg', translation: 'Half Flag', usage: 'flag, temple tower, horn, riverbank, tender shoots, writing panel, knife' },
    { name: 'Kartari Mukha', image: '/images/kartari_mukha.jpg', translation: 'Scissors', usage: 'separation of women and men, opposition, stealing, corner of the eye, death, disagreement, lightning' },
    { name: 'Mayura', image: '/images/mayura.jpg', translation: 'Peacock', usage: 'bird of omen, forehead, stroking the hair, wiping tears, argument' },
    { name: 'Ardhachandra', image: '/images/ardhachandra.jpg', translation: 'Half Moon', usage: 'spear, platter, anxiety, meditation, prayer, greeting' },
    { name: 'Arala', image: '/images/arala.jpg', translation: 'Bent', usage: 'drinking nectar, poison, etc.' },
    { name: 'Shukatunda', image: '/images/shukatunda.jpg', translation: 'Parrot Head', usage: 'shooting an arrow, throwing a spear, mystery' },
    { name: 'Mushti', image: '/images/mushti.jpg', translation: 'Fist', usage: 'steadiness, holding things, grasping the hair, wrestling' },
    { name: 'Shikhara', image: '/images/shikhara.jpg', translation: 'Peak', usage: 'God of Love, bow, pillar, sound of a bell, silence, questioning, husband, lover, embrace' },
    { name: 'Kapitta', image: '/images/kapitta.jpg', translation: 'Wood Apple', usage: 'Goddess Lakshmi, Saraswati, holding cymbals, holding flowers at the time of flirting, milking cows' },
    { name: 'Katakamukha', image: '/images/katakamukha.jpg', translation: 'Link of a Chain', usage: 'picking flowers, holding a pearl necklace or garland of flowers, drawing a bow slowly, speech, glancing' },
    { name: 'Suchi', image: '/images/suchi.jpg', translation: 'Needle', usage: 'God Brahma, one, one hundred, sun, city, world, fan, threatening, astonishment, umbrella, beating the drum' },
    { name: 'Chandrakala', image: '/images/chandrakala.jpg', translation: 'Moon', usage: 'represent the moon, digit of the moon' },
    { name: 'Padmakosha', image: '/images/padmakosha.jpg', translation: 'Lotus Bud', usage: 'bowl, water lily, fruit, apple, mango, breast' },
    { name: 'Sarpashirsha', image: '/images/sarpashirsha.jpg', translation: 'Snake’s Hood', usage: 'giving water to Gods and sages, the flapping of elephants ears, slowness' },
    { name: 'Mrigashirsha', image: '/images/mrigashirsha.jpg', translation: 'Deer Head', usage: 'women, calling the beloved, cheek, holding an umbrella, actors costume, house, fear, discussion' },
    { name: 'Simhamukha', image: '/images/simhamukha.jpg', translation: 'Lion Face', usage: 'elephant, lotus, coral, pearl, garland, fragrance, drop of water, salvation when placed on the heart' },
    { name: 'Kangula', image: '/images/kangula.jpg', translation: 'Small Bell', usage: 'coconut, areca nut, and little bells, water lilly, breast' },
    { name: 'Alapadma', image: '/images/alapadma.jpg', translation: 'Fully Bloomed Lotus', usage: 'yearning for the beloved, mirror, moon pavilion, full moon, village, murmuring sound, praise' },
    { name: 'Chatura', image: '/images/chatura.jpg', translation: 'Square', usage: 'eyes, musk, something small, agreement, and oil.' },
    { name: 'Bhramara', image: '/images/bhramara.jpg', translation: 'Bee', usage: 'bees, cuckoos, and winged creatures, also union' },
    { name: 'Hamsasya', image: '/images/hamsasya.jpg', translation: 'Swan Face', usage: 'tying the marriage thread, initiation, painting, drop of water' },
    { name: 'Hamsapaksha', image: '/images/hamsapaksha.jpg', translation: 'Swan Wing', usage: 'arranging, constructing a bridge, making marks with the nails, number six' },
    { name: 'Sandamsha', image: '/images/sandamsha.jpg', translation: 'Pincers', usage: 'generosity, worship, offering, number five' },
    { name: 'Mukula', image: '/images/mukula.jpg', translation: 'Bud', usage: 'God of love, water lily, eating, and offerings' },
    { name: 'Tamrachuda', image: '/images/tamrachuda.jpg', translation: 'Rooster', usage: 'crane, camel, calf, writing or drawing' },
    { name: 'Trishula', image: '/images/trishula.jpg', translation: 'Trident', usage: 'used for trident, number three, wood apple leaf' },
];


const Tutorial = () => {
    return (
        <div className="tutorial">
            <br></br>
            <div className="header">
                <h1>Bharatanatyam Mudras</h1>
            </div>
            <br></br>
            <section className="tutintro">
                <p>In one of our class discussions, we explored the world of <strong>botany</strong> alongside intriguing pieces of poetry and prose, delving into the concept of flower language. This reminded me of the expressive language of hand gestures in Bharatanatyam. Symbols, gestures, and the language of flowers all serve as unique forms of communication, each conveying emotions and stories in their own way.</p>
                <p>Please click on each mudra to learn more about its usage in different settings of a choreography.</p>
            </section>
            <div className="mudra-grid">
                {mudras.map((mudra, index) => (
                    <MudraCard key={index} mudra={mudra} />
                ))}
            </div>
            <section className="tutoutro">
            <p>Learning never ceases! A good starting place to getting started with Bharatnatyam is <a href="https://www.youtube.com/watch?v=MzDZYVhfgNw" target="_blank" rel="noopener noreferrer">this video</a>.</p>

            </section>
        </div>
    );
};

export default Tutorial;
