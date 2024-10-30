import React from 'react';

const MudraButton = ({ name, onClick }) => {
    return (
        <button onClick={() => onClick(name)}>
            {name}
        </button>
    );
};

export default MudraButton;
