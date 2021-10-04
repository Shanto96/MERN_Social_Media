import React from "react";
import "./messageBox.css";
import Message from "./message";
function MessageBox() {
  return (
    <div className="p-4">
      <div className="message-box-top">
        <Message />
        <Message />
        <Message own/>
        <Message />
        <Message  own/>
        <Message />
      </div>
      <div className="message-box-bottom p-4">
        <form className="w-100" >
          <div className="d-flex w-100 .align-items-center
">
            <div className="w-75 p-3">  <textarea className="d-block w-100"  rows="5"></textarea></div>
            <div className="p-3"><button className="send-btn d-block">Send</button></div>
          
            
       



          </div>
        
        </form>
      </div>
    </div>
  );
}

export default MessageBox;
