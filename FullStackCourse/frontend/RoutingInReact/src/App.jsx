import React from 'react'
import Header from './components/Header'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import GitHub from './pages/GitHub'
import User from './pages/User'
function App() {
  let router=createBrowserRouter([
    {
      path:'/',
      element:<><Header/><Home/><Footer/></>
    },
    {
      path:'/about',
      element:<><Header/><About/><Footer/></>
    },
    {
      path:'/contact',
      element:<><Header/><Contact/><Footer/></>
    },
    {
      path:'/github',
      element:<><Header/><GitHub/><Footer/></>
    },
    {
      path:'/user/:userID',
      element:<><Header/><User/><Footer/></>
    }
  ])
  return (
   <>
   <RouterProvider router={router}/>
   </> 
  )
}

export default App
