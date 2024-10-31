// src/pages/Tutorial.js
import React from 'react';
import MudraCard from '../components/MudraCard';
import './Tutorial.css';

const mudras = [
    { name: 'Pataka', image: '/images/pataka.jpg', translation: 'Flag', usage: 'Used in salutation, blessings, etc.' },
    { name: 'Tripataka', image: '/images/tripataka.jpg', translation: 'Three Parts of a Flag', usage: 'Used in arrows, trees, crown, etc.' },
    { name: 'Ardhapataka', image: '/images/ardhapataka.jpg', translation: 'Half Flag', usage: 'Used for leaves, knife, and board.' },
    { name: 'Kartari Mukha', image: '/images/kartari_mukha.jpg', translation: 'Scissors', usage: 'Used to show separation or corner of an eye.' },
    { name: 'Mayura', image: '/images/mayura.jpg', translation: 'Peacock', usage: 'Used for peacock beak, creepers, and wiping tears.' },
    { name: 'Ardhachandra', image: '/images/ardhachandra.jpg', translation: 'Half Moon', usage: 'Used for greeting common people, as a spear.' },
    { name: 'Arala', image: '/images/arala.jpg', translation: 'Bent', usage: 'Used for drinking nectar, poison, etc.' },
    { name: 'Shukatunda', image: '/images/shukatunda.jpg', translation: 'Parrot Head', usage: 'Used for shooting an arrow and showing a spear.' },
    { name: 'Mushti', image: '/images/mushti.jpg', translation: 'Fist', usage: 'Used to represent firmness, holding things.' },
    { name: 'Shikhara', image: '/images/shikhara.jpg', translation: 'Peak', usage: 'Used for bow, pillar, and a saying no gesture.' },
    { name: 'Kapitta', image: '/images/kapitta.jpg', translation: 'Wood Apple', usage: 'Used for Lakshmi, Saraswati, and holding cymbals.' },
    { name: 'Katakamukha', image: '/images/katakamukha.jpg', translation: 'Link of a Chain', usage: 'Used for plucking flowers, wearing a necklace.' },
    { name: 'Suchi', image: '/images/suchi.jpg', translation: 'Needle', usage: 'Used for number one, the sun, and world.' },
    { name: 'Chandrakala', image: '/images/chandrakala.jpg', translation: 'Digit of the Moon', usage: 'Used to represent the moon.' },
    { name: 'Padmakosha', image: '/images/padmakosha.jpg', translation: 'Lotus Bud', usage: 'Used to show fruits, flowers, and a bowl.' },
    { name: 'Sarpashirsha', image: '/images/sarpashirsha.jpg', translation: 'Snake’s Hood', usage: 'Used for snake, sandal paste, and sprinkling water.' },
    { name: 'Mrigashirsha', image: '/images/mrigashirsha.jpg', translation: 'Deer Head', usage: 'Used for calling and representing deers head.' },
    { name: 'Simhamukha', image: '/images/simhamukha.jpg', translation: 'Lion Face', usage: 'Used for lion, elephant, and representing medicinal herbs.' },
    { name: 'Kangula', image: '/images/kangula.jpg', translation: 'Small Bell', usage: 'Used for coconut, areca nut, and little bells.' },
    { name: 'Alapadma', image: '/images/alapadma.jpg', translation: 'Fully Bloomed Lotus', usage: 'Used for beauty, full bloom, and anger.' },
    { name: 'Chatura', image: '/images/chatura.jpg', translation: 'Square', usage: 'Used for showing something small, agreement, and oil.' },
    { name: 'Bhramara', image: '/images/bhramara.jpg', translation: 'Bee', usage: 'Used for representing bees, cuckoos, and winged creatures.' },
    { name: 'Hamsasya', image: '/images/hamsasya.jpg', translation: 'Swan Face', usage: 'Used for tying thread, holding a pearl, and small things.' },
    { name: 'Hamsapaksha', image: '/images/hamsapaksha.jpg', translation: 'Swan Wing', usage: 'Used for number six and building a bridge.' },
    { name: 'Sandamsha', image: '/images/sandamsha.jpg', translation: 'Pincers', usage: 'Used for sacrificial rites and insects.' },
    { name: 'Mukula', image: '/images/mukula.jpg', translation: 'Bud', usage: 'Used for a water lily, eating, and offerings.' },
    { name: 'Tamrachuda', image: '/images/tamrachuda.jpg', translation: 'Rooster', usage: 'Used for cock, crane, and calf.' },
    { name: 'Trishula', image: '/images/trishula.jpg', translation: 'Trident', usage: 'Used for trident and number three.' },
];


const Tutorial = () => {
    return (
        <div className="tutorial">
            <h2>Bharatanatyam Mudra Tutorial</h2>
            <div className="mudra-grid">
                {mudras.map((mudra, index) => (
                    <MudraCard key={index} mudra={mudra} />
                ))}
            </div>
        </div>
    );
};

export default Tutorial;
