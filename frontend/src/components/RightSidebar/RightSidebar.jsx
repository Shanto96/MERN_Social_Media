import React from 'react'
import './rightSidebar.css'
import ProfileSidebar from './ProfileSidebar'
import TimelineSidebar from './TimelineSidebar'

function RightSidebar({user}) {
    return (
        user ? <>  <ProfileSidebar user={user}/> </> :  <TimelineSidebar/>
       
    )
}

export default RightSidebar
