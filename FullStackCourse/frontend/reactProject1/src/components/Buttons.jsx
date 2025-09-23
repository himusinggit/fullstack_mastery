import React from 'react'

function Buttons({data,screen}) {
    return (
        <div onClick={() => screen.current.style.backgroundColor = data}style={{background:data}}className='p-5 rounded-xl w-[100px] flex items-center justify-center'><p className='select-none'>{data}</p></div>
    )
}

export default Buttons
