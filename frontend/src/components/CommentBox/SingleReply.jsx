import React from 'react'
import {ThumbUp,Reply,Update} from '@material-ui/icons'
import './commentBox.css'
import ReplyBox from './ReplyBox'
function SingleReply() {
    return (<div className=" reply-single">
        <div className="comment-single" >
            <img src="assets/IMG/user.jpeg" alt="" className="comment-user-img" />
            <span className="comment-content">Lorem ipsum dolor sit amet.</span>
           

        </div>
        
        <div className="comment-options-wraper">
                <div className="comment-option-item item-like"> <ThumbUp/> Like</div>
                <div className="comment-option-item item-reply">Reply<Reply/></div>
                <div className="comment-option-item item-time"><Update/>20 Mins Ago</div>
         </div>
       
        </div>
       
    )
}

export default SingleReply