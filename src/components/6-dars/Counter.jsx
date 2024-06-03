import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='min-h-screen flex justify-center items-center flex-col'>
            <div className={`${count > 0 ? "text-green-500" : count < 0 ? "text-red-500" : "text-blue-500"}  text-8xl mb-10`}>{count}</div>
            <div className='flex gap-5 text-white'>
                <button onClick={() => setCount(count - 1)} className='px-5 py-2 rounded bg-red-500'>Decrease</button>
                <button onClick={() => setCount(0)} className='px-5 py-2 rounded bg-blue-500'>Reset</button>
                <button onClick={() => setCount(count + 1)} className='px-5 py-2 rounded bg-green-500'>Increase</button>
            </div>
        </div>
    )
}

export default Counter