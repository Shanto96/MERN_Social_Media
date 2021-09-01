import React from 'react'
import './rightSidebar.css'
import ProfileSidebar from './ProfileSidebar'
import TimelineSidebar from './TimelineSidebar'

function RightSidebar({profile}) {
    return (
        profile ? <>  <ProfileSidebar/> </> :  <TimelineSidebar/>
       
    )
}

export default RightSidebar
