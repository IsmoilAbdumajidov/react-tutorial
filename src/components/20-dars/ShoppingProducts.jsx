import React, { useContext, useEffect, useState } from 'react'
import Spinner from './spiner/Spinner'
import DetailPage from './DetailPage'
import ProductCard from './ProductCard'
import { BsCart } from "react-icons/bs"
import { ProductContext } from '../../App'
import StoreCart from './StoreCart'


const baseUrl = "https://dummyjson.com"

const ShoppingProducts = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [state, dispatch] = useContext(ProductContext)
    // console.log(state);


    const [data, setData] = useState([])
    const [defData, setDefData] = useState([])
    const [category, setCategory] = useState([])
    const [isFetched, setisFetched] = useState(false)
    const [isModal, setIsModal] = useState(false)
    const [modalData, setModalData] = useState()
    useEffect(() => {
        setisFetched(false)
        const fetchData = async () => {
            try {
                const res = await fetch(`${baseUrl}/products`)
                const answ = await res.json()
                setisFetched(true)
                setData(answ?.products)
                setDefData(answ?.products)
            } catch (error) {
                console.log(error);
            }
        }
        const fetchCategory = async () => {
            try {
                const res = await fetch(`${baseUrl}/products/categories`)
                const answ = await res.json()
                setisFetched(true)
                setCategory([{ name: "All", slug: "all" }, ...answ])
            } catch (error) {
                console.log(error);
            }
        }

        fetchCategory()
        fetchData()

    }, [])

    const searchHandler = async (value) => {
        try {
            const res = await fetch(`${baseUrl}/products/search?q=${value}`)
            const answ = await res.json()
            setData(answ?.products)
        } catch (error) {
            console.log(error);
        }
    }

    const filterHandler = async (value) => {
        setisFetched(false)
        if (value === "all") {
            setData(defData)
            setisFetched(true)
        }
        else {
            try {
                const res = await fetch(`${baseUrl}/products/category/${value}`)
                const answ = await res.json()
                setData(answ?.products)
                setisFetched(true)
            } catch (error) {
                console.log(error);
            }
        }
    }

    const detailHandler = (item) => {
        setModalData(item)
        setIsModal(true)
    }

    // sotib olish funksiyasi

    const buyHandler = (item) => {
        let cartToLS = JSON.parse(localStorage.getItem("cart")) || []
        let filtered = cartToLS.find(elem => elem.id === item.id)
        if (filtered) {
            cartToLS = cartToLS.filter(elem => elem.id !== item.id)
        }
        else {
            item.count = 1
            cartToLS = [...cartToLS, item]
        }

        dispatch({ type: "PRODUCT", payload: cartToLS })
        localStorage.setItem("cart", JSON.stringify(cartToLS))
        // console.log(cartToLS);

    }
    return (
        <div>
            {!isFetched && <Spinner />}
            {
                isModal && <DetailPage setIsModal={setIsModal} item={modalData} />
            }
            <div>
                <div>
                    <div className="text-3xl sticky top-0 left-0 right-0 bottom-0 z-10 bg-slate-900 font-medium text-center  text-cyan-500 h-20 mb-20 flex items-center justify-between shadow-md shadow-white/10  px-8 sm:px-10 lg:px-24">
                        <h1>Filtered and Fetched Elements</h1>
                        <button onClick={() => setIsOpen(true)} className='relative'>
                            <BsCart className='w-7 h-7' />
                            <span className='absolute top-0 right-0 px-1 text-[12px] text-black bg-white min-w-4  h-4 flex items-center justify-center rounded-full'>{state?.cart?.length}</span>
                        </button>
                    </div>
                    <div className='flex flex-col pb-10  px-8 sm:px-10 lg:px-24 relative'>
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            <select onChange={(e) => filterHandler(e.target.value)} className="border border-white bg-slate-900  rounded outline-none py-2 px-4 w-full md:w-52 dark:text-white dark:border-white/10 border-black/10">
                                {
                                    category?.length ? category?.map((item, i) => (
                                        <option key={i} value={item.slug}>{item.name}</option>
                                    )) : <option value="">Ma'lumotlar topilamdi...</option>
                                }
                            </select>
                            <input onChange={(e) => searchHandler(e.target.value)} className="border border-white bg-transparent  rounded outline-none w-full md:w-96 py-2 px-4 dark:border-white/10 border-black/10 dark:text-white  dark:placeholder:text-white" placeholder="Searching products..." type="text" />
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10'>
                            {
                                data?.length ?
                                    data.map((item, i) => (
                                        <ProductCard buyHandler={buyHandler} detailHandler={detailHandler} item={item} key={i} />
                                    )) : <p>Ma'lumotlar topilamdi...</p>
                            }
                        </div>
                    </div>
                </div>
                <StoreCart data={state?.cart} isOpen={isOpen} detailHandler={detailHandler} setIsOpen={setIsOpen} />
            </div>
        </div>
    )
}

export default ShoppingProducts