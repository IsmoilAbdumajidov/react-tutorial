import React, { useState } from 'react'
import Child from './Child'


// passing function from parent to child
// const Parent = () => {

//     const greeting = (name) => {
//         console.log(`Hello ${name || "World"}`)
//     }

//     return (
//         <div>
//             <Child greeting={greeting} />
//         </div>
//     )
// }


// passing state function
const Parent = () => {
    const [name, setName] = useState("")
    console.log(`Hello ${name}`)
    return (
        <div>
            <Child setName={setName} />
        </div>
    )
}

export default Parent