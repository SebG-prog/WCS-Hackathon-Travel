import React, { Fragment, useState } from "react";

import './Autocomplete.css'

const Autocomplete = (props) =>  {

    // The active selection's index
    const [activeSuggestion, setActiveSuggestion] = useState(0)
    // The suggestions that match the user's input
    const [filteredSuggestions, setFilteredSuggestions] = useState([])
    // Whether or not the suggestion list is shown
    const [showSuggestions, setShowSuggestions] = useState(false)
    // What the user has entered
    const [userInput, setUserInput] = useState("")



  // Event fired when the input value is changed
    const onChange = e => {
        const { suggestions } = props;
        setUserInput(e.currentTarget.value);

        // Filter our suggestions that don't contain the user's input
        setFilteredSuggestions (
            suggestions.filter ( 
                suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
            )
        )
        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        setActiveSuggestion(0)
        setShowSuggestions(true)
        setUserInput(e.currentTarget.value)
    };

  // Event fired when the user clicks on a suggestion
    const onClick = e => {
        // Update the user input and reset the rest of the state
        setActiveSuggestion(0)
        setFilteredSuggestions ([])
        setShowSuggestions(true)
        setUserInput(e.currentTarget.innerText)
    };

  // Event fired when the user presses a key down
    const onKeyDown = e => {
        // User pressed the enter key, update the input and close the
        // suggestions
        if (e.keyCode === 13) {
            setActiveSuggestion(0)
            setShowSuggestions(false)
            setUserInput(filteredSuggestions[activeSuggestion])
        }
        // User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
        if (activeSuggestion === 0) {
            return;
        }
        setActiveSuggestion(activeSuggestion - 1)
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
        if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
        }

        setActiveSuggestion(activeSuggestion + 1)
        }
    };

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul class="suggestions">
                    {filteredSuggestions.map((suggestion, index) => {
                        let className;
                        // Flag the active suggestion with a class
                        if (index === activeSuggestion) {
                            className = "suggestion-active";
                        }
                        return (
                            <li
                            className={className}
                            key={suggestion}
                            onClick={onClick}
                            >
                            {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            suggestionsListComponent = (
            <div class="no-suggestions">
                <em>No suggestions, you're on your own!</em>
            </div>
            );
        }
    }

    return (
      <Fragment>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </Fragment>
    );
}


export default Autocomplete;