import React, { useContext } from 'react'
import { InputContext } from './MainContainer'

const DisplayInput = ({ value }) => {
    const [_, setState] = useContext(InputContext)


    // { first: "", last: "" }

    // first: "", last: "" ,["fisrt"]:
    return (
        <p> {value}: <input type="text" onChange={(e) => setState(prev => ({ ...prev, [value]: e.target.value }))} /> </p>
        // <p> {value}: <input type="text" onChange={(e) => setState(prev => ({ ...prev, [value]: e.target.value }))} /> </p>
    )
}

const FormContainer = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h2>FormContainer</h2>
            <DisplayInput value="first" />
            <DisplayInput value="last" />
        </div>
    )
}

export default FormContainer
// const FormContainer = ({ setState }) => {
//     return (
//         <div className='flex flex-col gap-3'>
//             <h2>FormContainer</h2>
//             <DisplayInput value="first" setState={setState} />
//             <DisplayInput value="last" setState={setState} />
//         </div>
//     )
// }

// export default FormContainer