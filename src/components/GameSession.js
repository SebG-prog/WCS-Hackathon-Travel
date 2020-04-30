import React, { useState, useEffect, useRef } from 'react'
import Board from './Board'
import Timer from "./Timer"
import { Link } from "react-router-dom"

import Modal from './Modal'
import GameSettings from './GameSettings'

import './GameSession.css'

const GameSession = ({ shuffledCards, restart, query1, query2 }) => {
    const [flipped, setFlipped] = useState([])
    const [solved, setSolved] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [counter, setCounter] = useState(60);
    const [endGame, setEndGame] = useState(false)
    const [gameOver, setGameOver] = useState(false)

    const cards = shuffledCards

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    useEffect(() => {
        preloadImages()
    }, [])

    const preloadImages = () => {
        cards.map((card) => {
            const src = card.type
            return new Image().src = src
        })
    }

    useEffect(() => {
        if (solved.length === 8 * 2) { setEndGame(true) }
    }, [solved])

    useEffect(() => {
        if (counter === 0) { setGameOver(true) }
    }, [counter])

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
    const modalRef = useRef();
    return (
        <div className="App" >
            <h1 className="game-title">Flip and Match!</h1>
            <h2 style={{ color: 'white' }}>Your choice : {query1} and {query2}</h2>
            <Timer counter={counter} />
            <h1>{endGame ? "Congratulation!" : gameOver && "Game Over!"}</h1>
            <Board
                cards={cards}
                flipped={flipped}
                handleClick={handleClick}
                disabled={disabled}
                solved={solved}
            />
            <button className="restart-btn" onClick={restart}> Restart </button>
            <button className="restart-btn" onClick={() => modalRef.current.openModal()}>Change parameters</button>
            <Modal ref={modalRef} >
                <h1>Change Parameters</h1>
                <button className="close-btn" onClick={() => modalRef.current.closeModal()}>X</button>
                <GameSettings restart={restart} />
            </Modal>
        </div>
    );
}

export default GameSession