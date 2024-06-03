import React from 'react'

const InlineCss = () => {
    const outsideCss = {
        fontSize: "75px",
        color: "yellow",
        background:"green"
    }
    return (
        <div>
            
            <h3 style={{background:"red",fontSize:"50px",border:"3px solid blue"}}>InlineCss</h3>

            {/* or you can a css object outside of element */}
            <h3 style={outsideCss}>Outside</h3>

        </div>
    )
}

export default InlineCss