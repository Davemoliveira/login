import React, { useState } from 'react';

const LoginModal = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate username and password here
    // For simplicity, let's just check if username and password are not empty
    if (username && password) {
      onLogin(username);
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div className="login-modal">
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>

    






  );
};

export default LoginModal;
