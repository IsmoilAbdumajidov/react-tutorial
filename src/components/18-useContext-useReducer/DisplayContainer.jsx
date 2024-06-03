import React, { useContext } from 'react'
import { InputContext } from './UseContextHook'

const DisplayValue = ({ value }) => {
    const [state] = useContext(InputContext)
    console.log(state);
    return (
        <p>{value}: {state[value]}</p>
    )
}

const DisplayContainer = () => {
    return (
        <div>
            <h2>DisplayContainer</h2>
            <DisplayValue value="first" />
            <DisplayValue value="last" />
        </div>
    )
}

export default DisplayContainer