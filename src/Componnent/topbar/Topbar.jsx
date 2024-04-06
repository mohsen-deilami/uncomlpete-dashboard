import React from 'react'
import './topbar.css'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Totbar() {
  return (

      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
           
            <DashboardCustomizeIcon className="topLogo"/>
           <h3>Dashboard Project</h3>
          

          </div>
          <div className="topRight">
            <div className="topIconContainer">
              <NotificationsNoneIcon/>
              <span className='topIconBadge'>2</span>
            </div>
            <div className="topIconContainer">
             <LanguageIcon/>
              <span className='topIconBadge'>2</span>
            </div>
            <div className="topIconContainer">
             <SettingsIcon/>
             
            </div>
            <img src="/images/6.jpg" alt="" className='topAwater'/>
          </div>
        </div>


      </div>
  
  )
}
