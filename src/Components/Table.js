import React from 'react';
import { CSVLink } from 'react-csv';

const DataTable = ({ data, searchTerm, setSearchTerm }) => {
  const headers = [
    { label: "Name", key: "name" },
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
    { label: "Company", key: "company.name" }
  ];

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tableStyle = {
    fontSize: '14px', // Adjust the font size for table
    color: '#333', // Adjust the font color for table
  };

  return (
    <div>
      <h2>User Data Table</h2>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
        style={{ marginBottom: '20px', fontSize: '14px' }} // Adjust the font size for input
      />
      <table style={tableStyle}> {/* Apply the style for table */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CSVLink 
        data={filteredData} 
        headers={headers} 
        filename="user_data.csv"
        className="btn"
        target="_blank"
        style={{ fontSize: '14px' }} // Adjust the font size for CSVLink
      >
        Download CSV
      </CSVLink>
    </div>
  );
};

export default DataTable;
