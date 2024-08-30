import React from 'react'
import "./ChartSource.scss"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const ChartSource = () => {
    const data = [
        { name: "Mobile", value: 400, color: "#0088FE" },
        { name: "Desktop", value: 100, color: "#00C49F" },
        { name: "Laptop", value: 300, color: "#FFBB28" },
        { name: "Tablet", value: 700, color: "#FF8042" },
      ];
      
  return (
    <div className='Chart_source'>
        <h1>Leads by Source</h1>
        <ResponsiveContainer width="99%" height={300}>
          <PieChart barSize={5}>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
              startAngle={90}  // Set the starting angle of the first sector
              endAngle={-270}  // Set the ending angle of the last sector
              width={10}
            >
              {data.map((item , index) => (
                <Cell key={item.name} fill={item.color}  startOffset={index * 60}  // Ajustez les angles de début des secteurs
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className='options'>
          {data.map((item) => (
            <div className='option' key={item.name}>
                <div className='title'>
                    <div className='circle' style={{ background: item.color }}></div>
                    <span>{item.name}</span>
                </div>
                <span>{item.value}</span>
            </div>
))}
        </div>
    </div>
  )
}

export default ChartSource