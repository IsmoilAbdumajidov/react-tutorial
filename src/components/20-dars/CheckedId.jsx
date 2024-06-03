import React from 'react'
import { BsCart } from 'react-icons/bs'

const CheckedId = ({ id }) => {
    const cartToLS = JSON.parse(localStorage.getItem("cart"))
    const isChecked = cartToLS?.find(item => item.id === id)
    return (
        <>
            {
                isChecked && (
                    <div className='w-max absolute top-2 right-2  bg-green-500 text-white p-1 rounded-full'>
                        <BsCart className='w-5 h-5' />
                    </div>
                )
            }
        </>
    )
}

export default CheckedId