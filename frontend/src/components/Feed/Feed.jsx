import React from 'react'
import SharePost from '../SharePost/SharePost'
import Post from '../Post/Post'
import './feed.css'
function Feed() {
    return (
        <div className="feed"> 
           
            < SharePost/>
            <Post/>
           
        </div>
    )
}

export default Feed
