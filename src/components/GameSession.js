import React, { useState, useEffect } from 'react'
import Board from './Board'

<<<<<<< HEAD
import './GameSession.css'

const GameSession = ({ shuffledCards, restart }) => { 
=======
const GameSession = ({ shuffledCards }) => {
>>>>>>> link-api-to-modal
    const [flipped, setFlipped] = useState([])
    const [solved, setSolved] = useState([])
    const [disabled, setDisabled] = useState(false)
    const cards = shuffledCards

    useEffect(() => {
        preloadImages()
    })

    const preloadImages = () => {
        cards.map((card) => {
            const src = card.type
            return new Image().scr = src
        })
    }

    const handleClick = (id) => {
        setDisabled(true)
        if (flipped.length === 0 && !flipped[id]) {
            setFlipped([id])
            setDisabled(false)
        } else {
            if (sameCardClicked(flipped, id)) return
            setFlipped([flipped[0], id])
            if (isMatch(id)) {
                setSolved([...solved, flipped[0], id])
                resetCards()
            } else {
                setTimeout(resetCards, 1000)
            }
        }
    }

    const resetCards = () => {
        setFlipped([])
        setDisabled(false)
    }

    const sameCardClicked = (id) => flipped.includes(id)

    const isMatch = (id) => {
        const clickedCard = cards.find(card => card.id === id)
        const flippedCard = cards.find(card => flipped[0] === card.id)
        return flippedCard.type === clickedCard.type
    }

    return (
        <div className="App" >
            <h1 className="game-title">Flip and Match!</h1>
            <button className="restart-btn" onClick={restart}> Restart </button>
            <Board
                cards={cards}
                flipped={flipped}
                handleClick={handleClick}
                disabled={disabled}
                solved={solved}
            />
        </div>
    );
}

export default GameSession