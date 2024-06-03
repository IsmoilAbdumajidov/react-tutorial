import React from 'react'

const NestedComponents = () => {
    return (
        <div>
            <h1>HEllo world</h1>
            <BoxComponent />
        </div>
    )
}

export default NestedComponents




const BoxComponent = () => {
    return (
        <div>this is nested-components</div>
    )
}

