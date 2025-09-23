import React, { useEffect } from 'react'

function GitHub() {
    useEffect(() => {
        fetch('https://api.github.com/users/himusinggit/followers')
    },[]);
    return (
        <>
                <div className='h-screen w-screen bg-gray-800 flex justify-center items-center'>
            <h1 className='text-3xl text-white'>I am GitHub Followers: </h1>
        </div>
        </>
    )
}

export default GitHub
