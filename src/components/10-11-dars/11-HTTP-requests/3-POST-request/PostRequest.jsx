import React, { useState } from 'react'

const PostRequest = () => {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [age, setAge] = useState("");


    const initialValue = {
        firstName: '',
        lastName: '',
        age: '',
    }
    const [allData, setAllData] = useState(initialValue)

    // const dataToCreate = { firstName, lastName, age };
    // console.log(dataToCreate);

    // const onSubmit = async (e) => {
    //     // refreshni oldini oladi
    //     e.preventDefault();
    //     console.log(dataToCreate);
    //     try {
    //         const resp = await fetch("https://dummyjson.com/users/add", {
    //             method: "POST",
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 firstName: firstName,
    //                 lastName: lastName,
    //                 age: age
    //             })
    //         })
    //         const data = await resp.json()
    //         console.log(data);

    //     } catch (error) {
    //         console.log(error);
    //     }



        // setFirstName("")
        // setLastName("")
        // setAge("")
    // }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const resp = await fetch('https://dummyjson.com/users/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(allData)
                // body: JSON.stringify(allData)
            })
            const data = await resp.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const css = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "350px",
        margin: "auto",
        color: "black",
    }
    const inputHandler = (name, value) => {
        // setAllData({ ...allData, [name]: value })
        setAllData(prev => ({ ...prev, [name]: value }))
        // console.log(allData);
        // const obj = {
        //     firstName:'',
        //     lastName:'',
        //     age:'',
        //     ["firstName"]:"new"
        // }
        // // obj.age
        // // obj["age"]
        // // obj = {...obj,firstName:"salom"}
        // // obj = obj.firstName = "salom"
        // // "salom"

    }
    console.log(allData);
    return (
        <div>
            <form onSubmit={onSubmit} style={css} >
                {/*<input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='firstName' />
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='lastName' />
    <input value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder='age' />*/}
                <input onChange={(e) => inputHandler("firstName", e.target.value)} value={allData.firstName} type="text" placeholder='firstName' />
                <input onChange={(e) => inputHandler("lastName", e.target.value)} value={allData.lastName} type="text" placeholder='lastName' />
                <input onChange={(e) => inputHandler("age", e.target.value)} value={allData.age} type="number" placeholder='age' />
                <button className='bg-green-500 px-3 py-2 rounded w-max' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default PostRequest