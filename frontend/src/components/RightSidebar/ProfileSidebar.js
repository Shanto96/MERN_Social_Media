import React from "react";
import {
  Work,
  LocationOn,
  LocationCity,
  School,
  Group,
} from "@material-ui/icons";
import "./profileSidebar.css";
function ProfileSidebar({user}) {
  return (
    <div className="profile-sidebar">
      <div className="item-container">
        <h4 className="info-title">User Information</h4>

        <div className="information-item">
          <Work /> Works at <b>No where</b>
        </div>
        <div className="information-item">
          <LocationOn />
          From <b>{user?.from}</b>
        </div>
        <div className="information-item">
          <LocationCity /> Live in <b>{user?.city}</b>
        </div>
        <div className="information-item">
          <School /> Studied <b>North South University</b>
        </div>
        <div className="information-item">
          <Group /> Relationship <b>{user?.relationShip=="1"?"single":"In a Relation"}</b>
        </div>
      </div>

      <div className="friends-container">
        <h4>User Friends</h4>
        <div className="friend-item-wrapper">
          <div className="friend-item">
            <img
              src="/assets/IMG/user.jpeg"
              alt=""
              className="friend-user-img"
            />
            <span className="user-name">John Doe</span>
          </div>
          <div className="friend-item">
            <img
              src="/assets/IMG/user.jpeg"
              alt=""
              className="friend-user-img"
            />
            <span className="user-name">John Doe</span>
          </div>
          <div className="friend-item">
            <img
              src="/assets/IMG/user.jpeg"
              alt=""
              className="friend-user-img"
            />
            <span className="user-name">John Doe</span>
          </div><div className="friend-item">
            <img
              src="/assets/IMG/user.jpeg"
              alt=""
              className="friend-user-img"
            />
            <span className="user-name">John Doe</span>
          </div>
          <div className="friend-item">
            <img
              src="/assets/IMG/user.jpeg"
              alt=""
              className="friend-user-img"
            />
            <span className="user-name">John Doe</span>
          </div>
          <div className="friend-item">
            <img
              src="/assets/IMG/user.jpeg"
              alt=""
              className="friend-user-img"
            />
            <span className="user-name">John Doe</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
