import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import Feed from '../../components/Feed/Feed'
import './home.css'
function Home() {
    return (
        <div>
            <Topbar />
             <div className="body-container">
                 <div className="left-sidebar">
                     <LeftSidebar/>
                 </div> 
                 <div className="feed">
                     <Feed/>
                 </div>
                 <div className="right-sidebar">
                     <RightSidebar/>
                 </div>
             </div>
        </div>
    )
}

export default Home
