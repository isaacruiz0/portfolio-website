import {React, useState, useEffect} from 'react'

function NavBar() {
  const [navbar, setNavbar] = useState(false)
  //navbar scroll changeBackground function
  const changeBackground = () =>{
    console.log(window.scrollY)
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
            <li><a className='link'>Projects</a></li>
            <li><a className='link'>Contact</a></li>
            <li><span className='resumeBox link' >Resumé</span></li>
        </ul>
    </nav>
  )
}

export default NavBar