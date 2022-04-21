import React from 'react'
import './Contact.css'

function Contact() {

  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div id='contactDiv' className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    ref={domRef}>
        <section>
            <h1 className='getInTouch'>Want to get in touch?</h1>
            <a className='contactBox' href='mailto:isaac.ruiz.us@gmail.com' target="_blank">Contact Me</a>
        </section>
    </div>
  )
}

export default Contact