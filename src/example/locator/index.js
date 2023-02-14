import React from 'react'
// css class
import "./locator.scss"
// mui imports 
import { NavigateNext } from '@mui/icons-material'

export default function index({ header, icon, span }) {
  return (
    <div className='locating'>
      <span>{header}</span>
      {icon ? <div className="icon">
        <NavigateNext style={{ fontSize: "14px", color: "#00aeff" }} />
      </div> : <></>}
      <h3>{span}</h3>
    </div>
  )
}
