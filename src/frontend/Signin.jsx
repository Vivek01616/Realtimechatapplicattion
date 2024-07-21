import React, { useState } from 'react';
import './Signin.css';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or perform authentication logic here
    if (email === 'example@example.com' && password === 'password') {
      console.log('Signed in successfully!');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="sign-in-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="example@example.com"
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
        />
        <br />
        {error && <div className="error">{error}</div>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;