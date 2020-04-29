import React from "react"
import "./MainPage.css"

import ApiFilter from './ApiFilter'
import APIPixabay from './APIPixabay'

const MainPage = () => {
    return (
        <div className='mainPage'>
            <ApiFilter />
            <APIPixabay />
        </div>
    )
}

export default MainPage