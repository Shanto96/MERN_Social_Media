import React from 'react'
import './commentBox.css'
import  SingleComment from './singleComment'
import CommentInput from './CommentInput'
function CommentBox() {
    return (
        <div className="Comment-wraper">
         
           <SingleComment />
        </div>
    )
}

export default CommentBox
