import React from 'react'
import './Contact.scss'
import { useEffect, useState, useRef } from 'react';

function Contact() {

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
    <div id='contact' className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    ref={fadeInRef}>
        <section>
            <h1 className='getInTouch'>Want to get in touch?</h1>
            <a className='contactBox' href='mailto:isaac.ruiz.us@gmail.com' target="_blank">Contact Me</a>
        </section>
    </div>
  )
}

export default Contact