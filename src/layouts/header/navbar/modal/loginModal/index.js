/// scss class
import "../../../../../styles/layout/nav/loginmodal/loginModal.scss"
/// material ui
import { Close } from '@mui/icons-material'
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle, Lock, Google } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export const loginModal = (setOpenModal, openModal, setChangeRegister) => {
  let checked = true;
  return (
    <div className='renderlogin'
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "50%",
        top: "35%",
        height: "400px",
        width: "430px",
        transform: "translate(-50%, -50%)",
        opacity: "1",
        backgroundColor: "white",
        border: "none"

      }}
    >
      <div className='loginheader'>
        <div className='loginsigintext'>
          <span>LOGIN</span>
        </div>
        {/* <div className='verticallines'></div> */}
        <div className='loginsignuptext' onClick={(e) => { setChangeRegister(false) }}>
          <span>REGISTER</span>
        </div>
        {/* <div className='verticallines'></div> */}
        {/* <div className='verticallines'></div> */}

        <button onClick={(e) => { setOpenModal(!openModal) }}>
          <Close />
        </button>
      </div>
      <div className='loginmiddle'>
        <TextField
          className="logintextfield"
          label="Username or Email"
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className="logintextfield"
          label="Password"
          type="password"
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }} />
        <div className="loginrememberme">
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
          <a href="https://realestate.niddf.com/" >Lost your password?</a>
        </div>
      </div>
      <div className='loginlast'>
        <button className="loginsigininbutton">
          LOGIN
        </button>
        <div className="logingoogle">
          <Google style={{ width: "20%", fontSize: "20px", border: " 1px solid #3c8daa", height: "100%" }} />
          <button className="googlebutton"> Sign In with Google</button>
        </div>
      </div>
    </div>
  )
} 