import React from "react"
import { NavLink } from "react-router-dom"



const LandingPage = () => {
    return (
        <div>
            Landing page
            <NavLink activeClassName="active" exact to='/mainpage'>
            <button className="" >Enter</button>
            </NavLink>
        </div>
    )
}

export default LandingPage