import React from "react";

import './Autocomplete.css'

const Autocomplete = ({ onChange, onKeyDown, userInput, suggestionsListComponent }) => {

    return (
        <>
            <input
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={userInput}
            />
            {suggestionsListComponent}
        </>
    )
}

export default Autocomplete;