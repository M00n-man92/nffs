import React from 'react'
/// css class
import "./rooms.scss";

export default function index({ icons, number, title, textstyle }) {
  return (
    <div className='rooms'>
      <div className='icons'>
        {icons}
        <span style={textstyle}>{number}</span>
      </div>
      <span>{title}</span>
    </div>
  )
}
