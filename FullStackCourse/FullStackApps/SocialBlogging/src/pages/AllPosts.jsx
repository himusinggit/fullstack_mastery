import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { PostCard } from '../components'
const AllPosts=()=>{
    const [allPosts, setAllPosts] = useState([]);
    useEffect(()=>{
        appwriteService.getRows().then(res=>setAllPosts(res.rows)).catch(err=>console.log(err));    
    },[])
    
    return (
        <div>
            {allPosts && allPosts.map(post=>(<div key={post.$id}><PostCard $id={post.$id} title={post.title} featuredImage={post.featuredImage} /></div>))}
        </div>
    )
}

export default AllPosts
