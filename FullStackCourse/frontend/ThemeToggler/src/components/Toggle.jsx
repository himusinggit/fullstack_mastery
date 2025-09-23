import React, { useContext, useEffect, useState } from 'react'
import {MyContext} from '../context/MyContext'
function Toggle() {
    const {theme,setTheme}=useContext(MyContext);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        console.log(toggle);
    }, [toggle])
    return (
        <>
        <div onClick={(e)=>{setToggle(prev=>!prev);setTheme(prev=>!prev)}}className={`absolute w-[50px] h-[25px] bg-gray-400 rounded-full flex items-center cursor-pointer border-2 border-gray-500 place-self-end -mt-100 `}>
            <div className={`h-[22px] aspect-square rounded-full ${(toggle)?"translate-x-[25px] bg-blue-500":"translate-x-0 bg-white"} transition duration-300 `}></div>
        </div>
        </>
    )
}

export default Toggle
