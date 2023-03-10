import React, { useState } from 'react'
// css class
import "../../../styles/pages/products/pageproducts.scss"
// location identifier
import Locator from "../../../example/locator"
// cards layout
import SellingProductsCard from '../../../example/sellingproducts'
// data
import { data } from "./data";
import Border from '../../../example/borderbottom';
import { MinimizeOutlined, Add, Search } from '@mui/icons-material';
//
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function Products() {
  // sort select 
  const [sort, setSort] = useState("");
  // checkbox controllers that app
  const [cataPressed, setCataPressed] = useState(false);
  const [conditionPressed, setConditionPressed] = useState(false);
  const [typePressed, setTypePressed] = useState(false)
  const [warrentyPressed, setWarrentyPressed] = useState(false)
  const [searchPressed, setSearchPressed] = useState(false)

  return (
    <div className='pageproducts'>
      <div className='insidepageproducts'>
        <div className='leftsideofthepage'>
          <div className='pagelocator'>
            <Locator header={"Home"} icon={"kj"} />
            <Locator span={"Products"} />
          </div>
          <div className='pageheaderandsort'>
            <h4>Products</h4>
            <div className='sortpage'>
              <span>Sort By:</span>
              <FormControl sx={{ m: 1, minWidth: "60%" }}>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  size="small"
                >
                  <MenuItem value="">
                    {sort ? <em>{sort}</em> : <em>Newest to Oldest</em>}

                  </MenuItem>
                  <MenuItem value="Newest to Oldest" onClick={(e) => setSort(e.target.value)}><span style={{ fontSize: "14px", fontFamily: "Bellota-Light" }}>Newest to Oldest</span></MenuItem>
                  <MenuItem value="Oldest to Newest" onClick={(e) => setSort(e.target.value)}><span style={{ fontSize: "14px", fontFamily: "Bellota-Light" }}>Oldest to Newest</span></MenuItem>
                  <MenuItem value="Price. High to Low" onClick={(e) => setSort(e.target.value)}><span style={{ fontSize: "14px", fontFamily: "Bellota-Light" }}>Price. High to Low</span></MenuItem>
                  <MenuItem value="Price. Low to High" onClick={(e) => setSort(e.target.value)}><span style={{ fontSize: "14px", fontFamily: "Bellota-Light" }}>Price. Low to High</span></MenuItem>

                </Select>
              </FormControl>
            </div>
          </div>

          <SellingProductsCard cards={data} linker="project" />
        </div>
        <div className='rightsideofthepage'>
          <div className='sellersidenav'>
            <span className='filterheader'>Filter</span>
            <div className='catasidenav'>
              <Border
                first={"Catagory"}
                second={
                  cataPressed
                    ?
                    <Add style={{ cursor: "pointer", }} onClick={(e) => setCataPressed(!cataPressed)} />
                    : <MinimizeOutlined style={{ cursor: "pointer", }} onClick={(e) => setCataPressed(!cataPressed)} />} />
              {cataPressed && <FormControl className='close' sx={{ m: 1 }} component="fieldset" variant="standard">
                <FormGroup
                >
                  <FormControlLabel
                    style={{ fontSize: "12", fontFamily: "Bellota-Light" }}

                    control={
                      <Checkbox checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Decoration & Accessories"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}
                      // className="checkbox"
                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Decoration & Accessories</span>}

                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Furniture"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}
                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Furniture</span>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Kitchen & Baths"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}

                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Kitchen & Baths</span>}


                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Lighting"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}

                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Lighting</span>}


                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Materials"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}

                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Materials</span>}


                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Painting"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}

                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Painting</span>}


                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Roofing & Gutter"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}

                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Roofing & Gutter</span>}


                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Wall & Floor"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}

                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Wall & Floor</span>}


                  />

                </FormGroup>

              </FormControl>}
            </div>
            <div className='catasidenav'>
              <Border
                first={"Condition"}
                second={
                  conditionPressed
                    ?
                    <Add style={{ cursor: "pointer", }} onClick={(e) => setConditionPressed(!conditionPressed)} />
                    : <MinimizeOutlined style={{ cursor: "pointer", }} onClick={(e) => setConditionPressed(!conditionPressed)} />} />
              {conditionPressed && <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                <FormGroup
                >
                  <FormControlLabel
                    style={{ fontSize: "12", fontFamily: "Bellota-Light" }}

                    control={
                      <Checkbox checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="New"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}
                      // className="checkbox"
                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>New</span>}

                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Used"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}
                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Used</span>}
                  />


                </FormGroup>

              </FormControl>}
            </div>
            <div className='catasidenav'>
              <Border
                first={"Type"}
                second={
                  typePressed
                    ?
                    <Add style={{ cursor: "pointer", }} onClick={(e) => setTypePressed(!typePressed)} />
                    : <MinimizeOutlined style={{ cursor: "pointer", }} onClick={(e) => setTypePressed(!typePressed)} />} />
              {typePressed && <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                <FormGroup>
                  <FormControlLabel
                    style={{ fontSize: "12", fontFamily: "Bellota-Light" }}

                    control={
                      <Checkbox checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Buy"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}
                      // className="checkbox"
                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Buy</span>}

                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Sell"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}
                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Sell</span>}
                  />
                  <FormControlLabel
                    style={{ fontSize: "12", fontFamily: "Bellota-Light" }}

                    control={
                      <Checkbox checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Exchange"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}
                      // className="checkbox"
                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Exchange</span>}

                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Lost & Found"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}
                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Lost & Found</span>}
                  />


                </FormGroup>

              </FormControl>}
            </div>
            <div className='catasidenav'>
              <Border
                first={"Warranty"}
                second={
                  warrentyPressed
                    ?
                    <Add style={{ cursor: "pointer", }} onClick={(e) => setWarrentyPressed(!warrentyPressed)} />
                    : <MinimizeOutlined style={{ cursor: "pointer", }} onClick={(e) => setWarrentyPressed(!warrentyPressed)} />} />
              {warrentyPressed && <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                <FormGroup>
                  <FormControlLabel
                    style={{ fontSize: "12", fontFamily: "Bellota-Light" }}

                    control={
                      <Checkbox checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Buy"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}
                      // className="checkbox"
                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Buy</span>}

                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Sell"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}
                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Sell</span>}
                  />
                  <FormControlLabel
                    style={{ fontSize: "12", fontFamily: "Bellota-Light" }}

                    control={
                      <Checkbox checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Exchange"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}
                      // className="checkbox"
                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Exchange</span>}

                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={(e) => { console.log(e.target.name) }}
                        name="Lost & Found"
                        style={{ transform: "scale(0.7)", width: "10px", height: "10px" }}
                      />
                    }
                    label={<span style={{ fontSize: "12px", fontFamily: "Bellota-Light" }}>Lost & Found</span>}
                  />


                </FormGroup>

              </FormControl>}
            </div>
            <div className='catasidenav'>
              <Border
                first={"Search"}
                second={
                  searchPressed
                    ?
                    <Add style={{ cursor: "pointer", }} onClick={(e) => setSearchPressed(!searchPressed)} />
                    : <MinimizeOutlined style={{ cursor: "pointer", }} onClick={(e) => setSearchPressed(!searchPressed)} />} />
              {searchPressed && <FormControl sx={{ m: 1, width: '90%' }} variant="outlined">
                <OutlinedInput
                size='small'
                  id="outlined-adornment-weight"
                  endAdornment={<InputAdornment position="end"><Search /></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  onChange={(e) => { console.log(e.target.value) }}
                />
              </FormControl>
              }
            </div>
            <div className='catasidenav'>
              <button style={{ width: "90%", height: "40px", marginBottom: "5%", backgroundColor: "#00aeff", color: "white", border: "none" }}> Search</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
