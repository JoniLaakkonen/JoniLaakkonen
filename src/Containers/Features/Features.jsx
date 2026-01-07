import React from "react";
import "./features.css";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Features() {

  const handleClick = () => {
    window.open("https://github.com/JoniLaakkonen");
  }

  return (
      <div id="Features-section">
        <div className="Features-content">
          <a className="Feature-Button" onClick={handleClick}>
            <h2 className="Features-header">
              Git-Hub
            </h2>
            <ArrowCircleRightIcon sx={{ 
                color: "white", 
                fontSize: 48
            }}/>
              
          </a>
          <img src={process.env.PUBLIC_URL + '/assets/images/github-mark-white.png'} />
        </div>
      </div>
  );
}

export default Features;