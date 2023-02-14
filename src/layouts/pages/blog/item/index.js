import React from 'react'
/// css import
import "../../../../styles/pages/blog/blog.scss"
// page notifiyer
import Locator from "../../../../example/locator"
// image for the blogs
import ImageBox from '../../../../example/imagebox'
// icon classes for the blog
import Rooms from "../../../../example/rooms"
import { AttachFile, NavigateNext } from '@mui/icons-material'
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
          <div className='single'>
            <ImageBox src={"https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg"} />
            <div className='bottom'>
              <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
              <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

            </div>
            <h3>Header</h3>
            {/* Todo description should end with an elipsise since I can't showa all of the dec */}
            <span className='dec'> this be the desc</span>
            <span className='link'>Continue Reading</span>

          </div>
          <div className='single'>
            <ImageBox src={"https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg"} />
            <div className='bottom'>
              <div className='bottomtop'>
                <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

              </div>
              <h3>Header</h3>
              {/* Todo description should end with an elipsise since I can't showa all of the dec */}
              <span className='dec'> this be the desc</span>
              <span className='link'>Continue Reading</span>            </div>
          </div>
          <div className='single'>
            <ImageBox src={"https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg"} />

            <div className='bottom'>
              <div className='bottomtop'>
                <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

              </div>
              <h3>Header</h3>
              {/* Todo description should end with an elipsise since I can't showa all of the dec */}
              <span className='dec'> this be the desc</span>
              <span className='link'>Continue Reading</span>            </div>          </div>
          <div className='single'>
            <ImageBox src={"https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg"} />

            <div className='bottom'>
              <div className='bottomtop'>
                <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

              </div>
              <h3>Header</h3>
              {/* Todo description should end with an elipsise since I can't showa all of the dec */}
              <span className='dec'> this be the desc</span>
              <span className='link'>Continue Reading</span>            </div>          </div>
          <div className='single'>
            <ImageBox src={"https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg"} />

            <div className='bottom'>
              <div className='bottomtop'>
                <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

              </div>
              <h3>Header</h3>
              {/* Todo description should end with an elipsise since I can't showa all of the dec */}
              <span className='dec'> this be the desc</span>
              <span className='link'>Continue Reading</span>            </div>          </div>
          <div className='single'>
            <ImageBox src={"https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg"} />

            <div className='bottom'>
              <div className='bottomtop'>
                <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

              </div>
              <h3>Header</h3>
              {/* Todo description should end with an elipsise since I can't showa all of the dec */}
              <span className='dec'> this be the desc</span>
              <span className='link'>Continue Reading</span>            </div>          </div>
          <div className='single'>
            <ImageBox src={"https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg"} />

            <div className='bottom'>
              <div className='bottomtop'>
                <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

              </div>
              <h3>Header</h3>
              {/* Todo description should end with an elipsise since I can't showa all of the dec */}
              <span className='dec'> this be the desc</span>
              <span className='link'>Continue Reading</span>            </div>          </div>
          <div className='single'>
            <ImageBox src={"https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg"} />

            <div className='bottom'>
              <div className='bottomtop'>
                <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

              </div>
              <h3>Header</h3>
              {/* Todo description should end with an elipsise since I can't showa all of the dec */}
              <span className='dec'> this be the desc</span>
              <span className='link'>Continue Reading</span>            </div>          </div>
          <div className='single'>
            <ImageBox src={"https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg"} />

            <div className='bottom'>
              <div className='bottomtop'>
                <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

              </div>
              <h3>Header</h3>
              {/* Todo description should end with an elipsise since I can't showa all of the dec */}
              <span className='dec'> this be the desc</span>
              <span className='link'>Continue Reading</span>            </div>          </div>
          <div className='single'>
            <ImageBox src={"https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg"} />

            <div className='bottom'>
              <div className='bottomtop'>
                <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

              </div>
              <h3>Header</h3>
              {/* Todo description should end with an elipsise since I can't showa all of the dec */}
              <span className='dec'> this be the desc</span>
              <span className='link'>Continue Reading</span>            </div>          </div>
          <div className='single'>
            <ImageBox src={"https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg"} />

            <div className='bottom'>
              <div className='bottomtop'>
                <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

              </div>
              <h3>Header</h3>
              {/* Todo description should end with an elipsise since I can't showa all of the dec */}
              <span className='dec'> this be the desc</span>
              <span className='link'>Continue Reading</span>            </div>          </div>
          <div className='single'>
            <ImageBox src={"https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg"} />

            <div className='bottom'>
              <div className='bottomtop'>
                <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

              </div>

            </div>          </div>


        </div>

      </div>
    </div>
  )
}
