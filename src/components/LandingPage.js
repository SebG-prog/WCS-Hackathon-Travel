import React, { useRef } from "react"
import { NavLink } from "react-router-dom"

import Modal from './Modal'
import  "./LandingPage.css"


const LandingPage = () => {
    const modalRef = useRef();

    return (
        <div className="landingPage">
            <div className="landing-text">
                <p className="memory-travel">Memory Travel Game</p>
                {/* <NavLink activeClassName="active" exact to='/mainpage'>
                <button className="button-enter" >Enter</button>
                </NavLink> */}
                <button className="button-enter" onClick={() => modalRef.current.openModal()}>New game</button>
                <Modal ref={modalRef} >
                    <h1>New Game</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button onClick={() => modalRef.current.closeModal()}>Close</button>
                </Modal>
            </div>
        </div>
    )
}

export default LandingPage