import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import { chartBoxConversion } from '../../../data';


const ChartRatio = () => {
  return (
    <div className='chartBox'>
        <div className='box_info'>
            <div className='title'>
                <img src="/userIcon.svg" alt="" />
                <span>{chartBoxConversion.title}</span>
            </div>
            <h1>{chartBoxConversion.number}</h1>
            <a href="/"   style={{color: chartBoxConversion.color}}>View all</a>
        </div>
        <div className='chart_info'>
            <div className='chart'>
                    <ResponsiveContainer width="100%" height="90%">
                     <LineChart width={300} height={100} data={chartBoxConversion.chartData}>
                     <Tooltip
                         position={{x:10 , y:80}}
                         labelStyle={{display:"none"}}
                        contentStyle={{ backgroundColor: "transparent" , border :"0px" }} // Example: Customize the tooltip background color
                        />
                            <Line type="monotone" dataKey={chartBoxConversion.dataKey} stroke={chartBoxConversion.color} strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
            </div>
            <div className='texts'>
                  <span className="percentage" style={{color: "limegreen"}}>{chartBoxConversion.percentage}%</span>
                  <span className="duration">this month</span>
            </div>
        </div>

    </div>
  )
}

export default ChartRatio
