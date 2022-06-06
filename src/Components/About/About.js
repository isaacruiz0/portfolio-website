import React from 'react'
import './About.scss'
import { useEffect, useState, useRef } from 'react';

function About() {
  const [isVisible, setVisible] = useState(true);
  // This keeps track of an element
  const fadeInRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setVisible(entry.isIntersecting)
          if (entry.isIntersecting) {observer.unobserve(entry.target)}
        })
      },{threshold: .1})
    observer.observe(fadeInRef.current)

  }, []);


  return (
    <div id='about'className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    ref={fadeInRef}>
      <section className='aboutSection'>
        <a href='https://www.linkedin.com/in/isaac-ruiz-6996b3231/'><img className='portraitPhoto' src='https://i.ibb.co/k6z3kzv/portrait.jpg'/></a>
        <div className='aboutInnerDiv'>  
            <p className='aboutText'>My name is Isaac Ruiz and my proudest trait is that I make an effort to be as much of a conscientious person as I can be.
            <div className='aboutTextGap'></div>
            This allows me to have a natural inclination to sincerely sympathize with a variety of “big-picture” goals that companies strive for. 
            <div className='aboutTextGap'></div> 
            With that in mind I can become a very reliable and motivated asset for all companies.</p> 
        </div>
      </section>
    </div>
  )
}

export default About