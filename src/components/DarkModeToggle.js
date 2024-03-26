import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  // State to track whether dark mode is enabled
  const [darkMode, setDarkMode] = useState(false);

  // Effect to set dark mode class on the body element when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Function to toggle dark mode state
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
