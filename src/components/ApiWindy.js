import React, {useState, useEffect} from "react"
import axios from "axios"

const API_KEY = "zmF43eOubhCOwkcrfCuqkeXfMebYU0pH";

function ApiWindy() {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchData = async () => {
        setIsLoaded(false);
        const result = await axios("https://api.windy.com/api/webcams/v2/list/country=IT/category=beach/orderby=popularity/limit=20", {
            params: {
                key: API_KEY,
                show: `webcams:location,image`
            }
        })
        setData(result.data);
        setIsLoaded(true);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {isLoaded? <div>hi</div> : "loading..."}
        </div>
    )

}

export default ApiWindy