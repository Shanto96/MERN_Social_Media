import React,{ useState,useEffect} from 'react'
import SharePost from '../SharePost/SharePost'
import Post from '../Post/Post'
import './feed.css'
import axios from 'axios'
function Feed({user}) {
   const [posts,setPosts] = useState([]);

   useEffect(()=>{
       console.log("user from feed ="+ user);
    
    const getPosts = async() =>{

        let res = user ? await axios.get(`/posts/profile-timeline/all/${user?._id}`) :  await axios.get("/posts/timeline/all/612530137bfb314b9c72ccc2")
        setPosts(res.data);
        console.log(posts);

    }
    getPosts()


   },[user])


    return (
        <div className="feed"> 
           
            < SharePost/>

            { posts.map((post)=> <Post post={post} /> ) }
           
          
        </div>
    )
}

export default Feed
