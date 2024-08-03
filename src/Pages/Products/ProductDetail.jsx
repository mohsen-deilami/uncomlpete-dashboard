import React from 'react'
 import './productsDetail.css' 
import { productsDetails , xAxisDataProducts } from '../../data';
import Charts from '../../Componnent/charts/Charts'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PublishIcon from '@mui/icons-material/Publish';


export default function ProductDetail() {
    let params=useParams();
    const [productsDetail ,setProductsDetail]=useState(productsDetails);
  
    const mainProduct=productsDetail.find(product =>{
      return   product.id === params.productId
    })
   
   
  return (
    <div className='product'>
      <div className="productTitleContainer">
          <h1 className='productTitle'>Product</h1>
          <Link to='/newProduct'>
          <button className='productAddBtn'>Create</button>
          </Link>
      </div>
      <div className="product__top">
        <div className="product__top-left">    
      <Charts  title="Sale In Month ... "     data={xAxisDataProducts} dataKey="Sale"   myClass={'product__top__chart'}  />
        </div>

        <div className="prodcut__top-right">
          <div className="productInfoTop">
            <img src={mainProduct.image} alt="" className="productInfoTop__Img" />
            <span className="productInfoTop__Name">{mainProduct.title}</span>
          </div>

          <div className="productInfoItems">
          <div className="productInfoItem">
            <div className="productInfoItem__Key">ID :</div>
            <div className="productInfoItem__value">{mainProduct.id}</div>
          </div>
          <div className="productInfoItem">
            <div className="productInfoItem__Key">Name :</div>
            <div className="productInfoItem__value">{mainProduct.title}</div>
          </div>
          <div className="productInfoItem">
            <div className="productInfoItem__Key">Sales :</div>
            <div className="productInfoItem__value">{mainProduct.sale}$</div>
          </div>
          <div className="productInfoItem">
            <div className="productInfoItem__Key">Active :</div>
            <div className="productInfoItem__value">Yes</div>
          </div>
          <div className="productInfoItem">
            <div className="productInfoItem__Key">In Stock :</div>
            <div className="productInfoItem__value">No</div>
          </div>
          </div>

        </div>
      </div>

      <div className="productButtom">
        <form  className="produtForm">

        <div className="productBottom__left">

          <label >Product Name</label>
          <input type='text' placeholder='Product Name...'/>
          
          <label >In Stock</label>
           <select id='inStock'>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

          <label >In Active</label>
           <select  id='active'>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
        </div>

        <div className="productBottom__right">
          <div className="productBottom__right--content">

        <img src={mainProduct.image} alt="" className="productUpload__Img" />
        <PublishIcon className='productBottom__icon'/>
          </div>
        <button className='productBottom__btn'>Upload (Edit)</button>
        </div>
        </form>
      </div>
    </div>
   
  )
}
