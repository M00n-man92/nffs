import React from 'react'
// css class
import "./locator.scss"
export default function index({header,icon}) {
  return (
    <div className='locating'>
      <span>{header}</span>
      <div className="icon">{icon }</div>
    </div>
  )
}
