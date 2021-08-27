import React from "react";
import {
  PermMedia,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@material-ui/icons";

import "./sharePost.css";
function SharePost() {
  return (
    <div className="share-post-container">
      <div className="user-input-container">
        <img src="/assets/IMG/user.jpeg" alt="" className="create-post-img" />
        <input
          type="text"
          placeholder="Whats in your mind Kibria?"
          className="create-input"
        />
      </div>
      <hr className="create-post-hr" />
      <div className="option-container"> 
      <div className="option-item-container">
        <div className="create-post-option-item">
          <PermMedia htmlColor="red" /> Image or Video
        </div>
        <div className="create-post-option-item">
          <Label htmlColor="blue" /> Tag Friends
        </div>
        <div className="create-post-option-item">
          <LocationOn htmlColor="green"  /> Location
        </div>
        <div className="create-post-option-item">
          <EmojiEmotions htmlColor="goldenRod"/> Feelings
        </div>
      </div>
      <div className="share-button-container">
        <button className="share-button">Share</button>
      </div>
      </div>
    </div>
  );
}

export default SharePost;
