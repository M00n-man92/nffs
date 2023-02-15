import React from 'react'
/// css import
import "../../../../styles/pages/blog/blog.scss"
// page notifiyer
import Locator from "../../../../example/locator"
// image for the blogs
import ImageBox from '../../../../example/imagebox'
// icon classes for the blog
import Rooms from "../../../../example/rooms"
// data for the blogs
import { blogs } from "../data"
import { AttachFile, NavigateNext } from '@mui/icons-material'
import { Link } from 'react-router-dom'
export default function Blog() {
  return (
    <div className='blog'>
      <div className='insideblog'>
        <div className='locator'>
          <Locator header={"Home"} icon={"kj"} />
          <Locator span={"Blog"} />
        </div>
        <h4>Blog</h4>
        <div className='blogpost'>
          {blogs.map((item, index) => (
            <div className='single' key={index + 23}>
              <div className='topblogimage'>
                <ImageBox src={item.img} />
              </div>

              <div className='bottom'>
                <div className='bottomtop'>
                  <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                  <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

                </div>
                <h3>{item.name}</h3>
                <span className='dec'> {item.passages[0].split("", 20)} ...</span>
                <Link to={`/blog/${index}`} className="link">
                  <span className='link'>Continue Reading</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
