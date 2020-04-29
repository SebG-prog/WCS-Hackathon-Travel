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
            <p>Memory Travel</p>
            <NavLink activeClassName="active" exact to='/mainpage'>
            <button className="" >Enter</button>
            </NavLink>
            
            <button onClick={openModal}>Open Modal</button>
            <Modal>
                <h1>Modal Header</h1>
                <p>
                    Lorem im
                </p>
            </Modal>
        </div>
    )
}

export default LandingPage