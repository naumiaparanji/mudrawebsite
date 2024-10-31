// src/components/MudraCard.js
import React, { useState } from 'react';
import './MudraCard.css';

const MudraCard = ({ mudra }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`mudra-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="mudra-card-front">
                <img src={mudra.image} alt={mudra.name} className="mudra-image" />
                <h3 className="mudra-name">{mudra.name}</h3>
            </div>
            <div className="mudra-card-back">
                <h3 className="mudra-translation">{mudra.translation}</h3>
                <p className="mudra-usage">{mudra.usage}</p>
            </div>
        </div>
    );
};

export default MudraCard;
