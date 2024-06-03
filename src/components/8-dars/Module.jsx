import React from 'react'

const Module = ({ openModule, setOpenModule, children }) => {
    return (
        // <div className={`fixed ${openModule ? "flex" : "hidden"} top-0 left-0 bottom-0 right-0 w-full h-screen bg-black/50 z-10 backdrop-blur-sm  justify-center items-center`}>
        <div className={`fixed text-black flex top-0 left-0 bottom-0 right-0 w-full h-screen bg-black/50 z-10 backdrop-blur-sm  justify-center items-center`}>
            <div className='flex flex-col bg-white rounded-md w-[90%] sm:w-[70%] lg:w-[50%] py-3'>
                <div className='border-b p-3'>
                    Module header
                </div>
                <div className='p-3'>
                    {children}
                </div>
                <div className='border-t flex justify-end p-3'>
                    <button onClick={() => setOpenModule(false)} className='bg-red-500 py-2 px-4 rounded text-white'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Module