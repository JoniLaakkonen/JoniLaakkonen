import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./navBtn.css"


function NavBtn() {
  /*
    // Kirjaudu ulos
    const handleAuthentication = () => {
      if (user) {
          auth.signOut();
          navigate('/')
          
      } 
  }*/

  return (
    <Link to="signup">
        <button className="navBtn">
            <AccountCircleIcon fontSize="large"/>
            Kirjaudu
        </button>
    </Link>
  );
}

export default NavBtn;