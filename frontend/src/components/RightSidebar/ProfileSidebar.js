import React,{useEffect,useState,useContext} from "react";
import {
  Work,
  LocationOn,
  LocationCity,
  School,
  Group,
  Add,
  AirlineSeatFlatSharp
} from "@material-ui/icons";
import "./profileSidebar.css";
import {AuthContext} from '../../Context/AuthContext';
import axios from 'axios'

function ProfileSidebar(props) {
  
  const [friendList,setFriendList] =  useState([])
  const {user} = useContext(AuthContext);
  const [following,setFollowing]=useState(false)
  useEffect(() => {
  const getUserFriendList = async() => {
    
    console.log("Current user",user?.following);
    try {
     const friends =  await axios.get("/users/friends/"+props.user._id)
      setFriendList(friends.data);
      
    
    } catch (error) {
      console.log(error)
    }
  }
  getUserFriendList();
  console.log(user?.following,props?.user?._id)
  if(user?.following.includes(props.user?._id)){
    
       setFollowing(true);
       console.log("status " +following)
  }
  
  },[user])



 const  followHandler = async () => {
   try {
      if(following){
        await axios.put("/users/"+props.user?._id +"/unfollow",{userId:user?._id})
        .then(res => console.log(res.data))
       
      setFollowing(false)
      }
      else{
        await axios.put("/users/"+props.user?._id +"/follow",{userId:"612530137bfb314b9c72ccc2"})
        .then(res => console.log(res.data))
        setFollowing(true)

      }
      
   } catch (error) {
     console.log(error)
   }
 }
   
  return (
    <div className="profile-sidebar">
    <div className="add-button" onClick={()=>{followHandler()}}>
    { (props.user?._id!==user?._id)?<>{ !(following) ?<> <Add/>&nbsp;Follow</>: "Following"}</>: null }
     </div>
      <div className="item-container">
      
        <h4 className="info-title">User Information</h4>
       

        <div className="information-item">
          <Work /> Works at <b>No where</b>
        </div>
        <div className="information-item">
          <LocationOn />
          From <b>{user?.from}</b>
        </div>
        <div className="information-item">
          <LocationCity /> Live in <b>{user?.city}</b>
        </div>
        <div className="information-item">
          <School /> Studied <b>North South University</b>
        </div>
        <div className="information-item">
          <Group /> Relationship <b>{user?.relationShip=="1"?"single":"In a Relation"}</b>
        </div>
      </div>

      <div className="friends-container">
        <h4>User Friends</h4>


        <div className="friend-item-wrapper">
       {friendList.map((friend) => (<div className="friend-item">
            <img
              src={friend.profilePicture||"/assets/IMG/user.jpeg"}
              alt=""
              className="friend-user-img"
            />
            <span className="user-name">{friend.username}</span>
          </div>))}
          
         
          
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
