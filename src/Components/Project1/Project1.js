import React from 'react'
import './Project1.scss'
import desktopRemembrance from './desktopRemembrance.jpg'
import mobileRemembrance from './mobileRemembrance.jpg'
import { useEffect, useRef, useState } from 'react'

const Projects = () => {
  const [isVisible, setVisible] = useState(true);
  const fadeInRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setVisible(entry.isIntersecting)
          if (entry.isIntersecting) {observer.unobserve(entry.target)}
        })
      },{threshold: .25})
    observer.observe(fadeInRef.current)

  }, []);
  return (
    <div id='projects' className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    ref={fadeInRef}>
        <section className='projectsSection'>
        <h1>Remembrance</h1>
            <div className='innerProjectDiv' id='leftProjectDiv'>
              <a href='https://inquisitive-sorbet-a52729.netlify.app/' target='_blank'>
                <img src={desktopRemembrance} alt='Desktop version of my Remembrance website' />
              </a>

            </div>
            <div className='innerProjectDiv' id='rightProjectDiv'>
                <p>
                  I built this with Mongoose, Express, React, and Node aka the <span>MERN</span> stack. 
                  <hr class="space-1" />
                  With the use of json web tokens and the passport strategy I implemented <span>authentication</span> and <span>authorization</span> for this app.
                  <hr class="space-1"/>
                  This app also uses <span>CRUD</span> functionality so the user can have dynamic interactions. 
                  <hr class="space-1" />
                  The user can store unique information by creating personalized cards for any individual.  So that when the time comes, they can be prepared to express how important that one person is. 
                </p>
            </div>
            <div className='projectLinks'>
                <a href='https://inquisitive-sorbet-a52729.netlify.app/' target='_blank' className='deployedLink'>
                    Deployed Link
              </a>
                  <a href='https://github.com/isaacruiz0/Front-End-Remembrance' target='_blank' className='repoLink'>Front End Repository</a>
                  <a href='https://github.com/isaacruiz0/Back-End-Remembrance' target='_blank' className='repoLink'>Back End Repository</a>
                </div>

        </section>
    </div>
  )
}

export default Projects