import React from "react"
import { NavLink } from "react-router-dom"

import Modal from './Modal'
import  "./LandingPage.css"



const LandingPage = () => {

    const openModal = () => {
        console.log("open Modal")
    }
    return (
        <div className="landingPage">
            <div className="landing-text">
                <p className="memory-travel">Memory Travel Game</p>
                <NavLink activeClassName="active" exact to='/mainpage'>
                <button className="button-enter" >Enter</button>
                </NavLink>
                <button onClick={openModal}>Open Modal</button>
                <Modal>
                    <h1>Modal Header</h1>
                    <p>
                        Lorem im
                    </p>
                </Modal>
            </div>
        </div>
    )
}

export default LandingPage