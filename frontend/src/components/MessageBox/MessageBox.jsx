import React, { useEffect, useState, useContext ,useRef } from "react";
import "./messageBox.css";
import Message from "./message";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

function MessageBox({ selectedConversationId }) {
  const [messages, setMessages] = useState([]);
  const { user } = useContext(AuthContext);
  const text= useRef();
  const scrollRef = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    const newMesg = { 
      conversationId: selectedConversationId,
      sender: user._id,
      text: text.current.value
    }
    try {
      const res =  await axios.post("/message",newMesg);
      setMessages([...messages,res.data]);
      text.current.value = "";                                                     
    } catch (error) {
      console.log(error)
      
    }
  }
 


  useEffect(() => {
    const getConversation = async () => {
      const messages = await axios.get("/message/" + selectedConversationId);
      setMessages(messages.data);
    };
    getConversation();
  }, [selectedConversationId]);
 
  useEffect(() => {
    scrollRef?.current?.scrollIntoView({behavior:"smooth"})
  },[messages])

  return (
    <div className="p-4">
      {selectedConversationId ? (
        <>
          <div className="message-box-top p-2">
            {messages.map((message) => {
              
              return<div  ref = {scrollRef}>{ (message.sender===user._id) ? <Message key={message._id} message={message} own={true} /> :<Message key={message._id} message={message} own={false} /> }</div>
            })}
          </div>
          <div className="message-box-bottom p-4">
            <form className="w-100" onSubmit={(e)=>submitHandler(e)} > 
              <div
                className="d-flex w-100 .align-items-center
"
              >
                <div className="w-75 p-3">
                  {" "}
                  <textarea className="d-block w-100" rows="5" ref= {text}></textarea>
                </div>
                <div className="p-3">
                  <button className="send-btn d-block">Send</button>
                </div>
              </div>
            </form>
          </div>{" "}
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <h2 className="p-2 text-muted">No Conversation Selected </h2>
        </div>
      )}
    </div>
  );
}

export default MessageBox;
