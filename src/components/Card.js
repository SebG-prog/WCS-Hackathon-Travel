import React from "react"

import './Card.css'

const Card = ({ solved, disabled, handleClick, id, flipped, height, width, type }) => {
    return (
        <div
            className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{
                width, height
            }}
            onClick={() => disabled ? null : handleClick(id)}
        >
            <div className="flipper">
            <img
                style={{
                    height, width
                }}
                className={flipped ? 'front' : 'back'}
                src={flipped || solved ? `/img/${type}.png` : `/img/back.png`}
                alt="memory" />
            </div>
        </div>
    );
};

export default Card
