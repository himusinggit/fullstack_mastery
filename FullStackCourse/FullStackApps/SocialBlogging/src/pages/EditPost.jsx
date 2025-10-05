import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { PostForm } from '../components'
import { useParams,useNavigate } from 'react-router-dom';

function EditPost({$id}) {
    const [post, setPost] = useState(null);
    const {slug}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        if(slug){
            appwriteService.getRow(slug).then(res=>setPost(res)).catch(err=>console.log(err));
        }
    },[slug,navigate])
    return post?(
        <>
        <div>
            <PostForm post={post} />
        </div>
        </>
    ):null
}

export default EditPost
