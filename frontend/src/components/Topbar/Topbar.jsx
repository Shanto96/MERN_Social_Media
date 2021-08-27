import "./topbar.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbarLeft">
          <div className="logo">DemoSocial</div>
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

            <div className="topbarIconItem">
            <ChatIcon className="topbar-icon"/>
              <span className="topbarIconBadge">1</span>
            </div>

            <div className="topbarIconItem">
              <PersonIcon className="topbar-icon"/>
              <span className="topbarIconBadge">1</span>
            </div>
            </div>
            <div className="info-container">
            <div className="profile-img-container">
              <img src="./Assets/IMG/user.jpeg" alt="" className="profile-img" />
            </div>
            <div class="UserName">
                User Name
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
