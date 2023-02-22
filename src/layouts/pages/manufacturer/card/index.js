import React from 'react'
import { Link } from 'react-router-dom'
import Border from '../../../../example/borderbottom'
/// image container
import ImageBox from '../../../../example/imagebox'
//css claass
import "../../../../styles/pages/manufacturer/card/card.scss"
export default function ManuCard({ title, type, image }) {
  return (
    <div className="individualmanufacturer">
      <div className='imagecontanier'>
        <img src={image} alt="" />
        <div className='darkerart'>
          <span className='manufacturerholdertitle'>{title}</span>
          <span className='work'>{type}</span>
        </div>

      </div>

      <div className='imageinfocontainer'>
        {/* <span className='manufacturerholdertitle'>{title}</span>
        <span className='work'>{type}</span> */}
        <div className='lined'>
          <Border first={"Office"} second={"0983078383"} />
          <Border first={"Cell"} second={"0983078383"} />
          <Border first={"Email"} second={"kalabtezera@gmail.com"} />

        </div>
        <div className="linker">
          <Link to={`/manufacturer/${title}`} className="link">
            <span className='link'>
              View Products
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
