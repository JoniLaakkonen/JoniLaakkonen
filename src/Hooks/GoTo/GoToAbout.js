import React from "react";
import { useNavigate } from "react-router-dom"

function GoToAbout () {
  const navigate = useNavigate();  

  const goToAbout = e => {
      navigate('/tietoja')
  }
  return goToAbout;
}
export default GoToAbout;