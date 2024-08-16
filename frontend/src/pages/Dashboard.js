// src/pages/Dashboard.jsx
import React from 'react';
import Navbar from './Navbar'; // Adjust the path as necessary

const Dashboard = () => {
  const token = localStorage.getItem('token');

  return (
    <div>
      <Navbar />
      <h2>User Dashboard</h2>
      {token ? <p>Welcome, you are logged in!</p> : <p>Please log in</p>}
    </div>
  );
};

export default Dashboard;
