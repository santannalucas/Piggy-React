import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css'

async function loginUser(credentials) {
 return fetch('http://localhost:8000/login_api', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json());
}

export default function Login({ setToken, setUser }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const api_response = await loginUser({
      email,
      password
    });

    setToken(api_response);
  }

  return(
    <div id="login">
      <div id='login-logo'>	<img src="logo_l.png" alt='logo' width='100%'/></div>
      <form onSubmit={handleSubmit}>
      <ul className="login-menu">
        <li><label className='login-label'>E-mail:</label></li>
        <li><input type="text" onChange={e => setEmail(e.target.value)} className='login-input'/></li>
        <li><label className='login-label'>Password:</label></li>
        <li><input type="password" onChange={e => setPassword(e.target.value)} className="login-input"/></li>
      </ul>
        <div>
          <button type="submit" className='login-submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};