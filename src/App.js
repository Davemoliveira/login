// src/App.js
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './HomePage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import LoginModal from './LoginModal';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); // Sidebar is expanded by default

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
  };


  
  return (
     <Router>
      <div className="app">
      <Header />

        <Switch>
          <Route path="/" exact>
            {loggedIn ? <HomePage username={username} /> : <LoginModal onLogin={handleLogin} />}
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
        </Switch>

        <Footer />

      </div>
    </Router>
  );
};

export default App;
