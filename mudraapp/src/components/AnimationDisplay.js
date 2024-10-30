import React from 'react';

const AnimationDisplay = ({ mudra }) => {
    return (
        <div className="animation-container">
            {mudra ? (
                <img src={`/animations/${mudra}.gif`} alt={`${mudra} animation`} />
            ) : (
                <p>Select a mudra to see its animation</p>
            )}
        </div>
    );
};

export default AnimationDisplay;
