import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth';
import { logout } from './features/authSlice';
import { login } from './features/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getUser()
    .then((user) => {
      if (user){
      dispatch(login(user));
      setLoading(false);
      }
      else{
        dispatch(logout());
      }
    })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (!loading)?(
    <div className=''>
      <Header />
      <Outlet />
      <Footer />
    </div>
  ):(
    <div className='w-full h-screen flex justify-center items-center text-xl'>Loading...</div>
  );
}

export default App
