import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

const Input = () => {
    const [inputValue, setinputValue] = useState("")
    // const [people, setPeople] = useState([])
    console.log(inputValue);

    // can be used to store a value as useState
    const someRef = useRef()

    console.log(someRef)
    // useEffect(() => {
    //     someRef.current = someRef.current + 1
    // })

    // const inputRef = useRef()
    // console.log(inputRef.current)

    // useEffect(() => {
    //     console.log(inputRef.current.focus());
    // }, [])

    const inputHandler = () => {
        console.dir(someRef.current.value);
    }


    return (
        <div>
            <h2>Input</h2>

            <input ref={someRef} onChange={inputHandler} className='text-black' type="text" />
            <h1> {someRef.current?.value}</h1>
            {/* <input className='text-black' type="text" onChange={(e) => setinputValue(e.target.value)} /> */}

            {/* <input  type="text" /> */}
            {/* <button type='button' onClick={() => console.log(inputRef.current.value)}>submit</button> */}

            {/* <button type='button' onClick={() => setPeople(prev => [...prev, inputRef.current.value])}>submit</button> */}
            {/* {people.map(person => (
                <div key={person}>{person}</div>
            ))} */}
        </div>
    )
}

export default Input