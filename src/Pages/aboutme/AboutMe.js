import React from 'react'
import "./AboutMe.css"
import minakuva from '../../Assets/Images/minakuva.JPG'
import BackToMain from '../../Components/BackToMain/BackToMain'

function AboutMe() {
  return (
    <>
      <div className='about_main'>
        <BackToMain/>
        <h1 id='about_Header'>Contact Card</h1>
        <div className='about_details'>
          <article id='about_info'>
            <h4 id='about_name'> Joni Laakkonen</h4>
            <p id='personal_info'>	- 23 years old<br/>
	            - Passionate about programming, sports and food
            </p>
            <small id='contact_info'>
              +358445991202 <br/>
	            jolaakkonen@gmail.com<br/>
	            Joensuu, FI
            </small>
          </article>
          <img id='minakuva' src={minakuva}></img>
        </div>
      </div>
    </>
  )
}

export default AboutMe