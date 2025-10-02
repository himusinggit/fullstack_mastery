import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/authSlice';
import authService from '../../appwrite/auth';
function Logout() {
    const dispatch = useDispatch();
    const lougoutUser = () => {
        authService.logout()
        .then(() => {dispatch(logout())})
    }
    return (
        <>
            <button className='px-4 py-2 bg-red-600 text-white inline-block' onClick={lougoutUser}>Logout</button>
        </>
    )
}

export default Logout
