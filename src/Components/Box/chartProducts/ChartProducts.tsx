import React from 'react'
import './ChartProducts.scss'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

import { chartBoxProduct } from '../../../data';

const ChartProducts = () => {
    console.log(chartBoxProduct)
  return (
    <div className='chartBox'>
        <div className='box_info'>
            <div className='title'>
                <img src="/userIcon.svg" alt="" />
                <span>{chartBoxProduct.title}</span>
            </div>
            <h1>{chartBoxProduct.number}</h1>
            <a href="/"   style={{color: chartBoxProduct.color}}>View all</a>
        </div>
        <div className='chart_info'>
            <div className='chart'>
                    <ResponsiveContainer width="100%" height="90%">
                     <LineChart width={300} height={100} data={chartBoxProduct.chartData}>
                     <Tooltip
                         position={{x:10 , y:80}}
                         labelStyle={{display:"none"}}
                        contentStyle={{ backgroundColor: "transparent" , border :"0px" }} // Example: Customize the tooltip background color
                        />
                            <Line type="monotone" dataKey={chartBoxProduct.dataKey} stroke={chartBoxProduct.color} strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
            </div>
            <div className='texts'>
                  <span className="percentage" style={{color: "limegreen"}}>{chartBoxProduct.percentage}%</span>
                  <span className="duration">this month</span>
            </div>
        </div>

    </div>
  )
}

export default ChartProducts