import React from 'react'

const ListRendering = () => {
    const names = ["Bruce", "Bob", "John", "Sara"]
    return (
        <div>
            {/* {
                names.map((item,i)=>{
                    return (
                        <div key={i} className='text-blue-500 py-3 border border-black m-2 px-3'>{item}</div>
                    )
                })
            } */}
            {/* yoki */}
            {
                names.map((item,i)=>(
                    <div key={i} className='text-blue-500 py-3 border border-black m-2 px-3'>{item}</div>
                ))
            }
        </div>
    )
}

export default ListRendering