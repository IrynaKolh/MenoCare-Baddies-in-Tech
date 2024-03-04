import React from 'react';
import { useAuth } from '../utils/useAuth';
import './Dashboard.css';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="dashboard-container">
      <h2>Hello, {user?.user.name} !</h2>
      <div className="check-in-box">
        <p>Daily Check-In</p>
        <button type="button">Let’s Go</button>
      </div>
    </div>
  );
};

export default DashboardPage;
