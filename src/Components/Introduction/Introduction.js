import React from 'react'
import './Introduction.scss'


function Introduction() {
  return (
    <div id='introductionDiv'>
      <section className='myIntro'>
        <div className='textIntroDiv'>
          <h3 className='introToName textName'>Hi, I am</h3>
          <h1 className='name textName bigText'>Isaac Ruiz, </h1>
          <h1 className='underName bigText textName'>Software Engineer.</h1>
          <p className='smallUnderName textName'>I am a full stack software engineer. I take great pride and pleasure in providing the best possible product whether it be in the front-end or back-end.</p>
        </div>
      </section>
    </div>
  )
}

export default Introduction