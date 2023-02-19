import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
// Icon class
import Rooms from "../../../../example/rooms"
// image container
import ImageBox from '../../../../example/imagebox'
// Items class 
import Pictured from "../../../../example/item/pictured"
// csss class
import "../../../../styles/pages/firms/firm/indivfirm.scss"
// mui 
import { Grade, Info, LocationOn, ReportProblem, Share } from '@mui/icons-material'
import Border from '../../../../example/borderbottom'
import { useLocation } from 'react-router'

import { firmdata } from "../data/firms.js"
import HeaderNavLink from '../../../../example/headerNavLinks'
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

  // changes the catagories from roduct, projects ot materials
  const pagechanger = [{ name: "Project", value: 0 }, { name: "Product", value: 1 }, { name: "Material", value: 2 }]
  const [projectChanger, setProjectChanger] = useState("Project");

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
        <img src={firm.img} alt="" />
        <div className='firminforight'>
          <div className='firmimagecontainer'>
            <ImageBox src={firm.img} />
          </div>
          <div className='imageheaders'>
            <div className='insideheaders'>
              <span className='titlefirm'>{firm.name}</span>
              <span className='link'>firm type General Contractors</span>
              {/* <Rooms icons={<LocationOn style={{ fontSize: "12px" }} />} number={"1611 Michigan Ave, Miami Beach, FL 33139"} /> */}
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
              <div className='follow'>
                <button >
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className='insideindiv'>
        <div className='firmnavigation'>
          <HeaderNavLink text={"About us"} idlink={"about"} icon={<Info style={{ color: "#999999", fontSize: "16px" }} />} />
          <HeaderNavLink text={"Rating"} idlink={"rating"} icon={<Grade style={{ color: "#999999", fontSize: "16px" }} />} />
          <HeaderNavLink text={"Products"} idlink={"products"} icon={<Info style={{ color: "#999999", fontSize: "16px" }} />} />
          <HeaderNavLink text={"Projects"} idlink={"projects"} icon={<Info style={{ color: "#999999", fontSize: "16px" }} />} />
          <HeaderNavLink text={"Share"} idlink={"share"} icon={<Share style={{ color: "#999999", fontSize: "16px" }} />} />
          <HeaderNavLink text={"Report"} idlink={"report"} icon={<ReportProblem style={{ color: "#999999", fontSize: "16px" }} />} />

        </div>


        <div className='firmprojectslists' id='projects'>

          <div className='firmlistscontainer'>
            <div className='listingbuttons'>
              {pagechanger.map((item, index) => (
                <button key={index + 23} className={projectChanger === item.name ? 'productsbutton on' : "productsbutton"} value={0} onClick={((e) => { setProjectChanger(item.name) })}>{item.name} (5)</button>
              ))}
            </div>
            <span className='firmprojectsheadertitle'>{projectChanger}</span>
            <div className='firmprojectslayout'>
              
                {/* <div className='individualfirmprojects'>
                <Link to="/project/:projectnameorid" className='link'>
                  <div className='imageanimation'>
                    <img alt='' src={firm.img} />
                    <div className='traingle'></div>
                  </div>

                  <div className='firmindivinfo'>
                    <span>name</span>
                    <span>details</span>
                  </div>
                  </Link>
                </div> */}
              

              <Link to="/project/:projectnameorid" className='link'></Link>
              {/* <div className='individualfirmprojects'>
                <div className='imageanimation'>
                  <img src={firm.img} alt="" />
                  <div className='traingle'></div>
                </div>

                <div className='firmindivinfo'>
                  <span>name</span>
                  <span>details</span>
                </div>
              </div> */}
              
              <Link to="/project/:projectnameorid" className='link'>
                <div className='individualfirmprojects'>
                  <div className='imageanimation'>
                    <img src={firm.img} alt="" />

                  </div>

                  <div className='firmindivinfo'>
                    <span>name</span>
                    <span>details</span>
                  </div>
                </div>
              </Link><Link to="/project/:projectnameorid" className='link'>
                <div className='individualfirmprojects'>
                  <div className='imageanimation'>
                    <img src={firm.img} alt="" />

                  </div>

                  <div className='firmindivinfo'>
                    <span>name</span>
                    <span>details</span>
                  </div>
                </div>
              </Link><Link to="/project/:projectnameorid" className='link'>
                <div className='individualfirmprojects'>
                  <div className='imageanimation'>
                    <img src={firm.img} alt="" />

                  </div>

                  <div className='firmindivinfo'>
                    <span>name</span>
                    <span>details</span>
                  </div>
                </div>
              </Link><Link to="/project/:projectnameorid" className='link'>
                <div className='individualfirmprojects'>
                  <div className='imageanimation'>
                    <img src={firm.img} alt="" />

                  </div>

                  <div className='firmindivinfo'>
                    <span>name</span>
                    <span>details</span>
                  </div>
                </div>
              </Link>

              
                <div className='individualfirmprojects'>
                  <div className='imageanimation'>
                    <img src={firm.img} alt="" />

                  </div>

                  <div className='firmindivinfo'>
                    <span>name</span>
                    <span>details</span>
                  </div>
                </div>
           

              <Link to="/project/:projectnameorid" className='link'>
                <div className='individualfirmprojects'>
                  <div className='imageanimation'>
                    <img src={firm.img} alt="" />

                  </div>

                  <div className='firmindivinfo'>
                    <span>name</span>
                    <span>details</span>
                  </div>
                </div>
              </Link>

            </div>
          </div>
          <div className='firmprojecstsisde'>

          </div>
        </div>


        <div className='firmmiddle'>
          <div className='aboutfirm' id='about'>
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

      </div>
    </div>
  )
}
