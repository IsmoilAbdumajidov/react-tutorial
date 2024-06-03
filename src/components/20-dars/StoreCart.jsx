import React, { useContext } from 'react'
import { BsCart, BsPlusLg } from 'react-icons/bs';
import { SlArrowRight } from 'react-icons/sl';
import { RxMinus } from "react-icons/rx";
import { IoTrashOutline } from "react-icons/io5";
import { ProductContext } from '../../App';

const StoreCart = ({ setIsOpen, isOpen, data, detailHandler }) => {
    const [state, dispatch] = useContext(ProductContext)

    let allPrice = 0
    let allCount = 0
    data?.map(item => {
        allPrice += (item.price * item.count)
        allCount += item.count
    })

    const deleteHandler = (item) => {
        let cartToLS = JSON.parse(localStorage.getItem("cart")) || []
        cartToLS = cartToLS.filter(elem => elem.id !== item.id)

        dispatch({ type: "PRODUCT", payload: cartToLS })
        localStorage.setItem("cart", JSON.stringify(cartToLS))
    }
    const decIncHandler = (item, type) => {
        let cartToLS = JSON.parse(localStorage.getItem("cart")) || []
        cartToLS.find(elem => {
            if (elem.id === item.id) {
                if (type === "inc") {
                    elem.count += 1
                    if (elem.count > elem.stock) {
                        elem.count = elem.stock
                        alert("Maxulot soni chegaralangan")
                    }
                }
                else if (type === "dec") {
                    elem.count -= 1
                    if (elem.count < 1) {
                        elem.count = 1
                    }
                }
            }
        })

        dispatch({ type: "PRODUCT", payload: cartToLS })
        localStorage.setItem("cart", JSON.stringify(cartToLS))
    }
    return (
        <div className={`${isOpen ? "w-full sm:w-[500px]" : "w-0"} overflow-hidden transition-all duration-500 z-20  fixed h-screen backdrop-blur-lg top-0 right-0  shadow-md shadow-white/50`}>
            <div className='p-5'>
                <button onClick={() => setIsOpen(false)} className='bg-red-500 px-3 py-1 rounded'>Ortga</button>
            </div>
            <div className='flex flex-col gap-3 p-3 max-h-[75vh] min-h-[75vh] overflow-y-scroll'>
                {data?.length ? data.map((item, i) => (
                    <div key={i} className='flex flex-col sm:flex-row p-2 border border-white/20 rounded-md bg-slate-800 gap-2'>
                        <div className='w-28 h-15 mx-auto'>
                            <img className='w-full h-full' src={item.thumbnail} alt="" />
                        </div>
                        <div className='flex flex-col gap-1 flex-1 px-3'>
                            <h1 className='font-medium text-lg'>{item.title}</h1>
                            <p className=''><span>price: <span className='text-cyan-500'>$ {item.price.brm()}</span></span></p>
                            <p className=''><span>stock: <span >{item.stock}</span></span></p>
                            <div className='flex flex-wrap justify-between'>
                                <div className='border border-white/20 flex items-center w-max rounded px-2 gap-4 text-center text-sm'>
                                    <button onClick={() => decIncHandler(item, "dec")} className='text-red-500'>
                                        <RxMinus className='w-4 h-5' />
                                    </button>
                                    <button className='text-base'>{item.count}</button>
                                    <button onClick={() => decIncHandler(item, "inc")} className='text-green-500'>
                                        <BsPlusLg className='w-4 h-5' />
                                    </button>
                                </div>
                                <div className='flex gap-2 mt-auto justify-end'>
                                    <button onClick={() => deleteHandler(item)} className='bg-red-500 text-white py-1 px-2 text-center  rounded detail'>
                                        <IoTrashOutline />
                                    </button>
                                    <button onClick={() => detailHandler(item)} className='bg-cyan-500 text-white py-1 px-2 text-center  rounded detail'><SlArrowRight className='w-3 h-3' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )) :
                    <div>Ma'lumot topilmadi</div>}
            </div>
            <div className='flex flex-col gap-2 p-3 mt-5'>
                <div className='flex justify-between'>
                    <h1>Umumiy:</h1>
                    <h1 className='text-xl text-green-500 font-medium'><span>$ {(Math.floor(allPrice)).brm()}</span></h1>
                </div>
                <div className='flex justify-between'>
                    <h1>Maxsulot:</h1>
                    <h1 className='text-xl text-cyan-500 font-medium'>{allCount} ta</h1>
                </div>
            </div>
        </div>
    )
}

export default StoreCart