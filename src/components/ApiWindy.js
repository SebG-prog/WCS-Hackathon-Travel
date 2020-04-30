import React, { useState, useEffect } from "react"
import axios from "axios"

const API_KEY = "v86LqZILmLPm1rCHTj4eDCcDGKc3Fveq";
const countryId = "IT"
const category = "beach"
const orderby = "popularity"
const limit = 10

function ApiWindy() {
    const [data, setData] = useState([]);
    // const [data2, setData2] = useState([]); // A remettre pour la liste des pays en dessous
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchData = async () => {
        setIsLoaded(false);

        //Pour voir la liste des pays dispo

        // const result2 = await axios(`https://api.windy.com/api/webcams/v2/list?show=countries`,
        //     {
        //         params: {
        //             key: "v86LqZILmLPm1rCHTj4eDCcDGKc3Fveq"
        //         }
        //     })
        //     setData2(console.log(result2.data.result.countries) || result2.data);


        const result = await axios(`https://api.windy.com/api/webcams/v2/list/country=${countryId}/category=${category}/orderby=${orderby}/limit=${limit}?show=webcams:location,image,player`,
            {
                params: {
                    key: "v86LqZILmLPm1rCHTj4eDCcDGKc3Fveq"
                }
            })
        setData(console.log(result.data.result.webcams) || result.data.result.webcams);
        setIsLoaded(true);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {isLoaded ?
                <div>{data.map(
                    image => <img src={image.image.daylight.preview} />
                )}
                </div>
                : "loading..."}
        </div>
    )

}

export default ApiWindy