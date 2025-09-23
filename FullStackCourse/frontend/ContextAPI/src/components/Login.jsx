import React, { useContext, useState } from 'react'
import UserContextProvider from '../context/UserContextProvider';
import userContext from '../context/UserContext';

function Login() {
    const [nam,setNam]=useState("");
    const [pass, setPass] = useState("");
    let {setData}=useContext(userContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setData({nam,pass});
    }
    return (
        <>
        <form action="" >
            <input type="text" placeholder='Enter user name' value={nam} onChange={(e)=>setNam(e.target.value)} />
            <input type="password" placeholder='Enter Password' value={pass} onChange={(e)=>setPass(e.target.value)} />
            <input type="button" value="Click Me" onClick={handleSubmit}/>

        </form>
        </>
    )
}

export default Login
