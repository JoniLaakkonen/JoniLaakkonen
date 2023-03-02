import React, { useState } from "react";
import { palvelutDownItems } from "../../../Containers/NavBar/NavItems"
import { Link } from "react-router-dom";

import "./dropdown.css"

function DropDownMenu() {

    const [dropdown, setDropdown] = useState(false);


    return (
        <ul className={dropdown ? "service-submenu clicked" : "service-submenu" } id="SV" onClick={() => setDropdown(!dropdown)}>
        { palvelutDownItems.map(item => {
            return(
            <li key={item.id}>
                <Link 
                    className={item.cName} 
                    to={item.path} 
                    onClick={() => setDropdown(false)}
                >
                    {item.title}
                </Link>
            </li>
            );
          })} 
        </ul>
)}

export default DropDownMenu;