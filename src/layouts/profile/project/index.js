import { useState } from 'react'
// css class
import "../../../styles/profile/product/userproduct.scss"
// mui 
import Modal from '@mui/material/Modal';
import { DataGrid } from '@mui/x-data-grid';

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, Search } from '@mui/icons-material';
//
import { Link } from 'react-router-dom'
//
import { data } from "./data"

//
import ProfileSideNav from '../sidenav';
import CreateProduct from './create';
import UpdateProduct from './update';
export default function ProfileProject() {

  // state to change the modal from cupdate to create
  const [changeModal, setChangeModal] = useState();

  // state to fetch the sort
  const [sort, setSort] = useState("");

  // state to open create modal when create new products is opened
  const [openModal, setOpenModal] = useState(false)

  // state to hold the item for updating the values
  const [item, setItem] = useState({});

  // modal to appear when edit or create buttons are pressed
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
        open={openModal}
        onClose={(e) => { setOpenModal(!openModal) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {changeModal === "update" ? <UpdateProduct setOpenModal={setOpenModal} openModal={openModal} product={item}/> :

          <CreateProduct setOpenModal={setOpenModal} openModal={openModal} />
        }
      </Modal>
    </>
    )
  }
  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'productName',
      headerName: 'item',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellimage">
            <img src={params.row.img[0]?params.row.img[0]:params.row.img} />
            <span>{params.row.name.length > 10 ? params.row.name.split("", 10) : params.row.name}{params.row.name.length > 10 ? "..." : ""}</span>

          </div>
        )
      }

    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Staus',
      width: 150
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (

          <div className="holeup" id={params.row._id}>
            <button 
              onClick={(e) => {
                setChangeModal("update");
                setItem(params.row);
                setOpenModal(!openModal);
                console.log(item)
              }}
            > Edit</button>
            <DeleteOutline className="userproductddeletebutton" style={{ color: "red" }} onClick={() => { console.log("i wonder") }} />
          </div>
        )
      }

    }
  ];
  return (
    <div className="userproduct">
      <ProfileSideNav page={"project"} />
      {renderModal()}
      <div className='userproductmargin'>
        <div className='userproductcontainer'>
          <div className='userproductheader'>
            <span className='userproducttitle'>Projectss</span>
            <button
              className='userproductcreatebutton'
              onClick={(e) => { 
                setChangeModal("create");
                setOpenModal(!openModal)
              }}
            >
              Create Project</button>
          </div>
          <div className='userproductsearch'>
            <div className='userproductsearchicon'>

              <OutlinedInput
                size='small'
                id="outlined-adornment-weight"
                startAdornment={<InputAdornment position="start"><Search /></InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
                style={{ borderRadius: "none" }}
                onChange={(e) => { console.log(e.target.value) }}
              />

              <button style={{ width: "30%", height: "40px", backgroundColor: "#00aeff", color: "white", border: "none" }}> Search</button>
            </div>
            <div className='userproductsortpage'>
              <span>Sort By:</span>
              <FormControl sx={{ m: 1, minWidth: "60%" }}>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  size="small"
                >
                  <MenuItem value="">
                    {sort ? <em>{sort}</em> : <em>Newest to Oldest</em>}

                  </MenuItem>
                  <MenuItem value="Newest to Oldest" onClick={(e) => setSort(e.target.value)}><span style={{ fontSize: "14px", fontFamily: "Bellota-Light" }}>Newest to Oldest</span></MenuItem>
                  <MenuItem value="Oldest to Newest" onClick={(e) => setSort(e.target.value)}><span style={{ fontSize: "14px", fontFamily: "Bellota-Light" }}>Oldest to Newest</span></MenuItem>
                  <MenuItem value="Price. High to Low" onClick={(e) => setSort(e.target.value)}><span style={{ fontSize: "14px", fontFamily: "Bellota-Light" }}>Price. High to Low</span></MenuItem>
                  <MenuItem value="Price. Low to High" onClick={(e) => setSort(e.target.value)}><span style={{ fontSize: "14px", fontFamily: "Bellota-Light" }}>Price. Low to High</span></MenuItem>

                </Select>
              </FormControl>
            </div>
          </div>
          <div className="userproductgridd">

            <DataGrid
              rows={data}
              columns={columns}
              getRowId={(row) => row.img}
              pageSize={5}
              rowsPerPageOptions={[5]}

              // checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </div>
      </div>
    </div>
  )
}
