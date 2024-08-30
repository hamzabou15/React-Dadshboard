import { barChartBoxRevenue } from '../../../data'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'

const ChartProfit = () => {
  return (
    <div className='barChart_box' >
    <h1>{barChartBoxRevenue.title}</h1>
        <ResponsiveContainer width="99%" height={150}>
        <BarChart data={barChartBoxRevenue.chartData}>
            <Tooltip
            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor={{fill:"none"}}
            />
            <Bar barSize={15} dataKey={barChartBoxRevenue.dataKey} fill={barChartBoxRevenue.color} />
        </BarChart>
        </ResponsiveContainer>
</div>
  )
}

export default ChartProfit