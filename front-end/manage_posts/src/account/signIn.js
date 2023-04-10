import React, { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${username}, Password: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Sign-In</h2>
      <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder='username enter'
        /><br/>
      <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='password enter'
        /><br/>
      <button type="submit">Sign-in</button>
    </form>
  );
};

export default SignIn;
