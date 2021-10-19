 import React,{useState,useEffect,useContext} from "react";
import "./messengerfriends.css";
import Conversation from './conversation'
import axios from 'axios'
import { AuthContext } from "../../Context/AuthContext";



function MessengerFriends({conversation,setSelectedConversationId,setReceiverId}) { 
  const { user } = useContext(AuthContext);
 
return (
    <div className="p-4 position-fixed">
      <div className="friend-search-container">
        <form action=" " className="w-100">
          <input type="text" placeholder="Search for friends" />
        </form>
      </div>
      <div className="friend-list-container">
        <ul className="friendList p-0 m-3">
          {conversation.map((conversation) => {
           return  <Conversation key={conversation._id} conversation={conversation} currentUser={user?._id} setSelectedConversationId={setSelectedConversationId} setReceiverId={setReceiverId} />

          })}
          
        </ul>
      </div>
    </div>
  );
}

export default MessengerFriends;
