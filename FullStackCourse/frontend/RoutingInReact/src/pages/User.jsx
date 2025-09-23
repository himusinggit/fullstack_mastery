import React from 'react'
import { useParams } from 'react-router-dom';
function User() {
    const {userID}=useParams();
    return (
                        <div className='h-screen w-screen bg-gray-800 flex justify-center items-center'>
            <h1 className='text-3xl text-white'>I am User:{userID} </h1>
        </div>
    )
}

export default User
