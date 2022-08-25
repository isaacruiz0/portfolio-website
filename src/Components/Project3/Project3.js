import React from 'react'
import './Project3.scss'
import quickquiz from './quickquiz.png'
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
        <h1>Quick Quiz</h1>
            <div className='innerProjectDiv' id='leftProjectDiv'>
              <a href='https://630169fc5f31e4225a05e731--peppy-strudel-d34a27.netlify.app/' target='_blank'>
                <img src={quickquiz} alt='Desktop version snipped of my quick quiz app' />
              </a>
            </div>
            <div className='innerProjectDiv' id='rightProjectDiv'>
                <p>
                  This is a sleek API extensive app that makes a multitude of requests to a <a href='https://the-trivia-api.com/' target='_blank'>trivia api</a>                   
                  <hr class="space-1" />
                  I built this app with the React framework for the purpose of allowing users to hop into a fun trivia game night without any delay.
               </p>
            </div>
            <div className='projectLinks'>
                <a href='https://630169fc5f31e4225a05e731--peppy-strudel-d34a27.netlify.app/' target='_blank' className='deployedLink'>
                    Deployed Link
              </a>
                  <a href='https://github.com/isaacruiz0/Quick-Quiz' target='_blank'>Front End Repository</a>
            </div>

        </section>
    </div>
  )
}

export default Projects