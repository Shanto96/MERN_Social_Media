import React,{useContext} from "react";
import {format} from 'timeago.js'
import { AuthContext } from "../../Context/AuthContext";

function Message({own,message}) {






  const { user } = useContext(AuthContext);
  console.log(user._id,message.sender)
  return (
   
    <div> 
    { (user._id !== message.sender) ? <div className="message-wraper mt-4">
        <div className="user-info-msg">
          <img src="/assets/IMG/user.jpeg" alt="" className="user-img" />
        </div>
        <div className="message-body">
          <span className="message-content p-3">
            {message.text}
          </span>
          <span className="time d-block text-muted">{format(message.createdAt)}</span>
        </div>
        
      </div>  :<div className="message-wraper mt-4 justify-content-end">
       
        <div className="message-body ">
          <span className="message-content ml-5 p-3 msg-own ">
          {message.text}

          </span>
          <span className="time d-block text-muted ">{format(message.createdAt)}</span>
        </div>
       
        
      </div>}
      
    </div>
  );
}

export default Message;
