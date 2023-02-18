import React, { useEffect, useState } from 'react'
// Icon class
import Rooms from "../../../../example/rooms"
// image container
import ImageBox from '../../../../example/imagebox'
// Items class 
import Pictured from "../../../../example/item/pictured"
// csss class
import "../../../../styles/pages/firms/firm/indivfirm.scss"
// mui 
import { LocationOn } from '@mui/icons-material'
import Border from '../../../../example/borderbottom'
import { useLocation } from 'react-router'

import { firmdata } from "../data/firms.js"
export default function Firm() {
  const location = useLocation()
  const [firm, setFirm] = useState({});
  const id = location.pathname.split("/")[2]
  // console.log(id)
  useEffect(() => {
    const somethings = () => {
      firmdata.map((item) => {
        if (id.split("%")[0] === item.name.split(" ")[0]) {
          setFirm(item)
        }
      })
    }
    somethings();
  }, [])

  // console.log(firm);
  const style = {
    width: "30%",
    height: "28%",
    display: "flex",
    backgroundColor: "blue",
    flexDirection: "column"
  }
  return (
    <div className='individualfirm'>
      <div className='firmheader'>
        <img src={firm.img} />
        <div className='firminforight'>
          <div className='firmimagecontainer'>
            <ImageBox src={firm.img} />
          </div>
          <div className='imageheaders'>
            <div className='insideheaders'>
              <span className='titlefirm'>{firm.name}</span>
              <span className='link'>See all reviews</span>
              <Rooms icons={<LocationOn style={{ fontSize: "12px" }} />} number={"1611 Michigan Ave, Miami Beach, FL 33139"} />
            </div>
            <div className='lowerdetails'>
              <div className='llicence'>
                <span className='bolder'>License:</span>
                <span> US-123-456-5463</span>
              </div>
              <div className='llicence'>
                <span className='bolder'>License:</span>
                <span> US-123-456-5463</span>
              </div>
              <div className='buttons'>
                <button >
                  Send email
                </button>
                <button >
                  Call
                </button>

              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='insideindiv'>

        <div className='firmmiddle'>
          <div className='aboutfirm'>
            <div className='infocontainer'>
              <span className='infotilte'> About {firm.name}</span>
              <p>Nulla sed ligula tincidunt, posuere tellus quis, cursus risus. Duis sed luctus elit, at faucibus enim. Vestibulum libero mi, rhoncus et sodales eu, hendrerit non eros. Mauris laoreet, ante id fermentum volutpat, elit mauris sollicitudin orci, vel imperdiet turpis lacus sit amet ipsum. Vestibulum ultrices, ex at congue vehicula, ipsum orci bibendum nunc, at vestibulum nisl justo sit amet orci. Aenean vitae congue magna. Duis dapibus tincidunt felis, in hendrerit lorem cursus sit amet. Quisque dapibus, lorem a vestibulum scelerisque, ligula nisl placerat turpis, eu venenatis sapien dolor in quam. Ut eu tortor sollicitudin leo sodales pharetra. Nulla eget posuere arcu.</p>
              <p>Vivamus vel lacus lacinia, condimentum nunc non, iaculis diam. Proin in mollis augue, eget fermentum quam. Donec semper purus ut ante tempus gravida. Quisque et ante orci. Sed venenatis turpis mi, non varius justo scelerisque id. Maecenas fermentum nunc sed maximus efficitur. Pellentesque nec turpis viverra, cursus ex porta, porttitor odio. In gravida ante nec eleifend commodo. Cras gravida interdum nisl, vel venenatis nisl consectetur ut. Duis in erat quis dui imperdiet pretium et eu purus. Fusce purus ex, placerat et eros quis, lacinia tempor ligula. Mauris eu efficitur ligula. Sed scelerisque, elit nec condimentum ullamcorper, sem enim commodo ligula, ut porttitor purus turpis ut sem. Ut vehicula velit nec lorem tempus, hendrerit aliquam sapien lacinia. Aenean quis efficitur odio.</p>
              <p>Vivamus quis ligula nec diam fermentum molestie ut ut dolor. In congue, neque quis fermentum tincidunt, metus augue viverra tortor, quis placerat ex sem ac turpis. Vivamus nec molestie sapien. Maecenas aliquet sit amet odio et ornare. Suspendisse pharetra nibh dictum sapien rutrum tempus. Nullam nec maximus nunc. Fusce ultrices nibh id ornare rhoncus. Curabitur sit amet ornare sapien.</p>
            </div>
          </div>
          <div className='contactfirm'>
            <div className='containing'>
              <span className='contacttilte'>Contact</span>
              <div className='contactimage'>
                <ImageBox src={firm.img} />
              </div>
              <Rooms icons={<LocationOn style={{ fontSize: "12px" }} />} number={"1611 Michigan Ave, Miami Beach, FL 33139"} />
              <div className='website'>
                <Border first={"Office"} second={"098 307 8383"} />
                <Border first={"Cell"} second={"098 307 8383"} />
                <Border first={"Email"} second={"kalabtezera@gmail.com"} />
                <Border first={"Website"} second={"https://niddf.com/"} />
              </div>
            </div>
          </div>

        </div>
        <div className='firmbottom'>
          <span className='projectstitle'>Projects</span>
          <div className='firmprojects'>
            <Pictured style={style} />
            <Pictured style={style} />
            <Pictured style={style} />
            <Pictured style={style} />
          </div>



        </div>
      </div>
    </div>
  )
}
