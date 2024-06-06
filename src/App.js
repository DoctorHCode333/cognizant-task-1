import React, { useState, useEffect } from 'react';
import BarChart from './Components/BarChart';
import PieChart from './Components/PieChart';
import DataTable from './Components/Table';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
      setData(result);
    };

    fetchData().catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1>User Data Visualization App</h1>
      <div className="chart-container">
        <BarChart data={data} />
      </div>
      <div className="chart-container">
        <PieChart data={data} />
      </div>
      <div className="table-container">
        <DataTable data={data} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
};

export default App;