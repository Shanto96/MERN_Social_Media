import {useContext} from 'react'
import "./topbar.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {AuthContext} from '../../Context/AuthContext';
import {Link} from 'react-router-dom'
function Topbar() {
  
  const {user}= useContext(AuthContext);
  console.log("user is",user)


  return (
    <>
      <div className="topbar">
        <div className="topbarLeft">
        <Link to='/'>  <div className="logo">DemoSocial</div></Link>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <SearchIcon className="search-icon" />
            <input type="text" className="search-input" placeholder="Search for post,friend,image or video" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="icon-info-container">
            <div className="icon-container">

            
            <div className="topbarIconItem">
                 <NotificationsIcon className="topbar-icon"/>
              
              <span className="topbarIconBadge">1</span>
            </div>
            <Link to={`/messenger`}>
           
            <div className="topbarIconItem">
            <ChatIcon className="topbar-icon"/>
              <span className="topbarIconBadge">1</span>
            </div>
            </Link>

            <div className="topbarIconItem">
              <PersonIcon className="topbar-icon"/>
              <span className="topbarIconBadge">1</span>
            </div>
            </div>
            <div className="info-container">
            <div className="profile-img-container">
              <Link to={`/profile/${user?.username}`}>
              <img src={ user?.profilePicture ||"/Assets/IMG/user.jpeg"} alt="" className="profile-img" />
              </Link>
            </div>
            <div class="UserName">
            <Link to={`/profile/${user?.username}`}>

              {user?.username}
              </Link>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
