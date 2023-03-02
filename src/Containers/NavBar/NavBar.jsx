import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
//import logo from '../../Assets/logo.svg';

import { DropDownMenuLT, DropDownMenu } from "../../Components/Dropdown"
import NavBtn from "../../Components/navBtn"
import MenuButton from "../../Components/MenuButton/MenuButton";


function NavBar() {

  const [dropdown, setDropdown] = useState(false);
  const [dropdownLT, setDropdownLT] = useState(false);
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
      <div className="navibar-links">
        <Link to='/' className="navibar-links_logo">
          Sanna
        </Link>
        
        <ul className={navOpen ? "nav-items active" : "nav-items"}>
          <div className="nav-options">
          {navItems.map(item => {
            if(item.title === "Palvelut"){
              return(
                <li key={item.id} onClick={() => setDropdown(!dropdown)} className={item.cName} 
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                  >
                  
                  <Link id="navA" to={item.path}>
                    {item.title}
                  </Link>
                  { dropdown && <DropDownMenu /> }
                </li>
                );
            }
            if(item.title === "Yhteystiedot"){
              return(
                <li key={item.id} onClick={() => setDropdownLT(!dropdownLT)} className={item.cName} 
                  onMouseEnter={() => setDropdownLT(true)}
                  onMouseLeave={() => setDropdownLT(false)}>
                  
                  <Link id="navA" to={item.path}>
                  
                    {item.title}
                  </Link>
                  { dropdownLT && <DropDownMenuLT /> }
                </li>
                );
            }
            return(
            <li key={item.id} className={item.cName} onClick={() => setNavOpen(!navOpen)}>
              <Link id="navA" to={item.path}>{item.title}</Link>
            </li>
            );
          })} 
          </div>
         <div className="loginbtn">
            <NavBtn />
          </div>
          
        </ul>
          <div className="SMenuBtn" style={{zIndex:1001}} onClick={() => setNavOpen(!navOpen)}>
            <MenuButton />
          </div>
      </div>
    </nav>
    </>
  );
}

export default NavBar;