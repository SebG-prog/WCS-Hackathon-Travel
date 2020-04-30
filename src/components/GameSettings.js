import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"

import Autocomplete from "./Autocomplete";
import axios from 'axios';

import './GameSettings.css'

const GameSettings = () => {
  const [dataFilter, setDataFilter] = useState([])
  const [getCat, setGetCat] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  const categories = [
    { type: 'food', img: '/img/food.jpg' },
    { type: 'nature', img: '/img/nature.jpg' },
    { type: 'places', img: '/img/places.jpg' },
    { type: 'travel', img: '/img/travel.jpg' },
    { type: 'beach', img: '/img/beach.jpg' },
    { type: 'mountain', img: '/img/moutain.jpg' }
  ]

  const fetchDataFilter = async () => {
    const resultFilter = await axios('https://cors-anywhere.herokuapp.com/http://countryapi.gear.host/v1/Country/getCountries?')
    setDataFilter(resultFilter.data.Response.map(res => res.Name))
    setIsLoaded(!isLoaded)
  }

  useEffect(() => {
    fetchDataFilter()
  }, [])

  return (
    <div>
      <form>
        <div>
          <label>Which country do you want to travel to?</label>
          <Autocomplete
            suggestions={dataFilter}
          />
        </div>
        <div className="cat-container" >
          {
            categories.map((cat, index) =>
              <div
                onClick={() => setGetCat(cat.type)}
                className="cat"
                key={index}
                type={cat.type}>
                <p className="cat-type">
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
        <NavLink activeClassName="active" exact to={{ pathname: '/mainpage', state: getCat }}>
          <button>Start game</button>
        </NavLink>
      </form>
    </div>
  )
}

export default GameSettings;