import React from 'react'

function TimelineSidebar() {
    return (
        <div>
        <>
    <div className="right-sidebar-container">
        
        <div className="birthday-wrapper">
            <div className="birthday-icon">
                <img src="assets/IMG/gift-box.png" className="birthday-icon" alt="" />

            </div>
            <div className="birthday-content">
                <b>Fatemi</b> and <b> 3 Others</b> Have Birthday Today
            </div>
        </div>
        <div className="banner">
             <img src="/assets/IMG/Kibria's Food Fair.png" alt=""  className="add-banner"/> 
        </div>
         
         <div className="online-now">
             <h2>Online Friends</h2>
             <ul className="online-friend-list">
                 <li className="online-friend-list-item">
                     <div className="online-user-img-container">
                         <img src="assets/IMG/user.jpeg" alt="" className="online-user-img"/>
                         <div className="online-badge"></div>
                     </div>
                     <div className="user-name">
                         John Doe
                     </div>
                 </li><li className="online-friend-list-item">
                     <div className="online-user-img-container">
                         <img src="assets/IMG/user.jpeg" alt="" className="online-user-img"/>
                         <div className="online-badge"></div>
                     </div>
                     <div className="user-name">
                         John Doe
                     </div>
                 </li><li className="online-friend-list-item">
                     <div className="online-user-img-container">
                         <img src="assets/IMG/user.jpeg" alt="" className="online-user-img"/>
                         <div className="online-badge"></div>
                     </div>
                     <div className="user-name">
                         John Doe
                     </div>
                 </li><li className="online-friend-list-item">
                     <div className="online-user-img-container">
                         <img src="assets/IMG/user.jpeg" alt="" className="online-user-img"/>
                         <div className="online-badge"></div>
                     </div>
                     <div className="user-name">
                         John Doe
                     </div>
                 </li><li className="online-friend-list-item">
                     <div className="online-user-img-container">
                         <img src="assets/IMG/user.jpeg" alt="" className="online-user-img"/>
                         <div className="online-badge"></div>
                     </div>
                     <div className="user-name">
                         John Doe
                     </div>
                 </li>
             </ul>
         </div>

        </div> 
    </>
        </div>
    )
}

export default TimelineSidebar
