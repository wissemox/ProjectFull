import React from 'react'
import Countdown  from 'react-countdown';
const CounterOne = () => {
    return (
        <div>
            <Countdown date={Date.now() + 100000}/>
        </div>
    )
}

export default CounterOne
