import React from 'react'
import './Home.css'
import Features from '../../Componnent/features/Features'
import Charts from '../../Componnent/charts/Charts'
import WidgetSm from '../../Componnent/wigetSm/WidgetSm'
import WidgetLg from '../../Componnent/wigetLg/WidgetLg'
import { xAxisData  } from '../../data';

export default function Home() {
  return (
    <div className='home'>
    <Features/>
   <Charts  grid title="Month Sale" data={xAxisData} dataKey="Sale"  myClass={'chart__class'}/>
   <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
     

  
    </div>
  )
}
