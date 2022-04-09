import React from 'react'

function NavBar() {
  return (
    <nav className='navigationBar'>
        <ul>
            <li><a href='#about' className='link'>About</a></li>
            <li><a className='link'>Projects</a></li>
            <li><a className='link'>Contact</a></li>
            <li><span className='resumeBox link' >Resume</span></li>
        </ul>
    </nav>
  )
}

export default NavBar