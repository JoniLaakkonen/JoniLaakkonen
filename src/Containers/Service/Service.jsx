import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./service.css";

const Service = () => {
    
  const navigate = useNavigate();
  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(true)
  const [isHovered3, setIsHovered3] = useState(false)

    
  const GoToLinkedin = e => {
      window.open('https://www.linkedin.com/in/joni-laakkonen-b46953206/')
  }
  const GoToCM = e => {
    navigate('/JoniLaakkonen/contact_card')
  }
  const GoToSkills = e => {
    navigate('/JoniLaakkonen/skills')
  }

    return (

        <>
        <div id="skills_section">
            <div className="links-section">
            <div className={"links-content"} id="lc1" onClick={GoToCM}
            onMouseEnter={() => setIsHovered2(false) && setIsHovered3(false) && setIsHovered1(true)}
            onMouseLeave={() => !isHovered2 && !isHovered3 ? setIsHovered2(true) : setIsHovered2(false)}
            >
                <h2 className="linksto">
                  Contact Me
                </h2>
            </div>
            <div className={isHovered2 ? "links-content hovered" : "links-content"} id="lc2" onClick={GoToSkills}
            onMouseEnter={() => setIsHovered2(true) && setIsHovered1(false) && setIsHovered3(false)}
            onMouseLeave={() => !isHovered3 && !isHovered1 ? setIsHovered2(true) : setIsHovered2(false)}
            >
                <h2 className="linksto">
                  Skills
                </h2>
            </div>
            <div className={"links-content"} id="lc3" onClick={GoToLinkedin}
            onMouseEnter={() => setIsHovered2(false) && setIsHovered1(false) && setIsHovered3(true)}
            onMouseLeave={() => !isHovered2 && !isHovered1 ? setIsHovered2(true) : setIsHovered2(false)}
            >
                <h2 className="linksto">
                LinkedIn
                </h2>
            </div>
        </div>
      </div>
      </>


    )
}
export default Service;