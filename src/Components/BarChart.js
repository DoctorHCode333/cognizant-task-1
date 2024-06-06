import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  plugins: {
    title: {
      display: true,
      text: 'Chart Title',
      font: {
        size: 22, // title font size
        weight: 'bold', // title bold
      }
    },
    legend: {
      labels: {
        font: {
          size: 18, //  legend font size
        }
      }
    },
    tooltip: {
      titleFont: {
        size: 18, //  tooltip title font size
      },
      bodyFont: {
        size: 18, // tooltip body font size
      }
    }
  }
};

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [{
      label: 'User ID',
      data: data.map(item => item.id),
      backgroundColor: 'rgba(75, 192, 192, 0.8)',
    }]
  };

  return (
    <div>
      <h2>User ID Bar Chart</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
