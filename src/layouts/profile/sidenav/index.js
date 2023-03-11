import React from 'react'
import { Link } from 'react-router-dom'
// css class
import "../../../styles/profile/side/usersidenav.scss"
import Room from "../../../example/rooms"
//mui 
import { LocationOn, FavoriteBorderOutlined, Lock, AccountCircle, LocationCityOutlined, Widgets } from '@mui/icons-material';
// trigger to logout the user 
import { logout } from '../../../redux/apiCall'
import { useDispatch } from 'react-redux'

export default function ProfileSideNav({ page }) {
  const dispatch = useDispatch()
  const textStyle = {
    fontSize: "32px",
    color: "white",
    fontFamily: "Bellota-Bold"
  }
  return (
    <div className='usersidenav'>
      <div className='usersidenavcontainer'>
        <div className='usersidenavtitle'>
          <Link className='link' to="/">
            <Room icons={<LocationOn style={{ fontSize: "32px", color: "white" }} />} number={"Houzez"} textstyle={textStyle} />
          </Link>
        </div>
        <div className='usersidenavlist'>
          <div className={page == "favorite" ? "usersidenavindividuallist bold" : 'usersidenavindividuallist'}>
            {page == "favorite" ?
              <Room icons={<FavoriteBorderOutlined style={{ fontSize: "17px", color: "white" }} />} number={"Favorite"} />
              : <Link className='link' to="/profile_favorite">
                <Room icons={<FavoriteBorderOutlined style={{ fontSize: "17px", color: "white" }} />} number={"Favorite"} />
              </Link>
            }
          </div>
          <div className={page == "profile" ? "usersidenavindividuallist bold" : 'usersidenavindividuallist'}>
            {page == "profile" ?
              <Room icons={<AccountCircle style={{ fontSize: "17px", color: "white" }} />} number={"My Profile"} />
              :
              <Link className='link' to="/profile">
                <Room icons={<AccountCircle style={{ fontSize: "17px", color: "white" }} />} number={"My Profile"} />
              </Link>
            }
          </div>
          <div className={page == "project" ? "usersidenavindividuallist bold" : 'usersidenavindividuallist'}>
            {page == "project" ?

              <Room icons={<LocationCityOutlined style={{ fontSize: "17px", color: "white" }} />} number={"Projects"} onClick={(e) => { console.log("mf") }} />
              :
              <Link className='link' to="/profile_Projects">
                <Room icons={<LocationCityOutlined style={{ fontSize: "17px", color: "white" }} />} number={"Projects"} onClick={(e) => { console.log("mf") }} />
              </Link>
            }
          </div>
          <div className={page == "material" ? "usersidenavindividuallist bold" : 'usersidenavindividuallist'}>
            {page == "material" ?


              <Room icons={<Widgets style={{ fontSize: "17px", color: "white" }} />} number={"Materials"} onClick={(e) => { console.log("mf") }} />
              :
              <Link className='link' to="/profile_materials">
                <Room icons={<Widgets style={{ fontSize: "17px", color: "white" }} />} number={"Materials"} onClick={(e) => { console.log("mf") }} />
              </Link>
            }

          </div>
          <div className={page == "product" ? "usersidenavindividuallist bold" : 'usersidenavindividuallist'}>
            {page == "product" ?


              <Room icons={<Widgets style={{ fontSize: "17px", color: "white" }} />} number={"Products"} onClick={(e) => { console.log("mf") }} />
              :
              <Link className='link' to="/profile_products">
                <Room icons={<Widgets style={{ fontSize: "17px", color: "white" }} />} number={"Products"} onClick={(e) => { console.log("mf") }} />
              </Link>
            }
          </div>
          <div className='usersidenavindividuallist' onClick={(e) => logout(dispatch)}>
            {/* <Link className='link' to="/"> */}
            <Room icons={<Lock style={{ fontSize: "17px", color: "white" }} />} number={"Logout"} onClick={(e) => { console.log("mf") }} />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
