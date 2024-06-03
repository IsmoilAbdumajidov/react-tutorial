import React, { useState } from 'react'
import DisplayContainer from './DisplayContainer'
import FormContainer from './FormContainer'
import "./style.css"
import { createContext } from 'react'

export const InputContext = createContext()


const MainContainer = () => {
    const state = useState({ first: "", last: "" })
    // const [state, setState] = useState({ first: "", last: "" })
    // console.log(state)
    return (
        <div className='main-container'>
            <div>
                <h2>MainContainer</h2>
                <InputContext.Provider value={state}>
                    <FormContainer />
                    <DisplayContainer />
                </InputContext.Provider>
                {/* <FormContainer setState={setState} />
                <DisplayContainer state={state} /> */}
            </div>
        </div>
    )
}

export default MainContainer