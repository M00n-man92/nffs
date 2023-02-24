import { useState } from "react"
/// scss class
import "../../../../../styles/layout/nav/loginmodal/loginModal.scss"
/// material ui
import { Close } from '@mui/icons-material'
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle, Lock, Google } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';


export default function LoginModal({ setOpenModal, openModal, setChangeRegister }) {
  let checked = true;
  // controllers to show alets
  const [alert, setAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  // error checkers
  const [fieldError, setFieldError] = useState(false)
  const [errorOn, setErrorOn] = useState("")
  // vars for the form
  const [email, setEmail] = useState("")
  const [username, setUserName] = useState("")
  const [password, setPassWord] = useState("")
  const handleLogin = () => {
    console.log(email)
    console.log(password)
  }
  return (
    <div className='renderlogin'
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "50%",
        top: "35%",
        // height: "60%",
        width: "33.4%",
        transform: "translate(-50%, -50%)",
        outline: "none",
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
      {alert && <div className="alert">

        {errorAlert && <Alert severity="error">{errorMessage}</Alert>}
        {successAlert && <Alert severity="success">This is a success alert — check it out!</Alert>}

      </div>
      }

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
          onChange={(e) => { setEmail(e.target.value); setUserName(e.target.value) }}
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
          }}
          helperText={password && password.length < 8 && "makesure is greater than 8 letters"}
          error={password && password.length < 8}
          onChange={(e) => { setPassWord(e.target.value) }}
        />
        <div className="loginrememberme">
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
          <a href="https://realestate.niddf.com/" >Lost your password?</a>
        </div>
      </div>
      <div className='loginlast'>
        <button
          className="loginsigininbutton"
          onClick={(e) => handleLogin()}
        >
          LOGIN
        </button>
        {/* <div className="logingoogle">
          <Google style={{ width: "20%", fontSize: "20px", border: " 1px solid #3c8daa", height: "10%" }} />
          <button className="googlebutton"> Sign In with Google</button>
        </div> */}
      </div>
    </div>
  )
} 