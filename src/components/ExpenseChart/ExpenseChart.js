import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

import './ExpenseChart.css';

function ExpenseChart(props) {
  const chartData = [
    { month: 'Jan', amount: 0 },
    { month: 'Feb', amount: 0 },
    { month: 'Mar', amount: 0 },
    { month: 'Apr', amount: 0 },
    { month: 'May', amount: 0 },
    { month: 'Jun', amount: 0 },
    { month: 'Jul', amount: 0 },
    { month: 'Aug', amount: 0 },
    { month: 'Sep', amount: 0 },
    { month: 'Oct', amount: 0 },
    { month: 'Nov', amount: 0 },
    { month: 'Dec', amount: 0 },
  ];

  props.filteredExpenses.forEach((filteredExpense) => {
    const matchedExpense = chartData[filteredExpense.date.getMonth()];

    matchedExpense.amount += filteredExpense.amount;
  });

  console.log(chartData);

  return (
    <div className="expense-chart">
      <BarChart width={800} height={300} data={chartData}>
        <XAxis
          dataKey="month"
          tick={{
            fill: 'white',
            fontFamily: "'Varela Round', sans-serif",
          }}
          stroke="white"
        />
        <YAxis
          tick={{
            fill: 'white',
            fontFamily: "'Varela Round', sans-serif",
          }}
          stroke="white"
        />
        <Legend />
        <Bar dataKey="amount" fill="#1eae98" dot={false} />
      </BarChart>
    </div>
  );
}

export default ExpenseChart;
