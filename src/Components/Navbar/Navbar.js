import {React, useState, useEffect} from 'react'
import pdf from '../Resume Pdf/ATS Resume .pdf'
import { HiX } from 'react-icons/hi';
import { BiMenuAltRight } from 'react-icons/bi';
import { motion } from "framer-motion"
import './Navbar.scss'

function NavBar() {
  const [navbar, setNavbar] = useState(false)
  //navbar scroll changeBackground function
  const [toggle, setToggle] = useState(false)

  const changeBackground = () =>{
    if(window.scrollY >= 66){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <nav className={navbar ? 'navigationBar active' : 'navigationBar'}>
        <ul>
            <li><a href='#about' className='link'>About</a></li>
            <li><a href='#projects' className='link' >Projects</a></li>
            <li><a href='#contact'className='link'>Contact</a></li>
            <li><a className='linkBox' href={pdf} target="_blank">Resumé</a></li>
        </ul>
        <h4 className='mobileProjectLink' ><a href='#projects' className='linkBox'>Projects</a></h4>
        <div className='app_navbar-menu'>
              <BiMenuAltRight  onClick={() => setToggle(true)}/>
              {/* FRAMER MOTION -> if toggle is true then it will render the mobile version of the menu */}
              {toggle && (
                // WHEN TOGGLE IS TRUE IT WILL CREATE A SPECIAL MOTION DIV THAT HAS COOL PROPERTIES
                <motion.div
                initial={{x:'400'}}
                animate={{x:0}}
                transition={{ duration: .85, ease: 'easeOut' }}
              >
                  <HiX onClick={() => setToggle(false)} />
                  <ul >
                  {['about', 'projects', 'contact'].map((eachItem) =>
                    <li onClick={()=> setToggle(false)} key={`${eachItem}`}>
                      <a href={`#${eachItem}`}>{eachItem}</a>
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