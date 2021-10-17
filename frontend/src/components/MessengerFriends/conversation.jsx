import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Conversation({conversation,currentUser,setSelectedConversationId}) {
  const [user,setUser] = useState(); 


   useEffect(()=>{
    const userId = conversation?.members?.find(c=>c!==currentUser);
    console.log("conversation user is", userId);
    const getUser = async() => {
     const user = await axios.get('/users?userId='+userId);
     setUser(user.data);
    }
     getUser();
   },[conversation])

    return (
        <div>
        <li className="listItem pointer" onClick={()=>setSelectedConversationId(conversation._id)}>
            <img src={ user?.profilePicture || "/assets/IMG/user.jpeg"} alt="" className="user-img" />
            <span className="friend-name">{user?.username}</span>
          </li>
        </div>
    )
}

export default Conversation
