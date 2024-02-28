import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const HomePage = ({ username }) => {
  return (
    <div>
      <Sidebar/>
      <h2>Welcome, {username}!</h2>
      <p>This is the homepage.</p>
    </div>
  );
};

export default HomePage;
