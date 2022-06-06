import React from 'react'
import './Project2.scss'
import desktopGarage from './desktopGarage.jpg'
import mobileGarage from './mobileGarage.jpg'
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
        <h1>Garage Worx</h1>
            <div className='innerProjectDiv' id='leftProjectDiv'>
              <a href='https://garage-worx.com/' target='_blank'>
                <img src={desktopGarage} alt='Desktop version of my Remembrance website' />
              </a>
            </div>
            <div className='innerProjectDiv' id='rightProjectDiv'>
                <p>
                  Garage Worx is a high ticket service website I built using Javascript, HTML, and CSS within the <span>React</span> framework
                  <hr class="space-1" />
                  I regularly <span>update</span> and <span>maintain</span> this site's design and functionality to improve the website's user experience.
                </p>
            </div>
            <div className='projectLinks'>
                <a href='https://garage-worx.com/' target='_blank' className='deployedLink'>
                    Deployed Link
              </a>
                  <a href='https://github.com/isaacruiz0/GarageWorx' target='_blank'>Front End Repository</a>
            </div>

        </section>
    </div>
  )
}

export default Projects