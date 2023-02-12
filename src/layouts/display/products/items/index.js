import React, { useState } from 'react'
// css class
import "../../../../styles/display/products/Items/item.Item.scss"
// material ui
import { FavoriteBorder, UnfoldMore, SingleBed, SquareFoot, Shower, AttachFile, AccountCircle, AccountCircleOutlined } from '@mui/icons-material'
export default function Item({open, setOpen, style}) {
/* style={style?style:{
      height:"95%",
      width:"6.5%",
      display:"flex",
      flexDirection:"column"}} */
  return (
    <div className='item' >
      {/* {renderModal()} */}
      <div className='top' >
        <img src='https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg' alt='' style={{width:"100%",height:"100%"}}/>
        <div className="firstinsideimg">
          <div className="first">
            <span className="first">Featured</span>
          </div>
          <div className="second">
            <span >For Rent</span>
            <span >Hot Offer</span>
          </div>
        </div>
        <div className="secondinsideimg">
          <div className="first">
            <span className="price">78699/mo</span>
            <span className="area">320sq/m</span>
          </div>
          <div className="icons">
            <div className="individual">
              <div className='shadow'>
                <span>Favorite</span>

              </div>
              <FavoriteBorder className="like" />
            </div>
            <div className="individual" onClick={(e)=>{setOpen(!open)}}>
              <div className='shadow'>
                <span>Preview</span>

              </div>
              <UnfoldMore className="like" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottomhalf">
        <div className="bottomfirst">

          <h3> Commercial work shop</h3>
          <span>905 Brickell Bay Dr, Miami, FL 33131, USA</span>
        </div>
        <div className="bottomsecond">
          <div className="bed">
            <div className="Icons">
              <h3>4</h3>
              <SingleBed style={{ color: "#2F2F2F" }} />
            </div>
            {/* if bedroom is one span should be singular */}
            <span>Bedrooms</span>
          </div>
          <div className="bath">
            <div className="Icons">
              <h3>4</h3>
              <Shower style={{ color: "#2F2F2F" }} />
            </div>
            {/* if bedroom is one span should be singular */}
            <span>Bathrooms</span>
          </div>
          <div className="square">
            <div className="Icons">
              <h3>1200</h3>
              <SquareFoot style={{ color: "#2F2F2F" }} />
            </div>
            {/* if bedroom is one span should be singular */}
            <span>Sq per M</span>
          </div>
        </div>
        <div className="bottomlast">
          <div className="user">
            <AccountCircleOutlined style={{ color: "#2F2F2F" }} />
            <span >Kalab Tezera</span>
          </div>
          <div className="timeago">
            <AttachFile style={{ color: "#2F2F2F" }} />
            <span>7 years ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}
{/* <div className=""></div> */ }