import React, { useState } from 'react'

const Forms = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`The username is ${username || "undefined"} and pasword is ${password || "undefined"}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex gap-2 flex-col items-center'>
                <div>
                    <label htmlFor="" className=''>Username</label><br />
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className='border max-w-[300px] p-2 rounded' />
                </div>
                <div>
                    <label htmlFor="" className=''>Password</label><br />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='border max-w-[300px] p-2 rounded' />
                </div>
                <button className='bg-green-500 rounded py-2 px-5 w-max mx-auto' type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Forms