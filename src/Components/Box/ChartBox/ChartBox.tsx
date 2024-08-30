import React from 'react'
import './ChartBox.scss'
import { LineChart, Line, ResponsiveContainer , Tooltip } from "recharts";

import { chartBoxUser } from '../../../data';


const ChartBox = () => {

  
  return (
    <div className='chartBox'>
        <div className='box_info'>
            <div className='title'>
                <img src="/userIcon.svg" alt="" />
                <span>{chartBoxUser.title}</span>
            </div>
            <h1>{chartBoxUser.number}</h1>
            <a href="/"   style={{color: "rgb(136, 132, 216)"}}>View all</a>
        </div>
        <div className='chart_info'>
            <div className='chart'>
                    <ResponsiveContainer width="100%" height="90%">
                     <LineChart width={300} height={100} data={chartBoxUser.chartData}>
                     <Tooltip
                         position={{x:10 , y:80}}
                         labelStyle={{display:"none"}}
                        contentStyle={{ backgroundColor: "transparent" , border :"0px" }} // Example: Customize the tooltip background color
                        />
                            <Line type="monotone" dataKey={chartBoxUser.dataKey} stroke={chartBoxUser.color} strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
            </div>
            <div className='texts'>
                  <span className="percentage" style={{color: "limegreen"}}>{chartBoxUser.percentage}%</span>
                  <span className="duration">this month</span>
            </div>
        </div>

    </div>
  )
}

export default ChartBox