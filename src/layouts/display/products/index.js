// import { Modal } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react'
//css class 
import "../../../styles/display/products/products.scss"
import Item from './items'
import { Modal } from '@mui/material';
import ItemModal from './itemModal';

export default function Products() {

  const [open, setOpen] = useState(true);
  // int that changes to move the box to the right or left
  const [slider, setSlider] = useState(0)
  // percent that changes every time the box moves by 0.1
  const [percent, setPercent] = useState(34);
  // count to hold an initial value that decreases every time the box moves to the right
  const [count, setCount] = useState(0);
  // cirlce at the bottom of the page tracker
  const circleId = [0, 1, 2, 3, 4];

  const autoPlay = useRef()

  /// movies the box one step to the left
  const handleMoveLeft = () => {
    if (slider === 0) {
      setSlider(0);
      setPercent(34);
      setCount(0)
    }
    else if (slider >= 1) {
      setSlider(slider - 1);
      if (slider === 0) {
        setSlider(0);
        setPercent(34);
        setCount(0)
      }
      // setPercent(percent+(0.6+count));
      // setCount(0.5-(slider/10));
    }


  }
  // moves the box one item to the right
  const handleMoveRight = () => {
    if (slider < 4) {

      setSlider(slider + 1);
      setPercent(percent + (0.6 - count));
      setCount(0.5 + (slider / 10));
    }
    else {
      setSlider(4);
      // setPercent(6);
    }
  }
  // moving the box to specific slider
  const handleMove = (slide) => {
    setSlider(slide);
    setPercent(percent + (0.6 - count));
    setCount(0.5 + (slider / 10));
    // setPercent(6);

  }

  // slides the products one step to the right with every 5 secs 
  useEffect(() => {
    autoPlay.current = heandler;
  })
  // setInterval(()=>heandler(),8000)
  useEffect(() => {
    const andle = () => {
      autoPlay.current()
    }
    // andle()
    setInterval(andle, 8000)

  }, [])

  const heandler = () => {
    if (slider !== 4) {
      setSlider(slider + 1);
      setPercent(percent + (0.6 - count));
      setCount(0.5 + (slider / 10));
    }


    // slider !== 4 ? setSlider(slider + 1) : setSlider(4)
  }
  // Modal that appears when the unfold more button is pressed on an item
  // TODO  have an json data type to store the item id to search it or store it on theat data type to show more onm the modal


  const renderModal = () => {
    return (
      <Modal
        sx={{ overflow: "auto" }}
        open={!open}
        onClose={() => { setOpen(!open) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ItemModal open={open} setOpen={setOpen} />
      </Modal>
    )
  }

  return (
    <div className='products'>
      {renderModal()}
      <div className="header">
        <h3> Discover Our Featured Listings</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
      </div>
      <div className='slidercontroller'>
        <button onClick={(e) => { handleMoveLeft() }}>Prev</button>
        <button onClick={(e) => { handleMoveRight() }}>Next</button>
      </div>
      <div className="slider">

        <div className="slidercomponenet" style={{ transform: `translateX(${-percent * slider}%)` }}>
          <Item open={open} setOpen={setOpen} style={"smaller"} />
          <Item open={open} setOpen={setOpen} style={"smaller"} />
          <Item open={open} setOpen={setOpen} style={"smaller"} />
          <Item open={open} setOpen={setOpen} style={"smaller"} />
          <Item open={open} setOpen={setOpen} style={"smaller"} />
          <Item open={open} setOpen={setOpen} style={"smaller"} />
          <Item open={open} setOpen={setOpen} style={"smaller"} />
          <Item open={open} setOpen={setOpen} style={"smaller"} />
        </div>
      </div>
      <div className='circles'>
        <div id={circleId[0]} className={slider === circleId[0] ? "individualcircle own" : "individualcircle"} onClick={(e) => { handleMove(0); setSlider(0);
      setPercent(6);
      setCount(0) }}></div>
        <div id={circleId[1]} className={slider === circleId[1] ? "individualcircle own" : "individualcircle"} onClick={(e) => { handleMove(1) }}></div>
        <div id={circleId[2]} className={slider === circleId[2] ? "individualcircle own" : "individualcircle"} onClick={(e) => { handleMove(2) }}></div>
        <div id={circleId[3]} className={slider === circleId[3] ? "individualcircle own" : "individualcircle"} onClick={(e) => { handleMove(3) }}></div>
        <div id={circleId[4]} className={slider === circleId[4] ? "individualcircle own" : "individualcircle"} onClick={(e) => { handleMove(4) }}></div>
      </div>
    </div>
  )
}
