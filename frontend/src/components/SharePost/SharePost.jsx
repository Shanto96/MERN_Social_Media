import React, { useContext, useRef, useState } from "react";
import {
  PermMedia,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@material-ui/icons";

import "./sharePost.css";
import { AuthContext } from "../../Context/AuthContext";

function SharePost() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState();
  return (
    <div className="share-post-container">
    <form >
      <div className="user-input-container">
        <img src="/assets/IMG/user.jpeg" alt="" className="create-post-img" />
        <input
          type="text"
          placeholder={"Whats in your mind " + user?.username + " ?"}
          className="create-input"
          ref={desc}
        />
      </div>
      <hr className="create-post-hr" />
     
        <div className="option-container">
          <div className="option-item-container">
            <label className="create-post-option-item" htmlFor="file">
              <PermMedia htmlColor="red" /> Image or Video
            </label>
            <input type="file" id="file" accepts=".png,.jpeg,.jpg" hidden onChange={(e)=>{setFile(e.target.files[0])}} />
            <div className="create-post-option-item">
              <Label htmlColor="blue" /> Tag Friends
            </div>
            <div className="create-post-option-item">
              <LocationOn htmlColor="green" /> Location
            </div>
            <div className="create-post-option-item">
              <EmojiEmotions htmlColor="goldenRod" /> Feelings
            </div>
          </div>
          <div className="share-button-container">
            <button className="share-button">Share</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SharePost;
