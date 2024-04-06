import React from 'react'

import './Charts.css'
import {ResponsiveContainer , LineChart, Line ,CartesianGrid , XAxis , Tooltip ,YAxis} from 'recharts';

export default function Charts({myClass , title , data , dataKey , grid}) {
  return (
  

    <div className={myClass}>
      <h3 className='chart__title'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={5}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke='#5550bd'/>
        <YAxis/>   
      <Line type="monotone" dataKey={dataKey} stroke='#5550bd' />
      <Tooltip/>
      {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10"/>}
      </LineChart>
      </ResponsiveContainer>
      
    </div>
   
  )
}


