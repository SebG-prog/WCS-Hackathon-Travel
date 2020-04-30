import React from 'react'

const Timer = ({counter}) => {
    return (
        <div>
            <h2 style={counter > 40 ? {color: "green"} : counter > 10 ? {color:"orange"} : {color:"red"} }>{counter === 0 ? 'Too late!!!' : `Time left: ${counter}`}</h2>
        </div>
    );
}

export default Timer