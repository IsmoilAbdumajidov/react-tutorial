import React, { useContext } from 'react'
import { InputContext } from './UseContextHook'

const DisplayInput = ({ value }) => {
    const [_, dispatch] = useContext(InputContext)
    return (
        <p> {value}: <input type="text" onChange={(e) => dispatch({ type: "INPUT", payload: { [value]: e.target.value } })} /> </p>
    )
}

const FormContainer = () => {
    return (
        <div>
            <h2>FormContainer</h2>
            <DisplayInput value="first" />
            <DisplayInput value="last" />
        </div>
    )
}

export default FormContainer