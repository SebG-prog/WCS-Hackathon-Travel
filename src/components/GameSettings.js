import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

import Autocomplete from "./Autocomplete";

const GameSettings = () => {
  const [input, setInput] = useState({})

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })
  
  return (
    <form>
        <div>
            <label>Which country do you want to travel to?</label>
            {/* <input type="text" name="country" onChange={handleInputChange} /> */}
            <Autocomplete
                suggestions={[
                    "Alligator",
                    "Bask",
                    "Crocodilian",
                    "Death Roll",
                    "Eggs",
                    "Jaws",
                    "Reptile",
                    "Solitary",
                    "Tail",
                    "Wetlands"
                ]}
            />
        </div>
        <div>
            <label>What attracts you most?</label>
            <input type="text" name="category" onChange={handleInputChange} />
        </div>
        <NavLink activeClassName="active" exact to='/mainpage'>
            <button>Start game</button>    
        </NavLink>
      
    </form>
  )
}

export default GameSettings;