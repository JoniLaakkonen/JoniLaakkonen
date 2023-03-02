import React from "react";
import "./features.css";

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { fontSize } from "@mui/system";

function Features() {


  return (
      <div className="Features-section">
        <div className="Features-content">
          <div className="Feature-Button">
            <h2 className="Features-header">
              Tutustu myös blogiini
            </h2>
            <ArrowCircleRightIcon sx={{ 
                color: "white", 
                fontSize: 48
            }}/>
              
          </div>
        </div>
      </div>
  );
}

export default Features;