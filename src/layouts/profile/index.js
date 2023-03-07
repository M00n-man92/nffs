import React from 'react'
//csss class
import "../../styles/profile/userprofile.scss"
import ProfileSideNav from './sidenav'

export default function UserProfile() {
  return (
    <div className='userprofile'>
      <ProfileSideNav page={"profile"} />
    </div>
  )
}
