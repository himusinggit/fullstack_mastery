import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
function Home() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        appwriteService.getRows().
        then(res=>{if(res){setPosts(res.rows)}}).
        catch(err=>console.log(err));
    },[])
    
    if(posts.length===0){
        return (
            <div className='w-full h-screen flex justify-center items-center text-xl'>No posts available</div>
        )
    }
    return (
        <div>
            {posts && posts.map(post=>(<div key={post.$id}><PostCard $id={post.$id} title={post.title} featuredImage={post.featuredImage} /></div>))}
        </div>
    )
}

export default Home
