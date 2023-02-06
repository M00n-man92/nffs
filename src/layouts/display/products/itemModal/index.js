import React, { useState } from 'react'
/// css Class
import "../../../../styles/display/products/itemModal/itemModal.scss"
// mui icons
import { LocationOn, FavoriteBorder, Close, UnfoldMore, NavigateBefore, NavigateNext,  SingleBed, SquareFoot, Shower, AttachFile, AccountCircle, AccountCircleOutlined, GarageSharp  } from '@mui/icons-material';

export default function ItemModal({ open, setOpen }) {
  // TODO the image swipper should go through an array of images instead of swipping.
  // to fiill the image by hiding the details when true
  const [full, setFull] = useState(false);
  return (
    <div className='itemmodal'>
      <div className='header'>
        <div className='title'>
          <LocationOn style={{ fontSize: "32px", color: "#2596be" }} />
          <h3>houzez</h3>
        </div>
        <div className='close'>
          <div className='fav'>
            <FavoriteBorder className="like" />
            <span>Favorite</span>
          </div>
          <Close style={{ color: "white", cursor: "pointer"}} onClick={(e) => { setOpen(!open) }} />
        </div>
      </div>
      <div className={full ? 'middle true' : 'middle'}>
        <div className='imagecontainer'>

          <img src='https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg' alt='' />

          <div className='unfold' onClick={(e) => { setFull(!full) }}>
            <UnfoldMore className='like' />
          </div>
          <div className='left'>
            <NavigateBefore className='like' />
          </div>
          <div className='right'>
            <NavigateNext className='like' />
          </div>
        </div>
        <div className='itemdetails'>
          <div className='top'>
            <div className='second'>
              <span >For Rent</span>
            </div>

            <h3>Guaranteed Modern Home</h3>
            <span>905 Brickell Bay Dr, Miami, FL 33131, USA</span>
          </div>
          <div className='land'>
            <h3>590,000.00</h3>
            <span>3,500.00/sq ft</span>
          </div>
          <div className='description'>
            {/* TODO After some letters it should display ... */}
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut...</p>
            {/* <span>3,500.00/sq ft</span> */}
          </div>
          <div className='detail'>
            <div className="bed">
              <div className="Icons">
                <h3>4</h3>
                <SingleBed style={{ color: "#2F2F2F" }} />
              </div>
              {/* if bedroom is one span should be singular */}
              <span>Bedrooms</span>
            </div>
            <div className="bath">
              <div className="Icons">
                <h3>4</h3>
                <Shower style={{ color: "#2F2F2F" }} />
              </div>
              {/* if bedroom is one span should be singular */}
              <span>Bathrooms</span>
            </div>
            <div className="square">
              <div className="Icons">
                <h3>1200</h3>
                <SquareFoot style={{ color: "#2F2F2F" }} />
              </div>
              {/* if bedroom is one span should be singular */}
              <span>Sq per M</span>
            </div>
            <div className="square">
              <div className="Icons">
                <h3>1</h3>
                <GarageSharp style={{ color: "#2F2F2F" }} />
              </div>
              {/* if bedroom is one span should be singular */}
              <span>Garage</span>
            </div>
            <div className="bath">
              <div className="Icons">
                <h3>2016</h3>
                <AttachFile style={{ color: "#2F2F2F" }} />
              </div>
              {/* if bedroom is one span should be singular */}
              <span>Year Built</span>
            </div>
          </div>
          <button >Details</button>
        </div>
      </div>
    </div>
  )
}
// <div></div>
// <div className=''> </div>