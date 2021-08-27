import React from "react";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ChatIcon from '@material-ui/icons/Chat';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import HelpIcon from '@material-ui/icons/Help';
import WorkIcon from '@material-ui/icons/Work';
import EventIcon from '@material-ui/icons/Event';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import './leftsidebar.css'



function LeftSidebar() {
  return (
    <div className="sidebar-container">
      <ul className="left-sidebar-list">
        <li className="left-sidebar-item">
          <RssFeedIcon className="left-sidebar-icon" /> Feed
        </li>
        <li className="left-sidebar-item">
          <ChatIcon className="left-sidebar-icon" /> Chats
        </li>
        <li className="left-sidebar-item">
          <PlayCircleFilledIcon className="left-sidebar-icon" /> Videos
        </li>
        <li className="left-sidebar-item">
          <PeopleAltIcon className="left-sidebar-icon" /> Groups
        </li>
        <li className="left-sidebar-item">
          <BookmarkIcon className="left-sidebar-icon" /> Bookmarks
        </li>
        <li className="left-sidebar-item">
          <HelpIcon className="left-sidebar-icon" /> Questions
        </li>
        <li className="left-sidebar-item">
          <WorkIcon className="left-sidebar-icon" /> Jobs
        </li>
        <li className="left-sidebar-item">
          <EventIcon className="left-sidebar-icon" /> Events
        </li>
        <li className="left-sidebar-item">
          <CastForEducationIcon className="left-sidebar-icon" /> Courses
        </li>
      </ul>
      <div className="button-container">
      <button className="view-more">
          View More
      </button>
      <hr className="left-sidebar-hr" />
      </div>
      <div className="friend-container">
      <h2>Friends</h2>
      <ul className="friend-list">
        <li className="friend-list-item">
          <img src="/assets/IMG/user.jpeg" alt="" className="friend-img"/>
          John Doe
        </li><li className="friend-list-item">
          <img src="/assets/IMG/user.jpeg" alt="" className="friend-img"/>
          John Doe
        </li><li className="friend-list-item">
          <img src="/assets/IMG/user.jpeg" alt="" className="friend-img"/>
          John Doe
        </li><li className="friend-list-item">
          <img src="/assets/IMG/user.jpeg" alt="" className="friend-img"/>
          John Doe
        </li><li className="friend-list-item">
          <img src="/assets/IMG/user.jpeg" alt="" className="friend-img"/>
          John Doe
        </li><li className="friend-list-item">
          <img src="/assets/IMG/user.jpeg" alt="" className="friend-img"/>
          John Doe
        </li><li className="friend-list-item">
          <img src="/assets/IMG/user.jpeg" alt="" className="friend-img"/>
          John Doe
        </li><li className="friend-list-item">
          <img src="/assets/IMG/user.jpeg" alt="" className="friend-img"/>
          John Doe
        </li><li className="friend-list-item">
          <img src="/assets/IMG/user.jpeg" alt="" className="friend-img"/>
          John Doe
        </li><li className="friend-list-item">
          <img src="/assets/IMG/user.jpeg" alt="" className="friend-img"/>
          John Doe
        </li><li className="friend-list-item">
          <img src="/assets/IMG/user.jpeg" alt="" className="friend-img"/>
          John Doe
        </li><li className="friend-list-item">
          <img src="/assets/IMG/user.jpeg" alt="" className="friend-img"/>
          John Doe
        </li>
      </ul>
      </div>
      
    </div>
  );
}

export default LeftSidebar;
