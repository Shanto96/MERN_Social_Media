 import React,{useState,useEffect} from "react";
import "./messengerfriends.css";
import Conversation from './conversation'
import axios from 'axios'



function MessengerFriends({conversation,setSelectedConversationId }) { 
           
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
           return  <Conversation key={conversation._id} conversation={conversation} currentUser={"612530137bfb314b9c72ccc2"} setSelectedConversationId={setSelectedConversationId} />

          })}
          
        </ul>
      </div>
    </div>
  );
}

export default MessengerFriends;
