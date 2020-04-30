import React, { useRef } from "react"

import Modal from './Modal'
import GameSettings from './GameSettings'
import "./LandingPage.css"

const LandingPage = () => {
    const modalRef = useRef();

    return (
        <div className="landingPage">
            <div className="landing-text">
                <h1 className="memory-travel">Memory Travel Game</h1>
                <button className="button-enter" onClick={() => modalRef.current.openModal()}>Enter</button>
            </div>
                <Modal ref={modalRef} >
                    <h1>New Game</h1>
                    <GameSettings />
                    <button onClick={() => modalRef.current.closeModal()}>Close</button>
                </Modal>
        </div>
    )
}

export default LandingPage