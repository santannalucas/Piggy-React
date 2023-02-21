import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login';
import useToken from './useToken';
import Navbar from './components/Navbar';


function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken}/>
  }
    
  return (
    <div className="wrapper">
      <Navbar token = {token}/>
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Admin/Users/" />
          <Route path="/Admin/Access/" />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;