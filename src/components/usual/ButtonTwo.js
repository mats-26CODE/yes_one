import React from 'react';
import './Button.css';

const ButtonTwo = ({text, onClick, }) => {
    return (
        <div className={'button_two_box'}>
            <button
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}

export default ButtonTwo;