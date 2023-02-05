import React, { useState } from 'react'
/// css class
import "../../../styles/display/search/search.scss";
/// matertial ui
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function Search() {
  // clicked change the color of the headers
  const headers = ["All Status", "For Rent", "For Sale"]
  const [pressedHeader, setPressedHeader] = useState(0);
  // select options for cities
  const cities = ["Addis Ababa",
    " - Akaki",
    " - Alemgena",
    " - Legetafo",
    " - Sebeta",
    " - Sendafa",
    "Ambo",
    "Bahirdar",
    "Burayu",
    "Debre Markos",
    "Debrezeit (Bishoftu)",
    "Dese",
    "Dire Dawa",
    "Dukem", "Gambela",
    "Hawassa",
    "Langano",
    "Mizan Teferi", "Mojo",
    "Nazret (Adama)",
    "Shashemene", "Sululta", "Zeway"]
  const properties = ["Building",
    "Commercial", " - Office",
    " - Shop", "Land",
    "Residential", " - Apartment",
    " - Condominium", " - Multi Family Home",
    " - Single Family Home", " - Studio",
    " - Villa", "Store"]
  const propertystatus = ["For Rent", "For Sale",
    "Foreclosures", "New Listing",
    "On Construction", "Open House",
    "Reduced Price", "Resale"
  ]
  const [pro, setPro] = useState("");
  const [city, setCity] = useState("");
  return (
    <div className='search'>
      <div className='header'>
        {headers.map((items, index) => (
          <div
            className='container'
            key={index+90}
            style={pressedHeader===index?{backgroundColor:"white",color:"black"}:{cursor: "pointer"}}
            onClick={(e)=>{setPressedHeader(index)}}
          >
            
            <span>
              {items}
            </span>

          </div>
        ))}
      </div>
      <div className='box'>
        <div className='items'>
          <span> Cities</span>
          <FormControl size="small" className="selector">
            <InputLabel >All Cities</InputLabel>
            <Select

              value={city}
              label="All Cities"
              onChange={(e) => setCity(e.target.value)}
              required
            >
              {cities.map((items, index) => (
                <MenuItem value={items} key={index + 77}>{items}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='items'>
          <span> Property Type</span>
          <FormControl size="small" className="selector">
            <InputLabel >All Types</InputLabel>
            <Select

              value={pro}
              label="Coffee Profile"
              onChange={(e) => setPro(e.target.value)}
              required
            >
              {properties.map((items, index) => (
                <MenuItem value={items} key={index + 33}>{items}</MenuItem>
              ))}
              <MenuItem value="Building">Building</MenuItem>
              <MenuItem value="Commercial">Commercial</MenuItem>
              <MenuItem value=" - Office"> - Office</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='items'>
          <span> Property Status</span>
          <FormControl size="small" className="selector">
            <InputLabel >All Status</InputLabel>
            <Select

              value={pro}
              label="Search"
              onChange={(e) => setPro(e.target.value)}
              required
            >
              {propertystatus.map((items, index) => (
                <MenuItem value={items} key={index + 33}>{items}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='items'>
          <span> Max Price</span>
          <FormControl size="small" className="selector">
            <InputLabel >Max</InputLabel>
            <Select

              value={pro}
              label="Search"
              onChange={(e) => setPro(e.target.value)}
              required
            >
              {propertystatus.map((items, index) => (
                <MenuItem value={items} key={index + 33}>{items}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='items'>
          <span></span>
          <button> Search </button>
        </div>
      </div>
    </div>
  )
}
// 