import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'
function PostCard({$id,title,featuredImage}) {
    return (
        <>
        
<Link to={`post/${$id}`}>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    
        <img class="rounded-t-lg" src={appwriteService.getFilePreview(featuredImage)} alt="" />
    
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    </div>
</div>
</Link>
        </>
    )
}

export default PostCard
