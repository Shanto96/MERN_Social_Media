import React,{ useState,useEffect,useContext} from 'react'
import SharePost from '../SharePost/SharePost'
import Post from '../Post/Post'
import './feed.css'
import axios from 'axios'
import {AuthContext} from '../../Context/AuthContext'
function Feed({userProfile}) {
   const [posts,setPosts] = useState([]);
   const {user} =  useContext(AuthContext);
   const [reload,setReload]= useState(false);

   useEffect(()=>{
      
    
    const getPosts = async() =>{
       
        let res = userProfile ? await axios.get(`/posts/profile-timeline/all/${userProfile?._id}`) : await axios.get(`/posts/timeline/all/${user?._id}`) 
     
        setPosts(res.data.sort(function(a, b){return  new Date(b.createdAt)- new Date(a.createdAt)}));
       
    }
    getPosts()


   },[user,userProfile?._id],reload)


    return (
        <div className="feed"> 
           
            < SharePost setReload = {setReload} reload = {reload}/>

            { posts.map((post)=> <Post post={post} /> ) }
           
          
        </div>
    )
}

export default Feed
