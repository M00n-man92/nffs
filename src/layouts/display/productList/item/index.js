import React from 'react'
// css class
import "../../../../styles/display/productList/item/item.scss";
// mui icons
import { FavoriteBorder, UnfoldMore, SingleBed, SquareFoot, Shower, AttachFile, AccountCircle, AccountCircleOutlined } from '@mui/icons-material'
export default function Item({ layoutWrap, originalLayout }) {
  return (
    <div className={originalLayout && !layoutWrap ? 'item' : 'item true'}>
      <div className="image">
        <img src='https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg' alt='' />
        <div className="firstinsideimg">
          <div className="first">
            <span className="first">Featured</span>
          </div>

        </div>
        {!originalLayout && layoutWrap ? <div className="header">
          <span >For Rent</span>
          <span >Hot Offer</span>
        </div> : <></>}
        <div className="secondinsideimg">
          <div className="icons">
            <div className="individual">
              <div className='shadow'>
                <span>Favorite</span>

              </div>
              <FavoriteBorder className="like" />
            </div>

            <div className="individual" >
              <div className='shadow'>
                <span>Preview</span>

              </div>
              <UnfoldMore className="like" />
            </div>
          </div>
        </div>
      </div>
      <div className='detailsection'>
        <div className='detailedarea'>
          {!originalLayout && layoutWrap ? <></> : <><div className="header">
            <span >For Rent</span>
            <span >Hot Offer</span>
          </div></>}

          <div className='titlesection'>

            <h3> Commercial work shop</h3>
            <span>905 Brickell Bay Dr, Miami, FL 33131, USA</span>
          </div>
          <div className="appliances">
            <div className="bed">
              <div className="Icons">
                <SingleBed style={{ color: "#2F2F2F", fontSize: "16px" }} />
                <h3>4</h3>
              </div>
              {/* if bedroom is one span should be singular */}

            </div>
            <div className="bath">
              <div className="Icons">
                <Shower style={{ color: "#2F2F2F", fontSize: "16px" }} />
                <h3>4</h3>
              </div>
              {/* if bedroom is one span should be singular */}


            </div>
            <div className="square">
              <div className="Icons">

                <SquareFoot style={{ color: "#2F2F2F", fontSize: "16px" }} />
                <h3>1200</h3>
              </div>
              {/* if bedroom is one span should be singular */}

            </div>
            <div className='type'>
              <span>Apartment</span>
            </div>
          </div>
          <div className="usersection">
            <div className="user">
              <AccountCircleOutlined style={{ color: "#2F2F2F", fontSize: "12px" }} />
              <span >Kalab Tezera</span>
            </div>
            <div className="timeago">
              <AttachFile style={{ color: "#2F2F2F", fontSize: "12px" }} />
              <span>7 years ago</span>
            </div>
          </div>
        </div>
        <div className="pricesection">
          <div className='price'>
            <h3>670,000.00</h3>
            <span>1,300.00/mo</span>
          </div>
          <button>Details</button>
        </div>


      </div>
    </div>
  )
}
