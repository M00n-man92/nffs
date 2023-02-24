
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
import Alert from '@mui/material/Alert';
import { useState } from "react";

export default function RegisterModal({ setOpenModal, openModal, setChangeRegister, setAccount, account }) {
  // controllers to show alets
  const [alert, setAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // error checkers
  const [fieldError, setFieldError] = useState(false)
  const [errorOn, setErrorOn] = useState("")
  // vars for the form
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUserName] = useState("")
  const [lName, setLName] = useState("")
  const [cell, setCell] = useState();
  const [password, setPassWord] = useState("")
  const [retype, setRetype] = useState("")
  const handleRegister = () => {
    setAlert(false);
    setSuccessAlert(false);
    setErrorAlert(false);
    setErrorMessage("");
    setErrorOn("")
    console.log(email.indexOf("@"))
    if (email.indexOf("@")===-1) {
      setFieldError(true);
      console.log(email)
      setErrorOn("email");
      setAlert(true)
      setErrorAlert(true)
      setErrorMessage("Please fill the forms correctly")
    }
    console.log(fieldError)
  }
  //  console.log(fieldError)
  return (
    <div className='renderregister'
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "50.4%",
        top: "52%",
        // height: "100%",
        width: "33.4%",
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
      {alert && <div className="alert">

        {errorAlert && <Alert severity="error">{errorMessage}</Alert>}
        {successAlert && <Alert severity="success">This is a success alert — check it out!</Alert>}

      </div>
      }


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
          error={errorOn && errorOn === "email"}
          type="email"
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          size="small"
          type="number"
          error={cell && cell !== Number}
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
          error={password && password.length < 8}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
          helperText={password && password.length < 8 && "makesure is greater than 8 letters"}

          onChange={(e) => setPassWord(e.target.value)}
        />
        <TextField
          size="small"
          error={retype && retype !== password}
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
          }}
          onChange={(e) => setRetype(e.target.value)}
        />
        <FormControl size="small" className="registertextfield">
          <InputLabel >Select your account type</InputLabel>
          <Select

            value={account}
            label="Coffee Profile"
            // onChange={(e) => setAccount(e.target.value)}
            required
          >
            <MenuItem value="firm">Firm</MenuItem>
            <MenuItem value="manufacturer">Manufacturer</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="buyer">Buyer</MenuItem>
          </Select>
        </FormControl>
        <div className="registerrememberme">
          <span>I Agree with the <a href="https://realestate.niddf.com/" >Terms and Conditions</a></span>

        </div>
      </div>
      <div className='registerlast'>
        <button className="registersigininbutton" onClick={(e) => handleRegister()}>
          Register
        </button>
        {/* <div className="registergoogle">
          <Google style={{ width: "20%", fontSize: "20px", border: " 1px solid #3c8daa", height: "100%" }} />
          <button className="googlebutton"> Sign In with Google</button>
        </div> */}
      </div>
    </div>
  )
} 