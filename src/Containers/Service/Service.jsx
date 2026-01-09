import { useState } from "react";
import "./service.css";

const Service = () => {
    
  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(true)
  const [isHovered3, setIsHovered3] = useState(false)

    
  const GoToLinkedin = e => {
      window.open('https://www.linkedin.com/in/joni-laakkonen-b46953206/')
  }
  const GoToCM = e => {
    window.open('https://slhealth.fi/')
  }
  const GoToSkills = e => {
    window.open('https://www.lumoavajasmin.fi/')
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
                  
              </h2>
            </div>
            <div className={isHovered2 ? "links-content hovered" : "links-content"} id="lc2" onClick={GoToSkills}
            onMouseEnter={() => setIsHovered2(true) && setIsHovered1(false) && setIsHovered3(false)}
            onMouseLeave={() => !isHovered3 && !isHovered1 ? setIsHovered2(true) : setIsHovered2(false)}
            >
                <h2 className="linksto">
                </h2>
            </div>
            <div className={"links-content"} id="lc3" onClick={GoToLinkedin}
            onMouseEnter={() => setIsHovered2(false) && setIsHovered1(false) && setIsHovered3(true)}
            onMouseLeave={() => !isHovered2 && !isHovered1 ? setIsHovered2(true) : setIsHovered2(false)}
            >
                <h2 className="linksto">
                </h2>
            </div>
        </div>
      </div>
      </>


    )
}
export default Service;