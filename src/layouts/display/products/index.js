// import { Modal } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react'
//css class 
import "../../../styles/display/products/products.scss"
import Item from './items'
import { Modal, Box, Typography } from '@mui/material';

export default function Products() {
  
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // int that changes to move the box to the right or left
  const [slider,setSlider]=useState(0)
  // percent that changes every time the box moves by 0.1
  const [percent, setPercent] = useState(6);
  // count to hold an initial value that decreases every time the box moves to the right
  const [count, setCount] = useState(0);
  const [sizeing, setSizing] = useState(25.4);
  const autoPlay = useRef()
  const width = window.innerWidth;
  const height = window.innerHeight;  
  /// movies the box one step to the left
  const handleMoveLeft = () => {
    if(slider>0){
      setSlider(slider-1);
      setPercent(percent+(0.6+count));
      setCount(0.5-(slider/10));
    }
    else{
      setSlider(0);
      setPercent(6);
    }
    
  }
  // moves the box one item to the right
  const handleMoveRight = () => {
    if(slider<4){
      
      setSlider(slider+1);
      setPercent(percent+(0.6-count));
      setCount(0.5+(slider/10));
    }
    else{
      setSlider(4);
      // setPercent(6);
    }
  }
  useEffect(() => {
        autoPlay.current = heandler
    })
    // setInterval(()=>heandler("r"),8000)
    // useEffect(() => {
    //     const andle = () => {
    //         autoPlay.current()
    //     }
    //     // andle()
    //     setInterval(andle, 4000)

    // }, [])
    
  const heandler = () => {
    
    slider !== 4 ? setSlider(slider + 1) : setSlider(0)
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const renderModal = () => {
    return (
      <Modal
        sx={style}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
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
        <button onClick={(e)=>{handleMoveLeft()}}>Prev</button>
        <button onClick={(e)=>{handleMoveRight()}}>Next</button>
      </div>
      <div className="slider">

        <div className="slidercomponenet" style={{ transform: `translateX(${-percent * slider}%)` }}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <div className='circles'>
        {percent}  {count}  {slider}
        <div className='individual'></div>
        <div className='individual'></div>
        <div className='individual'></div>
        <div className='individual'></div>
      </div>
    </div>
  )
}
