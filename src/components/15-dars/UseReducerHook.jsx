import React, { useReducer, useState } from 'react'


// using useState hook separately for every state
// const UseReducerHook = () => {
//     const [first, setFirst] = useState("")
//     const [last, setLast] = useState("")
//     const [age, setAge] = useState("")
//     const [address, setAddress] = useState("")
//     const person = { first, last, age, address }

//     const [people, setPeople] = useState([])
//     console.log(person);
//     return (
//         <div>
//             <h2>using useState hook</h2>

//             <div className='flex flex-col max-w-[500px] gap-4 mx-auto text-black'>
//                 <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} placeholder="firstname" />
//                 <input type="text" value={last} onChange={(e) => setLast(e.target.value)} placeholder="lastname" />
//                 <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="age" />
//                 <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="address" />
//                 <button className='bg-green-500 py-2 rounded' onClick={() => setPeople(prev => [...prev, person])}>add name</button>
//             </div>

//             <div>
//                 {people.map((person, index) => (
//                     <p key={index}>{JSON.stringify(person)}</p>
//                 ))}
//             </div>

//         </div>
//     )
// }

// using useState hook in more compact way
// const UseReducerHook = () => {
//     const [person, setPerson] = useState({ first: "", last: "", age: "", address: "" })
//     const [people, setPeople] = useState([])

//     console.log(person)
//     const onChangeHandler = (e) => {
//         setPerson(prev => ({ ...prev, [e.target.name]: e.target.value }))
//     }

//     return (
//         <div>
//             <h2>using useState hook</h2>

//             <div className='flex flex-col max-w-[500px] gap-4 mx-auto text-black'>
//                 <input type="text" name='first' onChange={onChangeHandler} placeholder="firstname" />
//                 <input type="text" name='last' onChange={onChangeHandler} placeholder="lastname" />
//                 <input type="text" name="age" onChange={onChangeHandler} placeholder="age" />
//                 <input type="text" name='address' onChange={onChangeHandler} placeholder="address" />
//                 <button className='bg-green-500 py-2 rounded' onClick={() => setPeople(prev => [...prev, person])}>add name</button>
//             </div>

//             <div>
//                 {people.map((person, index) => (
//                     <p key={index}>{JSON.stringify(person)}</p>
//                 ))}
//             </div>

//         </div>
//     )
// }

// using useReducer
const UseReducerHook = () => {

    const initialValue = {
        people: [],
        person: { first: "", last: "", age: "", address: "" }
    }

    const reducerFn = (state, action) => {


        if (action.type === "INPUT_VALUE") return { ...state, person: { ...state.person, ...action.payload } }

        if (action.type === "UPDATE_PEOPLE") return { ...state, people: [...state.people, state.person], person: initialValue.person }
        // if (action.type === "UPDATE_PEOPLE") return { ...state, people: [...state.people, ...action.payload], person: initialValue.person  }

        return state
    }

    const [state, dispatch] = useReducer(reducerFn, initialValue)
    console.log(state);

    const inputHandler = (e) => {

        dispatch({ type: "INPUT_VALUE", payload: { [e.target.name]: e.target.value } })
    }

    return (
        <div className='use-reducer-container'>
            <h2>using useState hook</h2>

            <div className='flex flex-col max-w-[500px] gap-4 mx-auto text-black'>
                <input onChange={inputHandler} value={state?.person?.first} type="text" name='first' placeholder="firstname" />
                <input onChange={inputHandler} value={state?.person?.last} type="text" name='last' placeholder="lastname" />
                <input onChange={inputHandler} value={state?.person?.age} type="text" name='age' placeholder="age" />
                <input onChange={inputHandler} value={state?.person?.address} type="text" name='address' placeholder="address" />

                {/* <button onClick={() => dispatch({ type: "UPDATE_PEOPLE", payload: state.person })} className='bg-green-500 py-2 rounded'>add person</button> */}
                {/* actually we do not need pass payload, person object already is in reducerFn while occured onChange event */}
                <button onClick={() => dispatch({ type: "UPDATE_PEOPLE" })} className='bg-green-500 py-2 rounded' >add person</button>
            </div>



        </div>
    )
}

export default UseReducerHook
// const UseReducerHook = () => {

//     const initialValue = {
//         people: [],
//         person: { first: "", last: "", age: "", address: "" }
//     }

//     const reducerFn = (state, action) => {
//         if (action.type === "PERSON_DATA") {
//             return { ...state, person: { ...state.person, ...action.payload } }
//         }
//         if (action.type === "ADD_PERSON") {
//             // return { ...state, people: [...state.people, action.payload], person: initialValue.person }
//             // we do not need payload onClick event, person object already is created when onChange event occured
//             return { ...state, people: [...state.people, state.person], person: initialValue.person }
//         }
//         return state
//     }

//     const [state, dispatch] = useReducer(reducerFn, initialValue)

//     // onChangeHandler
//     const dispatchHandler = (e) => {
//         dispatch({ type: "PERSON_DATA", payload: { [e.target.name]: e.target.value } })
//     }
//     // console.log(state)

//     return (
//         <div className='use-reducer-container'>
//             <h2>using useState hook</h2>

//             <div className='flex flex-col max-w-[500px] gap-4 mx-auto text-black'>
//                 <input type="text" name='first' value={state.person.first} onChange={dispatchHandler} placeholder="firstname" />
//                 <input type="text" name='last' value={state.person.last} onChange={dispatchHandler} placeholder="lastname" />
//                 <input type="text" name='age' value={state.person.age} onChange={dispatchHandler} placeholder="age" />
//                 <input type="text" name='address' value={state.person.address} onChange={dispatchHandler} placeholder="address" />

//                 {/* <button onClick={() => dispatch({ type: "ADD_PERSON", payload: state.person })}>add person</button> */}
//                 {/* actually we do not need pass payload, person object already is in reducerFn while occured onChange event */}
//                 <button className='bg-green-500 py-2 rounded' onClick={() => dispatch({ type: "ADD_PERSON" })}>add person</button>
//             </div>

//             <div>
//                 {state.people.map((person, index) => (
//                     <p key={index}>{JSON.stringify(person)}</p>
//                 ))}
//             </div>

//         </div>
//     )
// }

// export default UseReducerHook




