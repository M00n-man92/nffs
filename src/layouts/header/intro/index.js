import React from 'react'
/// css file
import "../../../styles/layout/intro/intro.scss";
// material ui icons
import { LocationOn,Phone, RoomOutlined, AccessTime } from '@mui/icons-material';

export default function Intro() {
  return (
    <div className='intro'>
      <div className='components'>
        <div className='first'>
          <LocationOn style={{fontSize:"32px", color:"#2596be"}}/>
          <span className='title'>
            houzez
          </span>
        </div>
        <div className='second'>
          <div className='single'>
            <Phone style={{fontSize:"40px", color:"#145369"}}/>
            <div className='items' >
              <span style={{color: "#145369"}}>
                <b>
              +251 9 83 07 8383
              </b>
              </span>
              <span style={{color: "#145369"}}>
              realestat@niddf.com
              </span>
            </div>
          </div>
        
        
          <div className='single'>
            <RoomOutlined style={{fontSize:"40px", color:"#145369"}}/>
            <div className='items'>
              <span style={{color: "#145369"}}>
                <b>
              Megenaga
              </b>
              </span>
            </div>
          </div>
        
       
          <div className='single'>
            <AccessTime style={{fontSize:"40px", color:"#145369"}}/>
            <div className='items'>
              <span style={{color: "#145369"}}>
                <b>
              9 am to 6 pm
              </b>
              </span>
              <span style={{color: "#145369"}}>
              Monday to Friday
              </span>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}
