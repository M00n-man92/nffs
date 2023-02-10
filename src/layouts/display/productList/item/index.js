import React from 'react'

import Items from "../../../../example/item/pictured/index.js";
import List from '../../../../example/item/list';
export default function Item({ layoutWrap, originalLayout }) {
  return ( originalLayout && !layoutWrap ? 
 <List /> :<>
    <Items style={{width:"48%",height:"30%",display:"flex",flexDirection:"column"}}/></>
    
  )
}
 