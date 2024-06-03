import React from 'react'

const ClickHandler = () => {

    // const clickHandler = () => {
    //     console.log("Button clicked")
    // }


    // it also receives event obj as plain js
    // const clickHandler = (e) => {
    //     console.log(e.target)
    // }


    // adding additional arguments
    const clickHandler = (e, num) => {
        console.log(e.target)
        console.log(num)
    }


    return (
        <div>

            {/* in react click event is specified as "onClick = {function()}" */}
            {/* <button className='px-5 py-2 bg-green-500 rounded' onClick={clickHandler}>Click</button> */}


            {/* adding additional arguments */}
            {/* <button className='px-5 py-2 bg-green-500 rounded' onClick={(e) => clickHandler(e, 5)}>Click</button> */}


        </div>
    )
}

export default ClickHandler