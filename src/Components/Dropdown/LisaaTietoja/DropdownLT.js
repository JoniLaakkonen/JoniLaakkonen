import React, { useState } from "react";
import { tietojaDownItems } from "../../../Containers/NavBar/NavItems"
import { Link } from "react-router-dom";



function DropDownMenuLT() {

    const [dropdown, setDropdown] = useState(false);

    return (
        <ul className={dropdown ? "service-submenu clicked" : "service-submenu" } id="LT" onClick={() => setDropdown(!dropdown)}>
        { tietojaDownItems.map(item => {
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

export default DropDownMenuLT;