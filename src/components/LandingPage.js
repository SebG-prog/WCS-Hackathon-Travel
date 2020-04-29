import React from "react"
import { NavLink } from "react-router-dom"
import  "./LandingPage.css"



const LandingPage = () => {
    return (
        <div className="landingPage">
            <div className="landing-text">
             <p className="memory-travel">Memory Travel Game</p>
              <NavLink activeClassName="active" exact to='/mainpage'>
              <button className="button-enter" >Enter</button>
             </NavLink>
            </div>
        </div>
    )
}

export default LandingPage