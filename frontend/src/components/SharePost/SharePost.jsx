import React, { useContext, useRef, useState } from "react";
import {
  PermMedia,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@material-ui/icons";

import "./sharePost.css";
import { AuthContext } from "../../Context/AuthContext";
import axios from 'axios'

function SharePost() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState();
  const submitHandler = async (e) =>{
    e.preventDefault();
    const newPost = {
      userId:user?._id,
      desc:desc.current.value
    }

    if(file){
      const data =  new FormData();
      const fileName = Date.now()+file.name;
     
      data.append("file",file);
      data.append("name",fileName);
      ;
      try {
        await axios.post("/upload",data)
        .then(res =>newPost.image = res.data);
        
      } catch (error) {
        console.log(error)
      }
    }
    try {
      await axios.post("/posts",newPost);
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div className="share-post-container">
    <form onSubmit={(e)=>submitHandler(e)} >
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
            <button className="share-button" type="submit">Share</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SharePost;
