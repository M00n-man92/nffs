import React, { useState } from 'react'
// css class
import "./items.scss"
// material ui
import { FavoriteBorder, UnfoldMore, SingleBed, SquareFoot, Shower, AttachFile, AccountCircle, AccountCircleOutlined } from '@mui/icons-material'
export default function Item({style}) {
/* */
  return (
    <div className='item' style={style?style:{
      height:"30%",
      width:"33%",
      display:"flex",
      flexDirection:"column"}} >
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
            <div className="individual" >
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
        <div className="appliances">
        <div className="bed">
              <div className="Icons">
                <SingleBed style={{ color: "#2F2F2F", fontSize: "16px" }} />
                <h3>4</h3>
              </div>
              {/* if bedroom is one span should be singular */}

            </div>
            <div className="bath">
              <div className="Icons">
                <Shower style={{ color: "#2F2F2F", fontSize: "16px" }} />
                <h3>4</h3>
              </div>
              {/* if bedroom is one span should be singular */}


            </div>
            <div className="square">
              <div className="Icons">

                <SquareFoot style={{ color: "#2F2F2F", fontSize: "16px" }} />
                <h3>1200</h3>
              </div>
              {/* if bedroom is one span should be singular */}

            </div>
            
        </div>
        <div className='type'>
              <span>Apartment</span>
            </div>
        <div className="bottomlast">
          <div className="user">
            <AccountCircleOutlined style={{ color: "#2F2F2F", fontSize:"12px"}} />
            <span >Kalab Tezera</span>
          </div>
          <div className="timeago">
            <AttachFile style={{ color: "#2F2F2F", fontSize:"12px"}} />
            <span>7 years ago</span>
          </div>
        </div>
        <div className='detail'><button>Detail</button></div>

      </div>
      
    </div>
  )
}
