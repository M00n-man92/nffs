import { useRef, useCallback, useState } from 'react'
import "./layout.scss";
import ImageBox from "../imagebox"
import Rooms from "../rooms"
import { AttachFile, NavigateNext } from '@mui/icons-material'
import { Link } from 'react-router-dom'
export default function PinterstLayout({cards,linker}) {
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
    <div className='layout'>
      {cards.map((item, index) => {
        if (cards.length === index + 1) {
          return <div className='card' key={index + 23}>
            <div className='cardimage'>
              <ImageBox src={item.img} size="16px" />
            </div>

            <div className='cardbottom'>
              <div className='cardbottomtop'>
                <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

              </div>
              <h3 ref={lastBlogElement}>{item.name}</h3>
              <span className='carddec'> {item.passages[0].split("", 20)} ...</span>
              <Link to={`/${linker}/${index}`} className="link">
                <span className='link'>Continue Reading</span>
              </Link>
            </div>
          </div>
        }
        else {
          return <div className='card' key={index + 23}>
            <div className='cardimage'>
              <ImageBox src={item.img} size="16px" />
            </div>

            <div className='cardbottom'>
              <div className='cardbottomtop'>
                <Rooms icons={<AttachFile style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />
                <Rooms icons={<NavigateNext style={{ fontSize: "14px" }} />} number={"March 7, 2014"} />

              </div>
              <h3>{item.name}</h3>
              <span className='carddec'> {item.passages[0].split("", 20)} ...</span>
              <Link to={`/${linker}/${index}`} className="link">
                <span className='link'>Continue Reading</span>
              </Link>
            </div>
          </div>
        }
      })}
    </div>
  )
}