import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const HomePage = ({ username }) => {
  return (
    <div>
      <Sidebar/>
      <h2>Welcome, {username}!</h2>
      <p>This is the homepage.</p>
      <Footer/>
    </div>
  );
};

export default HomePage;
