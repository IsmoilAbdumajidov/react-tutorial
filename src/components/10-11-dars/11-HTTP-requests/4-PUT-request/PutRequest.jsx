import React, { useEffect, useState } from 'react'

const PutRequest = () => {

    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")

    const initialValue = {
        firstName: '',
        lastName: '',
    }

    const [user, setUser] = useState(initialValue)
    // console.log(user)

    const url = "https://dummyjson.com/users/1"

    useEffect(() => {
        const fetchingSingleUser = async () => {
            try {
                const resp = await fetch(url)
                const data = await resp.json()
                setUser(data)
                // console.log(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchingSingleUser()
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const resp = await fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
            const data = await resp.json()
            setUser(data)
            console.log(data);
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
        color: "black"
    }
    return (
        <div>
            <form style={css} onSubmit={submitHandler}>
                <input value={user.firstName} type="text" placeholder={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                <input value={user.lastName} type="text" placeholder={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                <button className='bg-green-500 px-3 py-2 rounded w-max' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default PutRequest