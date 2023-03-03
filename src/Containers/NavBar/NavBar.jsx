import React, { useState } from "react";
import "./navbar.css";
import { navItems } from "./NavItems";
//import logo from '../../Assets/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";


function NavBar() {
  const [navOpen, setNavOpen] = useState(false);



  // const navSlide = () => {
  //   const burger = document.querySelector('MenuButton');
  //   const nav = document.querySelector('.nav-items');
  //   const navLinks = document.querySelectorAll('#navA');
    
    
  //   burger.addEventListener('click', () => {
        
  //       //toggle nav
  //       nav.classList.toggle('nav-active');

  //       //animate links
  //       navLinks.forEach((link, index) => {
  //           if(link.style.animation) {
  //               link.style.animation = '';
            
  //           }else{
  //               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  //           }
  //       });

  //   });

  // }

  return (
    <>
    <nav className="navibar">
      <Link to={'/contact_card'} className="navibar-links_logo">
          JoniLaakkonen
        </Link>
      <div className="navibar-links">
        <ul className={navOpen ? "nav-items active" : "nav-items"}>
          <div className="nav-options">
          {navItems.map(item => {
              return(
              <li key={item.id} className={item.cName} onClick={() => setNavOpen(false)}>
                <a id="navA" href={item.path}>{item.title}</a>
              </li>
              );
            })
          } 
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