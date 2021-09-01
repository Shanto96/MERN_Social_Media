import React, { useState } from "react";

import {
  MoreVert,
  ThumbUpAlt,
  Favorite,
  QuestionAnswer,
  Share,
} from "@material-ui/icons";
import "./post.css";
import LottieAnimation from "../../Lottie.js";
import like from "../../Animation/like.json";
import love from "../../Animation/love-emoji.json";
import haha from "../../Animation/haha-emoji.json";
import angry from "../../Animation/angry-emoji.json";
import CommentBox from '../CommentBox/CommentBox'

function Post() {
  const [showReaction, setShowReaction] = useState(false);
  const [showComment, setShowComment] = useState(false)

  const reaction = () => {};

  return (
    <div className="post-container">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-user-info">
            <img src="assets/IMG/user.jpeg" alt="" className="post-user-img" />
            <span className="user-name">John Doe</span>
            <span className="post-date">7 mins ago</span>
          </div>
          <div className="post-option">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            harum reiciendis laudantium, numquam repellat ut quidem temporibus
            consequuntur saepe ullam quod voluptatem laborum, qui dicta nihil
            impedit iure provident commodi.
          </span>
          <img src="assets/IMG/user.jpeg" alt="" className="post-img" />
        </div>
          <div className="post-bottom">
          {!showReaction && ( <div className="post-react-container">
            <div className="like-box">
              <ThumbUpAlt />
            </div>
            <div className="heart-box">
              <Favorite />
            </div>
            <span className="reaction-count">40</span>
           
          </div>)}
          {showReaction && (
              <div className="reaction-container">
                <LottieAnimation lotti={like} height={50} width={50} />
                <LottieAnimation lotti={love} height={50} width={50} />
                <LottieAnimation lotti={haha} height={50} width={50} />
                <LottieAnimation lotti={angry} height={50} width={50} />
              </div>
            )}
          <div className="post-comment-share-container">
            <div className="post-comment"> 9 Comment </div>
            <div className="post-share"> 10 Share </div>
          </div>
        </div>
        <hr />
        <div className="post-reaction">
          <div
            className="like"
            onMouseOver={() => {
              setShowReaction(!showReaction);
            }}
          >
            {" "}
            <ThumbUpAlt /> Like{" "}
          </div>
          <div className="comment" onClick={() =>setShowComment(!showComment)}>
            {" "}
            <QuestionAnswer /> Comment
          </div>
          <div className="share">
            {" "}
            <Share /> Share
          </div>
         
        </div>
       { showComment && (  <div className="comment-box">
            < CommentBox /> 
          </div>)}
      </div>
    </div>
  );
}

export default Post;
