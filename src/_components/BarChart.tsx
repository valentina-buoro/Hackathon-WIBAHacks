// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const BarChart = ({ data }:any) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Election Results',
        backgroundColor: '#008000',
        borderColor: '#008000',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: data.values,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 1, 
        precision: 0,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
