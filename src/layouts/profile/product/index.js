import React from 'react'
// css class
import "../../../styles/profile/product/userproduct.scss"
// mui 
import { DataGrid } from '@mui/x-data-grid';
// import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
//
import { Link } from 'react-router-dom'
//
import { data } from "../../pages/products/data"
import ProfileSideNav from '../sidenav';
export default function index() {
  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'productName',
      headerName: 'item',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellimage">
            <img src={params.row.img} />
            <span>{params.row.name.length > 10 ? params.row.name.split("", 10): params.row.name}{params.row.name.length > 10 ? "...": ""}</span>

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
            <Link to={"/product_update/" + params.row._id}>
              <button> Edit</button>
            </Link>
            <DeleteOutline className="userproductddeletebutton" style={{ color: "red" }} onClick={() => { console.log("i wonder") }} />
          </div>
        )
      }

    }
  ];
  return (
    <div className="userproduct">
      <ProfileSideNav page={"product"} />
      <div className='userproductmargin'>
        <div className='userproductcontainer'>
          <div className='userproductheader'>
            <span className='userproducttitle'>Products</span>
            <button className='userproductcreatebutton'>Create Product</button>
          </div>
          <div className="userproductgridd">

            <DataGrid
              rows={data}
              columns={columns}
              getRowId={(row) => row.img}
              pageSize={5}
              rowsPerPageOptions={[5]}

              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </div>
      </div>
    </div>
  )
}
