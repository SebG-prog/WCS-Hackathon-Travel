import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"
import Loader from "./Loader"

import "./ApiWindy.css"

const ApiWindy = props => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const API_KEY = "v86LqZILmLPm1rCHTj4eDCcDGKc3Fveq";
    const countryId = props.location.idCountry
    const category = "beach"
    const orderby = "popularity"
    const limit = 10

    const fetchData = async () => {
        setIsLoaded(false);
        const result = await axios(`https://api.windy.com/api/webcams/v2/list/country=${countryId}/category=${category}/orderby=${orderby}/limit=${limit}?show=webcams:location,image,player`,
            {
                params: {
                    key: API_KEY
                }
            })
        setData(result.data.result.webcams);
        setIsLoaded(true);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {isLoaded ?
                (data.length !== 0 ?
                    <div>
                        <NavLink to="/">
                            <button className="button-again">Play again?</button>
                        </NavLink>
                        {data.map(
                        (image, i) =>
                            <div key={i}>
                                <div id="webcamGlobal">
                                    <div id="webcamInfo">
                                        <p>City: {image.location.city}</p>
                                        <p>Region: {`${image.location.region} ( ${image.location.country} ) `}</p>
                                        <p>Continent: {image.location.continent}</p>
                                        <div>
                                            <iframe title={image.location.city} width="560" height="315" src={image.player.day.embed} frameBorder="0" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )}
                    </div>
                    :
                    <h1>Sorry, but there is no footage from this location :/</h1>
                )
                : <Loader />}
        </div>
    )
}

export default ApiWindy