import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  var tokenString = sessionStorage.getItem('token');
  var userToken = JSON.parse(tokenString);
  
  if (userToken) {
    console.log('User Logged In')
    return userToken.token;
  }
  
  return null;
}

function App() {
  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;