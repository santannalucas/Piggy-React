import React, { useState, useEffect } from "react";
import './Navbar.css'

export default function Navbar() {
  const [user, setUser] = useState([]);
  const [navbar, setNavbar] = useState(null);
  
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/users/navbar", {  
    headers: {
      'Authorization': JSON.parse(sessionStorage.token).token,
      'Content-Type': 'application/json'
    }})
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setNavbar(JSON.parse(data.navbar));
      })
      .catch(err => {
        Logout()
        console.log(err)
      })
  }, []);

  function Logout() {
    sessionStorage.clear()
  }

  if(user.error) {
    Logout()
  }
     return (
        <>
        {navbar ? (
          <nav className="navbar">
            {/* Logo */}
              <a href="/" className="nav-logo"><img src='/logo192.png' height='100%' alt='Dashboard' title="Dashboard"/></a> 
                {navbar.map((dropdown, index) => (
                  <div className="dropdown" key={index}>
                    <div className="drop-btn">
                      <i className={dropdown[2]}>{ dropdown[1] === 'text' ? user.initials : '' }</i>                                
                      <div className="dropdown-content">
                        <div className="dropdown-title">{dropdown[0]}</div>         
                        {dropdown[3].map((item, index) => (<a href={item[1].href} key={index}><i className={item[1].icon}/> {item[1].title}</a>))}
                        {dropdown[0] === 'User Management' ? <a href="/" onClick={() => Logout()}><i className="fad fa-right-from-bracket"></i>Logout</a> : ""}
                      </div>
                    </div>
                  </div>
                ))}
   
              </nav>
            ) : (
              <p>Loading...</p>
          )}
        </>
      )
  
}