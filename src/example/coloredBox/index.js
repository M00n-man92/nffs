import React from 'react'
// css class
import "./colored.scss"
export default function index({color, span, width,margin,height}) {
  
  return (
    <div className='colored' style={color?{backgroundColor:{color}}:{backgroundColor:"#585757",width:width,margin:margin,height:height,cursor:"pointer"}}>
      <span className='coloredspan'>{span}</span>
    </div>
  )
}
