import React from 'react'
import { useState } from 'react'
// css class
import "../../../styles/display/property/property.scss"
// links at the top of the page
import Locator from "../../../example/locator"
// iconBoxes
import IconBox from "../../../example/iconBox"
// property type boxes
import ColoredBox from "../../../example/coloredBox"
// rooms on the overview part
import Rooms from "../../../example/rooms"
// mui Icons
import { AccountCircle, CheckCircleOutline, Today, SingleBed, SquareFoot, Shower, LocationOn, FavoriteBorder, ShareOutlined, NavigateNext, PrintOutlined, NavigateBefore, Garage, InsertDriveFileSharp } from '@mui/icons-material'
///
import { TextField } from '@mui/material'
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Property() {
  // opens the dexcriptions for the floors
  const [descOpen, setDescOpen] = useState(false);
  // changes the bigger image to which ever was pressed
  // const [biggerImg, setBiggerImg] = useState("")
  return (
    <div className='property'>
      <div className='inside'>

        <div className='locator'>
          <div className='multipleloc'>
            <Locator header={"Home"} icon={<NavigateNext style={{ fontSize: "14px", color: "#00aeff" }} />} />
            <Locator header={"Home"} icon={<NavigateNext style={{ fontSize: "14px", color: "#00aeff" }} />} />
            <Locator header={"Home"} icon={<NavigateNext style={{ fontSize: "14px", color: "#00aeff" }} />} />
            <Locator header={"Home"} icon={<NavigateNext style={{ fontSize: "14px", color: "#00aeff" }} />} />
          </div>
          <div className='favorite'>
            <IconBox icon={<FavoriteBorder style={{ fontSize: "18px" }} />} />
            <IconBox icon={<ShareOutlined style={{ fontSize: "18px" }} />} />
            <IconBox icon={<PrintOutlined style={{ fontSize: "18px" }} />} />
          </div>
        </div>
        <div className='header'>
          <div className='title'>
            <h3>Single Family Home</h3>
            <div className='typebox'>
              <ColoredBox span={"For Sell"} />
              <ColoredBox span={"For Rent"} />
            </div>


          </div>
          <div className='headerprice'>
            <h3>670,000.00</h3>
            <span>1,300.00/mo</span>
          </div>
        </div>
        <div className='gps'>
          <LocationOn style={{ fontSize: "18px", fontFamily: "Bellota-Light" }} />
          <span>3001 W Ainslie St, Chicago, IL 60625, USA</span>
        </div>
        <div className='divided'>
          <div className='leftside'>
            <div className='imagecontainer'>
              <div className='bigger'>
                {/* TODO after receiveing the images as an array it should show the first unless the bottom images are pressed*/}

                <img src='https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg' alt='' />

                <div className='left'>
                  <NavigateBefore style={{ color: "white", fontSize: "22px" }} />
                </div>
                <div className='right'>
                  <NavigateNext style={{ color: "white", fontSize: "22px" }} />
                </div>
              </div>
              <div className='smaller'>
                <div className='swipper'>
                  <div className='individual' onClick={(e) => {/* should chage the biggerImage with item */ console.log("imgage") }}>
                    <img src='https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg' alt='' />
                  </div>
                  <div className='individual'>
                    <img src='https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg' alt='' />
                  </div>
                  <div className='individual'>
                    <img src='https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg' alt='' />
                  </div>
                  <div className='individual'>
                    <img src='https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg' alt='' />
                  </div>
                  <div className='individual'>
                    <img src='https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg' alt='' />
                  </div>

                  <div className='individual'>
                    <img src='https://i.pinimg.com/564x/22/af/de/22afde433de829005765ad3f4b0199c0.jpg' alt='' />
                  </div>
                </div>
              </div>
            </div>
            <div className='overview'>
              <div className='propertyID'>
                <h3>Overview</h3>
                <div className='id'>
                  <h3>property ID:</h3>
                  <span>NLHZ33</span>
                </div>
              </div>
              <div className='propertyType'>
                <div className='Ptype'>
                  <h3>Multi Family Home</h3>
                  <span>Property Type</span>
                </div>
                <div className='roomicons'>
                  <Rooms icons={<SingleBed />} title={"Bedrooms"} number={4} />
                  <Rooms icons={<Shower />} title={"Toilets"} number={2} />
                  <Rooms icons={<Garage />} title={"Garages"} number={1} />
                </div>
              </div>
            </div>
            <div className='description'>
              <div className='disc'>
                <h3>Description</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

              </p> <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.

              </p>
              <div className='documents'>
                <h3>Property Documents</h3>
              </div>
              <div className='downloadable'>
                <div className='plans'>
                  <InsertDriveFileSharp style={{ fontSize: "18px" }} />
                  <span>plan-2</span>
                </div>
                <span>Downlaod</span>
              </div>
            </div>
            <div className='details'>
              <div className='detailtitle'>
                <h3>
                  Details
                </h3>
                <div className='detailupdated'>
                  <Today style={{ fontSize: "12px", fontFamily: "Bellota-Light" }} />
                  <span>Updated on March 20, 2022 at 3:37 pm</span>
                </div>
              </div>
              <div className='detailbox'>
                <div className='boxdetails'>
                  <div className='singledetail'>
                    <h3>Property ID:</h3>
                    <span>NLHZ33</span>
                  </div>
                  <div className='singledetail'>
                    <h3>Price:</h3>
                    <span>670,000.00</span>
                  </div><div className='singledetail'>
                    <h3>Bedrooms:</h3>
                    <span>4</span>
                  </div>
                  <div className='singledetail'>
                    <h3>Bathrooms</h3>
                    <span>2</span>
                  </div>
                  <div className='singledetail'>
                    <h3>Garage:</h3>
                    <span>1</span>
                  </div>
                  <div className='singledetail'>
                    <h3>Bedrooms:</h3>
                    <span>200 SqFt</span>
                  </div>
                  <div className='singledetail'>
                    <h3>Year Built:</h3>
                    <span>Apartment, Building, Condominium, Multi Family Home, Office, Single Family Home, Studio, Villa</span>
                  </div>
                  <div className='singledetail'>
                    <h3> Property Status:</h3>
                    <span>For Sale</span>
                  </div>

                </div>

              </div>
              <div className='detailtitle'>
                <h3>Additonal Details</h3>
              </div>
              <div className='aditonal'>
                <div className='singleaditonal'>
                  <h3>Deposit:</h3>
                  <span>20%</span>
                </div>
                <div className='singleaditonal'>
                  <h3>Pool Size:</h3>
                  <span>300 Sqft</span>
                </div>
                <div className='singleaditonal'>
                  <h3>Last remodel year:</h3>
                  <span>1987</span>
                </div>
                <div className='singleaditonal'>
                  <h3>Amenities:</h3>
                  <span>Clubhouse</span>
                </div>
                <div className='singleaditonal'>
                  <h3>Additional Rooms:</h3>
                  <span>Guest Bath</span>
                </div>
                <div className='singleaditonal'>
                  <h3>Equipment:</h3>
                  <span>Grill - Gas</span>
                </div>
              </div>
            </div>
            <div className='feature'>
              <div className='featuretitle'>
                <h3>
                  Feature
                </h3>
              </div>
              <div className='featureicons'>
                <div className='singularfeature'>
                  <Rooms icons={<CheckCircleOutline style={{ fontFamily: "Bellota-Light", fontSize: "13px" }} />} number={" Air Conditioning"} />
                </div>
                <div className='singularfeature'>
                  <Rooms icons={<CheckCircleOutline style={{ fontFamily: "Bellota-Light", fontSize: "13px" }} />} number={"   Elevator"} />
                </div>
                <div className='singularfeature'>
                  <Rooms icons={<CheckCircleOutline style={{ fontFamily: "Bellota-Light", fontSize: "13px" }} />} number={"   Gym"} />
                </div>
                <div className='singularfeature'>
                  <Rooms icons={<CheckCircleOutline style={{ fontFamily: "Bellota-Light", fontSize: "13px" }} />} number={"   Balcony"} />
                </div>
                <div className='singularfeature'>
                  <Rooms icons={<CheckCircleOutline style={{ fontFamily: "Bellota-Light", fontSize: "13px" }} />} number={"   Laundry"} />
                </div>
                <div className='singularfeature'>
                  <Rooms icons={<CheckCircleOutline style={{ fontFamily: "Bellota-Light", fontSize: "13px" }} />} number={"   Swimming Pool"} />
                </div>            <div className='singularfeature'>
                  <Rooms icons={<CheckCircleOutline style={{ fontFamily: "Bellota-Light", fontSize: "13px" }} />} number={"   WiFi"} />
                </div>            <div className='singularfeature'>
                  <Rooms icons={<CheckCircleOutline style={{ fontFamily: "Bellota-Light", fontSize: "13px" }} />} number={"   Laundry"} />
                </div>

              </div>

            </div>
            <div className={descOpen ? "floorplans bigger" : 'floorplans'}>
              <div className='floortitle'>
                <h3>
                  Floors
                </h3>
              </div>
              <div className='floor'>
                <div className='floortop' onClick={(e) => { setDescOpen(!descOpen) }}>
                  <h3>Second Floor</h3>
                  <div className='floordetail'>
                    <div className='floorsize'>
                      <span>Size:</span>
                      <h3> 1267 Sqft</h3>
                    </div>
                    <Rooms icons={<SingleBed />} number={"670 Sqft"} />
                    <Rooms icons={<Shower />} number={"670 Sqft"} />
                    <div className='floorsize'>
                      <span>Price:</span>
                      <h3> 1000000</h3>
                    </div>
                  </div>
                </div>
                <div className={descOpen ? "floordesc" : 'floordesc close'}>
                  <h3>Description:</h3>
                  <p>Plan description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </p>
                </div>

              </div>
              <div className='floor'>
                <div className='floortop' onClick={(e) => { setDescOpen(!descOpen) }}>
                  <h3>First Floor</h3>
                  <div className='floordetail'>
                    <div className='floorsize'>
                      <span>Size:</span>
                      <h3> 1267 Sqft</h3>
                    </div>
                    <Rooms icons={<SingleBed />} number={"670 Sqft"} />
                    <Rooms icons={<Shower />} number={"670 Sqft"} />
                    <div className='floorsize'>
                      <span>Price:</span>
                      <h3> 1000000</h3>
                    </div>
                  </div>
                </div>
                <div className={descOpen ? "floordesc" : 'floordesc close'}>
                  <h3>Description:</h3>
                  <p>Plan description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </p>
                </div>

              </div>
            </div>
          </div>
          <div className='rightside'>
            <div className='messenger'>
              <div className='topmessenger'>
                <img src='' alt="" />
                <div className='userinfo'>
                  <Rooms icons={<AccountCircle />} number={"Modern House Real Estate"} />
                  <span className='username'>View Listing</span>
                </div>
              </div>
              <div className='middle'>
                <TextField
                  style={{
                    height: "20%",
                    fontSize: "10px"
                  }}
                  size="small"
                  className="registertextfield"
                  label="Name"
                  variant='outlined'

                />
                <TextField
                  style={{
                    height: "20%",
                    fontSize: "10px"
                  }}
                  size="small"
                  className="registertextfield"
                  label="Phone"
                  variant='outlined'

                />
                <TextField
                  style={{
                    height: "20%",
                    fontSize: "10px"
                  }}
                  size="small"
                  className="registertextfield"
                  label="Email"
                  variant='outlined'

                />
                <TextField
                  style={{
                    // height: "20%",
                    fontSize: "10px"
                  }}
                  // size="small"
                  className="registertextfield"
                  label="Message"
                  variant='outlined'
                  multiline
                  rows={4}
                />
                <FormControl size="small" className="registertextfield">
                  <InputLabel >Select your account type</InputLabel>
                  <Select

                    value=""
                    label="Coffee Profile"
                    required
                  >
                    <MenuItem value="Agent">Agent</MenuItem>
                    <MenuItem value="Agency">Agency</MenuItem>
                    <MenuItem value="Buyer">Buyer</MenuItem>
                    <MenuItem value="Seller">Seller</MenuItem>
                  </Select>
                </FormControl>
                <div className="messengercheck">
                  <FormControlLabel control={<Checkbox style={{ fontSize: "13px", fontFamily: "Bellota-Light" }} />} label="By submitting this form I agree to " style={{ fontSize: 13, fontFamily: "Bellota-Light" }} />
                  <a href="https://realestate.niddf.com/" >Terms of Use</a>
                </div>
              </div>
              <div className='messengerbottom'>
                <button>Send Message</button>
                <button>Call</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
