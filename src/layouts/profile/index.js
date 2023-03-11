import { useState } from "react"
//csss class
import "../../styles/profile/userprofile.scss"

// mui 
import { CircularProgress, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ProfileSideNav from './sidenav'

export default function UserProfile() {

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
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassWord] = useState("")
  const [aboutMe, setAboutMe] = useState("")
  const [licence, setLicence] = useState("")
  const [address, setAddress] = useState("")
  const [faxNumber, setFaxNumber] = useState("")
  const [serviceArea, setServiceArea] = useState("")

  // ars for the social form
  const [facebook, setFaceBook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [skype, setSkype] = useState("");
  const [instagram, setInstagram] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [pinterest, setPinterest] = useState("");
  const [youTube, setYouTube] = useState("");

  //   account form
  const [account, setAccount] = useState("")

  //  password
  const [confirm, setConfirm] = useState("")
  const [newPassword, setNewPassword] = useState("")


  const [file, setFile] = useState()
  const [fileName, setFileName] = useState([])
  const [input, setInput] = useState({})
  const [cat, setCat] = useState({})
  const [done, setDone] = useState(false)
  const [love, Setlove] = useState([null])

  const [petty, setPetty] = useState([{}])

  //	// trigger for setting if the images failed to load or are success ful
  const [isLoading, setIsLoading] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  return (
    <div className='userprofile'>
      <ProfileSideNav page={"profile"} />
      <div className='userprofileinfo'>
        <div className='userprofileheader'>
          <span>My Profile</span>
        </div>
        <div className='userprofileinfoname'>
          <span className='userprofileinfospan'>Information</span>

        </div>
        <div className='userprofileinformation'>
          <div className='userprofilecontainer'>
            <div className='userprofileinfoimage'>
              <img src='' alt='' />
              <button>Update Profile Picture</button>
              <span>Minimum size 300 x 300 px</span>
            </div>
            <div className='userprofileinfoupdates'>
              <div className='userprofiletextarea'>
                <div className='userprofiletextcontainer'>
                  <span className='label'> User Name</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'

                    onChange={(e) => { setUserName(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'> Email</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'

                    onChange={(e) => { setEmail(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'> First Name</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'

                    onChange={(e) => { setFirstName(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'>Last Name</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'

                    onChange={(e) => { setLastName(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'>Licence</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'

                    onChange={(e) => { setLicence(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'>Adress</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'

                    onChange={(e) => { setAddress(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'>Fax Number</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'

                    onChange={(e) => { setFaxNumber(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'>Service Areas</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'

                    onChange={(e) => { setServiceArea(e.target.value); setUserName(e.target.value) }}
                  />
                </div>

              </div>
              <div className='userprofiletextcontainerfilled'>
                <span className='label'>About Me</span>
                <TextField
                  multiline
                  rows={5}
                  // size="small"
                  className="userprofiletextfield"
                  // label="Title"
                  variant='outlined'

                  onChange={(e) => { setAboutMe(e.target.value); setUserName(e.target.value) }}
                />
              </div>
              <div className='userprofiletextcontainerfilled'>
                <button>Update</button>
              </div>


            </div>

          </div>

        </div>
        <div className='userprofileinformation'>
          <div className='userprofilecontainer'>
            <div className='userprofileinfoimage'>
              <span className="socialmedia">
                Social Media
              </span>
            </div>

            <div className="userprofileinfoupdates">
              <div className='userprofiletextarea'>
                <div className='userprofiletextcontainer'>
                  <span className='label'> Facebook</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'
                    placeholder="Enter the Facebook URL"

                    onChange={(e) => { setFaceBook(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'> Twitter</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'
                    placeholder="Enter the Twitter URL"
                    onChange={(e) => { setTwitter(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'> Linked in</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'
                    placeholder="Enter the Linkedin URL"
                    onChange={(e) => { setLinkedIn(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'> Instagram</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'
                    placeholder="Enter the Instagram URL"
                    onChange={(e) => { setInstagram(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'> Youtube</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'
                    placeholder="Enter the Youtube URL"
                    onChange={(e) => { setYouTube(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'> Pinterest</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'
                    placeholder="Enter the Pinterest URL"
                    onChange={(e) => { setPinterest(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'> Skype</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'
                    placeholder="Enter the Skype URL"
                    onChange={(e) => { setSkype(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'> Website</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'
                    placeholder="Enter the Website URL"

                    onChange={(e) => { setWebsite(e.target.value); setUserName(e.target.value) }}
                  />
                </div>

              </div>
              <div className='userprofiletextcontainerfilled'>
                <div className='userprofiletextcontainerfilled'>
                  <button>Update</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='userprofileinformation'>
          <div className='userprofilecontainer'>
            <div className='userprofileinfoimage'>
              <span className="socialmedia">
                Account Role
              </span>
            </div>
            <div className="userprofileinfoupdates">

              <div className='userprofiletextcontainerfilled'>
                <FormControl sx={{ m: 1, minWidth: "60%" }}>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    size="small"
                  >
                    <MenuItem value="">
                      {<em>{account}</em>}

                    </MenuItem>
                    <MenuItem value="Firm" onClick={(e) => setAccount(e.target.value)}><span style={{ fontSize: "14px", fontFamily: "Bellota-Light" }}>Firm</span></MenuItem>
                    <MenuItem value="Manufacturer" onClick={(e) => setAccount(e.target.value)}><span style={{ fontSize: "14px", fontFamily: "Bellota-Light" }}>Manufacturer</span></MenuItem>
                    <MenuItem value="Producer" onClick={(e) => setAccount(e.target.value)}><span style={{ fontSize: "14px", fontFamily: "Bellota-Light" }}>Producer</span></MenuItem>


                  </Select>
                </FormControl>
                <div className='userprofiletextcontainerfilled'>
                  <button>Update</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='userprofileinformation'>
          <div className='userprofilecontainer'>
            <div className='userprofileinfoimage'>
              <span className="socialmedia">
                Password
              </span>
            </div>
            <div className='userprofileinfoupdates'>
              <div className='userprofiletextarea'>
                <div className='userprofiletextcontainer'>
                  <span className='label'> New Password</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'
                    placeholder="Enter the Facebook URL"

                    onChange={(e) => { setNewPassword(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
                <div className='userprofiletextcontainer'>
                  <span className='label'> Confirm Password</span>
                  <TextField
                    size="small"
                    className="userprofiletextfield"
                    // label="Title"
                    variant='outlined'
                    placeholder="Enter the Twitter URL"
                    onChange={(e) => { setConfirm(e.target.value); setUserName(e.target.value) }}
                  />
                </div>
              </div>
              <div className='userprofiletextcontainerfilled'>

                <div className='userprofiletextcontainerfilled'>
                  <button>Update</button>
                </div>

              </div>

            </div>



          </div>

        </div>
        <div className='userprofileinformation'>
          <div className='userprofilecontainer'>
            <div className='userprofileinfoimage'>
              <span className="socialmedia">
                Delete User
              </span>
            </div>
            <div className='userprofileinfoupdates'>

              <div className='userprofiletextcontainerfilled'>

                <div className='userprofiletextcontainerfilled'>
                  <button className="deleteuserprofile">Delete</button>
                </div>

              </div>

            </div>



          </div>

        </div>
      </div>
    </div >
  )
}
