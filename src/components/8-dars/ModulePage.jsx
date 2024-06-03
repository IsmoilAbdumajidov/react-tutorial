import React, { useState } from 'react'
import Module from './Module'

const ModulePage = () => {
    const [openModule, setOpenModule] = useState(false)



    // const btnHandler = () => {
    //     setOpenModule(false)
    // }
    // console.log(openModule);
    return (
        <div className='min-h-screen p-5'>
            <h1>Module</h1>
            <button onClick={()=>setOpenModule(true)} className='bg-green-500 my-3 py-2 px-3 rounded '>Show Module</button>
            {/* <button onClick={btnHandler} className='bg-green-500 my-3 py-2 px-3 rounded '>Show Module</button> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus neque totam doloribus commodi aliquid natus eligendi accusamus quae sequi! Deserunt voluptas commodi vel temporibus maxime ullam odit, vitae, inventore odio sed, repellat fugiat at nulla hic porro aperiam. Nulla corrupti vero at amet vitae dolorum quae quam dignissimos laudantium?</p>
            {/* {openModule ? <Module openModule={openModule} setOpenModule={setOpenModule}/> : ""} */}
            {openModule && <Module openModule={openModule} setOpenModule={setOpenModule}/>}
            {/* {openModule && <Module openModule={openModule} setOpenModule={setOpenModule}/>} */}
        </div>
    )
}

export default ModulePage