import React from 'react'
import { Link } from 'react-router-dom'
import Border from '../../../../example/borderbottom'
/// image container
import ImageBox from '../../../../example/imagebox'
//css claass
import "../../../../styles/pages/firms/singlefirm/singlefirm.scss"
export default function SingleFirm({ title, type, image }) {
  return (
    <div className="individualfirming">
      <div className='imagecontanier'>
        <ImageBox src={image} />
      </div>

      <div className='imageinfocontainer'>
        <span className='firmholdertitle'>{title}</span>
        <span className='work'>{type}</span>
        <div className='lined'>
          <Border first={"Office"} second={"0983078383"} />
          <Border first={"Cell"} second={"0983078383"} />
          <Border first={"Email"} second={"kalabtezera@gmail.com"} />

        </div>
        <div className="linker">
          <Link to={`/firm/${title}`} className="link">
          <span className='link'>
            View Projects
          </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
