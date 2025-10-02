import React from 'react'
import Logout from './Logout'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {Logout,Logo,Container} from '../index'
function Header() {
    const authStatus=useSelector((state)=>state.auth.status);
    const naveigate=useNavigate();
    const navItems=[
        {name:"Home",slug:"/",active:authStatus},
        {name:"login",slug:"/",active:!authStatus},
        {name:"signup",slug:"/",active:!authStatus},
        {name:"addPost",slug:"/",active:authStatus},
        {name:"allPosts",slug:"/",active:authStatus},

    ];
    return (
        <Container>
            <Logo />
            <nav>
                <ul>
                {navItems.map(item=>(item.active && (
                    <li key={item.name}><button className='p-3 bg-gray-800' onClick={()=>{naveigate(item.slug)}}>{item.name}</button></li>
                )))}
                {authStatus && (
                    <Logout />
                )}
                </ul>
                
            </nav>
        </Container>
    )
}

export default Header
