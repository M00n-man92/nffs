import { useState } from "react"
/// scss class
import "../../../../../styles/layout/nav/loginmodal/loginModal.scss"
/// material ui
import { Close } from '@mui/icons-material'
import { CircularProgress, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle, Lock, Google } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
// api call to login the user
import { login } from "../../../../../redux/apiCall";
// state dispacther
import { useDispatch, useSelector } from 'react-redux';
// router import 
import { useNavigate } from 'react-router-dom'

export default function LoginModal({ setOpenModal, openModal, setChangeRegister }) {
  let checked = true;
  const navigate = useNavigate()
  // getting the state from the website
  const { isFetching, error, currentUser } = useSelector(state => state.user)

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
  const [userName, setUserName] = useState("")
  const [password, setPassWord] = useState("")
  // dispatcher
  const dispatch = useDispatch()
  const handleLogin = async () => {
    setAlert(false);
    setSuccessAlert(false);
    setErrorAlert(false);
    setErrorMessage("");
    setSuccessMessage("");
    let user
    if (email.indexOf("@") === -1) {
      user = { userName, password }
    }
    else {
      user = { password, email }
    }
    // console.log(userr)
    if (password.length >= 8) {
      try {
        const res = await login(dispatch, user)
        if (res.success) {
          // console.log(res)
          setAlert(true);
          setSuccessAlert(true)
          setSuccessMessage("Login Successful ");
          // sending the user to the home page after successfully loging in
            navigate("/")
        }
        else {
          console.log(res)
          setAlert(true);
          setErrorAlert(true)
          if (res.msg){
            setErrorMessage(res.msg);
          }
          else {
            setErrorMessage(res.message)
          }
          
        }
      }
      catch (e) {
        // console.log(e)
        setAlert(true);
        setErrorAlert(true)
        setErrorMessage("Error happend at " + e);
      }
    }

  }
  // console.log(isFetching,error,currentUser);
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
        {successAlert && <Alert severity="success">{successMessage}</Alert>}

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
          disabled={isFetching}
        >
          {isFetching?<CircularProgress style={{color:"white", width:"20px", height:"20px"}} />:<>Login</>}
          
        </button>
        {/* <div className="logingoogle">
          <Google style={{ width: "20%", fontSize: "20px", border: " 1px solid #3c8daa", height: "10%" }} />
          <button className="googlebutton"> Sign In with Google</button>
        </div> */}
      </div>
    </div>
  )
} 