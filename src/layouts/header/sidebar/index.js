import React from 'react'
import { Link } from 'react-router-dom'
// css class 
import "../../../styles/layout/side/sidebar.scss"
export default function Sidebar({ open, setOpen }) {
  return (
    <div className={open ? 'sidebar' : "sidebar close"}>
      <div className='catagory'>
        <h3>Catagory</h3>
        <div className='lists'>
          <Link className='link' to="/firms">
            <h3>
              Firms
            </h3>
          </Link>
        </div>
        <div className='lists'>
          <h3>
            Manufacturer
          </h3>
        </div>
        <div className='lists'>
          <h3>
            Project
          </h3>
        </div>


      </div>
    </div>
  )
}
