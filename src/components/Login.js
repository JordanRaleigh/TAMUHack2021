import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmission = async () => {
    const payload = JSON.stringify({ email: email, password: password });

    let res = await fetch('https://7a8424e98eb3.ngrok.io/api/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: payload,
    });
    try {
      let status = res.status;
      if (status !== 200) return console.log(await res.text());
      console.log(await res.text());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        id="email"
        value={email}
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        id="password"
        value={password}
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmission}>Login</button>
    </div>
  );
};

export default Login;
