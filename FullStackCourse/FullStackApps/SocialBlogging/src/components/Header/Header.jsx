import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {Logout,Logo,Container} from '../index'
function Header() {
    const authStatus=useSelector((state)=>state.auth.status);
    const navigate=useNavigate();
 const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/allposts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/addpost",
      active: authStatus,
  },
  ]
    return (
        <Container>
            <Logo />
            <nav>
                <ul className='flex gap-3 text-white'>
                {navItems.map(item=>(item.active && (
                    <li key={item.name}><button className='p-3 bg-gray-800' onClick={()=>{navigate(item.slug)}}>{item.name}</button></li>
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
