import React from 'react'
import './Contact.scss'
import { useEffect, useState, useRef } from 'react';
import {AiOutlineMail} from 'react-icons/ai'
// E M A I L    N P M    P A C K A G E
import emailjs from '@emailjs/browser';

function Contact() {

  const [isVisible, setVisible] = useState(true);
  const [messageSent, setMessageSent] = useState(true);

  const fadeInRef = useRef();
  const form = useRef();

  const showSuccess = () =>{
    setMessageSent(false)
    setTimeout(()=>{setMessageSent(true)}, 3000)
  }

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

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm('service_o017l1j','template_swg0spp',form.current, '898C00gOMfvROebwl')
    .then((result) => {
      console.log(result.text)
    }, (error) => {
      console.log(error.text)
    });

    e.target.reset()
  }


  return (
    <div id='contact' className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    ref={fadeInRef}>
        <section>
          <h2>Shoot me a message!</h2>
          <a href='mailto:isaac.ruiz.us@gmail.com' ><AiOutlineMail/> <span>isaac.ruiz.us@gmail.com</span></a>
          <form onSubmit={sendEmail} ref={form}>
            <div className='inputGroup'>
              <input type="name" name='user_name' className='form-control'/>
              <label>Name</label>
            </div>

            <div className='inputGroup'>
              <input type="email" name='user_email' className='form-control'/>
              <label>Email</label>
            </div>

            <div className='inputGroup'>
              <textarea name='message' rows='5' className='form-control' />
              <label>Message</label>
            </div>
            <input type='submit' value='Send Message' className='submitButton' onClick={showSuccess}/>
            <p className={`${messageSent ? 'displayNone' : ''}`}>Message Sent!</p>
            
          </form>
        </section>
    </div>
  )
}

export default Contact