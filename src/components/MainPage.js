import React, { useState, useEffect } from "react";

import GameSession from './GameSession'
import Loader from './Loader'
import axios from "axios";

import "./MainPage.css"

const MainPage = props => {
    const API_KEY = process.env.REACT_APP_API_KEY_PIXABAY;
    const query1 = props.location.query1;
    const query2 = props.location.query2;
    const idCountries = props.location.idCountries;
    const nameCountry = props.location.nameCountry;
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchData = async () => {
        setIsLoaded(false);
        const result = await axios("https://pixabay.com/api/", {
            params: {
                key: API_KEY,
                q: `${query1} + ${query2}`,
                image_type: "photo",
                orientation: "horizontal"
            },
        });
        setData(shuffle(result.data.hits).slice(0, 8))
        setIsLoaded(true);
    };

    useEffect(() => {
        fetchData()
    }, []);

    const shuffle = (array) => {
        const _array = array.slice(0)
        for (let i = 0; i < array.length - 1; i++) {
            let randomIndex = Math.floor(Math.random() * (i + 1))
            let temp = _array[i]
            _array[i] = _array[randomIndex]
            _array[randomIndex] = temp
        }
        return _array
    }

    const tab1 = data.map((picture, index) => ({ id: index, type: picture.webformatURL }))
    const tab2 = data.map((picture, index) => ({ id: index + 8, type: picture.webformatURL }))
    const cards = [...tab1, ...tab2]
    const idCountry = idCountries[nameCountry.map(name => name.toLowerCase()).indexOf(query1.toLowerCase())]

    return (
        <div className="mainPage">
            {isLoaded ? (
                <GameSession shuffledCards={shuffle(cards)} restart={fetchData} query1={query1} query2={query2} idCountry={idCountry} />
            ) : (
                    <Loader />
                )}
        </div>
    );
}

export default MainPage