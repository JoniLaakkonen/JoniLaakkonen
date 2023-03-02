import React, { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

return(
  <> 
        <li className="nav-item" id={isOpen ? "NoneMenuButton" : "MenuButton"} onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon sx={{ mr: 2 }} fontSize="large"/>         
        </li>

        <li className="nav-item" id={!isOpen ? "NoneCloseButton" : "CloseButton"} onClick={() => setIsOpen(!isOpen)}>
        <CloseIcon sx={{ mr: 2 }} fontSize="large"/>
        </li>
  </>
)}


export default MenuButton;