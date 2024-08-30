import './ChartVisit.scss'
import { barChartBoxVisit } from '../../../data'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'

const ChartVisit = () => {
    
  return (
    <div className='barChart_box' >
        <h1>{barChartBoxVisit.title}</h1>
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={barChartBoxVisit.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}

            />
            <Bar barSize={15} dataKey={barChartBoxVisit.dataKey} fill={barChartBoxVisit.color} />
          </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default ChartVisit