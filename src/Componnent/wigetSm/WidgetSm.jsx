import React from 'react'
import './WigetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { widgetSmData } from '../../data';

export default function WidgetSm() {
  return (
    <div className='wigetSm'>
      <h3 className="title">New Join Members</h3>
        <ul className="wigetSm__list">

              {widgetSmData.map(user =>(
                
                <li className="wigetSmList__items">
                <img src={user.image} alt="" className='wigetSmList__items__img'/>

        <div className="wigetSmList__items__user">
        <span className='wigetSmList__items__userName'>{user.userName}</span>
        <span className='wigetSmList__items__userTitle'>{user.userTitle}</span>
        </div>

        <button className='wigetSm__btn'>
            <VisibilityIcon className='wigetSm__icon' />
        </button>
            </li>
              ))}
        </ul>

     
    </div>
  )
}
