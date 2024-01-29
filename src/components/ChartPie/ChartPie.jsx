import React, { Suspense } from "react"
import { ChartPie } from "./ChartPie.styles"
import {
  Tooltip,
  Legend,
  Cell,
  PieChart,
  Pie,
  ResponsiveContainer
  } from "recharts"

const colors = [
  `hsla(355.49132947976875, 77.57847533632287%, 56.27450980392157%, 1)`,
  `hsla(355.49132947976875, 77.57847533632287%, 50.27450980392157%, 1)`,
  `hsla(355.49132947976875, 77.57847533632287%, 45.27450980392157%, 1)`,
  `hsla(355.49132947976875, 77.57847533632287%, 40.27450980392157%, 1)`,
  `hsla(355.49132947976875, 77.57847533632287%, 35.27450980392157%, 1)`,
  `hsla(355.49132947976875, 77.57847533632287%, 30.27450980392157%, 1)`,
  `hsla(355.49132947976875, 77.57847533632287%, 25.27450980392157%, 1)`,
  `hsla(355.49132947976875, 77.57847533632287%, 20.27450980392157%, 1)`,
  `hsla(355.49132947976875, 77.57847533632287%, 15.27450980392157%, 1)`,
  `hsla(355.49132947976875, 77.57847533632287%, 10.27450980392157%, 1)`,
]
function Chart({data01, data02}) {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }
  return (
    <>
      <ChartPie>
        <ResponsiveContainer width={'100%'}  style={{display:'flex', justifyContent:'center'}}>
          <Suspense fallback={
            <div style={{ height: '100vh', width: '100vw', background: 'red' }}>
              <h1>loading</h1>
            </div>
          }>
            <PieChart width={408} height={408} style={{width:'100%', height:'100%'}}>
              <Legend
                position="relative"
                align="center"
                verticalAlign="bottom"
                height={"max-content"}
                iconType="circle"
                iconSize={4}
                width={'100%'}
                layout="horizontal"
                wrapperStyle={{ position: 'relative', top:0, fontSize: '1.2rem' }}
              />
              <Tooltip labelStyle={{ fontSize: "2em" }} position={{ x: 0, y: -10 }} cursor={{ stroke: 'green', strokeWidth: 2 }} />
              <Pie data={data02} dataKey="value" nameKey="role" cx="50%" cy="50%" outerRadius={90} labelLine={false} label={renderCustomizedLabel}>
                {
                  data02.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))
                }
              </Pie>
              <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={100} outerRadius={140} fill="var(--color-primary)" label >
                {
                  data01.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))
                }
              </Pie>
            </PieChart>
          </Suspense>
        </ResponsiveContainer>
      </ChartPie>
    </>
  )
}

export default Chart