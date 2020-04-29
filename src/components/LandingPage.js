import React from "react"
import { NavLink } from "react-router-dom"
import  "./LandingPage.css"



const LandingPage = () => {
    return (
        <div className="landingPage">
            <p>Memory Travel</p>
            <NavLink activeClassName="active" exact to='/mainpage'>
            <button className="" >Enter</button>
            </NavLink>
        </div>
    )
}

export default LandingPage