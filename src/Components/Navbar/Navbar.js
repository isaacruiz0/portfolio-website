import {React, useState, useEffect} from 'react'
import pdf from '../Resume Pdf/Isaac-Ruiz-Resume.docx.pdf'
import { HiX } from 'react-icons/hi';
import { BiMenuAltRight } from 'react-icons/bi';
import { motion } from "framer-motion"
import './Navbar.scss'
import {Link} from 'react-scroll'

function NavBar() {
  const [navbar, setNavbar] = useState(false)
  //navbar scroll changeBackground function
  const [toggle, setToggle] = useState(false)
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10 )) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection)

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    }
  },[scrollDirection]);
  
  


  return (
    <nav className={`navigationBar ${scrollDirection === 'down' ? 'disappear' : 'appear'}`}>
        <ul>
            <li><Link className='link' to="about" spy={true} smooth={true} offset={-100} duration={750}>About</Link></li>
            <li><Link className='link' to="projects" spy={true} smooth={true} offset={-100} duration={750}>Projects</Link></li>
            <li><Link className='link' to="contact" spy={true} smooth={true} offset={-100} duration={750}>Contact</Link></li>
            <li><a className='linkBox' href={pdf} target="_blank" >Resumé</a></li>
        </ul>
        <h4 className='mobileProjectLink' ><a href='#projects' className='linkBox'>Projects</a></h4>
        <div className='app_navbar-menu'>
              <BiMenuAltRight  onClick={() => setToggle(true)}/>
              {/* FRAMER MOTION -> if toggle is true then it will render the mobile version of the menu */}
              {toggle && (
                // WHEN TOGGLE IS TRUE IT WILL CREATE A SPECIAL MOTION DIV THAT HAS COOL PROPERTIES
                <motion.div
                initial={{x:'500'}}
                animate={{x:0}}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                  <HiX className='exitMenu' onClick={() => setToggle(false)} style={{opacity: toggle ? '1' : '0'} } />
                  <ul >
                  {['about', 'projects', 'contact'].map((eachItem) =>
                    <li onClick={()=> setToggle(false)} key={`${eachItem}`}>
                      <a href={`#${eachItem}`} className='mobileLinks' style={{opacity: toggle ? '1' : '0'}}>{eachItem}</a>
                    </li>)}
                    <li>
                      <a href={pdf} target="_blank">Resumé</a>  
                    </li> 
                  </ul>
                </motion.div>
              )
              }
            </div>
    </nav>
  )
}

export default NavBar