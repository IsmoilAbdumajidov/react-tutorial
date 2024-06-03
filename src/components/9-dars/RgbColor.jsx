import React, { useState } from 'react'

const RgbColor = () => {
    let colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']
    const [color, setColor] = useState("yellow")

    const clickHandler = () => {
        let randomColor = '#'
        for (let i = 0; i < 6; i++) {
            randomColor += colors[getRandomNumber()]
        }

        setColor(randomColor)
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length)
    }
    return (
        <div className='flex flex-col h-screen'>
            <div className='text-4xl text-sky-400 font-bold tracking-wider shadow-md shadow-gray-300 h-20 flex items-center justify-center'>
                Color Changer
            </div>
            <div style={{ background: color }} className='flex-1  flex flex-col items-center justify-center'>
                <div className='text-4xl bg-slate-800 tracking-widest font-bold text-white p-3 rounded flex'>
                    <h1>Background Color:</h1>
                    <h1 style={{ color: color }} className='ps-2 font-bold capitalize'>{color}</h1>
                </div>
                <button onClick={clickHandler} className='py-2 text-slate-800 transition-all duration-300 px-5 hover:bg-slate-800 hover:text-white border border-slate-800 rounded mt-7 uppercase text-sm font-semibold tracking-widest'>Click Me</button>
            </div>
        </div>
    )
}

export default RgbColor
// import React, { useState } from 'react'

// const RgbColor = () => {
//     const [color, setColor] = useState("yellow")

//     const clickHandler = () => {
//         let colorRandom = `rgb(${firstRandom()},${secondRandom()},${thirdRandom()})`
//         setColor(colorRandom)
//     }

//     function firstRandom() {
//         return Math.floor(Math.random() * 256)
//     }
//     function secondRandom() {
//         return Math.floor(Math.random() * 256)
//     }
//     function thirdRandom() {
//         return Math.floor(Math.random() * 256)
//     }
//     return (
//         <div className='flex flex-col h-screen'>
//             <div className='text-4xl text-sky-400 font-bold tracking-wider shadow-md shadow-gray-300 h-20 flex items-center justify-center'>
//                 Color Changer
//             </div>
//             <div style={{ background: color }} className='flex-1  flex flex-col items-center justify-center'>
//                 <div className='text-4xl bg-slate-800 tracking-widest font-bold text-white p-3 rounded flex'>
//                     <h1>Background Color:</h1>
//                     <h1 style={{ color: color }} className='ps-2 font-bold capitalize'>{color}</h1>
//                 </div>
//                 <button onClick={clickHandler} className='py-2 text-slate-800 transition-all duration-300 px-5 hover:bg-slate-800 hover:text-white border border-slate-800 rounded mt-7 uppercase text-sm font-semibold tracking-widest'>Click Me</button>
//             </div>
//         </div>
//     )
// }

// export default RgbColor
// import React, { useState } from 'react'

// const RgbColor = () => {
//     let colors = ['red', 'green', 'blue', 'aqua', 'yellow', 'grey', 'orange', 'pink', 'purple', 'white', 'black', 'chocolate', 'chartreuse', 'brown', 'tomato', 'indigo']
//     const [color, setColor] = useState(colors[6])

//     const clickHandler = () => {
//         const randomNumber = getRandomNumber()
//         setColor(colors[randomNumber])
//     }

//     function getRandomNumber() {
//         return Math.floor(Math.random() * colors.length)
//     }
//     return (
//         <div className='flex flex-col h-screen'>
//             <div className='text-4xl text-sky-400 font-bold tracking-wider shadow-md shadow-gray-300 h-20 flex items-center justify-center'>
//                 Color Changer
//             </div>
//             <div style={{ background: color }} className='flex-1  flex flex-col items-center justify-center'>
//                 <div className='text-4xl bg-slate-800 tracking-widest font-bold text-white p-3 rounded flex'>
//                     <h1>Background Color:</h1>
//                     <h1 style={{ color: color }} className='ps-2 font-bold capitalize'>{color}</h1>
//                 </div>
//                 <button onClick={clickHandler} className='py-2 text-slate-800 transition-all duration-300 px-5 hover:bg-slate-800 hover:text-white border border-slate-800 rounded mt-7 uppercase text-sm font-semibold tracking-widest'>Click Me</button>
//             </div>
//         </div>
//     )
// }

// export default RgbColor