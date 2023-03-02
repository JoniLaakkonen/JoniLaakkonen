import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./service.css";

const Service = () => {
    
  const navigate = useNavigate();
  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(true)
  const [isHovered3, setIsHovered3] = useState(false)

    
  const goToRV = e => {
      navigate('/ravintovalmennus')
    }

  const goToVT = e => {
    navigate('/vyohyketerapia')
  }
  const goToTTO = e => {
    navigate('/tunne_ja_tietoisuus')
  }

    return (

        <>
        <div className="srv">
            <h1 id="header">"[Palvelut]"</h1>

            <div className="links-section">
            <div className={"links-content"} id="lc1" onClick={goToRV}
            onMouseEnter={() => setIsHovered2(false) && setIsHovered3(false) && setIsHovered1(true)}
            onMouseLeave={() => !isHovered2 && !isHovered3 ? setIsHovered2(true) : setIsHovered2(false)}
            >
                <h2 className="linksto">
                Ravinto- <br/> valmennus
                </h2>
            </div>
            <div className={isHovered2 ? "links-content hovered" : "links-content"} id="lc2" onClick={goToVT}
            onMouseEnter={() => setIsHovered2(true) && setIsHovered1(false) && setIsHovered3(false)}
            onMouseLeave={() => !isHovered3 && !isHovered1 ? setIsHovered2(true) : setIsHovered2(false)}
            >
                <h2 className="linksto">
                Vyöhyketerapia
                </h2>
            </div>
            <div className={"links-content"} id="lc3" onClick={goToTTO}
            onMouseEnter={() => setIsHovered2(false) && setIsHovered1(false) && setIsHovered3(true)}
            onMouseLeave={() => !isHovered2 && !isHovered1 ? setIsHovered2(true) : setIsHovered2(false)}
            >
                <h2 className="linksto">
                Tunne- ja tietoisuustaito ohjaus
                </h2>
            </div>
        </div>
      </div>
      </>


    )
}
export default Service;