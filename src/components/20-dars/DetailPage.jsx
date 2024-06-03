import React from 'react'

const DetailPage = ({ item, setIsModal }) => {
    return (
        <div className='w-full flex items-center justify-center backdrop-blur-md h-screen fixed top-0 left-0 z-40 p-3 md:p-10'>
            <div className='flex flex-col md:flex-row w-[1000px] border dark:border-white/10 border-black/10  gap-4 transition-all  rounded-md overflow-hidden bg-white dark:bg-slate-800'>
                <div className='md:max-w-[350px] max-h-[300px] aspect-square overflow-hidden cursor-pointer group'>
                    <img className='w-full h-full object-cover object-center' src={item.thumbnail} alt="" />
                </div>
                <div className="flex flex-1 flex-col p-4 gap-2">
                    <h1 className='text-lg font-bold text-slate-900 dark:text-white'>{item.title}</h1>
                    <p className='font-semibold text-cyan-500'>$ {item.price.brm()}</p>
                    <p className='font-semibold text-slate-900 dark:text-white'><span className="font-semibold">Stock: </span>{item.stock}</p>
                    <p className='text-base text-slate-500 dark:text-slate-400'>{item.description}</p>
                    <button onClick={() => setIsModal(false)} className='bg-red-500 ms-auto w-max text-white py-2 px-3 text-center mt-auto rounded detail'>Back</button>
                </div>
            </div>
        </div>
    )
}

export default DetailPage