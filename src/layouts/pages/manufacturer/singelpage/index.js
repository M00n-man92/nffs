import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Icon class
import Rooms from "../../../../example/rooms"
// image container
import ImageBox from '../../../../example/imagebox'
// Items class 
import Pictured from "../../../../example/item/pictured"
// csss class
import "../../../../styles/pages/manufacturer/singelpage/singlepage.scss"
// mui 
import { FacebookOutlined, Grade, Instagram, Google, Info, LinkedIn, LocationOn, Pinterest, ReportProblem, Share, Star, StarBorderOutlined, StarOutlineSharp, Twitter, YouTube } from '@mui/icons-material'
import Border from '../../../../example/borderbottom'
import { useLocation } from 'react-router'

import { manData } from "../data"
import HeaderNavLink from '../../../../example/headerNavLinks'
import { TextField } from '@mui/material'
export default function ManufacturerPage() {
  const location = useLocation()
  const [manufacturer, setManufacturer] = useState({});

  /// just a list im gong to use as a for looop
  const loop = [0, 1, 2, 3, 4];
  const people = 95800
  let peopleholder;
  if (people.toString().split("").length > 5) {
    peopleholder = people.toString().split("")[0] + people.toString().split("")[1] + people.toString().split("")[2] + "k";
  }
  else if (people.toString().split("").length > 4) {
    peopleholder = people.toString().split("")[0] + people.toString().split("")[1] + "k";
  }
  console.log()
  // function that runs when the page is loaded to get the username or Id of the manufacturer from the url
  const id = location.pathname.split("/")[2]
  useEffect(() => {
    const somethings = () => {
      manData.map((item) => {
        if (id.split("%")[0] === item.name.split(" ")[0]) {
          setManufacturer(item)
        }
      })
    }
    somethings();
  }, [])

  // vars and functions to use for the stars 
  const [isPressed, setMsPressed] = useState(0)
  // Todo A function here to add the review from the user to the manufacturer and save it
  // changes the catagories from roduct, projects ot materials
  const pagechanger = [{ name: "Project", value: 0 }, { name: "Product", value: 1 }, { name: "Material", value: 2 }]
  const [projectChanger, setMrojectChanger] = useState("Project");

  // console.log(manufacturer);
  const style = {
    width: "30%",
    height: "28%",
    display: "flex",
    backgroundColor: "blue",
    flexDirection: "column"
  }
  return (
    <div className='individualmanufacturerpage'>
      <div className='manufacturerheader'>
        <img src={manufacturer.img} alt="" />
        <div className='manufacturerinforight'>
          <div className='manufacturerimagecontainer'>
            <ImageBox src={manufacturer.img} />
          </div>
          <div className='imageheaders'>
            <div className='insideheaders'>
              <span className='titlemanufacturer'>{manufacturer.name}</span>
              <span className='link'>manufacturer type General Contractors</span>
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
              {/* <div className='follow'>
                <button >
                  Follow
                </button>
              </div> */}
            </div>
          </div>
        </div>

      </div>


      <div className='amnufacturerinsideindiv'>
        {/* hellow oweld */}
        <div className='manufacturernavigation'>

          <HeaderNavLink text={"About us"} idlink={"about"} icon={<Info style={{ color: "#999999", fontSize: "16px" }} />} />
          <HeaderNavLink text={"Rating"} idlink={"rating"} icon={<Grade style={{ color: "#999999", fontSize: "16px" }} />} />
          <HeaderNavLink text={"Products"} idlink={"products"} icon={<Info style={{ color: "#999999", fontSize: "16px" }} />} />
          <HeaderNavLink text={"Projects"} idlink={"projects"} icon={<Info style={{ color: "#999999", fontSize: "16px" }} />} />
          <HeaderNavLink text={"Share"} idlink={"share"} icon={<Share style={{ color: "#999999", fontSize: "16px" }} />} />
          <HeaderNavLink text={"Report"} idlink={"report"} icon={<ReportProblem style={{ color: "#999999", fontSize: "16px" }} />} />

        </div>


        <div className='manufacturerprojectslists' id='projects'>

          <div className='manufacturerlistscontainer'>
            <div className='listingbuttons'>
              {pagechanger.map((item, index) => (
                <button key={index + 23} className={projectChanger === item.name ? 'productsbutton on' : "productsbutton"} value={0} onClick={((e) => { setMrojectChanger(item.name) })}>{item.name} (5)</button>
              ))}
            </div>
            <span className='manufacturerprojectsheadertitle'>{projectChanger}</span>
            <div className='manufacturerprojectslayout'>
              {loop.map(() => (
                <Link to="/project/:projectnameorid" className='link'>
                  <div className='individualmanufacturerprojects'>
                    <div className='imageanimation'>
                      <img src={manufacturer.img} alt="" />

                    </div>

                    <div className='manufacturerindivinfo'>
                      <span>name</span>
                      <span>details</span>
                    </div>
                  </div>
                </Link>))}
            </div>
          </div>
          <div className='manufacturerprojecstsisde'>
            <div className='manufacturerratingstars'>
              <div className='manufacturercircularpic'>
                <img className='circularimage' src={manufacturer.img} alt="" />
              </div>
              <div className='ratingstars'>
                {/* Todo  server should compute if the user has a new vote or is updating an older vote 
                    and for the manufacturer sake the comupted votes should be 4 untill the voters reach atleast a 100
                */}
                {isPressed >= 1 ? <Star className="star pressed" onClick={(e) => { setMsPressed(1) }} /> : <StarOutlineSharp className='star' onClick={(e) => { setMsPressed(1) }} />}
                {isPressed >= 2 ? <Star className="star pressed" onClick={(e) => { setMsPressed(2) }} /> : <StarOutlineSharp className='star' onClick={(e) => { setMsPressed(2) }} />}
                {isPressed >= 3 ? <Star className="star pressed" onClick={(e) => { setMsPressed(3) }} /> : <StarOutlineSharp className='star' onClick={(e) => { setMsPressed(3) }} />}
                {isPressed >= 4 ? <Star className="star pressed" onClick={(e) => { setMsPressed(4) }} /> : <StarOutlineSharp className='star' onClick={(e) => { setMsPressed(4) }} />}
                {isPressed >= 5 ? <Star className="star pressed" onClick={(e) => { setMsPressed(5) }} /> : <StarOutlineSharp className='star' onClick={(e) => { setMsPressed(5) }} />}
                <span className='ratingspan'>{people > 999 ? peopleholder : people}</span>
              </div>

            </div>
            <div className='followingsection'>
              <span className='manufacturertitle'>{manufacturer.name}</span>
              {/* Todo it should be known as the user logs in that whether he/she follows the manufacturer maybe on serverside or */}

              {false ? <button className='followmanufacturer'>Follow</button> : <div className='useralreadyfollows'>
                <button className='followingmanufacturer'>Following</button>
                <button className='unfollowmanufacturer'>UnFollow</button>
              </div>}
            </div>
            <div className='listofdetails'>
              <Border first={"Projects"} second={"73"} />
              <Border first={"Products"} second={"2"} />
              <Border first={"Materials"} second={"23"} />
              <Border first={"Followers"} second={"1M"} />
              <Border first={"Following"} second={"45"} />
            </div>
          </div>
        </div>


        <div className='manufacturermiddle'>
          <div className='aboutmanufacturer' id='about'>
            <div className='infocontainer'>
              <span className='infotilte'> About {manufacturer.name}</span>
              <p>Nulla sed ligula tincidunt, posuere tellus quis, cursus risus. Duis sed luctus elit, at faucibus enim. Vestibulum libero mi, rhoncus et sodales eu, hendrerit non eros. Mauris laoreet, ante id fermentum volutpat, elit mauris sollicitudin orci, vel imperdiet turpis lacus sit amet ipsum. Vestibulum ultrices, ex at congue vehicula, ipsum orci bibendum nunc, at vestibulum nisl justo sit amet orci. Aenean vitae congue magna. Duis dapibus tincidunt felis, in hendrerit lorem cursus sit amet. Quisque dapibus, lorem a vestibulum scelerisque, ligula nisl placerat turpis, eu venenatis sapien dolor in quam. Ut eu tortor sollicitudin leo sodales pharetra. Nulla eget posuere arcu.</p>
              <p>Vivamus vel lacus lacinia, condimentum nunc non, iaculis diam. Proin in mollis augue, eget fermentum quam. Donec semper purus ut ante tempus gravida. Quisque et ante orci. Sed venenatis turpis mi, non varius justo scelerisque id. Maecenas fermentum nunc sed maximus efficitur. Pellentesque nec turpis viverra, cursus ex porta, porttitor odio. In gravida ante nec eleifend commodo. Cras gravida interdum nisl, vel venenatis nisl consectetur ut. Duis in erat quis dui imperdiet pretium et eu purus. Fusce purus ex, placerat et eros quis, lacinia tempor ligula. Mauris eu efficitur ligula. Sed scelerisque, elit nec condimentum ullamcorper, sem enim commodo ligula, ut porttitor purus turpis ut sem. Ut vehicula velit nec lorem tempus, hendrerit aliquam sapien lacinia. Aenean quis efficitur odio.</p>
              <p>Vivamus quis ligula nec diam fermentum molestie ut ut dolor. In congue, neque quis fermentum tincidunt, metus augue viverra tortor, quis placerat ex sem ac turpis. Vivamus nec molestie sapien. Maecenas aliquet sit amet odio et ornare. Suspendisse pharetra nibh dictum sapien rutrum tempus. Nullam nec maximus nunc. Fusce ultrices nibh id ornare rhoncus. Curabitur sit amet ornare sapien.</p>
            </div>
          </div>
          <div className='contactmanufacturer'>
            <div className='containing'>
              <span className='contacttilte'>Contact</span>
              <div className='contactimage'>
                <ImageBox src={manufacturer.img} />
              </div>
              <Rooms icons={<LocationOn style={{ fontSize: "12px" }} />} number={"1611 Michigan Ave, Miami Beach, FL 33139"} />
              <div className='website'>
                <Border first={"Office"} second={"098 307 8383"} />
                <Border first={"Cell"} second={"098 307 8383"} />
                <Border first={"Email"} second={"kalabtezera@gmail.com"} />
                <Border first={"Website"} second={"https://niddf.com/"} />
              </div>
              <div className='findonsocials'>
                <span className='manufacturersocialstitlte'>you can find {manufacturer.name} on</span>
                <div className='manufacturersocialhandles'>
                  <FacebookOutlined className='facebook'/>
                  <Instagram className='insta'/>
                  <Twitter className='twitter'/>
                  <LinkedIn className='linkedin'/>
                  <Google className='googs'/>
                  <YouTube className='yt'/>
                  <Pinterest className='pindabest'/>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='manufacturerreport'>
          <div className='leftsidereport'>
            <div className='emailer'>
              <span>Send a message to {manufacturer.name}</span>
              <div className='messagesendingfields'>
                <div className='singlefield'>
                  <span>your Email</span>
                  <TextField variant="standard" />


                </div>
                <div className='singlefield'>
                  <span>Subject</span>
                  <TextField variant="standard" />


                </div>
                <div className='singlefield'>
                  <span>Message</span>
                  <TextField
                    multiline
                    rows={4} />

                </div>
                <button className='emailerbutton'> Send Message</button>
              </div>
            </div>
          </div>
          <div className='rightsidereport'></div>
        </div>

      </div >
    </div >
  )
}
