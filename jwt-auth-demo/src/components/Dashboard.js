import React from 'react';
import { logout } from '../services/authService';

const Dashboard = ({ setAuthenticated }) => {
  const handleLogout = () => {
    logout();
    setAuthenticated(false);
  };

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
