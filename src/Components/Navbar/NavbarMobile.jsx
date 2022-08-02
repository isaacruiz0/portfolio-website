import React from 'react'
import {Link} from 'react-scroll'
import './NavbarMobile.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'


function NavbarMobile() {
  return (
        <div className='bottomNavBar'>
             <ul className='mobileBottomMenu'>
                <li>
                    <Link className='link' to="projects" spy={true} smooth={true} offset={-100} duration={750}>
                        <FontAwesomeIcon icon={faCodeBranch}  className='linkIcons'/>
                        <span>Portfolio</span>
                    </Link>
                </li>
                <li>
                    <Link className='link' to="about" spy={true} smooth={true} offset={-100} duration={750}>
                        <FontAwesomeIcon icon={faUser}  className='linkIcons'/>
                        <span>About</span>
                    </Link>
                
                </li>
                <li>
                    <Link className='link' to="contact" spy={true} smooth={true} offset={-30} duration={750}>
                        <FontAwesomeIcon icon={faEnvelopeOpen}  className='linkIcons'/>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>         
        </div>
  )
}

export default NavbarMobile