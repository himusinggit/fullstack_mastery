import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import { login as authLogin } from '../features/authSlice';
import {Button,InputBox as Input} from './index';
import { useForm } from 'react-hook-form';
function SignupForm() {
    const {register,handleSubmit}=useForm();
    const navigate=useNavigate();
    const [setErrors, setSetErrors] = useState("");
    const signup=async (data)=>{
        setErrors("");
        console.log(data);
        try {
            const session=await authService.createAccount(data);
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
        <div>
            <form action="" onSubmit={handleSubmit(signup)}></form>
            <Input label="name" placeholder="Enter your name" {...register("name"),{required:true}}></Input>
            <Input label="Email" placeholder="Enter your email" type='email' {...register("email"),{required:true,pattern:{value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: "Invalid email format"}}}></Input>
            <Input label="password" placeholder="Enter your password" type='password' {...register("password"),{required:true}}></Input>
        </div>
    )
}

export default SignupForm
