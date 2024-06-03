import React from 'react'

// receiving function from parent component
// const Child = ({ greeting }) => {
//     return (
//         <div>
//             <h3>child</h3>
//             <button className='px-5 py-2 bg-green-500 rounded' onClick={() => greeting()}>child button</button>
//         </div>
//     )
// }


// receiving setState form parent component
const Child = ({ setName }) => {
    return (
        <div>
            <h3>child</h3>
            <button className='px-5 py-2 bg-green-500 rounded' onClick={() => setName("Bob")}>child button</button>
        </div>
    )
}

export default Child