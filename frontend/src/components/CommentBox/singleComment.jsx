import React, { useState } from "react";
import { ThumbUp, Reply, Update } from "@material-ui/icons";
import "./commentBox.css";
import ReplyBox from "./ReplyBox";

function SingleComment() {
  const [showReply, setShowReply] = useState(false);
  return (
    <div className="comment-single-container">
      <div className="comment-single">
        <img src="assets/IMG/user.jpeg" alt="" className="comment-user-img" />
        <span className="comment-content">Lorem ipsum dolor sit amet.</span>
      </div>

      <div className="comment-options-wraper">
        <div className="comment-option-item item-like">
          {" "}
          <ThumbUp /> Like
        </div>
        <div
          className="comment-option-item item-reply"
          onClick={() => {
            setShowReply(!showReply);
          }}
        >
          Reply
          <Reply />
        </div>
        <div className="comment-option-item item-time">
          <Update />
          20 Mins Ago
        </div>
      </div>

      {showReply && (
        <div className="reply-container">
          <ReplyBox />
          
        </div>
      )}
    </div>
  );
}

export default SingleComment;
