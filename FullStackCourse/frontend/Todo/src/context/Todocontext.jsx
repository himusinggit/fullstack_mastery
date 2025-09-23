import React, { createContext, useState } from "react";
export const Todocontext=createContext();
const Todocontextprovider=({children})=>{
    const [todos, setTodos] = useState([]);
    return(
        <Todocontext.Provider value={{todos,setTodos}}>
            {children}
        </Todocontext.Provider>
    )
}
export default Todocontextprovider;