import React from 'react'
import moduleName from './commentBox.css'

function CommentInput() {
    return (
        <div className="comment-input-container">
            <img src="assets/IMG/user.jpeg" alt="" className="comment-user-img" />
            <input type="text" placeholder="Write A Comment" className="comment-input" />
        </div>
    )
}

export default CommentInput
