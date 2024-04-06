/* eslint-disable eqeqeq */
import React from 'react'
import './Products.css'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { productsDetails } from '../../data';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Products() {
  const [productsData , setProductsData]=useState(productsDetails);
const productsDelete=productsID=>{
  setProductsData(productsData.filter(productsData =>productsData.id != productsID)) 
}

  let columns=[
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'title',
      headerName: 'Name',
      width: 300,
      editable: false,
      renderCell:(params)=>{
        return (
          <Link to={`/products/${params.row.id}`} className='link'>
          <div className='productName'>
            <img src={params.row.image} alt="" className="productImg" />
            {params.row.title}
          </div>
          </Link>
        )
      }
    },
    
    {
      field: 'details',
      headerName: 'Details',
      width: 350,
      editable: false
    },
    {
      field: 'price',
      headerName: 'Price',
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
        <Link to={`/products/${params.row.id}`}>
      <button className='editBtn' >Edit</button> 
        </Link>
   
      <DeleteForeverIcon className='deleteIcon' onClick={()=>productsDelete(params.row.id)}/>
      </div>
      )
     }
    }
  ]
  return (
    <div className='productsList'>

       <DataGrid className='datagrig'
        rows={productsData}
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
