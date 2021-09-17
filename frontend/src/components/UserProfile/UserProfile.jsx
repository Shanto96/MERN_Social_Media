import React,{useState,useEffect} from "react";
import "./userProfile.css";
import {  useParams} from "react-router-dom";
import axios from 'axios'
function UserProfile() {
  
  const userName =   useParams();
  const[user,setUser] = useState();

  useEffect(() =>{
    console.log(userName)
    const getUser = async() =>{

      let res =  await axios.get(`/users?userName=${userName.userName}`)
      setUser(res.data);
      console.log(user);
      console.log(res.data);

  }
  getUser()




  },[])

  
  return (
    <div className="user-info-wrapper">
      <div className="cover-dp-container">
        <img src="/assets/IMG/cover.jpg" alt="Cover Pic" className="cover-img" />

        <img src={ user?.profilePicture || "/assets/IMG/user.jpeg"} alt="" className="dp" />
      </div>
      <div className="user-info">
          <h2>{user?.username}</h2>
          <span className="desc">{user?.desc}</span>
      </div>
    </div>
  );
}

export default UserProfile;
