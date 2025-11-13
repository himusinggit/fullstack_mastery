import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { PostForm } from '../components'
import { useParams,useNavigate } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null);
    const {slug}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        
        if(slug){
            console.log("yes slug is here");
            appwriteService.getRow(slug).then(res=>setPost(res)).catch(err=>console.log(err));
        }
    },[slug,navigate])
    return post?(
        <>
        <div>
            
            <PostForm post={post} />
        </div>
        </>
    ):(<h1>Loading...</h1>);

}

export default EditPost
