import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'
function PostCard({$id,title,featuredImage}) {
    console.log(appwriteService.getFilePreview(featuredImage));
    return (
        <>
        
<Link to={`post/${$id}`}>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    
        <img className="rounded-t-lg" src={appwriteService.getFilePreview(featuredImage)} alt="" />
    
    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    </div>
</div>
</Link>
        </>
    )
}

export default PostCard
