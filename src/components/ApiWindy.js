import React, { useState, useEffect } from "react"
import axios from "axios"


const API_KEY = "v86LqZILmLPm1rCHTj4eDCcDGKc3Fveq";
const countryId = "FR"
const category = "beach"
const orderby = "popularity"
const limit = 10

function ApiWindy() {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchData = async () => {
        setIsLoaded(false);
        const result = await axios(`https://api.windy.com/api/webcams/v2/list/country=${countryId}/category=${category}/orderby=${orderby}/limit=${limit}?show=webcams:location,image,player`,
            {
                params: {
                    key: API_KEY
                }
            })
        setData(console.log(result.data.result.webcams) || result.data.result.webcams);
        setIsLoaded(true);
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log("test", data)
    return (
        <div>
            {isLoaded ?
                (data.length !== 0 ?
                    <div>{data.map(
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
                : "loading..."}
        </div>
    )

}

export default ApiWindy