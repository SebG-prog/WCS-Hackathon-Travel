import React from "react"
import Card from './Card'

import './Board.css'

const Board = ({ solved, disabled, cards, flipped, handleClick }) => {
    return (
        <div className="board">
            {
                cards.map(card =>
                    <Card
                        key={card.id}
                        id={card.id}
                        type={card.type}
                        height={180}
                        width={256}
                        flipped={flipped.includes(card.id)}
                        solved={solved.includes(card.id)}
                        handleClick={handleClick}
                        disabled={disabled || solved.includes(card.id)}
                    />
                )
            }
        </div>
    );
};

export default Board