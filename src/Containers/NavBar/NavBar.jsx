import React, { useState } from "react";
import "./navbar.css";
import { navItems } from "./NavItems";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";


function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
    <nav className="navibar">
      <Link to={'/JoniLaakkonen/contact_card'} className="navibar-links_logo">
          Joni
        </Link>
      <div className="navibar-links">
        <ul className={navOpen ? "nav-items active" : "nav-items"}>
          <div className="nav-options">
          {navItems.map(item => {
              return item.title === "GitHub" ?
              (
                <li key={item.id} className={item.cName} onClick={() => setNavOpen(false)}>
                  <a id="navA" className="git" href={item.path}>{item.title}</a>
                </li>
              ) : (
                <li key={item.id} className={item.cName} onClick={() => setNavOpen(false)}>
                  <a id="navA" href={item.path}>{item.title}</a>
                </li>
              );
          })}
          </div>
        </ul>
          <div className="SMenuBtn" style={{zIndex:1001}}>
            <li className="nav-item" id={navOpen ? "NoneMenuButton" : "MenuButton"} onClick={() => setNavOpen(!navOpen)}>
              <MenuIcon sx={{ mr: 2 }} fontSize="large"/>
            </li>
            <li className="nav-item" id={!navOpen ? "NoneCloseButton" : "CloseButton"} onClick={() => setNavOpen(!navOpen)}>
              <CloseIcon sx={{ mr: 2 }} fontSize="large"/>
            </li>
          </div>
      </div>
    </nav>
    </>
  );
}

export default NavBar;