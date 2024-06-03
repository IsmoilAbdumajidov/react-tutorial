import React from 'react'
import { BsCart } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";
import CheckedId from './CheckedId';

const ProductCard = ({ item, detailHandler, buyHandler }) => {
    return (
        <div className='flex border dark:border-white/10 border-black/10  flex-col gap-4 transition-all  rounded-md overflow-hidden bg-white dark:bg-slate-800'>
            <div className='aspect-[3/2] relative   w-full overflow-hidden cursor-pointer group'>
                <img className='w-full h-full object-cover object-center' src={item.thumbnail} alt="" />
                <CheckedId id={item.id} />
            </div>
            <div className="flex flex-col flex-1 p-4 gap-2">
                <h1 className='text-lg font-bold text-slate-900 dark:text-white'>{item.title}</h1>
                <p className='font-semibold text-cyan-500'>$ {item.price.brm()}</p>
                <p className='font-semibold text-slate-900 dark:text-white'><span className="font-semibold">Stock: </span>{item.stock}</p>
                <p className='text-base text-slate-500 dark:text-slate-400'>{item.description}</p>
                <div className='flex gap-2 mt-auto'>
                    <button onClick={() => buyHandler(item)} className='bg-green-500 flex justify-center items-center gap-2 flex-1 text-white py-2 px-3 text-center  rounded detail'>
                        <BsCart className='w-5 h-5' />
                        <span>Sotib olish</span>
                    </button>
                    <button onClick={() => detailHandler(item)} className='bg-cyan-500 text-white py-2 px-3 text-center  rounded detail'><SlArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard