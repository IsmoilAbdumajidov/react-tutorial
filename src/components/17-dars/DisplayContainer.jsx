import React, { useContext } from 'react'
import { InputContext } from './MainContainer'

const DisplayValue = ({ value }) => {
    const [state] = useContext(InputContext)
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
// const DisplayContainer = ({ state }) => {
//     return (
//         <div>
//             <h2>DisplayContainer</h2>
//             <DisplayValue value="first" state={state} />
//             <DisplayValue value="last" state={state} />
//         </div>
//     )
// }

// export default DisplayContainer