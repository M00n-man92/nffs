import React from 'react'
/// css import
import "../../../../styles/pages/blog/blog.scss"
// page notifiyer
import Locator from "../../../../example/locator"
// image for the blogs
import ImageBox from '../../../../example/imagebox'
// icon classes for the blog
import Rooms from "../../../../example/rooms"
import PinterstLayout from '../../../../example/pinterestlayout'
// data for the blogs
import { blogs } from "../data"
import { AttachFile, NavigateNext } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useRef, useCallback, useState } from 'react'
export default function Blog() {
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef()
  const lastBlogElement = useCallback(node => {
    /* Todo check if loading is true if(isloading) return */
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting /* todo check if there is more as && hasmore is true since we dont want it to keep loading this  */)
        console.log("visibel")
      setPageNumber(previouspageNumber => console.log(previouspageNumber + 1));
      console.log(pageNumber)
    })
    if (node) observer.current.observe(node);
  }, [/* Todo setup a state to check it there are any more blogs to be seen
      and make is loading a dependency */]);
  return (
    <div className='blog'>
      <div className='insideblog'>
        <div className='locator'>
          <Locator header={"Home"} icon={"kj"} />
          <Locator span={"Blog"} />
        </div>
        <h4>Blog</h4>
        <PinterstLayout cards={blogs} linker="blog" blog={true} project={false}/>
        {/* <div className='blogpost'>
          {blogs.map((item, index) => {
            if (blogs.length === index + 1) {
              return <div className='single' key={index + 23}>
                <div className='topblogimage'>
                  <ImageBox src={item.img} size="16px" />
                </div>

                <div className='bottom'>
                  <div className='bottomtop'>
                    <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                    <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

                  </div>
                  <h3 ref={lastBlogElement}>{item.name}</h3>
                  <span className='dec'> {item.passages[0].split("", 20)} ...</span>
                  <Link to={`/blog/${index}`} className="link">
                    <span className='link'>Continue Reading</span>
                  </Link>
                </div>
              </div>
            }
            else {
              return <div className='single' key={index + 23}>
                <div className='topblogimage'>
                  <ImageBox src={item.img} size="16px" />
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
            }
          })}
        </div> */}

      </div>
    </div>
  )
}
