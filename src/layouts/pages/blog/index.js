import React from 'react'
// css class 
import "../../../styles/pages/blog/single/single.scss"
// page notifiyer
import Locator from "../../../example/locator"
// Icon plus span
import Rooms from "../../../example/rooms"

import { Today } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { useLocation } from 'react-router'
import { blogs } from './data'
export default function SingleBlog() {
  const location = useLocation()

  const id = location.pathname.split("/")[2]
  console.log(id)

  return (
    <div className="singleblog">
      <div className='insideblog'>
        <div className='locator'>
          <Locator header={"Home"} icon={"kj"} />
          <Locator header={"Blog"} icon={"kj"} />
          <Locator span={blogs[id].name} />
        </div>
        <div className='blogcontainer'>
          <div className='leftsideblog'>
            <div className='blogheader'>
              <h3>{blogs[id].name}</h3>
              <Rooms icons={<Today style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

            </div>
            <img src={blogs[id].img} alt='' />
            {blogs[id].passages.map((item, index) => (
              <p key={index + 21}>{item}</p>
            ))}

          </div>
          <div className='rightsideblog'>
            <div className='blogsearchbox'>
              <span>Search</span>
              <div className='searchbox'>
                <TextField
                  size="small"
                  className="textfield"
                  label="Blog"
                  variant='outlined'
                />
                <button>Search</button>
              </div>
            </div>
            <div className='recentblogs'>
              <h2>Recent Posts</h2>
              <div className='recently'>
                {blogs.map((item, index) => {
                  if (index <= 5) return (<Locator span={item.name} icon={"hellow world"} />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
