import React from 'react'
// css class
import "../../../styles/pages/manufacturer/manu.scss"
//mui 
import { TextField } from '@mui/material';
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
// header
import Locator from "../../../example/locator"
// Manufacturer outlook
import ManuCard from './card'
// colored boxes for the catagories
import ColoredBox from "../../../example/coloredBox"
// data used for the firm
import { manData } from './data'
export default function Manufacturers() {
  return (
      <div className='manufacturer'>
      <div className='insidemanufacturer'>
        <div className='header'>
          <Locator header={"Home"} icon={"kj"} />
          <Locator span={"Manufacturers"} />
        </div>
        <span className='manufacturerttilte'>Manufacturers</span>
        <div className='multiplemanufacturer'>
          <div className='leftpartmanufacturer'>
            <div className='singelmanufacturercontainer'>
              {manData.map((item, index) => (
                <div className="singualrmanufacturer" key={index + 23}>
                  <ManuCard title={item.name} type={item.work} image={item.img} />
                </div>
              ))}

            </div>
          </div>
          <div className='rightpartmanufacturer'>
            <span className='searchheader'>Find Manufacturer</span>
            <div className='handlers'>

              <TextField
                size="small"
                className="textfield"
                label="Manufacturer Name"
                variant='outlined'
              />
              <FormControl size="small" className="textfield">
                <InputLabel >Select Manufacturer type</InputLabel>
                <Select
                className='textfield'
                  // size='small'
                  value=""
                  label="Manufacturer"
                  // onChange={(e) => setAccount(e.target.value)}
                  required
                  // width="100px"
                >
                  <MenuItem value="General Contractors">General Contractors</MenuItem>
                  <MenuItem value="Finishing">Finishing</MenuItem>
                  <MenuItem value="Architecture / Design Manufacturer">Architecture / Design Manufacturer</MenuItem>

                </Select>
              </FormControl>
              <button>Search</button>
            </div>
            <span className='searchheader'>Catagories</span>
            <div className='manufacturercatagories'>
                <ColoredBox span={"Decoration & Accessories"}  width={"140px"} margin={ "10px 7px"}  />
                <ColoredBox span={"Furniture"}  width={"90px"} margin={ "10px 7px"} />
                <ColoredBox span={"Kitchen & Baths"}  width={"90px"} margin={ "10px 7px"} />
                <ColoredBox span={"Lighting"}  width={"140px"} margin={ "10px 5px"}  />
                <ColoredBox span={"Material"}  width={"140px"} margin={ "10px 7px"}  />
                <ColoredBox span={"Painting"}  width={"140px"} margin={ "10px 7px"}  />
                <ColoredBox span={"Roofing & Gutter"}  width={"140px"} margin={ "10px 7px"}  />
                <ColoredBox span={"Wall & Floor"}  width={"90px"} margin={ "10px 7px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
