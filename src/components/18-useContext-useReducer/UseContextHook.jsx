import React, { useReducer } from 'react'
import { createContext } from 'react'
import DisplayContainer from './DisplayContainer'
import FormContainer from './FormContainer'
import { reducerFn } from './reducerFn'


export const InputContext = createContext()

const UseContextUseReducerHook = () => {
    const initialValue = { first: "", last: "" }
    const state = useReducer(reducerFn, initialValue)
    return (
        <div className='main-container'>
            <div>
                <h2>UseContextUseReducerHook</h2>
                <InputContext.Provider value={state}>
                    <FormContainer />
                    <DisplayContainer />
                </InputContext.Provider>
            </div>
        </div>
    )
}

export default UseContextUseReducerHook