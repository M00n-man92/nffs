import React from 'react'
// css class
import "./colored.scss"
export default function index({color, span}) {
  return (
    <div className='colored' style={color?{backgroundColor:{color}}:{backgroundColor:"#585757"}}>
      <span>{span}</span>
    </div>
  )
}
