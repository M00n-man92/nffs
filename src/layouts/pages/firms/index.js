import React from 'react'
// css class
import "../../../styles/pages/firms/firms.scss"
// header icons
//mui 
import { TextField } from '@mui/material';
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
// header
import Locator from "../../../example/locator"
// firm outlook
import SingleFirm from './individual'
// colored boxes for the catagories
import ColoredBox from "../../../example/coloredBox"
// data used for the firm
import { firmdata } from './data/firms'
export default function Firms() {
  return (
    <div className='firms'>
      <div className='insidefirms'>
        <div className='header'>
          <Locator header={"Home"} icon={"kj"} />
          <Locator span={"Firms"} />
        </div>
        <span className='firmsttilte'>Firms</span>
        <div className='multiplefirms'>
          <div className='leftpartfirm'>
            <div className='singelfirmcontainer'>
              {firmdata.map((item, index) => (
                <div className="singualrfirm" key={index + 23}>
                  <SingleFirm title={item.name} type={item.work} image={item.img} />
                </div>
              ))}

            </div>
          </div>
          <div className='rightpartfirm'>
            <span className='searchheader'>Find Firms</span>
            <div className='handlers'>

              <TextField
                size="small"
                className="textfield"
                label="Firm Name"
                variant='outlined'
              />
              <FormControl size="small" className="textfield">
                <InputLabel >Select firm type</InputLabel>
                <Select
                className='textfield'
                  // size='small'
                  value=""
                  label="Firm"
                  // onChange={(e) => setAccount(e.target.value)}
                  required
                  // width="100px"
                >
                  <MenuItem value="General Contractors">General Contractors</MenuItem>
                  <MenuItem value="Finishing">Finishing</MenuItem>
                  <MenuItem value="Architecture / Design Firm">Architecture / Design Firm</MenuItem>

                </Select>
              </FormControl>
              <button>Search</button>
            </div>
            <span className='searchheader'>Catagories</span>
            <div className='firmcatagories'>
                <ColoredBox span={"Architecture / Design Firm"}  width={"140px"} margin={ "10px 7px"}  />
                <ColoredBox span={"Engineering"}  width={"90px"} margin={ "10px 7px"} />
                <ColoredBox span={"Finishing"}  width={"90px"} margin={ "10px 7px"} />
                <ColoredBox span={"General Contractors"}  width={"140px"} margin={ "10px 5px"}  />
                <ColoredBox span={"Graphics & Animation"}  width={"140px"} margin={ "10px 7px"}  />
                <ColoredBox span={"Landscape Architecture"}  width={"140px"} margin={ "10px 7px"}  />
                <ColoredBox span={"Photography Studio"}  width={"140px"} margin={ "10px 7px"}  />
                <ColoredBox span={"Plannig"}  width={"90px"} margin={ "10px 7px"} />
                <ColoredBox span={"Security"}  width={"90px"} margin={ "10px 7px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
