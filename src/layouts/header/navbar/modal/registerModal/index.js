
/// scss class
import "../../../../../styles/layout/nav/registermodal/registerModal.scss"
/// material ui
import { Close } from '@mui/icons-material'
import { TextField, CircularProgress } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle, Lock, Google, Email, Phone } from '@mui/icons-material';
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert';
import { useState } from "react";
// dispatch action 
import { useDispatch, useSelector } from "react-redux";
// 
import { register } from "../../../../../redux/apiCall";
export default function RegisterModal({ setOpenModal, openModal, setChangeRegister }) {
  const dispatch = useDispatch()

  // getting the state from the website
  const { isFetching, error, currentUser } = useSelector(state => state.user)

  // controllers to show alets
  const [alert, setAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("")
  // error checkers
  const [fieldError, setFieldError] = useState(false)
  const [errorOn, setErrorOn] = useState(false);
  // vars for the form
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUserName] = useState("")
  const [lName, setLName] = useState("")
  const [cell, setCell] = useState(0);
  const [password, setPassWord] = useState("")
  const [retype, setRetype] = useState("")
  const [account, setAccount] = useState("")
  const handleRegister = async (e) => {
    e.preventDefault()
    setAlert(false);
    setSuccessAlert(false);
    setErrorAlert(false);
    setErrorMessage("");
    setErrorOn("")
    setFieldError(false);
    console.log(errorOn, fieldError, errorAlert)

    if (email.indexOf("@") === -1) {
      setFieldError(true);
      setErrorOn("email");
      setAlert(true)
      setErrorAlert(true)
      setErrorMessage("Please fill the forms correctly")
      console.log(errorMessage)
      return
    }
    if (!email) {
      setFieldError(true);
      setErrorOn("email");
      setAlert(true)
      setErrorAlert(true)
      setErrorMessage("Please fill the forms correctly")
      return
    }
    if (!account) {
      setFieldError(true);
      setErrorOn("account");
      setAlert(true)
      setErrorAlert(true)
      setErrorMessage("Please fill the forms correctly")
      return
    }
    if (!name) {
      console.log(name.length)
      setFieldError(true)
      setErrorOn("firstname")
      setAlert(true)
      setErrorAlert(true)
      setErrorMessage("Please fill the forms correctly")
      return
    }
    if (lName.length < 1) {
      // console.log(name.length)
      setFieldError(true)
      setErrorOn("lastname")
      setAlert(true)
      setErrorAlert(true)
      setErrorMessage("Please fill the forms correctly")
      return
    }
    if (!username) {
      // console.log(username.length)
      setFieldError(true)
      setErrorOn("username")
      setAlert(true)
      setErrorAlert(true)
      setErrorMessage("Please fill the forms correctly")
      return
    }
    if (!cell) {
      console.log(cell)
      setFieldError(true)
      setErrorOn("cell")
      setAlert(true)
      setErrorAlert(true)
      setErrorMessage("Please fill the forms correctly")
      return
    }
    if (cell.length < 9) {
      console.log(cell)
      setFieldError(true)
      setErrorOn("cell")
      setAlert(true)
      setErrorAlert(true)
      setErrorMessage("Please input real cell phone numbers")
      return
    }
    if (fieldError && errorAlert && errorOn) {
      console.log("still an error")
      return;
    }
    else {
      try {
        const user = {name,lName,username,password,cell,account,email}
        const res = await register(dispatch, user)
        if (res.success) {
          // console.log(res)
          setAlert(true);
          setSuccessAlert(true)
          setSuccessMessage("Registerd Successfully please check your email to receive a conformation link");
        }
        else {
          // console.log(res)
          setAlert(true);
          setErrorAlert(true)
          setErrorMessage(res.msg);
        }
      }
      catch (e) {
        setAlert(true);
        setErrorAlert(true)
        setErrorMessage("Error happend at " + e);
      }
    }
    console.log(errorOn)
  }
  //  console.log(account)
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
        {successAlert && <Alert severity="success">{successAlert}</Alert>}

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
          onChange={(e) => setName(e.target.value)}
          error={fieldError && errorOn.indexOf("firstname") != -1}
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
          onChange={(e) => setLName(e.target.value)}
          error={fieldError && errorOn.indexOf("lastname") != -1}
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
          onChange={(e) => { setUserName(e.target.value) }}
          error={fieldError && errorOn.indexOf("username") != -1}
        />
        <TextField
          size="small"

          className="registertextfield"
          label="Email"
          error={fieldError && errorOn === "email"}
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
          error={cell && cell.length < 9}
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
          onChange={(e) => setCell(e.target.value)}
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
            onChange={(e) => setAccount(e.target.value)}
            required
            error={fieldError && errorOn === "account"}
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
        
        <button className="registersigininbutton" onClick={(e) => handleRegister(e)}>
        {isFetching?<CircularProgress style={{color:"white", width:"20px", height:"20px"}} />:<>Register</>}
          
        </button>
        {/* <div className="registergoogle">
          <Google style={{ width: "20%", fontSize: "20px", border: " 1px solid #3c8daa", height: "100%" }} />
          <button className="googlebutton"> Sign In with Google</button>
        </div> */}
      </div>
    </div>
  )
} 