import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiFilter = ({ width, height }) => {
    const [dataFilter, setDataFilter] = useState([])
    const [name, setName] = useState('France')
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

    const handlechange = (e) => {
        setName(e.currentTarget.value)
    }

    return (
        <div>
            {isLoaded ?
                <>
                    <select value={name} onChange={handlechange}>
                        {dataFilter.map((data, index) => (
                            <option key={index} value={data}>{data}</option>
                        ))}
                    </select>
                    <div style={{ display: 'flex' }}>
                        {
                            categories.map((cat, index) =>
                                <div
                                    key={index}
                                    style={{
                                        margin: '1em',
                                        position: 'relative'
                                    }}>
                                    <p
                                        style={{
                                            position: 'absolute',
                                            fontWeight: '900',
                                            color: 'black',
                                            fontSize: '30px',
                                            zIndex: '2',
                                            paddingLeft: '15px'
                                        }}
                                    >
                                        {cat.type}
                                    </p>
                                    <img
                                        src={cat.img}
                                        alt={cat.type}
                                        style={{
                                            width: '160px',
                                            height: '100px',
                                            borderRadius: '5px',
                                            opacity: '0.6'
                                        }}
                                    />
                                </div>
                            )
                        }
                    </div>
                </>
                : <div>loading...</div>}
        </div>
    );
};

export default ApiFilter;