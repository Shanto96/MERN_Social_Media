import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Feed from "../../components/Feed/Feed";
import UserProfile from '../../components/UserProfile/UserProfile'
import "./profile.css";

function Profile() {
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
            <div className="feed">
              <Feed />
            </div>
            <div className="right-sidebar">
              <RightSidebar profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
