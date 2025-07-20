import React from 'react';
import { Bar } from 'react-chartjs-2';

const StatChart = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Score',
        data,
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      }
    ]
  };

  return <Bar data={chartData} />;
};

export default StatChart;