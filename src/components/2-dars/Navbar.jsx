import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex main-container items-center justify-between h-[80px]'>
            <div className="text-red-500 text-2xl">Brand</div>
            <ul className="flex gap-10 items-center">
                <li className='hover:text-red-500 cursor-pointer transition-all duration-300'>Home</li>
                <li className='hover:text-red-500 cursor-pointer transition-all duration-300'>About</li>
                <li className='hover:text-red-500 cursor-pointer transition-all duration-300'>Support</li>
                <li className='hover:text-red-500 cursor-pointer transition-all duration-300'>Blog</li>
                <li className='hover:text-red-500 cursor-pointer transition-all duration-300'>Contact US</li>
            </ul>
        </nav>
    )
}

export default Navbar