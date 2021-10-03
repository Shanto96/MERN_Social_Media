import React from "react";
import "./messengerfriends.css";
function MessengerFriends() {
  return (
    <div className="p-4">
      <div className="friend-search-container">
        <form action=" " className="w-100">
          <input type="text" placeholder="Search for friends" />
        </form>
      </div>
      <div className="friend-list-container">
        <ul className="friendList p-0 m-3">
          <li className="listItem">
            <img src="/assets/IMG/user.jpeg" alt="" className="user-img" />
            <span className="friend-name">John Doe</span>
          </li>{" "}
          <li className="listItem">
            <img src="/assets/IMG/user.jpeg" alt="" className="user-img" />
            <span className="friend-name">John Doe</span>
          </li>{" "}
          <li className="listItem">
            <img src="/assets/IMG/user.jpeg" alt="" className="user-img" />
            <span className="friend-name">John Doe</span>
          </li>{" "}
          <li className="listItem">
            <img src="/assets/IMG/user.jpeg" alt="" className="user-img" />
            <span className="friend-name">John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MessengerFriends;
