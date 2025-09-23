import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <>
        <div className='flex justify-center gap-20 bg-gray-200 p-5 text-xl items-center text-gray-800 font-bold'>
            <NavLink className={({isActive})=>(isActive)?"text-orange-400":"text-gray-700"} to="/">Home</NavLink>
            <NavLink className={({isActive})=>(isActive)?"text-orange-400":"text-gray-700"} to="/about">About</NavLink>
            <NavLink className={({isActive})=>(isActive)?"text-orange-400":"text-gray-700"} to="/contact">Contact</NavLink>
            <NavLink className={({isActive})=>(isActive)?"text-orange-400":"text-gray-700"} to="/github">GitHub</NavLink>
        </div>
        </>
    )
}

export default Header
