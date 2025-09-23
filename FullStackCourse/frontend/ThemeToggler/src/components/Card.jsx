import React, { useContext } from 'react'
import Image from './Image'
import Toggle from './Toggle'
import { MyContext } from '../context/MyContext';
function Card() {
    const {theme}=React.useContext(MyContext);
    return (
        <>
        <div className={`w-100% h-screen flex items-center justify-center ${(!theme)?"bg-gray-300":"bg-gray-800"}`}>
        <div className={`flex flex-col items-center justify-around gap-10 ${(!theme)?"bg-gray-200":"bg-gray-700"} px-5 py-10 w-2/9 rounded-lg`}>
        <Toggle />
        <Image />
        <p className={`text-center ${(theme)?"text-white":"text-black"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iusto, expedita quis aliquid rem voluptatibus! Impedit qui et aperiam sapiente in, recusandae voluptate ipsum accusantium inventore pariatur nostrum libero commodi odio laborum accusamus eaque adipisci officiis magnam facilis.
        </p>
        </div>
        </div>
        </>
    )
}

export default Card
