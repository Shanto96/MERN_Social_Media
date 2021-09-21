import React, { useState,useEffect } from "react";

import {
  MoreVert,
  ThumbUpAlt,
  Favorite,
  QuestionAnswer,
  Share,
} from "@material-ui/icons";
import axios from 'axios'
import "./post.css";
import LottieAnimation from "../../Lottie.js";
import like from "../../Animation/like.json";
import love from "../../Animation/love-emoji.json";
import haha from "../../Animation/haha-emoji.json";
import angry from "../../Animation/angry-emoji.json";
import sad from "../../Animation/sad-emoji.json";
import {format} from 'timeago.js'
import {Link} from "react-router-dom"

import CommentBox from '../CommentBox/CommentBox'
import CommentInput from '../CommentBox/CommentInput'

function Post({post}) {
  const [showReaction, setShowReaction] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [user,setUser]= useState(null);
  const [liked,setLiked]= useState(false);
  

  const reactionHandler = () => {

  };
  
  useEffect(()=>{
 
    const getPosts = async() =>{

      let res =  await axios.get(`/users?userId=${post?.userId}`);
      setUser(res.data);
      console.log(res.data);

  }
  getPosts()
  },[post?.userId])

  return (
    <div className="post-container">
      <div className="post-wrapper">
        <div className="post-top">
        <Link to={`/profile/${user?.username}`} >
          <div className="post-user-info">
            <img src={user?.profilePicture||"/assets/IMG/user.jpeg"} alt="" className="post-user-img" />
            <span className="user-name">{user?.username}</span>
            <span className="post-date">{format(post?.createdAt)}</span>
          </div>
          </Link>
          <div className="post-option">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-content">
          {post?.desc}
          </span>
          <img src="/assets/IMG/user.jpeg" alt="" className="post-img" />
        </div>
          <div className="post-bottom">
          {!showReaction && ( <div className="post-react-container">
            <div className="like-box" onClick={() =>setLiked(!liked)}>
              <ThumbUpAlt />
            </div>
            <div className="heart-box">
              <Favorite />
            </div>
            <span className="reaction-count">{liked?(post?.likes?.length||0)+1 :post?.likes?.length||0}</span>
           
          </div>)}
          {showReaction && (
              <div className="reaction-container" onClick={() =>{setLiked(!liked); setShowReaction(!showReaction)}}>
                <LottieAnimation lotti={like} height={50} width={50} />
                <LottieAnimation lotti={love} height={50} width={50} />
                <LottieAnimation lotti={haha} height={55} width={55} />
                <LottieAnimation lotti={sad} height={50} width={50} />
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
            onClick={() =>{setLiked(!liked); setShowReaction(!showReaction)}}
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
      < CommentInput />
            < CommentBox /> 
            < CommentBox /> 
            < CommentBox /> 
          </div>)}
      </div>
    </div>
  );
}

export default Post;
