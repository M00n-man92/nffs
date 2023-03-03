import { useRef, useCallback, useState } from 'react'
import "./selling.scss";
import ImageBox from "../imagebox"
import Rooms from "../rooms"
import { AttachFile, NavigateNext, AddShoppingCart } from '@mui/icons-material'
import { Link } from 'react-router-dom'
//
import { addProduct } from '../../redux/cartRedux';
import {useDispatch} from 'react-redux'
export default function PinterstLayout({ cards, linker }) {
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
  ///
  const [individualItem, setIndividualItem] = useState({})
  const dispatch = useDispatch();
  const handleClickBuy = () =>{
    dispatch(addProduct(individualItem))

  }  
  return (
    <div className='sellinglayout'>
      {cards.map((item, index) => {
        if (cards.length === index + 1) {
          return <div className='selling' key={index + 23}>
            <div className='sellingimage'>
              <ImageBox src={item.img} size="16px" />

            </div>

            <div className='sellingcardbottom'>
              <div className='sellingcardbottomtop'>
                <span>{item.passages}</span>

              </div>
              <h3 ref={lastBlogElement}>{item.price}</h3>
              <span className='sellingcarddec'> {item.passages} ...</span>
              <Link to={`/${linker}/${index}`} className="link">
                <span className='link'>Details</span>
              </Link>
              <div className='buy'>
                <AddShoppingCart onClick={handleClickBuy}/>

              </div>
            </div>
          </div>
        }
        else {
          return <div className='selling' key={index + 23}>
            <div className='sellingimage'>
              <ImageBox src={item.img} size="16px" />
            </div>

            <div className='sellingcardbottom'>
              <div className='sellingcardbottomtop'>
                <span>{item.passages}</span>

              </div>
              <h3>{item.name}</h3>
              <span className='sellingcarddec'> {item.price}</span>
              <Link to={`/${linker}/${index}`} className="link">
                <span className='link'>Details</span>
              </Link>
              <div className='buy'>
                <AddShoppingCart onClick={async (e)=>{await setIndividualItem(item);handleClickBuy()}}/>
              </div>
            </div>
          </div>
        }
      })}
    </div>
  )
}