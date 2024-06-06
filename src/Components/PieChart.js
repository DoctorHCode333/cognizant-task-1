import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const chartOptions = {
  plugins: {
    title: {
      display: true,
      text: 'Chart Title',
      font: {
        size: 18, // Adjust the title font size
        weight: 'bold', // Make the title bold
      }
    },
    legend: {
      labels: {
        font: {
          size: 14, // Adjust the legend font size
        }
      }
    },
    tooltip: {
      titleFont: {
        size: 14, // Adjust the tooltip title font size
      },
      bodyFont: {
        size: 14, // Adjust the tooltip body font size
      }
    }
  }
};

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [{
      label: 'User Company',
      data: data.map(item => item.company.name.length),
      backgroundColor: data.map(() => `hsl(${Math.random() * 360}, 50%, 50%)`)
    }]
  };

  return (
    <div>
      <h2>User Company Pie Chart</h2>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;

