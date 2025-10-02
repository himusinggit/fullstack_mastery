import React from 'react'

function Container({children}) {
    return (
        <div className='flex px-5 justify-center items-center gap-3'>{children}</div>
    )
}

export default Container
