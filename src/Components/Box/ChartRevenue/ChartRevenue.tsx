import React from 'react'
import { LineChart, Line, ResponsiveContainer , Tooltip } from "recharts";

import { chartBoxRevenue } from '../../../data';

const ChartRevenue = () => {
  return (
    <div className='chartBox'>
    <div className='box_info'>
        <div className='title'>
            <img src="/userIcon.svg" alt="" />
            <span>{chartBoxRevenue.title}</span>
        </div>
        <h1>{chartBoxRevenue.number}</h1>
        <a href="/"   style={{color: chartBoxRevenue.color }}>View all</a>
    </div>
    <div className='chart_info'>
        <div className='chart'>
                <ResponsiveContainer width="100%" height="90%">
                 <LineChart width={300} height={100} data={chartBoxRevenue.chartData}>
                 <Tooltip
                     position={{x:10 , y:80}}
                     labelStyle={{display:"none"}}
                    contentStyle={{ backgroundColor: "transparent" , border :"0px" }} // Example: Customize the tooltip background color
                    />
                        <Line type="monotone" dataKey={chartBoxRevenue.dataKey} stroke={chartBoxRevenue.color} strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
        </div>
        <div className='texts'>
              <span className="percentage" style={{color: "tomato"}}>{chartBoxRevenue.percentage}%</span>
              <span className="duration">this month</span>
        </div>
    </div>

</div>
  )
}

export default ChartRevenue