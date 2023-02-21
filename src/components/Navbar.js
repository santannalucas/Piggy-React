import React, { useState, useEffect } from "react";
/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
*/
import '../assets/styles/Navbar.css'
export default function Navbar(props) {
  const [user, setUser] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8000/api/v1/users/navbar", {  
    headers: {
        'Authorization': props.token,
        'Content-Type': 'application/json'
    }})
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
 
  console.log(user)

  return (
  <div>

  </div>
  );
}