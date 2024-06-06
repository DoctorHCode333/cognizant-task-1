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
        size: 22, 
        weight: 'bold', 
      }
    },
    legend: {
      labels: {
        font: {
          size: 18, 
        }
      }
    },
    tooltip: {
      titleFont: {
        size: 18, 
      },
      bodyFont: {
        size: 18, 
      }
    }
  }
};
const categorizeAge = (age) => {
    if (age >= 18 && age <= 25) return '18-25';
    else if (age >= 26 && age <= 35) return '26-35';
    else if (age >= 36 && age <= 50) return '36-50';
    else if (age >= 51 && age <= 60) return '51-60';
    else if (age >= 61 && age <= 75) return '61-75';
    else if (age >= 76 && age <= 85) return '76-85';
    else return 'Unknown';
  };
  
const calculateAgeStats = (users) => {
const ageGroups = ['18-25', '26-35', '36-50', '51-60', '61-75', '76-85', 'Unknown'];
const ageStats = {};

// Initialize age stats object
ageGroups.forEach(group => {
    ageStats[group] = { count: 0, percentage: 0 };
});

// Count users in each age group
users.forEach(user => {
    const ageGroup = categorizeAge(user.age);
    ageStats[ageGroup].count++;
});

// Calculate percentage of users in each age group
const totalUsers = users.length;
ageGroups.forEach(group => {
    ageStats[group].percentage = (ageStats[group].count / totalUsers) * 100;
});

return ageStats;
};
  
const PieChart = ({ data }) => {
    // Calculate age statistics
    const ageStats = calculateAgeStats(data);
  
    // Prepare chart data
    const chartData = {
      labels: Object.keys(ageStats),
      datasets: [{
        label: 'Age Groups',
        data: Object.values(ageStats).map(stat => stat.count),
        backgroundColor: Object.keys(ageStats).map(() => `hsl(${Math.random() * 360}, 50%, 50%)`)
      }]
    };
  
    return (
      <div>
        <h2>User Age Groups Pie Chart</h2>
        <Pie data={chartData} />
      </div>
    );
  };
  

export default PieChart;


