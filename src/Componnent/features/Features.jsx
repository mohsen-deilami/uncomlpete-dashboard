import React from 'react'
import './Features.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Features() {
  return (
    <div className='features'>
        
      <div className="featuresItem ">
        <span className="featuresItem__title">Revanue</span>
        <div className="featuresItem__content">
            <span className="featuresItem__content__price">$2.415</span>
            <span className="featuresItem__content__reate">
                -11.4 
                <ArrowDownwardIcon className='featuresItem__icon negative'/>
                </span>
        </div>
        <div className="featuresItem__sub">compered to last month</div>
      </div>

      <div className="featuresItem">
        <span className="featuresItem__title">Sales</span>
        <div className="featuresItem__content">
            <span className="featuresItem__content__price">$4.415</span>
            <span className="featuresItem__content__reate">
                -1.4 
                <ArrowDownwardIcon className='featuresItem__icon negative'/>
                </span>
        </div>
        <div className="featuresItem__sub">compered to last month</div>
      </div>
      <div className="featuresItem lastFeaturesItem">
        <span className="featuresItem__title">Cost</span>
        <div className="featuresItem__content">
            <span className="featuresItem__content__price">$2.225</span>
            <span className="featuresItem__content__reate">
                +2.4 
                <ArrowUpwardIcon className='featuresItem__icon'/>
                </span>
        </div>
        <div className="featuresItem__sub">compered to last month</div>
      </div>
    </div>
  )
}
