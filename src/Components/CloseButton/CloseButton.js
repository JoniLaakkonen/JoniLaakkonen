import React, { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';

const MenuButton = () => {

    const [isOpen, setIsOpen] = useState(false);

return(
        <li className="nav-item" id={isOpen ? "NoneCloseButton" : "CloseButton"} onClick={() => setIsOpen(!isOpen)}>
          <CloseIcon sx={{ mr: 2 }} fontSize="large"/>
        </li>
)}


export default MenuButton;