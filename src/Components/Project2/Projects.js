import React from 'react'
import './Projects.scss'
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
        <h1>Garage-Worx</h1>
            <div className='innerProjectDiv' id='leftProjectDiv'>
              <a href='https://garage-worx.com/' target='_blank'>
                <img src={desktopGarage} alt='Desktop version of my Remembrance website' />
              </a>
            </div>
            <div className='innerProjectDiv' id='rightProjectDiv'>
                <p>
                  I built this for a client with Javascript, HTML, CSS within the <span>React</span> framework. 
                  <hr class="space-1" />
                  I maintain this site with both design and functional updates that better improve the website's user experience. 
                </p>

            </div>

        </section>
    </div>
  )
}

export default Projects