import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"

import Autocomplete from "./Autocomplete";
import axios from 'axios';

import './GameSettings.css'

const GameSettings = ({ restart }) => {
  const [dataFilter, setDataFilter] = useState([])
  const [idFilter, setIdFilter] = useState([])
  const [getCat, setGetCat] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSuggestion, setActiveSuggestion] = useState(0)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [userInput, setUserInput] = useState('')

  const API_KEY = process.env.REACT_APP_API_KEY_WINDY;

  const categories = [
    { type: 'food', img: '/img/food.jpg' },
    { type: 'nature', img: '/img/nature.jpg' },
    { type: 'places', img: '/img/places.jpg' },
    { type: 'travel', img: '/img/travel.jpg' },
    { type: 'beach', img: '/img/beach.jpg' },
    { type: 'mountain', img: '/img/moutain.jpg' }
  ]

  const fetchDataFilter = async () => {
    const resultFilter = await axios(`https://api.windy.com/api/webcams/v2/list?show=countries`,
      {
        params: {
          key: API_KEY
        }
      })
    const countriesFilter = resultFilter.data.result.countries.map(res => res)
    setDataFilter(countriesFilter.map(country => country.name))
    setIdFilter(countriesFilter.map(country => country.id))
    setIsLoaded(!isLoaded)
  }

  useEffect(() => {
    fetchDataFilter()
    // eslint-disable-next-line
  }, [])

  const onChange = e => {
    setUserInput(e.currentTarget.value)
    setFilteredSuggestions(
      dataFilter.filter(
        data =>
          data.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      )
    )
    setActiveSuggestion(0)
    setShowSuggestions(true)
    setUserInput(e.currentTarget.value)
  }

  const onClick = e => {
    setActiveSuggestion(0)
    setFilteredSuggestions([])
    setShowSuggestions(true)
    setUserInput(e.currentTarget.innerText)
  }

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setActiveSuggestion(0)
      setShowSuggestions(false)
      setUserInput(filteredSuggestions[activeSuggestion])
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1)
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1)
    }
  };

  let suggestionsListComponent;

  if (showSuggestions && userInput !== '') {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className
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
            )
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>If it doesn't match to the country, you get on your own!</em>
        </div>
      );
    }
  }

  return (
    <div>
      <form>
          <label className="search-text">Which country do you want to travel to?</label>
          <Autocomplete
            onChange={onChange}
            onKeyDown={onKeyDown}
            userInput={userInput}
            suggestionsListComponent={suggestionsListComponent}
          />
        <h4>Choose a category</h4>
        <div className="cat-container" >
          {
            categories.map((cat, index) =>
              <div
                onClick={() => setGetCat(cat.type)}
                className="cat"
                key={index}
                type={cat.type}>
                <p className={`cat-type ${getCat===cat.type && "selected-filter"}`}>
                  {cat.type}
                </p>
                <img
                  className="cat-img"
                  src={cat.img}
                  alt={cat.type}
                />
              </div>
            )
          }
        </div>
        <NavLink activeClassName="active" exact to={{ pathname: '/mainpage', query2: getCat, query1: userInput, idCountries: idFilter, nameCountry: dataFilter }}>
          <button className="start-btn setting-btn" onClick={restart}>Start game</button>
        </NavLink>
      </form>
    </div>
  )
}

export default GameSettings;