import React, { useState } from 'react';
import MudraButton from './components/MudraButton';
import AnimationDisplay from './components/AnimationDisplay';
import './App.css';

const App = () => {
    const [selectedMudra, setSelectedMudra] = useState('');

    const handleMudraClick = (mudraName) => {
        setSelectedMudra(mudraName);
    };

    return (
        <div className="app">
            <h1>Bharatanatyam Mudra Animation Tutorial</h1>
            <div className="nav-bar">
                <MudraButton name="Pataka" onClick={handleMudraClick} />
                <MudraButton name="Katakamukha" onClick={handleMudraClick} />
                <MudraButton name="Alapadma" onClick={handleMudraClick} />
                {/* Add more mudra buttons as needed */}
            </div>
            <AnimationDisplay mudra={selectedMudra} />
        </div>
    );
};

export default App;
