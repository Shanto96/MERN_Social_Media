import React from "react";
import "./userProfile.css";
function UserProfile() {
  return (
    <div className="user-info-wrapper">
      <div className="cover-dp-container">
        <img src="assets/IMG/cover.jpg" alt="Cover Pic" className="cover-img" />

        <img src="assets/IMG/user.jpeg" alt="" className="dp" />
      </div>
      <div className="user-info">
          <h2>Kibria Shanto</h2>
          <span className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta, neque non molestias officiis assumenda omnis similique atque ipsum debitis facere tempora perspiciatis voluptatibus laudantium, minima vel odio consectetur earum officia nesciunt doloribus. Dignissimos saepe maiores architecto iure alias a aliquam asperiores, labore debitis voluptate. Sit ipsum nam adipisci consequatur.</span>
      </div>
    </div>
  );
}

export default UserProfile;
