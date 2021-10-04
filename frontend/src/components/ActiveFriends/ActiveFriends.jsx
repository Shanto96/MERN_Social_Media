import React from "react";
import "./messengerfriends.css";
function ActiveFriends() {
  return (
    <div className="pt-4">
    <div className="friend-search-container">
        <h2>Active Friends</h2>
      </div>
      <div className="friend-list-container">
        <ul className="friendList p-0 ">
          <li className="listItem">
            <div className="user-wraper">
            <div className="active-pointer">
    
    </div>
   <img src="/assets/IMG/user.jpeg" alt="" className="user-img" />
            </div>
             
            <span className="friend-name">John Doe</span>
          </li>{" "} <li className="listItem">
            <div className="user-wraper">
            <div className="active-pointer">
    
    </div>
   <img src="/assets/IMG/user.jpeg" alt="" className="user-img" />
            </div>
             
            <span className="friend-name">John Doe</span>
          </li>{" "} <li className="listItem">
            <div className="user-wraper">
            <div className="active-pointer">
    
    </div>
   <img src="/assets/IMG/user.jpeg" alt="" className="user-img" />
            </div>
             
            <span className="friend-name">John Doe</span>
          </li>{" "} <li className="listItem">
            <div className="user-wraper">
            <div className="active-pointer">
    
    </div>
   <img src="/assets/IMG/user.jpeg" alt="" className="user-img" />
            </div>
             
            <span className="friend-name">John Doe</span>
          </li>{" "}
         
        </ul>
      </div>
    </div>
  );
}

export default ActiveFriends;
