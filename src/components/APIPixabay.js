import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "16289190-97a0bc0be3bee47cca51d8097";
const query1 = "brazil";
const query2 = "food";

function APIPixabay() {
  const [data, setData] = useState({ hits: [] });
  const [isLoaded, setIsLoaded] = useState(false);
  
  const fetchData = async () => {
  const result = await axios("https://pixabay.com/api/", {
      params: {
        key: API_KEY,
        q: `${query1} + ${query2}`,
        image_type: "photo",
      },
    });
    setData(result.data.hits.slice(0, 8));
    setIsLoaded(!isLoaded);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <p>Query: {query1}</p>
        <p>Category : {query2}</p>
      </div>
      {isLoaded ? (
        <div>
          {data.map((picture) => (
            <div key={picture.id}>
              <p>Photo id {picture.id} </p>
              <img src={picture.webformatURL} alt=""></img>
            </div>
          ))}
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default APIPixabay;
