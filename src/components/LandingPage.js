import React, { useRef } from "react"

import Modal from './Modal'
import GameSettings from './GameSettings'
import "./LandingPage.css"

const LandingPage = () => {
    const modalRef = useRef();

    return (
        <div className="landingPage">
            <div className="landing-text">
                <p className="memory-travel">Memory Travel Game</p>
                <button className="button-enter" onClick={() => modalRef.current.openModal()}>Enter</button>
                <Modal ref={modalRef} >
                    <h1>New Game</h1>
                    <button className="close-btn" onClick={() => modalRef.current.closeModal()}>X</button>
                    <GameSettings />
                </Modal>
            </div>
        </div>
    )
}

export default LandingPage