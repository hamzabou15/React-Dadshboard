import React, { useEffect, useRef, useState } from 'react'

import './Users.scss'
import {AiOutlinePlus} from "react-icons/ai"
import {Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams  , GridToolbar} from '@mui/x-data-grid';

import { userRows } from '../../data';
import { Link } from 'react-router-dom';
import {IoMdClose} from "react-icons/io"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// colums in our data grid
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 20 },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 100,
    renderCell(params) {
      return (
        <Link to={'/users/1'} style={{cursor:"pointer"}} >
          <img src={params.row.img || "/noavatar.png"} alt="" />
        </Link>
      );
    },
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 120,
    // editable: true,
    cellClassName:"firsName",
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 120,
    // editable: true,
    
  },
  {
    field: 'email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      ` ${params.row.email || ''}`,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width:150,
    valueGetter: (params: GridValueGetterParams) =>
    ` ${params.row.phone || ''}`,
  },
  {
    field: 'created_at',
    headerName: 'Created At',
    width:150,
    valueGetter: (params: GridValueGetterParams) =>
    ` ${params.row.createdAt || ''}`,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width:100,
    type:"boolean"
  },
  
];


// to add actions delete and update buttons
const actionColumn: GridColDef = {
  field: "action",
  headerName: "Action",
  width: 200,
  renderCell: (params) => {
    return (
      <div className="action">
        <Link to={`/`}>
          <img src="/view.svg" alt=""  className='image_handle' />
        </Link>
        <div className="delete" >
          <img src="/delete.svg" alt=""  className='image_handle' />
        </div>
      </div>
    );
  },
};





const Users = () => {
  // form manage eroor
  const [showPopup, setShowPopup] = useState(false);

  const [role, setRole] = useState('user');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = () => {
    // Here you can handle the form submission and use the selected role
    // For example, you can send it to the server or use it in your application logic.
    console.log('Selected Role:', role);
  };

 

  return (
    <div className='page_users'>
      <div className='infos'>
          <h1>Users</h1>
          <div className='add' onClick={() => setShowPopup(true) } >
              <AiOutlinePlus className="icon"/>
              <span  > NEW USER</span>
          </div>
      </div>  
      { showPopup &&
        <div className='popup_add' >
            <div className='popup_add_container'>
                <div className='header'>
                    <span>Add user</span>
                    <IoMdClose  className="close_icon"  onClick={() => setShowPopup(false) } />
                </div>
                <div className='content'>
                <form>
                  <div className='display_flex' >
                      <TextField
                          name="firstName"
                          label="First Name"
                          // value="kaaka"
                          // onChange={handleChange}
                          // error={!!errors.firstName}
                          // helperText="Add your First Name"
                          fullWidth
                          margin="normal"
                          variant="outlined"
                          type='tel'
                        />
                        <TextField
                          name="lastName"
                          label="Last Name"
                          // value="hazma"
                          // onChange={handleChange}
                          // error={!!errors.lastName}
                          helperText=""
                          
                          fullWidth
                          margin="normal"
                          variant="outlined"
                        />
                       
                  </div>
                    <TextField
                      name="email"
                      label="Email adresse"
                      // value="data"
                      // onChange={handleChange}
                      // error={!!errors.email}
                      helperText=""
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                     <TextField
                      name="phone"
                      label="Phone Number"
                      // value="data"
                      // onChange={handleChange}
                      // error={!!errors.email}
                      helperText=""
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                       <div>
      <Typography variant="h6" gutterBottom>
         Role 
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup name="role" value={role} onChange={handleRoleChange}>
          <FormControlLabel value="admin" control={<Radio />} label="Verified" />
          <FormControlLabel value="user" control={<Radio />} label="Not verified" />
        </RadioGroup>
      </FormControl>
      <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    
    </div>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
               </form>
                </div>
            </div>
        </div>
        }
      <Box sx={{ height: 720, width: '100%', minWidth: '300px', overflowX: 'auto' }}>
        <DataGrid
          className="dataGrid"
          slots={{ toolbar: GridToolbar }}
          rows={userRows}
          columns={[...columns, actionColumn]}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </Box>
    
    </div>
  )
}

export default Users