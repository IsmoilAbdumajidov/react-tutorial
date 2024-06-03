import React, { useState } from 'react'

const Welcome = () => {

    // const [count,setCount] = useState(0)
    const [message, setMessage] = useState("Welcome visitor")
    const [sate, setSate] = useState("")
    // console.log(count);
    // console.log("welcome");

    // let a =12;
    // console.log(a);
    // const [message, setMessage] = useState("Welcome visitor")        // NOTE! changing state causes component to re-render
    // console.log(message) // it a simple var
    // let count = 10
    const clickHandler = (param1) => {
        // count = count+1
        // setCount(count+1)
        // console.log(count);
        // if (message === "Thank you for subscibing!") {
        //     setMessage("Welcome visitor")
        // }
        // else {
        //     setMessage("Thank you for subscibing!")
        // }
        // console.log(e.target);
    }
    // console.log(count);
    return (
        <div className='text-center'>

            {/* <h3>Welcome visitor {count}</h3> */}
            <h3>{message}</h3>

            {/* <h3>{message}</h3> */}
            

            {/* <button onClick={clickHandler} className='bg-green-500 px-5 py-2 rounded mt-7'>Subscribe</button> */}
            <button onClick={()=>clickHandler("this is argument")} className='bg-green-500 px-5 py-2 rounded mt-7'>Subscribe</button>

        </div>
    )
}

export default Welcome