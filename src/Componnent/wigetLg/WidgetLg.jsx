import React from 'react'
import './WigetLg.css'
import { widgetLgData } from '../../data'

export default function WidgetLg() {
    const Button =({type})=>{
       return <button className={'widgetLgButton '+ type}>{type}</button>
    }
  return (
    <div className='wigetLg'>
        <h3 className="wigetLg__title">Latest TransActions</h3>
        <table className='wigetLgTble'>
            <tr className="wigetLgTr">
                <th className="wigetLgTh">Customer</th>
                <th className="wigetLgTh">Date</th>
                <th className="wigetLgTh">Mount</th>
                <th className="wigetLgTh">Status</th>
            </tr>
            {widgetLgData.map(user =>(

                <tr className="wigetLgTr">
                <td className="wigetLgTble__user">
                    <img src={user.image} alt="" className="wigetLgTble__user__img" />
                    <span className="wigetLgTble__user__userName">{user.costumer}</span>
                </td>
                <td className="wigetLgTble__user__date">{user.date}</td>
                <td className="wigetLgTble__user__amount">{user.amount}</td>
                <td className="wigetLgTble__user__status">
                     <Button type={user.status}>{user.status}</Button> 
                </td>
                
            </tr>
                ))}
        </table>
      
    </div>
  )
}
