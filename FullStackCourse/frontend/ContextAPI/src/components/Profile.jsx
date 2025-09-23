import React, { useContext } from 'react'
import userContext from '../context/UserContext'
function Profile() {
    let {data}=useContext(userContext);
    return (
        <>
        <h1>
            {(!data)?"Not Logged In":"hello"+data.nam};
        </h1>
        </>
    )
}

export default Profile
