import React, { useState } from 'react'
// css class
import "../../../styles/display/productList/productList.scss"
// material Ui
import { NavigateNext, NotificationsOutlined } from '@mui/icons-material'
import { MenuItem, FormHelperText, FormControl, Select, Button } from '@mui/material/';

import Item from './item'
export default function ProductList() {
  // var that changes the layout from grid to more pictured view
  const [layoutWrap, setLayoutWrap] = useState(false);
  const [layout, setLayout] = useState(true);
  // function to check if either one of them are true 
  const layoutChanger = () => {

    setLayout(true);
    setLayoutWrap(false);

  }
  return (

    <div className='productlist'>
      <div className='layer'>
        <div className='location'>
          <span>Home</span>
          <NavigateNext className="like" />
          <span>Search Results</span>
        </div>
        <div className='header'>
          <h3>
            Search Results
          </h3>
          {/* TODO div pressed changes the layout from detailed to piture oriented 
                    color also must change i.e by having a usestate var change to true
          */}
          <div className='layoutchanger'>
            <div className={!layoutWrap && layout ? 'detailed true' : "detailed"} onClick={(e) => { layoutChanger() }}>
              <div className='detailedsquares'>
                <div className='smaller'>

                </div>
                <div className='bigger'>

                </div>
              </div>
              <div className='detailedsquares'>
                <div className='smaller'>

                </div>
                <div className='bigger'>

                </div>
              </div>
              <div className='detailedsquares'>
                <div className='smaller'>

                </div>
                <div className='bigger'>

                </div>
              </div>
            </div>
            <div className={layoutWrap && !layout ? 'pictured true' : "pictured"} onClick={(e) => {
              setLayoutWrap(true)
              setLayout(false)
            }}>
              <div className='squares'>
                <div className='one'>

                </div>
                <div className='one'>

                </div>
              </div>
              <div className='squares'>
                <div className='one'>

                </div>
                <div className='one'>

                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='scrollers'>


          <div className='table'>
            <div className='searchresults'>
              <div className='found'>
                <span>52 Results Found
                </span>
              </div>
              <div className='sort'>
                <div className='sorting'>
                  <span>Sort By:</span>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={0}
                      onChange={(e) => { console.log("sort  is changed") }}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      sx={{ height: "40px" }}
                    >
                      <MenuItem value="">
                        <em>Default Order</em>
                      </MenuItem>
                      <MenuItem value="asc">Price - Low - Higt</MenuItem>
                      <MenuItem value="des">Price - High - Low</MenuItem>
                      <MenuItem value="new">Date - Old - New</MenuItem>
                      <MenuItem value="des">Date - New - Old</MenuItem>
                    </Select>
                  </FormControl>
                  <Button startIcon={<NotificationsOutlined style={{ color: "white" }} />}>Save Search</Button>
                </div>
              </div>
            </div>
            <div className={layoutWrap && !layout ? "rows wrap" : 'rows'}>
              <Item layoutWrap={layoutWrap} originalLayout={layout} />
              <Item layoutWrap={layoutWrap} originalLayout={layout} />
              <Item layoutWrap={layoutWrap} originalLayout={layout} />
              <Item layoutWrap={layoutWrap} originalLayout={layout} />
              <Item layoutWrap={layoutWrap} originalLayout={layout} />
              <Item layoutWrap={layoutWrap} originalLayout={layout} />
              <Item layoutWrap={layoutWrap} originalLayout={layout} />
              <Item layoutWrap={layoutWrap} originalLayout={layout} />
            </div>

          </div>
          <div className='space'>

          </div>
          <div className='cities'>
            <div className='popularcities'>
              <h3>Popular Cities</h3>
              <div className='pointers'>
                <div className='singular'>
                  <NavigateNext className='arrow' />
                  <span>Addis Ababa</span>
                </div>
                <span>(1)</span>
              </div>
              <div className='pointers'>
                <div className='singular'>
                  <NavigateNext className='arrow' />
                  <span>Nazret</span>
                </div>
                <span>(1)</span>
              </div>
              <div className='pointers'>
                <div className='singular'>
                  <NavigateNext className='arrow' />
                  <span>Hawassa</span>
                </div>
                <span>(1)</span>
              </div>
              <div className='pointers'>
                <div className='singular'>
                  <NavigateNext className='arrow' />
                  <span>Bahirdar</span>
                </div>
                <span>(1)</span>
              </div>
              <div className='pointers'>
                <div className='singular'>
                  <NavigateNext className='arrow' />
                  <span>Dire Dawa</span>
                </div>
                <span>(1)</span>
              </div>


            </div>
            <div className='sapce'></div>
            <div className='featured'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
/* <div>
      
    </div> */