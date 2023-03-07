import React from 'react'
import { Link } from 'react-router-dom'
// css class 
import "../../../styles/layout/side/sidebar.scss"
import Rooms from "../../../example/rooms"
import { FavoriteBorderOutlined, AccountCircleOutlined, Lock } from '@mui/icons-material'
// trigger to logout the user 
import { logout } from '../../../redux/apiCall'
import { useDispatch } from 'react-redux'
export default function Sidebar({ open }) {
  const dispatch = useDispatch()
  return (
    <div className={open ? 'sidebar' : "sidebar close"}>
      <div className='catagory'>

        <div className='lists'>
          <Link className='link' to="/profile/favorite">
            <Rooms icons={<FavoriteBorderOutlined color='#004274' fontSize='15px' style={{marginRight:"10px"}}/>} number={"Favorites"} />
          </Link>
        </div>

        <div className='lists'>
          <Link className='link' to="/profile">
            <Rooms icons={<AccountCircleOutlined color='#004274' fontSize='15px'  style={{marginRight:"10px"}}/> } number={"My Profile"} />
          </Link>
        </div>
        <div className='lists' onClick={(e)=>{logout(dispatch)}}>
          <Link className='link' to="/">
            <Rooms icons={<Lock color='#004274' fontSize='15px'  style={{marginRight:"10px"}}/>} number={"Logout"} />
          </Link>
        </div>

      </div>
    </div>
  )
}
