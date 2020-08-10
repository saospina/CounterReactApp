import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Counter = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleReset = () => {
        setCounter( counter - counter )
    }

    const handleSubstract = () => setCounter( counter - 1 )


    return (
        <div>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={handlePlus}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </div>
    )
}

Counter.propTypes = {
    value: PropTypes.number
}

export default Counter
