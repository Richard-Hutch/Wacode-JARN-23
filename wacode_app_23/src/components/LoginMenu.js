import React, { useState } from 'react';

function LoginInfo() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add authentication logic here
  };

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export default LoginInfo;
