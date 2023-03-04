import React from 'react'
import './BackToMain.css'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function BackToMain() {

  return (
    <a href='/JoniLaakkonen' className='BTM'><ArrowCircleLeftIcon id='BTM_arrowleft' sx={{ color: 'var(--color-darkBlue)', fontSize: 48}}/><h2 id='BTM_text'>Back To Main</h2></a>
  )
}

export default BackToMain