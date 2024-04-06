/* eslint-disable eqeqeq */
import React from 'react'
import './UsersList.css'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { userRow } from '../../data';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function UsersList() {
  const [userData , setUserData]=useState(userRow);
const userDelete=userId=>{
  setUserData(userData.filter(user =>user.id != userId)) 
  console.log(userId);
}
  let columns=[
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'user',
      headerName: 'User',
      width: 300,
      editable: false,
      renderCell:(params)=>{
        return (
          <Link to="/" className='link'>
          <div className='userName'>
            <img src={params.row.image} alt="" className="userImg" />
            {params.row.userName}
          </div>
          </Link>
        )
      }
    },
    {
      field: 'eMail',
      headerName: 'E-Mail',
      width: 300,
      editable: false
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: false
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 150,
      editable: false
    },
    {
     field:'actions',
     headerName:'Actions',
     width:150,
     renderCell:(params)=>{
      return(
      <div className='actionsContainer'>
        <Link to={`/user/${params.row.id}`}>
      <button className='editBtn' >Edit</button> 
        </Link>
   
      <DeleteForeverIcon className='deleteIcon' onClick={()=>userDelete(params.row.id)}/>
      </div>
      )
     }
    }
  ]
  return (
    <div className='usersList'>
      
       <DataGrid className='datagrig'
        rows={userData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
      checkboxSelection
        disableRowSelectionOnClick
      /> 
    </div>
  )
}
