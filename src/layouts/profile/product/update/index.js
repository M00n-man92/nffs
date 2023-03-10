import { useEffect, useState } from "react"
/// scss class
import "../../../../styles/profile/product/update/updateproduct.scss"
/// material ui
import { Close, FormatQuote, Info, Inventory, PriceChange } from '@mui/icons-material'
import { Button, CircularProgress, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle, Lock, Google } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';

import { DeleteOutline } from '@mui/icons-material';

// api call to login the user
import { login } from "../../../../redux/apiCall";
// state dispacther
import { useDispatch, useSelector } from 'react-redux';
// router import 
import { useNavigate } from 'react-router-dom'

// firebase imports to upload the picture
import app from '../../../../constant/fireBase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

export default function UpdateProduct({ setOpenModal, openModal, product }) {
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
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState([...product.img])
  const [input, setInput] = useState({})
  const [cat, setCat] = useState({})
  const [done, setDone] = useState(false)
  const [love, Setlove] = useState([null])

  const [petty, setPetty] = useState([{}])

  //	// trigger for setting if the images failed to load or are success ful
  const [isLoading, setIsLoading] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

console.log(fileName)

  // dispatcher
  const dispatch = useDispatch()
  const handleupdateproduct = async () => {
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
          if (res.msg) {
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

  // chnages eerytime an image is removed from an array which sets the page to relaoad
  const [deleted, setDeleted] = useState(true)

  // useEffect to reload when a pic is deleted
  useEffect(() => {
  }, [fileName, deleted])

  // function to upload images
  const handleClick = async (e) => {
    // e.prev""entDefault()
    var streetsofafruce = {}

    streetsofafruce = e.target.files[0]
    setFile(streetsofafruce)

    const fileName = new Date().getTime() + streetsofafruce.name
    const storage = getStorage(app)
    const storageReff = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageReff, streetsofafruce);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
        setIsLoading(true);
      },
      (error) => {
        setIsLoading(false);
        setHasFailed(false);
        // Handle unsuccessful uploads
      },
      () => {
        setIsLoading(false);
        setHasFailed(false);
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          var lio = downloadURL

          setFileName(oldone => [...oldone,  lio ])
        });

        fileName.length>0 && fileName.map((item, index) => {
          if (!item) {
            fileName.slice(index)
          }
        })
      }
    );
  }

  return (
    <div className='renderupdateproduct'
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "50%",
        top: "50%",
        height: "90%",
        width: "60.4%",
        transform: "translate(-50%, -50%)",
        outline: "none",
        opacity: "1",
        backgroundColor: "white",
        border: "none"

      }}
    >
      <div className='updateproductheader'>

        <div className='updateproducttext'>
          <span>Update {product.name}</span>
        </div>

        {/* <div className='verticallines'></div> */}

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
      <div className="updateproductimage">
        <div className="updateproductimageplus">

          <div className="laketitle">
            <span>Image</span>
          </div>
          <div className="ollio">
            <input type="file" multiple="multiple" onChange={e => handleClick(e) /*paperback(e)setFile(e.target.files[0]) */} />
          </div>
        </div>
        <div className="fetchspinning" style={{ display: "flex", alignItems: "center" }}>
          {isLoading ? (<div style={{ marginRight: "1%" }}>
            <CircularProgress />
          </div>) : (<></>)}
          {hasFailed ? (<span style={{ fontSize: "12px", color: "red" }}> Error. Try to upload the file again</span>) : (<></>)}
          <div className="iplayedmyfair" style={{ display: "flex", flexDirection: "row" }}>
            {fileName.length >= 1 ? fileName.map((item, index) =>
            (<div style={{ display: "flex", flexDirection: "row" }} key={index + 33}>
              <img src={item} alt="" style={{ height: "100px", width: "100px", backgroundColor: "#dce0e0", objectFit: "cover", marginRight: "2%" }} />
              <DeleteOutline
                style={{
                  position: "relative",
                  color: "red",
                  fontSize: "25px",
                  left: "-10%",
                  cursor: "pointer"
                }}
                onClick={(e) => {
                  console.log(index)
                  fileName.splice(index,1)
                  setDeleted(!deleted)
                  console.log(fileName)
                }}
              />
            </div>)) : <span></span>}
          </div>
        </div>
      </div>
      <div className='updateproductmiddle'>
        <TextField
        placeholder={product.name}
        size="small"
          className="updateproducttextfield"
          label="Title"
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FormatQuote />
              </InputAdornment>
            ),
          }}
          onChange={(e) => { setEmail(e.target.value); setUserName(e.target.value) }}
        />
        <TextField
        size="small"
          className="updateproducttextfield"
          label="Stock"
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Inventory />
              </InputAdornment>
            ),
          }}
          onChange={(e) => { setEmail(e.target.value); setUserName(e.target.value) }}
        />
        <TextField
        size="small"
          className="updateproducttextfield"
          label="Discription"
          variant='outlined'
          placeholder={product.passages}
          multiline
          rows={4}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Info />
              </InputAdornment>
            ),
          }}
          onChange={(e) => { setEmail(e.target.value); setUserName(e.target.value) }}
        />

        <TextField
                size="small"
placeholder={product.price}
          className="updateproducttextfield"
          label="Price"
          type="number"
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PriceChange />
              </InputAdornment>
            ),
          }}
          
          error={!password}
          onChange={(e) => { setPassWord(e.target.value) }}
        />
        
      </div>
      <div className='updateproductlast'>
        <Button
          className="updateproductbutton"
          onClick={(e) => handleupdateproduct()}
          disabled={isFetching || fileName.length<1}
          
        >
          {isFetching ? <CircularProgress style={{ color: "white", width: "20px", height: "20px" }} /> : <>Update</>}

        </Button>
        {/* <div className="logingoogle">
          <Google style={{ width: "20%", fontSize: "20px", border: " 1px solid #3c8daa", height: "10%" }} />
          <button className="googlebutton"> Sign In with Google</button>
        </div> */}
      </div>
    </div>
  )
} 