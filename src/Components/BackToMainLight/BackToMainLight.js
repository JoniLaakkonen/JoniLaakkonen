import React from 'react'
import './BackToMainLight.css'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function BackToMainLight() {

  return (
    <a href='/' className='BTM_L'><ArrowCircleLeftIcon id='BTM_L_arrowleft' sx={{ color: 'var(--color-text)', fontSize: 48}}/><h2 id='BTM_L_text'>Back To Main</h2></a>
  )
}

export default BackToMainLight