import React from 'react'
import "./spinner.css"

const Spinner = () => {
    return (
        <div className='w-full h-screen top-0 left-0 right-0 bottom-0 fixed z-50 backdrop-blur-md flex justify-center items-center'>
            <div className="orbit-spinner">
                <div className="orbit"></div>
                <div className="orbit"></div>
                <div className="orbit"></div>
            </div>
        </div>
    )
}

export default Spinner