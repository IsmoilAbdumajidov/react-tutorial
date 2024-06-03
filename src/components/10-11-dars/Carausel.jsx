import React, { useState } from 'react'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

const Carausel = () => {

    const [currentItem, setCurrentItem] = useState(0)

    // show next person
    const nextHandler = () => {
        setCurrentItem(currentItem + 1)
        if (currentItem > reviews.length - 2) {
            setCurrentItem(0)
        }
    }
    // show prev person
    const previusHandler = () => {
        setCurrentItem(currentItem - 1)
        if (currentItem < 1) {
            setCurrentItem(reviews.length - 1)
        }
    }
    // show random person
    const randomHandler = () => {
        setCurrentItem(Math.floor(Math.random() * reviews.length))
    }

    console.log(currentItem);
    return (
        <div className='flex bg-[#f1f5f8] text-center min-h-screen justify-center items-center'>
            <div className='flex flex-col '>
                <h1 className='text-3xl font-bold mb-5'>Our Reviews</h1>
                <div className='shadow-md mx-3  sm:w-[600px] bg-white rounded-md p-3 sm:p-5'>
                    <div className='w-[150px] h-[150px] mx-auto'>
                        <img className='aspect-square object-cover object-center  rounded-full' src={reviews[currentItem].img} />
                    </div>
                    <div className='flex flex-col gap-3 mt-4'>
                        <h1 className='font-semibold text-xl capitalize'>{reviews[currentItem].name}</h1>
                        <h3 className='uppercase text-blue-400 text-sm'>{reviews[currentItem].job}</h3>
                        <p className='text-slate-500'>
                            {reviews[currentItem].text}
                        </p>
                        <div className='flex gap-4 items-center justify-center'>
                            <button onClick={previusHandler}>
                                <GrPrevious className='w-6 h-6' />
                            </button>
                            <button onClick={nextHandler}>
                                <GrNext className='w-6 h-6' />
                            </button>
                        </div>
                        <button onClick={randomHandler} className='bg-blue-500 hover:shadow-lg mt-3 hover:shadow-blue-500 transition-all px-5 py-2 w-max rounded text-white mx-auto '>Random Carausel</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Carausel