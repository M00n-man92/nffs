import React, { useState } from 'react'
/// css class
import "../../../styles/layout/nav/navbar.scss"
// material ui 
import { AccountCircleOutlined } from '@mui/icons-material'
import Modal from '@mui/material/Modal';

// modals 
import { loginModal } from "./modal/loginModal/index"
import { registerModal } from './modal/registerModal/index';
export default function NavBar() {
  const [openModal, setOpenModal] = useState(true);
  const [changeRegister, setChangeRegister] = useState(true);
  const [account, setAccount] = useState(""); 
  const renderModal = () => {
    return (
      <Modal
        style={{ 
          opacity: "1",
          border:"none",
          borderRadius:"4px"
        }}
        open={!openModal}
        onClose={(e) => { setOpenModal(!openModal) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        { changeRegister? loginModal(setOpenModal, openModal, setChangeRegister) : registerModal(setOpenModal, openModal, setChangeRegister, setAccount, account) }
        
      </Modal>
    )
  }
  return (
    <div className='nav' >
      {renderModal()}
      <div className='navitems'>
        <div className='navigators'>

          <div className='verticallines'></div>
          <div className='containers'>
            <span> HOME </span>
          </div>
          <div className='verticallines'></div>
          <div className='containers'>
            <span> BLOG </span>
          </div>
          <div className='verticallines'></div>
          <div className='containers'>
            <span> ALL PROPERTIES </span>
          </div>
          <div className='verticallines'></div>
          <div className='containers'>
            <span> AGENTS </span>
          </div>
          <div className='verticallines'></div>
          <div className='containers'>
            <span> ABOUT US </span>
          </div>
        </div>
        <div className='usercred'>
          <AccountCircleOutlined
            style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
            className="accountcircle"
            onClick={(e) => { setOpenModal(!openModal) }}
          />

          <div className='create'>
            <button>
              CREATE A LISTING
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}
/* <div className='nav'>
    </div> */
/*  */