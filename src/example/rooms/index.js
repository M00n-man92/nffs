import React from 'react'
/// css class
import "./rooms.scss";

export default function index({icons,number,title}) {
  return (
    <div className='rooms'>
      <div className='icons'>
{icons}
<span>{number}</span>
      </div>
      <span>{title}</span>
    </div>
  )
}
