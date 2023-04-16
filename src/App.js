import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './fontawesome/css/all.css'
import Dashboard from './Dashboard';
import Login from './components/Login';
import useToken from './useToken';
import Navbar from './components/Navbar/Navbar';
import Users from './components/Admin/Users/Users';
import UserCreate from './components/Admin/Users/UserCreate';
import Schedulers from './components/Schedulers/Schedulers';



function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken}/>
  }
    
  return (
    <div>
      <Navbar/>
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/Admin/Users" element={<Users/>} />
            <Route path="/Admin/Users/Create" element={<UserCreate/>} />
            <Route path="/Schedulers" element={<Schedulers/>}/>
          </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;