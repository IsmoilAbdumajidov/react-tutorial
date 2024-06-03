import React, { useEffect, useState } from 'react'
import Module from '../../../8-dars/Module'

const GetRequest = () => {
    // useEffect(() => {
    //     const fechData = async () => {
    //         try {
    //             const resp = await fetch(baseUrl + "/users")
    //             const data = resp.json()
    //             console.log(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // fechData()
    // }, [])


    // or

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const resp = await fetch('https://dummyjson.com/users')
    //             const data = await resp.json()
    //             setUsers(data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData()
    // }, [])

    const [users, setUsers] = useState([])
    const [defData, setDefData] = useState([])
    const [count, setCount] = useState(0)
    const [openModule, setOpenModule] = useState(false)
    const [moduleData, setModuleData] = useState("")
    const baseUrl = "https://dummyjson.com"

    const fechData = async () => {
        try {
            const resp = await fetch(baseUrl + "/users")
            const data = await resp.json()
            setUsers(data?.users)
            setDefData(data?.users)
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fechData()
    }, [count])



    const clickHandler = (item) => {

        const filteredItem = users.filter(elem => {
            return elem.id !== item.id
        })
        setUsers(filteredItem)
    }
    const searchigFilter = (value) => {

        const filteredItem = defData.filter(elem => {
            return elem.firstName.toLowerCase().includes(value.toLowerCase()) || elem.lastName.toLowerCase().includes(value.toLowerCase())
            // if (elem.firstName.toLowerCase().includes(value.toLowerCase()) || elem.lastName.toLowerCase().includes(value.toLowerCase())) {
            //     return elem
            // }
        })
        setUsers(filteredItem)
    }

    const moduleHandler = (elem) => {
        console.log(elem);
        setModuleData(elem)
        setOpenModule(true)
    }

    const selectHandler = (value) => {
        console.log(value);

        if (value === "all") {
            setUsers(defData)
        }
        else {
            const filteredItem = defData.filter(elem => {
                return elem.gender === value
            })
            setUsers(filteredItem)
        }
    }



    console.log(users);

    return (
        <div>
            {
                openModule &&
                <Module openModule={openModule} setOpenModule={setOpenModule}>
                    <div className='flex gap-10 text-black flex-1 px-10'>
                        <div>
                            <h2>F.I.O: <span>{moduleData?.firstName} {moduleData?.lastName}</span></h2>
                            <h2>Jins: <span>{moduleData?.gender}</span></h2>
                        </div>
                        <div>
                            <h2>Age: <span>{moduleData?.age}</span></h2>
                            <h2>Birth date: <span>{moduleData?.birthDate}</span></h2>
                        </div>
                        <div>
                            <h2>Email: <span>{moduleData?.email}</span></h2>
                            <h2>Phone: <span>{moduleData?.phone}</span></h2>
                        </div>
                    </div>
                </Module>
            }
            <div className='text-lg text-center'>All Users list</div>
            <div className='flex justify-center gap-3'>
                <button onClick={() => setUsers("")} className='bg-red-500 px-5 py-2 rounded'>Clear All users</button>
                <button onClick={() => setCount(count + 1)} className='bg-green-500 px-5 py-2 rounded'>Get All users</button>
                <select className='text-black rounded px-3' onChange={(e) => selectHandler(e.target.value)}>
                    <option value="all">all</option>
                    <option value="male">Erkak</option>
                    <option value="female">Ayol</option>
                </select>
                <input className='text-black rounded px-3' placeholder='Searching...!' type="text" onChange={(e)=>searchigFilter(e.target.value)} />
            </div>
            <div className='px-10 mt-10 flex flex-col gap-3'>
                {
                    users.length ? users.map((item, i) => (
                        <div key={i} className='flex border p-3 rounded-md border-slate-400 items-center justify-between'>
                            <div className='flex items-center justify-between'>
                                <h4>{i + 1})</h4>
                                <div className='flex gap-10 flex-1 px-10'>
                                    <div>
                                        <h2>F.I.O: <span>{item.firstName} {item.lastName}</span></h2>
                                        <h2>Jins: <span>{item.gender}</span></h2>
                                    </div>
                                    <div>
                                        <h2>Age: <span>{item.age}</span></h2>
                                        <h2>Birth date: <span>{item.birthDate}</span></h2>
                                    </div>
                                    <div>
                                        <h2>Email: <span>{item.email}</span></h2>
                                        <h2>Phone: <span>{item.phone}</span></h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <button onClick={() => clickHandler(item)} className='bg-red-500 px-4 py-2 rounded'>Delete</button>
                                <button onClick={() => moduleHandler(item)} className='bg-green-500 px-4 py-2 rounded'>Detail page</button>
                            </div>
                        </div >
                    )) : <p>Malumot yo'q</p>
                }
            </div>
        </div >
    )
}

export default GetRequest