import React from 'react'
import './Introduction.scss'
import {Link} from 'react-scroll'


function Introduction() {
  return (
    <div id='introductionDiv'>
      <section className='myIntro'>
        <div className='textIntroDiv'>
          <h3 className='introToName textName'>Hi, I am</h3>
          <h1 className='name textName bigText'>Isaac Ruiz, </h1>
          <h1 className='underName bigText textName'>Software Engineer.</h1>
          <p className='smallUnderName textName'>I am a full stack software engineer. I take great pride and pleasure in providing the best possible product whether it be in the front-end or back-end.</p>

          <Link className='link' to="projects" spy={true} smooth={true} offset={-100} duration={750}>
                        <span>See my work</span>
          </Link>
        </div>
        
      </section>
    </div>
  )
}

export default Introduction