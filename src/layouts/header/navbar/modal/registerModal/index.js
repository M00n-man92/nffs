
/// scss class
import "../../../../../styles/layout/nav/registermodal/registerModal.scss"
/// material ui
import { Close } from '@mui/icons-material'
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle, Lock, Google, Email, Phone } from '@mui/icons-material';
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export const registerModal = (setOpenModal, openModal, setChangeRegister, setAccount, account) => {
  
  return (
    <div className='renderlogin'
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "50%",
        top: "62%",
        height: "750px",
        width: "430px",
        transform: "translate(-50%, -50%)",
        opacity: "1",
        backgroundColor: "white",
        border: "none"

      }}
    >
      <div className='registerheader'>
        <div className='registerlogintext' onClick={(e) => { setChangeRegister(true) }}>
          <span>LOGIN</span>
        </div>
        {/* <div className='verticallines'></div> */}
        <div className='registertext' >
          <span>REGISTER</span>
        </div>
        {/* <div className='verticallines'></div> */}
        {/* <div className='verticallines'></div> */}

        <button onClick={(e) => { setOpenModal(!openModal) }}>
          <Close />
        </button>
      </div>
      <div className='registermiddle'>
        <TextField
          style={{
            height: "10%",
            fontSize: "30px"
          }}
          size="small"
          className="registertextfield"
          label="First Name"
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
          size="small"
          className="registertextfield"
          label="Last Name"
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
          size="small"

          className="registertextfield"
          label="Username"
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
          size="small"

          className="registertextfield"
          label="Email"
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          size="small"
          type="number"
          className="registertextfield"
          label="Phone number"
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          size="small"
          className="registertextfield"
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
        <TextField
          size="small"
          className="registertextfield"
          label="Retype Password"
          type="password"
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }} />
        <FormControl size="small" className="registertextfield">
          <InputLabel >Select your account type</InputLabel>
          <Select

            value={account}
            label="Coffee Profile"
            onChange={(e) => setAccount(e.target.value)}
            required
          >
            <MenuItem value="Agent">Agent</MenuItem>
            <MenuItem value="Agency">Agency</MenuItem>
            <MenuItem value="Buyer">Buyer</MenuItem>
            <MenuItem value="Seller">Seller</MenuItem>
          </Select>
        </FormControl>
        <div className="registerrememberme">
          <span>I Agree with the <a href="https://realestate.niddf.com/" >Terms and Conditions</a></span>
          
        </div>
      </div>
      <div className='registerlast'>
        <button className="registersigininbutton">
          LOGIN
        </button>
        <div className="registergoogle">
          <Google style={{ width: "20%", fontSize: "20px", border: " 1px solid #3c8daa", height: "100%" }} />
          <button className="googlebutton"> Sign In with Google</button>
        </div>
      </div>
    </div>
  )
} 