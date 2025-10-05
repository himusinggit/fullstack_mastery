import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
function Protected({children,authentication=true}) {
    const navigate=useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus=useSelector(state=>state.auth.status);
    useEffect(()=>{
        //TODO: make it easier
        // if(authStatus){
        //     navigate('/');
        // }
        // else if(!authStatus){
        //     navigate('/login');
        // }
        if(authentication && authStatus !==authentication){
            navigate("/login");
        }
        else if(!authentication && authStatus !==authentication){
            navigate("/");
        }
        setLoader(false);
    },[authStatus,authentication,navigate]);
    return(
        loader?<h1>Loading...</h1>:<>{children}</>
    )
}

export default Protected
