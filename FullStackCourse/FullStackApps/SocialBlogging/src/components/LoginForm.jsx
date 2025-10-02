import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import { login as authLogin } from '../features/authSlice';
import {Button,InputBox as Input} from './index';
import { useForm } from 'react-hook-form';
function LoginForm() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState("");
    const login=async (data)=>{
        setErrors("");
        console.log(data);
        try {
            const session=await authService.authLogin(data);
            if(session){
                const userData=await authService.getUser();
                if(userData){
                    dispatch(authLogin(userData));
                    navigate('/'); 
                }
            }
        } catch (error) {
            setErrors(error.message);
        }
    }
    return (
        <>
        <div className=''>
            {errors && (<p>{errors}</p>)}
            <form action="" onSubmit={handleSubmit(login)}>
                <Input label="Email:" type="email" placeholder="Email" {...register("email"),{required:true,pattern:{value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: "Invalid email format"}}} ></Input>
                <Input label="Password:" type="password" placeholder="Password" {...register("password"),{required:true}}></Input>
                <Button type="submit">Login</Button>
            </form>
        </div>
        </>
    )
}

export default LoginForm
