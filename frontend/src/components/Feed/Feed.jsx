import React,{ useState,useEffect,useContext} from 'react'
import SharePost from '../SharePost/SharePost'
import Post from '../Post/Post'
import './feed.css'
import axios from 'axios'
import {AuthContext} from '../../Context/AuthContext'
function Feed({userProfile}) {
   const [posts,setPosts] = useState([]);
   const {user} =  useContext(AuthContext)

   useEffect(()=>{
      
    
    const getPosts = async() =>{
        console.log("user Profile page of "+userProfile?.username)
        let res = userProfile ? await axios.get(`/posts/profile-timeline/all/${userProfile?._id}`) : await axios.get(`/posts/timeline/all/${user?._id}`) 
        setPosts(res.data);
       
    }
    getPosts()


   },[user,userProfile?._id])


    return (
        <div className="feed"> 
           
            < SharePost/>

            { posts.map((post)=> <Post post={post} /> ) }
           
          
        </div>
    )
}

export default Feed
