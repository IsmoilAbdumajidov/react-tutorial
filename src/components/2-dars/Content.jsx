import React from 'react'
import img from "./img/Realtor-rafiki.png"
const Content = () => {
    return (
        <div className='grid main-container grid-cols-1 lg:grid-cols-2 items-center'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-7xl font-bold'>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laboriosam magni autem provident, iure porro nulla sint voluptate debitis, reiciendis animi, quo dignissimos. Odio provident assumenda facilis, molestias sequi quam?</p>
                <button className='bg-green-500 w-max px-4  py-2 rounded '>Click me</button>
            </div>
            <img className='' src={img} alt="" />
        </div>
    )
}

export default Content