import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    // console.log(count)
    // console.log(count1)



    // without any dependency or an empty array
    // useEffect(() => {
    //     console.log("Runs on every render")
    // })

    // with an empty array
    // useEffect(() => {
    //     console.log("Runs only on the first render")
    // }, [])

    // with dependency
    // useEffect(() => {
    //     console.log("Runs on the first render")
    //     console.log("And any time any dependency value changes")
    // }, [count])

    // console.log(count);
    // console.log(count1);

    // keep in mind!
    // if elements in dependency array are primitive(string, boolean, number etc.) values, it is OK
    // agar dependency array dagi elementlar primitiv (string, boolean, number va boshqalar) qiymatlar bo'lsa, bu OK.
    // if elements in dependency array are non-primitive(arrays, objects, functions) values, beware of it
    // agar dependency array dagi elementlar primitiv bo'lmagan (array, ob'ektlar, funktsiyalar) qiymatlar bo'lsa, undan ehtiyot bo'ling.

    // let a = "ismoil"
    // let a1 = "ismoil"

    // let obj = { ism: "Ismoil" }
    // let obj1 = { ism: "Ismoil" }

    // console.log(a===a1);
    // console.log(obj===obj1);
    
    return (
        <div>
            <button className='bg-green-500 rounded px-3 py-2 text-white mx-4' onClick={() => setCount(count + 1)}>Add</button>
            <button className='bg-green-500 rounded px-3 py-2 text-white mx-4' onClick={() => setCount1(count1 + 1)} >Add1</button>
            {/* or you can use setState with callback function which accepts as a parameter current state */}
            {/* yoki siz current state parametri sifatida qabul qiluvchi callback function bilan setState dan foydalanishingiz mumkin */}
            {/* <button onClick={() => setCount(prev => prev + 1)}>Add</button> */}
            {/* <button onClick={() => setCount1(prev => prev + 1)}>Add1</button> */}
        </div>
    )
}

export default UseEffectHook


