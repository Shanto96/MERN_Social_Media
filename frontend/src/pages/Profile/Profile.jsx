import React,{ useState,useEffect} from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Feed from "../../components/Feed/Feed";
import UserProfile from '../../components/UserProfile/UserProfile'
import "./profile.css";
import {  useParams} from "react-router-dom";
import axios from 'axios'

function Profile() {
  const userName =   useParams();
  const[profileUser,setUser] = useState();

  useEffect(() =>{
    console.log(userName)
    const getUser = async() =>{

      let res =  await axios.get(`/users?userName=${userName.userName}`)
      setUser(res.data);
     

  }
  getUser()




  },[])
  return (
    <div>
      <Topbar />
      <div className="body-container">
        <div className="profile-left">
          <div className="left-sidebar">
            <LeftSidebar />
          </div>
        </div>
        <div className="profile-right">
          <div className="profile-right-top">
            < UserProfile/>
          </div>
          <div className="profile-right-bottom">
            <div className="feed" >
              <Feed userProfile={profileUser} />
            </div>
            <div className="right-sidebar">
              <RightSidebar user={profileUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
