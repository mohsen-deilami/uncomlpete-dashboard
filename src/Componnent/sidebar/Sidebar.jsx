import React from 'react'
import './Sidebar.css'
import {  NavLink} from 'react-router-dom';

import CottageIcon from '@mui/icons-material/Cottage';
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from '@mui/icons-material/TrendingDown';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Inventory2Icon from '@mui/icons-material/Inventory2';

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/WorkOutline";



export default function Sidebar() {
  return (

    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">

                <h4 className="sidebarTitle"> Dashboard  </h4>
                <ul className="sideberList">
                        <NavLink  to='/' className='link'>
                    <li className="sidebarListItem">
                        <CottageIcon className='sidebarIcon'/>
                        Home
                    </li>
                        </NavLink>
                   <li className="sidebarListItem">
                    <TimelineIcon className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h4 className="sidebarTitle">Quick Menu </h4>
                <ul className="sideberList">
                        <NavLink to='/userslist' className='link'>
                    <li className="sidebarListItem">
                        <PermIdentityIcon className='sidebarIcon'/>
                        Usres                        
                    </li>
                        </NavLink>
                            
                        <NavLink to="/newuser" className='link'>


                    <li className="sidebarListItem">

                        <PersonAddAltIcon className='sidebarIcon'/>
                        New User
                    </li>
                        </NavLink>
                     <NavLink to="/products" className='link'>

                    <li className="sidebarListItem">
                        <Inventory2Icon className='sidebarIcon'/>
                        Products
                    </li>
                      </NavLink>
                    <li className="sidebarListItem">
                        <AttachMoneyIcon className='sidebarIcon'/>
                        Transactions

                    </li>
                    <li className="sidebarListItem">
                        <BarChartIcon className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h4 className="sidebarTitle">Notificatons </h4>
                <ul className="sideberList">
                    <li className="sidebarListItem">
                        <MailOutlineIcon className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeedIcon className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutlineIcon className='sidebarIcon'/>
                        Message

                    </li>
                    <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon" />
              Reports
            </li>
                  
                </ul>
            </div>
        </div>

      
    </div>
  
  )
}
