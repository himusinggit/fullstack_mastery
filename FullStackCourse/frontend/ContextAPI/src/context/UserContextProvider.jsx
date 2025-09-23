import React, { useState } from 'react'
import userContext from './UserContext';

const UserContextProvider=({children})=>{
    const [data,setData]=useState(null);
    return(
        <userContext.Provider value={{data,setData}}>
        {children}
        </userContext.Provider>
    )
}
export default UserContextProvider
