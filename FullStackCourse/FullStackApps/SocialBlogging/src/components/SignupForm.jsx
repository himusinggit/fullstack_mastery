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
    const dispatch=useDispatch();
    const [errors, setErrors] = useState("");
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
            <form action="" onSubmit={handleSubmit(signup)}>
            <Input label="name" placeholder="Enter your name" {...register("name",{required:true})}></Input>
            <Input label="Email" placeholder="Enter your email" type='email' {...register("email",{required:true,pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/})}></Input>
            <Input label="password" placeholder="Enter your password" type='password' {...register("password",{required:true})}></Input>
            <Button type="submit" onClick={signup}>Signup</Button>
            </form>
        </div>
    )
}

export default SignupForm
