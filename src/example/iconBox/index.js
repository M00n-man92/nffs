import React from 'react'
// css class
import "./iconbox.scss"
// mui imports
import {Favorite} from '@mui/icons-material'
export default function index({icon}) {
  return (
    <div className='box'>
      {icon}
    </div>
  )
}
