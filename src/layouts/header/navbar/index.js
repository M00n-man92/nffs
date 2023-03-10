import React, { useState } from 'react'
/// css class
import "../../../styles/layout/nav/navbar.scss"
// material ui 
import { AccountBox, AccountCircleOutlined, Person } from '@mui/icons-material'
import Modal from '@mui/material/Modal';

// modals 
import LoginModal from "./modal/loginModal/index"
import RegisterModal from './modal/registerModal/index';
import Sidebar from '../sidebar';
import { Link } from 'react-router-dom';
// state dispacther
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar() {
  const [openModal, setOpenModal] = useState(true);
  const [changeRegister, setChangeRegister] = useState(true);
  const [openSidebar, setOpenSidebar] = useState(false);
  // gets the data fro the local storage
  // getting the state from the website
  const { isFetching, error, currentUser } = useSelector(state => state.user)

  const renderModal = () => {
    return (<>
      <Modal
        style={{
          opacity: "1",
          border: "none",
          borderRadius: "4px",
          overflow: "auto",
          outline: "none",
        }}
        open={!openModal}
        onClose={(e) => { setOpenModal(!openModal); setChangeRegister(true) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        {changeRegister ?
          <LoginModal setOpenModal={setOpenModal} openModal={openModal} setChangeRegister={setChangeRegister} />
          : <RegisterModal setOpenModal={setOpenModal} openModal={openModal} setChangeRegister={setChangeRegister} />}

      </Modal>
    </>
    )
  }

  const navDisplay = () => {
    return (
      <div className='nav' >
        {renderModal()}
        <div className='navitems'>
          <div className='navigators'>
            {/* <div className={openSidebar ? "lines open" : "lines"} onClick={(e) => { setOpenSidebar(!openSidebar) }}>
              <div className="single">
              </div>
              <div className="single">
              </div>
              <div className="single">
              </div>
            </div> */}
            {/* <div className='verticallines'></div> */}
            <Link className='link' to="/">
              <div className='containers'>

                <span> HOME </span>

              </div>
            </Link>
            {/* <div className='verticallines'></div> */}
            <Link className='link' to="/blogs">
              <div className='containers'>

                <span> BLOG </span>

              </div>
            </Link>
            {/* <div className='verticallines'></div> */}
            <Link className='link' to="/firms">
              <div className='containers'>

                <span> FIRM </span>

              </div>
            </Link>
            {/* <div className='verticallines'></div> */}
            <Link className='link' to="/products">
              <div className='containers'>

                <span> PRODUCT</span>

              </div>
            </Link>
            {/* <div className='verticallines'></div> */}
            <Link className='link' to="/projects">
              <div className='containers'>

                <span> PROJECT </span>

              </div>
            </Link>
            {/* <div className='verticallines'></div> */}


            {/* <div className='verticallines'></div> */}
            <Link className='link' to="/blogs">
              <div className='containers'>

                <span> PROFESTTIONAL </span>

              </div>
            </Link>
            {/* <div className='verticallines'></div> */}
            <Link className='link' to="/blogs">
              <div className='containers'>

                <span> TENDER </span>

              </div>
            </Link>

            <Link className='link' to="/blogs">
              <div className='containers'>
                <span> MATERIAL </span>

              </div>
            </Link>
            <Link className='link' to="/manufacturers">
              <div className='containers'>

                <span> MANUFACTURER </span>

              </div>
            </Link>
            <Link className='link' to="/blogs">
              <div className='containers'>

                <span> VR </span>
              </div>
            </Link>
          </div>
          {!currentUser ? <div className='usercred'>
            <AccountCircleOutlined
              style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
              className="accountcircle"
              onClick={(e) => { setOpenModal(!openModal) }}
            />

            {/* <div className='create'>
              <button>
                CREATE A LISTING
              </button>
            </div>
   */}
          </div> :
            <div className='usercred' >
              <AccountBox
                style={{ color: "white", fontSize: "30px", cursor: "pointer", backgroundColor: "#BFBFBF" }}
                className="user"
                onClick={(e) => { setOpenSidebar(true) }}
              />

            </div>
          }

        </div>
        {/* <Sidebar open={openSidebar} setOpen={setOpenSidebar} /> */}
      </div >
    )
  }

  return {
    display: navDisplay, sideSetOpen: setOpenSidebar, isItOpen: openSidebar 
  }
}
/* <div className='nav'>
    </div> */
/*  */